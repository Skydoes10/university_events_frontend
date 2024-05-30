'use client';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { MdDeleteOutline } from 'react-icons/md';
import moment from 'moment';

import { Event } from '@/interfaces';
import { UserState } from '@/features/user/userSlice';

interface Props {
	event: Event;
}

export const EventListItem = ({ event }: Props) => {
	const router = useRouter();
	const user = useSelector((state: UserState) => state.user);

	const date = moment(event.dateTime).format('DD MMM YYYY HH:mm a');

	let location = '';
    if (event.event_location && event.event_location[0]) {
        location = event.event_location[0].name || '';

        if (event.event_location[0].address) {
            location += ', ' + event.event_location[0].address;
        }

        if (event.event_location[0].platform) {
            location += ', ' + event.event_location[0].platform;
        }
    }

    const city = event.event_location && event.event_location[0]
        ? `${event.event_location[0].city.name}, ${event.event_location[0].city.department}, ${event.event_location[0].city.country}`
        : '';

	const handleClick = () => {
		router.push(`/evento/${event.id}`);
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
				{user.isAdmin && (
					<button
						onClick={() => console.log('delete')}
						className="focus:outline-none hover:bg-red-100 p-3 rounded-full"
					>
						<MdDeleteOutline className="w-5 h-5" />
					</button>
				)}
			</td>
		</tr>
	);
};
