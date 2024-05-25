import { useDispatch } from 'react-redux';
import {
	addEvent,
	addSpeaker,
	deleteEvent,
	getCities,
	getEvent,
	getEvents,
	getOrganizingFaculties,
	getOrganizingPrograms,
} from '@/features/events/eventsSlice';
import { eventService } from '@/services';
import { Event, Speaker } from '@/interfaces';

export const useEvents = () => {
	const dispatch = useDispatch();

	const fetchEvents = async () => {
		try {
			const res = await eventService.getEvents();
			dispatch(getEvents(res));
		} catch (error: any) {
			console.log(error);
		}
	};

	const fetchEvent = async (id: string) => {
		try {
			const res = await eventService.getEvent(id);
			dispatch(getEvent(res));
		} catch (error: any) {
			console.log(error);
		}
	};

	const createEvent = async (event: Event) => {
		try {
			const res = await eventService.addEvent(event);
			dispatch(addEvent(res));
		} catch (error: any) {
			console.log(error);
		}
	};

	const removeEvent = async (id: string) => {
		try {
			await eventService.deleteEvent(id);
			dispatch(deleteEvent(id));
		} catch (error: any) {
			console.log(error);
		}
	};

	const fetchSpeaker = async (email: any) => {
		try {
			const res = await eventService.fetchSpeaker(email);
			dispatch(addSpeaker(res));
		} catch (error: any) {
			console.log(error);
		}
	};

	const setSpeaker = (speaker: Speaker) => {
		dispatch(addSpeaker(speaker));
	};

	const fetchCities = async () => {
		try {
			const res = await eventService.getCities();
			dispatch(getCities(res));
		} catch (error: any) {
			console.log(error);
		}
	};

	const fetchOrganizingFaculties = async () => {
		try {
			const res = await eventService.getOrganizingFaculties();
			dispatch(getOrganizingFaculties(res));
		} catch (error: any) {
			console.log(error);
		}
	};

	const fetchOrganizingPrograms = async () => {
		try {
			const res = await eventService.getOrganizingPrograms();
			dispatch(getOrganizingPrograms(res));
		} catch (error: any) {
			console.log(error);
		}
	};

	return {
		fetchEvents,
		fetchEvent,
		fetchSpeaker,
		setSpeaker,
		createEvent,
		removeEvent,
		fetchCities,
		fetchOrganizingFaculties,
		fetchOrganizingPrograms,
	};
};
