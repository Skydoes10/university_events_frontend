import { Event } from '@/interfaces';
import { EventListItem } from './EventListItem';

interface Props {
	events: Event[];
}

export const EventList = ({ events }: Props) => {
	return (
		// <div className="px-4 sm:px-8 py-4">
		<div className="flex flex-col sm:justify-center sm:items-center mb-72 px-4 sm:px-8 py-4">
			<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
				<table className="min-w-full leading-normal">
					<thead>
						<tr>
							<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
								Título
							</th>
							<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
								Descripción
							</th>
							<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
								Fecha y Hora
							</th>
							<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
								Lugar del evento
							</th>
							<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
								Ciudad
							</th>
							<th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
						</tr>
					</thead>
					<tbody>
						{events.map((event) => (
							<EventListItem key={event.id} event={event} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
