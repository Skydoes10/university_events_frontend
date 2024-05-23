'use client';
import { EventList, Title } from '@/components';
import { EventsState } from '@/features/events/eventsSlice';
import { initialData } from '@/seed/seed';
import { useSelector } from 'react-redux';

// const events = initialData.events;

export default function EventsPage() {
	const events = useSelector((state: EventsState) => state.events);

	return (
		<>
			<Title title="Eventos" className="mb-2 ps-8" />
			<EventList events={events} />
		</>
	);
}
