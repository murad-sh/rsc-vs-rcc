import { Request, Response } from 'express';
import { db } from '../services/database';
import { Event } from '../types/event';

export const eventController = {
  async getAllEvents(req: Request, res: Response) {
    try {
      const events = await db.getAllEvents();
      res.json(events);
    } catch (err) {
      res.status(500).json({ error: 'Failed to get events' });
    }
  },

  async getEventById(req: Request, res: Response) {
    try {
      const event = await db.getEventById(req.params.id);
      if (!event) {
        res.status(404).json({ error: 'Event not found' });
        return;
      }
      res.json(event);
    } catch (err) {
      res.status(500).json({ error: 'Failed to get event' });
    }
  },

  async createEvent(req: Request, res: Response) {
    try {
      const eventData: Omit<Event, 'eventId'> = req.body;
      const newEvent = await db.createEvent(eventData);
      res.status(201).json(newEvent);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create event' });
    }
  },

  async updateEvent(req: Request, res: Response) {
    try {
      const eventData: Omit<Event, 'eventId'> = req.body;
      const updatedEvent = await db.updateEvent(req.params.id, eventData);
      if (!updatedEvent) {
        res.status(404).json({ error: 'Event not found' });
        return;
      }
      res.json(updatedEvent);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update event' });
    }
  },

  async deleteEvent(req: Request, res: Response) {
    try {
      await db.deleteEvent(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete event' });
    }
  },
};
