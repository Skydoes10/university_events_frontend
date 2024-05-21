import { EventList, Title } from '@/components';
import { initialData } from '@/seed/seed';

const events = initialData.events;

export default function EventsPage() {
	return (
		<>
			<Title title="Eventos" className="mb-2 ps-8" />
			<EventList events={events} />
		</>
	);
}
