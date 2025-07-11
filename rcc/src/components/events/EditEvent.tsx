import { toast } from 'sonner';
import { format } from 'date-fns';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Event } from '@/types/event';
import { EventForm } from './EventForm';
import { EventSchemaType } from '@/schemas/event-schema';
import axiosInstance from '@/lib/axios-instance';
import { useEvents } from '@/hooks/use-event-api';

const EditEvent = (event: Event) => {
  const { mutate } = useEvents();

  const handleEdit = async (data: EventSchemaType) => {
    try {
      await axiosInstance.put(`/events/${event.eventId}`, {
        ...data,
        date: format(new Date(data.date), 'yyyy-MM-dd'),
      });
      mutate();
      toast.success('Event updated successfully');
    } catch (error) {
      toast.error('Failed to update event');
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="flex-1">
          Edit Event
        </Button>
      </DialogTrigger>
      <DialogContent className="md:w-[900px]">
        <DialogHeader>
          <DialogTitle>Edit Event</DialogTitle>
          <DialogDescription>
            Make changes to the event details.
          </DialogDescription>
        </DialogHeader>
        <EventForm event={event} onSubmit={handleEdit} />
      </DialogContent>
    </Dialog>
  );
};

export default EditEvent;
