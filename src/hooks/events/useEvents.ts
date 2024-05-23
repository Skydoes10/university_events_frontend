import { useDispatch } from 'react-redux';
import {
	addEvent,
	addEventFailure,
	addEventSuccess,
	deleteEvent,
	deleteEventFailure,
	deleteEventSuccess,
	getEvent,
	getEventFailure,
	getEvents,
	getEventsFailure,
	getEventsSuccess,
	getEventSuccess,
} from '@/features/events/eventsSlice';
import { eventService } from '@/services';

export const useEvents = () => {
	const dispatch = useDispatch();

	const fetchEvents = async () => {
		dispatch(getEvents());
		try {
			const res = await eventService.getEvents();
			dispatch(getEventsSuccess(res));
		} catch (error: any) {
			dispatch(getEventsFailure(error.message));
		}
	};

	const fetchEvent = async (id: string) => {
		dispatch(getEvent());
		try {
			const res = await eventService.getEvent(id);
			dispatch(getEventSuccess(res));
		} catch (error: any) {
			dispatch(getEventFailure(error.message));
		}
	};

	const createEvent = async (event: Event) => {
		dispatch(addEvent());
		try {
			const res = await eventService.addEvent(event);
			dispatch(addEventSuccess(res));
		} catch (error: any) {
			dispatch(addEventFailure(error.message));
		}
	};

	const removeEvent = async (id: string) => {
		dispatch(deleteEvent());
		try {
			await eventService.deleteEvent(id);
			dispatch(deleteEventSuccess(id));
		} catch (error: any) {
			dispatch(deleteEventFailure(error.message));
		}
	};

	return {
		fetchEvents,
		fetchEvent,
		createEvent,
		removeEvent,
	};
};
