import express from 'express';
import { createServer as createViteServer } from 'vite';
import Database from 'better-sqlite3';

const db = new Database('database.sqlite');

// Init DB
db.exec(`
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE,
    currentPage INTEGER,
    completed BOOLEAN,
    accuracy TEXT,
    lastCompletedDate TEXT
  );
  CREATE TABLE IF NOT EXISTS wrong_words (
    student_id INTEGER,
    word_id TEXT,
    FOREIGN KEY(student_id) REFERENCES students(id),
    UNIQUE(student_id, word_id)
  );
`);

// Seed DB if empty
const count = db.prepare('SELECT COUNT(*) as count FROM students').get() as {count: number};
if (count.count === 0) {
  const insertStudent = db.prepare('INSERT INTO students (name, currentPage, completed, accuracy, lastCompletedDate) VALUES (?, ?, ?, ?, ?)');
  const initialStudents = [
    { name: '张悦晨', currentPage: 50 },
    { name: '邵诗辰', currentPage: 1 },
    { name: '瞿子萱', currentPage: 1 },
    { name: '沈意为', currentPage: 55 },
    { name: '秦一涵', currentPage: 33 },
    { name: '尹亦诚', currentPage: 15 },
    { name: '赵宇馨', currentPage: 1 },
    { name: '施陈辰', currentPage: 15 },
    { name: '茅恺昕', currentPage: 88 },
    { name: '夏聆风', currentPage: 1 },
  ];
  initialStudents.forEach(s => {
    insertStudent.run(s.name, s.currentPage, 0, '-', '-');
  });
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get('/api/students', (req, res) => {
    const students = db.prepare('SELECT * FROM students').all();
    const wrongWords = db.prepare('SELECT * FROM wrong_words').all();
    
    const result = students.map((s: any) => ({
      ...s,
      completed: Boolean(s.completed),
      wrongWords: wrongWords.filter((w: any) => w.student_id === s.id).map((w: any) => w.word_id)
    }));
    res.json(result);
  });

  app.get('/api/students/:name', (req, res) => {
    const student = db.prepare('SELECT * FROM students WHERE name = ?').get(req.params.name);
    if (!student) return res.status(404).json({ error: 'Student not found' });
    
    const wrongWords = db.prepare('SELECT word_id FROM wrong_words WHERE student_id = ?').all(student.id).map((w: any) => w.word_id);
    res.json({ ...student, completed: Boolean(student.completed), wrongWords });
  });

  app.post('/api/students/:name/progress', (req, res) => {
    const { currentPage, completed, accuracy, lastCompletedDate, wrongWords } = req.body;
    const student = db.prepare('SELECT id FROM students WHERE name = ?').get(req.params.name);
    if (!student) return res.status(404).json({ error: 'Student not found' });

    db.prepare(`
      UPDATE students 
      SET currentPage = ?, completed = ?, accuracy = ?, lastCompletedDate = ?
      WHERE id = ?
    `).run(currentPage, completed ? 1 : 0, accuracy, lastCompletedDate, student.id);

    const insertWrongWord = db.prepare('INSERT OR IGNORE INTO wrong_words (student_id, word_id) VALUES (?, ?)');
    if (wrongWords && wrongWords.length > 0) {
      wrongWords.forEach((wordId: string) => {
        insertWrongWord.run(student.id, wordId);
      });
    }

    res.json({ success: true });
  });

  // Vite middleware
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
