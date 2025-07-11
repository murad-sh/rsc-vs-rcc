import { toast } from 'sonner';
import { Plus } from 'lucide-react';
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
import { EventForm } from './EventForm';
import { EventSchemaType } from '@/schemas/event-schema';
import axiosInstance from '@/lib/axios-instance';
import { useEvents } from '@/hooks/use-event-api';

const AddEvent = () => {
  const { mutate } = useEvents();

  const handleAddEvent = async (data: EventSchemaType) => {
    try {
      await axiosInstance.post('/events', {
        ...data,
        date: format(new Date(data.date), 'yyyy-MM-dd'),
      });
      mutate();
      toast.success('Event added successfully');
    } catch (error) {
      toast.error('Failed to add event');
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">
          <Plus size={16} strokeWidth={2} className="mr-2" />
          Add Event
        </Button>
      </DialogTrigger>
      <DialogContent className="md:w-[900px]">
        <DialogHeader>
          <DialogTitle>Add Event</DialogTitle>
          <DialogDescription>
            Fill in the details of the event to add.
          </DialogDescription>
        </DialogHeader>
        <EventForm onSubmit={handleAddEvent} />
      </DialogContent>
    </Dialog>
  );
};

export default AddEvent;
