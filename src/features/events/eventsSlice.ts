import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { City, Event, Organizer, Speaker, SpeakerEmployee } from '@/interfaces';
import { WritableDraft } from 'immer';
import { clear } from 'console';

export interface EventsState {
	events: Event[];
	event: Event | null;
	speakers: Speaker[] | SpeakerEmployee[];
	cities: City[];
	organizingFaculties: Organizer[];
	organizingPrograms: Organizer[];
}

const initialState: EventsState = {
	events: [],
	event: null,
	speakers: [],
	cities: [],
	organizingFaculties: [],
	organizingPrograms: [],
};

export const eventsSlice = createSlice({
	name: 'events',
	initialState,
	reducers: {
		getEvents: (state, action: PayloadAction<Event[]>) => {
			state.events = action.payload;
		},
		getEvent: (state, action: PayloadAction<Event>) => {
			state.event = action.payload;
		},
		addEvent: (state, action: PayloadAction<Event>) => {			
			state.events.push(action.payload);
		},
		deleteEvent: (state, action: PayloadAction<string>) => {
			state.events = state.events.filter(
				(event) => event.id !== action.payload
			);
		},
		addSpeaker: (state, action: PayloadAction<any>) => {
			console.log('payload', action.payload);
			state.speakers.push(action.payload);
		},
		clearSpeakers: (state) => {
			state.speakers = [];
		},
		getCities: (state, action: PayloadAction<City[]>) => {
			state.cities = action.payload;
		},
		getOrganizingFaculties: (state, action: PayloadAction<Organizer[]>) => {
			state.organizingFaculties = action.payload;
		},
		getOrganizingPrograms: (state, action: PayloadAction<Organizer[]>) => {
			state.organizingPrograms = action.payload;
		},
	},
});

export const {
	getCities,
	getOrganizingFaculties,
	getOrganizingPrograms,
	addSpeaker,
	getEvents,
	getEvent,
	addEvent,
	deleteEvent,
	clearSpeakers,
} = eventsSlice.actions;

export default eventsSlice.reducer;
