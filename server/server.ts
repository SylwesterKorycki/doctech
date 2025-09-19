// db.ts
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function openDb() {
  const db = await open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  });

  await db.run(`
    CREATE TABLE IF NOT EXISTS inquiries (
      id TEXT PRIMARY KEY,
      firstName TEXT,
      lastName TEXT,
      email TEXT,
      phone TEXT,
      company TEXT,
      services TEXT,
      timeline TEXT,
      description TEXT,
      createdAt TEXT
    )
  `);

  return db;
}