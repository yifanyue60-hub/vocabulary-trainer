import Database from 'better-sqlite3';
const db = new Database('database.sqlite');
db.prepare("INSERT OR IGNORE INTO students (name, currentPage) VALUES ('李华', 1)").run();
db.prepare("UPDATE students SET currentPage = 1 WHERE name = '李华'").run();
console.log('Reset DB for page 1');
