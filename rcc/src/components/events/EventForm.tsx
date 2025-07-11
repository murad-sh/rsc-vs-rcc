import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { eventSchema, EventSchemaType } from '@/schemas/event-schema';
import { DatePicker } from '../ui/date-picker';
import { Event } from '@/types/event';
import { DialogFooter, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';

type EventFormProps = {
  event?: Event;
  onSubmit: (values: EventSchemaType) => void;
};

export function EventForm({ event, onSubmit }: EventFormProps) {
  const form = useForm<EventSchemaType>({
    resolver: zodResolver(eventSchema),
    mode: 'onTouched',
    defaultValues: {
      name: event?.name ?? '',
      location: event?.location ?? '',
      date: event?.date ? new Date(event.date) : undefined,
      time: event?.time ?? '',
      image: event?.image ?? '',
      contactInfo: event?.contactInfo ?? '',
    },
  });

  return (
    <Form {...form}>
      <form
        className="space-y-6"
        onSubmit={form.handleSubmit(onSubmit)}
        name="eventForm"
      >
        <div className="grid gap-4 py-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col gap-2">
                  <FormLabel>Date</FormLabel>
                  <DatePicker value={field.value} onChange={field.onChange} />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Information</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button type="submit">
              {event ? 'Save changes' : 'Create event'}
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </form>
    </Form>
  );
}
