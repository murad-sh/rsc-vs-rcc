'use client';

import { toast } from 'sonner';

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
import { EventSchemaType } from '@/schemas/event-schema';
import { EventForm } from './EventForm';
import { updateEvent } from '@/actions/server-actions';
import { useRouter } from 'next/navigation';

const EditEvent = ({ event }: { event: Event }) => {
  const router = useRouter();
  const handleEdit = async (data: EventSchemaType) => {
    try {
      await updateEvent(event.eventId, data);
      router.refresh();
      toast.success('Event updated successfully');
    } catch (err) {
      console.error(err);
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
