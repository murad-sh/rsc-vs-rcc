import { z } from 'zod';

const validEmail = z
  .string()
  .email({ message: 'Provide a valid email or phone number' });
const validPhone = z.string().regex(/^(\+?\d{1,3}[- ]?)?\d{10}$/);
const validTime = z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
  message: 'Please enter a valid time in 24-hour format HH:MM',
});

export const eventSchema = z.object({
  name: z.string().min(3),
  location: z.string(),
  date: z.date(),
  time: validTime,
  image: z.string().url(),
  contactInfo: validEmail.or(validPhone),
});

export type EventSchemaType = z.infer<typeof eventSchema>;
