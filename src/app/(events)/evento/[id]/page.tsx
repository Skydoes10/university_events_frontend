'use client';

import { notFound } from 'next/navigation';
import { useSelector } from 'react-redux';
import moment from 'moment';
import axiosInstance from '@/utils/axiosInstance';
import { useEffect, useState } from 'react';

import { Tabs, Title } from '@/components';
import { User, Event } from '@/interfaces';
import { UserState } from '@/features/user/userSlice';
import { EventsState } from '@/features/events/eventsSlice';

interface Props {
  params: {
    id: string;
  };
}

export default function EventPage({ params }: Props) {
  const { id } = params;
  const user = useSelector((state: UserState) => state.user) as User;
  const events = useSelector((state: EventsState) => state.events);
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axiosInstance.get(`/events/${id}`);
        setEvent(response.data);
      } catch (error) {
        console.error('Error fetching event:', error);
        notFound();
      }
    };

    fetchEvent();
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  const date = moment(event?.dateTime).format('DD MMM YYYY HH:mm a');

  const isAssistant = event?.assistants.find(
    (assistant) => assistant.id === user.id
  );

  return (
    <div className="container mx-auto p-4 fade-in">
      <div className="flex flex-wrap items-center">
        <Title title={event.title} className="mb-2" />

        {isAssistant ? (
          <span className="bg-green-500 text-white font-bold py-1 px-2 rounded-lg text-sm ml-4">
            Asistirás a este evento
          </span>
        ) : (
          <button className="bg-blue-500 text-white font-bold py-1 px-2 rounded-lg text-sm ml-4">
            Asistir a este evento
          </button>
        )}
      </div>

      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-7/12">
          <div className="bg-white p-4 rounded-lg shadow-sm min-h-fit">
            <span className="block">
              <strong>Descripción:</strong>
            </span>
            <p className="mt-2">{event.description}</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm mt-4 min-h-28">
            <span className="block">
              <strong>Facultades organizadoras:</strong>
            </span>
            <p className="mt-2">
              {event.organizing_faculties.join(', ')}
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm mt-4 min-h-28">
            <span className="block">
              <strong>Programas organizadores:</strong>
            </span>
            <p className="mt-2">
              {event.organizing_programs.join(', ')}
            </p>
          </div>
        </div>

        <div className="w-full md:w-2/5">
          <div className="bg-white p-4 rounded-lg shadow-sm min-h-fit">
            <span className="block">
              <strong>Fecha y hora:</strong>
              <p className="mt-2">{date}</p>
            </span>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm mt-4 min-h-fit">
            <span className="block">
              <strong>Lugar del evento:</strong>
              {event.event_location.map((location, index) =>
                location.address ? (
                  <p key={index} className="mt-2">
                    {location.address}, {location.name}, {location.city.name}, {location.city.department}, {location.city.country}
                  </p>
                ) : (
                  <p key={index} className="mt-2">
                    {location.name}, {location.city.name}, {location.city.department}, {location.city.country}
                    {location.platform && `, Plataforma: ${location.platform}`}
                    {location.link && `, Enlace: ${location.link}`}
                    {location.password && `, Contraseña: ${location.password}`}
                  </p>
                )
              )}
            </span>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm mt-4 min-h-fit">
            <span className="block">
              <strong>Categorías:</strong>
              <p className="mt-2">
                {event.categories.map((category, index) => (
                  <span key={index}>{category}<br /></span>
                ))}
              </p>
            </span>
          </div>
        </div>

        <div className="w-full mt-4">
          <Tabs
            comments={event.comments!}
            assistants={event.assistants}
            speakers={event.speakers}
          />
        </div>
      </div>
    </div>
  );
}
