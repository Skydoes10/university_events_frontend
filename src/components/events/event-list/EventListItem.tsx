'use client';
import { useRouter } from 'next/navigation';
import { MdDeleteOutline } from 'react-icons/md';
import moment from 'moment';

import { Event } from '@/interfaces';

interface Props {
	event: Event;
}

export const EventListItem = ({ event }: Props) => {
	const router = useRouter();

	const date = moment(event.date).format('DD MMM YYYY HH:mm a');

	let location = event.eventLocation.name;

	if (event.eventLocation.address) {
		location += ', ' + event.eventLocation.address;
	}

	if (event.eventLocation.platform) {
		location += ', ' + event.eventLocation.platform;
	}

	const city =
		event.eventLocation.city.name +
		', ' +
		event.eventLocation.city.department +
		', ' +
		event.eventLocation.city.country;

	const handleClick = () => {
		router.push(`/eventos/${event.id}`);
	};

	return (
		<tr className="cursor-pointer fade-in">
			<td
				onClick={handleClick}
				className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
			>
				<div className="flex items-center">
					<p className="text-gray-900 whitespace-no-wrap truncate">
						{event.title}
					</p>
				</div>
			</td>
			<td
				onClick={handleClick}
				className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
			>
				<p className="text-gray-900 whitespace-no-wrap truncate">
					{event.description}
				</p>
			</td>
			<td
				onClick={handleClick}
				className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
			>
				<p className="text-gray-900 whitespace-no-wrap">{date}</p>
			</td>
			<td
				onClick={handleClick}
				className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
			>
				<p className="text-gray-900 whitespace-no-wrap">{location}</p>
			</td>
			<td
				onClick={handleClick}
				className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
			>
				<p className="text-gray-900 whitespace-no-wrap">{city}</p>
			</td>
			<td className=" border-b border-gray-200 bg-white text-sm">
				<button
					onClick={() => console.log('delete')}
					className="focus:outline-none hover:bg-red-100 p-3 rounded-full"
				>
					<MdDeleteOutline className="w-5 h-5" />
				</button>
			</td>
		</tr>
	);
};
