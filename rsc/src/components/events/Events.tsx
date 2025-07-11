import { prisma } from '@/lib/prisma';
import AddEvent from './AddEvent';
import EventItem from './EventItem';
import { Event } from '@/types/event';

const EventsPage = async () => {
  const events: Event[] = await prisma.event.findMany({
    orderBy: { date: 'asc' },
  });

  if (!events.length) {
    return (
      <div className="container flex-1 mx-auto px-8 justify-center items-center flex">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold tracking-tight">No Events Yet</h2>
          <p className="text-lg text-gray-600">
            Be the first to create an event! Start planning something amazing
            and share it with others.
          </p>
          <div className="mt-8">
            <AddEvent />
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="container">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-6 md:mb-0">
            Upcoming Events
          </h2>
          <AddEvent />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((item) => (
            <EventItem key={item.eventId} event={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
