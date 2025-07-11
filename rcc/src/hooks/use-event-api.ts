import useSWR from 'swr';

import { Event } from '@/types/event';

const EVENTS_URL = '/events';

export const useEvents = () => {
  const { data, error, isLoading, mutate } = useSWR(EVENTS_URL);
  return {
    events: data as Event[],
    isLoading,
    error: error,
    mutate,
  };
};

export const useEvent = (id: string) => {
  const { data, error, isLoading, mutate } = useSWR(`${EVENTS_URL}/${id}`);
  return {
    event: data as Event,
    isLoading,
    error: error,
    mutate,
  };
};
