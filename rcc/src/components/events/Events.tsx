import { useEvents } from '@/hooks/use-event-api';
import EventItem from './EventItem';
import LoadingState from '../shared/LoadingState';
import ErrorState from '../shared/ErrorState';
import AddEvent from './AddEvent';

const Events = () => {
  const { events, isLoading, error } = useEvents();

  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState errorLabel="Failed to load events" />;
  }

  if (!events.length) {
    return (
      <div className="container mx-auto px-4 py-12">
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
            <EventItem key={item.eventId} event={item} mode="edit" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
