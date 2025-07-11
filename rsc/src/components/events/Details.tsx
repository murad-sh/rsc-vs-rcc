import { format } from 'date-fns';

import { Event } from '@/types/event';
import { MapPin, Phone, Mail, LucideIcon, CalendarDays } from 'lucide-react';

type DetailsItemProps = {
  Icon: LucideIcon;
  title: string;
  children: React.ReactNode;
};

const DetailsItem = ({ Icon, title, children }: DetailsItemProps) => {
  return (
    <div className="flex gap-5 items-center border rounded-lg shadow-sm p-4 bg-background">
      <Icon size={28} className="text-primary" />
      <div>
        <h3 className="font-medium text-lg">{title}</h3>
        {children}
      </div>
    </div>
  );
};

const Details = (event: Event) => {
  const isEmail = event.contactInfo.includes('@');

  return (
    <div>
      <div className="space-y-6">
        <DetailsItem Icon={MapPin} title="Event Location">
          <address>{event.location}</address>
        </DetailsItem>
        <DetailsItem Icon={CalendarDays} title="Date and Time">
          <p>
            {format(new Date(event.date), 'dd MMM, yyyy')} at {event.time}
          </p>
        </DetailsItem>
        {isEmail ? (
          <DetailsItem Icon={Mail} title="Contact">
            <a href={`mailto:${event.contactInfo}`}>{event.contactInfo}</a>
          </DetailsItem>
        ) : (
          <DetailsItem Icon={Phone} title="Contact">
            <a href={`tel:${event.contactInfo}`}>{event.contactInfo}</a>
          </DetailsItem>
        )}
      </div>
    </div>
  );
};

export default Details;
