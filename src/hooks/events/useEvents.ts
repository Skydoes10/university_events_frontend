import { useDispatch } from 'react-redux';
import {
	addEvent,
	deleteEvent,
	getEvent,
	getEvents,
} from '@/features/events/eventsSlice';
import { eventService } from '@/services';
import { Event } from '@/interfaces';

export const useEvents = () => {
	const dispatch = useDispatch();

	const fetchEvents = async () => {
		try {
			const res = await eventService.getEvents();
			dispatch(getEvents(res));
		} catch (error: any) {
			dispatch(getEvents([]));
		}
	};

	const fetchEvent = async (id: string) => {
		try {
			const res = await eventService.getEvent(id);
			dispatch(getEvent(res));
		} catch (error: any) {
			dispatch(getEvent({} as Event));
		}
	};

	const createEvent = async (event: Event) => {
		try {
			const res = await eventService.addEvent(event);
			dispatch(addEvent(res));
		} catch (error: any) {
			dispatch(addEvent({} as Event));
		}
	};

	const removeEvent = async (id: string) => {
		try {
			await eventService.deleteEvent(id);
			dispatch(deleteEvent(id));
		} catch (error: any) {
			dispatch(deleteEvent(''));
		}
	};

	return {
		fetchEvents,
		fetchEvent,
		createEvent,
		removeEvent,
	};
};
