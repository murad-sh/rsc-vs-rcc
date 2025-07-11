import sqlite3 from 'sqlite3';
import path from 'path';
import { Event } from '../types/event';

// Promisify sqlite3 operations
const dbRun = (
  db: sqlite3.Database,
  sql: string,
  params: any[] = []
): Promise<sqlite3.RunResult> => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) reject(err);
      else resolve(this);
    });
  });
};

const dbGet = (
  db: sqlite3.Database,
  sql: string,
  params: any[] = []
): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
};

const dbAll = (
  db: sqlite3.Database,
  sql: string,
  params: any[] = []
): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

class DatabaseService {
  private db: sqlite3.Database;

  constructor() {
    // Ensure data directory exists
    const dataDir = path.join(__dirname, '../../data');
    if (!require('fs').existsSync(dataDir)) {
      require('fs').mkdirSync(dataDir, { recursive: true });
    }

    this.db = new sqlite3.Database(
      path.join(dataDir, 'database.sqlite'),
      (err) => {
        if (err) {
          console.error('Error opening database:', err);
        } else {
          console.log('Connected to SQLite database');
          this.initializeDatabase();
        }
      }
    );
  }

  private async initializeDatabase() {
    try {
      await dbRun(
        this.db,
        `
        CREATE TABLE IF NOT EXISTS events (
          eventId INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          location TEXT NOT NULL,
          date TEXT NOT NULL,
          time TEXT NOT NULL,
          image TEXT NOT NULL,
          contactInfo TEXT NOT NULL
        )
      `
      );
    } catch (err) {
      console.error('Error initializing database:', err);
    }
  }

  async getAllEvents(): Promise<Event[]> {
    return dbAll(this.db, 'SELECT * FROM events');
  }

  async getEventById(id: string): Promise<Event | null> {
    return dbGet(this.db, 'SELECT * FROM events WHERE eventId = ?', [id]);
  }

  async createEvent(event: Omit<Event, 'eventId'>): Promise<Event> {
    const { name, location, date, time, image, contactInfo } = event;
    const result = await dbRun(
      this.db,
      'INSERT INTO events (name, location, date, time, image, contactInfo) VALUES (?, ?, ?, ?, ?, ?)',
      [name, location, date, time, image, contactInfo]
    );
    return this.getEventById(result.lastID.toString()) as Promise<Event>;
  }

  async updateEvent(
    id: string,
    event: Omit<Event, 'eventId'>
  ): Promise<Event | null> {
    const { name, location, date, time, image, contactInfo } = event;
    await dbRun(
      this.db,
      'UPDATE events SET name = ?, location = ?, date = ?, time = ?, image = ?, contactInfo = ? WHERE eventId = ?',
      [name, location, date, time, image, contactInfo, id]
    );
    return this.getEventById(id);
  }

  async deleteEvent(id: string): Promise<void> {
    await dbRun(this.db, 'DELETE FROM events WHERE eventId = ?', [id]);
  }
}

export const db = new DatabaseService();
