import Database from 'better-sqlite3';
const db = new Database('database.sqlite');
db.prepare("INSERT OR IGNORE INTO students (name, currentPage) VALUES ('张伟', 88)").run();
db.prepare("UPDATE students SET currentPage = 88 WHERE name = '张伟'").run();
console.log('Reset DB for page 88');
