'use server';

import { prisma } from '@/lib/prisma';
import { EventSchemaType } from '@/schemas/event-schema';
import { format } from 'date-fns';

export async function addEvent(data: EventSchemaType) {
  await prisma.event.create({
    data: {
      ...data,
      date: format(new Date(data.date), 'yyyy-MM-dd'),
    },
  });
}

export async function updateEvent(eventId: number, data: EventSchemaType) {
  await prisma.event.update({
    where: { eventId },
    data: {
      ...data,
      date: format(new Date(data.date), 'yyyy-MM-dd'),
    },
  });
}

export async function deleteEvent(eventId: number) {
  await prisma.event.delete({
    where: { eventId },
  });
}
