'use client';

import useSWR from 'swr';

import { Event } from '@/types/event';
import axiosInstance from '@/lib/axios-instance';

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

const EVENTS_URL = '/events';

export const useEvents = () => {
  const { data, error, isLoading, mutate } = useSWR(EVENTS_URL, fetcher);
  return {
    events: data as Event[],
    isLoading,
    error: error,
    mutate,
  };
};

export const useEvent = (id: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    `${EVENTS_URL}/${id}`,
    fetcher
  );
  return {
    event: data as Event,
    isLoading,
    error: error,
    mutate,
  };
};
