'use client';
import { notFound } from 'next/navigation';
import { useSelector } from 'react-redux';
import moment from 'moment';

import { initialData } from '@/seed/seed';
import { Tabs, Title } from '@/components';
import { UserState } from '@/features/user/userSlice';
import { EventsState } from '@/features/events/eventsSlice';

interface Props {
	params: {
		id: string;
	};
}

export default function EventPage({ params }: Props) {
	const { id } = params;
	const user = useSelector((state: UserState) => state.user);
	const events = useSelector((state: EventsState) => state.events);
	const event = events.find((event) => event.id === id);
	const date = moment(event?.date).format('DD MMM YYYY HH:mm a');

	const isAssistant = event?.assistants.find(
		(assistant) => assistant.id === user.id
	);

	// const event = initialData.events.find((event) => event.id === id);

	if (!event) {
		notFound();
	}

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
					<div className="bg-white p-4 rounded-lg shadow-sm min-h-52">
						<span className="block">
							<strong>Descripción:</strong>
						</span>
						<p className="mt-2">{event.description}</p>
					</div>

					<div className="bg-white p-4 rounded-lg shadow-sm mt-4 min-h-36">
						<span className="block">
							<strong>Organizadores:</strong>
							{event.organizingFaculties.map((organizer) => (
								<p key={organizer.id} className="mt-2">
									{organizer.name}
								</p>
							))}
							{event.organizingPrograms.map((organizer) => (
								<p key={organizer.id} className="mt-2">
									{organizer.name}
								</p>
							))}
						</span>
					</div>
				</div>

				<div className="w-full md:w-2/5">
					<div className="bg-white p-4 rounded-lg shadow-sm min-h-16">
						<span className="block">
							<strong>Fecha y hora:</strong>
							<p className="mt-2">{date}</p>
						</span>
					</div>

					<div className="bg-white p-4 rounded-lg shadow-sm mt-4 min-h-32">
						<span className="block">
							<strong>Lugar del evento:</strong>
							{event.eventLocation.map((location) =>
								location.address ? (
									<p key={location.address} className="mt-2">
										{location.address}, {location.name},{' '}
										{location.city.name},{' '}
										{location.city.department},{' '}
										{location.city.country}
									</p>
								) : (
									<p key={location.name} className="mt-2">
										{location.name}, {location.city.name},{' '}
										{location.city.department},{' '}
										{location.city.country}
										{location.platform}
										{location.link}
										{location.password}
									</p>
								)
							)}
						</span>
					</div>

					<div className="bg-white p-4 rounded-lg shadow-sm mt-4 min-h-36">
						<span className="block">
							<strong>Categorías:</strong>
							{event.categories.map((category) => (
								<p key={category} className="mt-2">
									{category}
								</p>
							))}
						</span>
					</div>
				</div>

				<div className="w-full mt-4">
					<Tabs
						comments={event.comments}
						assistants={event.assistants}
						speakers={event.speakers}
					/>
				</div>
			</div>
		</div>
	);
}
