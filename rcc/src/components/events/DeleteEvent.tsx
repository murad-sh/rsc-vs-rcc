import { toast } from 'sonner';
import { ReactNode } from 'react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import axiosInstance from '@/lib/axios-instance';
import { useEvents } from '@/hooks/use-event-api';

const DeleteEvent = ({
  eventId,
  children,
}: {
  eventId: string;
  children: ReactNode;
}) => {
  const { mutate } = useEvents();

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/events/${eventId}`);
      toast.success('Event deleted successfully');
      mutate();
    } catch (error) {
      toast.error('Failed to delete event');
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">{children}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this event?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteEvent;
