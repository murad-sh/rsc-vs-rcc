import { format } from 'date-fns';
import { Calendar, Clock } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Event } from '@/types/event';
import EditEvent from './EditEvent';
import DeleteEvent from './DeleteEvent';
import { EventImage } from '../ui/image';

type EventItemProps = {
  event: Event;
};

export default function EventItem({ event }: EventItemProps) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{event.name}</CardTitle>
        <CardDescription>{event.location}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <div className="rounded-sm overflow-hidden">
            <EventImage name={event.name} image={event.image} />
          </div>
          <div className="mt-5">
            <div className="inline-flex items-center gap-4 px-4 py-2 bg-primary/5 backdrop-blur-sm rounded-lg">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">
                  {format(new Date(event.date), 'MMM d, yyyy')}
                </span>
              </div>
              <div className="w-px h-4 bg-primary/20" />
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{event.time}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex-1 flex gap-3">
          <EditEvent event={event} />
          <DeleteEvent eventId={event.eventId}>Delete</DeleteEvent>
        </div>
      </CardFooter>
    </Card>
  );
}
