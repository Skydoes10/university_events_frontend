'use client';

import { useEffect, useState } from 'react';
import { EventList, Title } from '@/components';
import axiosInstance from '@/utils/axiosInstance';
import { Event } from '@/interfaces';
import { EventListItem } from '@/components';

interface EventListProps {
    events: Event[];
}

export default function EventsPage() {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axiosInstance.get('/events');
                setEvents(response.data);
            } catch (err) {
                setError('Error fetching events');
                console.error('Error fetching events:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <Title title="Eventos" className="mb-2 ps-8" />
            <EventList events={events} />
        </>
    );
}
