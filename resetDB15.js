import Database from 'better-sqlite3';
const db = new Database('database.sqlite');
db.prepare("UPDATE students SET currentPage = 15 WHERE name = '尹亦诚'").run();
console.log('Reset DB for page 15');
