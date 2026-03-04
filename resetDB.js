import Database from 'better-sqlite3';
const db = new Database('database.sqlite');
db.prepare("UPDATE students SET currentPage = 50 WHERE name = '张悦晨'").run();
db.prepare("UPDATE students SET currentPage = 33 WHERE name = '秦一涵'").run();
console.log('Reset DB');
