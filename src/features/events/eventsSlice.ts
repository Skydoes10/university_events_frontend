import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { City, Event, Organizer } from '@/interfaces';

export interface EventsState {
	events: Event[];
	event: Event | null;
	cities: City[];
	organizingFaculties: Organizer[];
	organizingPrograms: Organizer[];
}

const initialState: EventsState = {
	events: [],
	event: null,
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
		getCities: (state, action: PayloadAction<City[]>) => {
			state.cities = action.payload;
		},
		getOrganizingFaculties: (state, action: PayloadAction<Organizer[]>) => {
			state.organizingFaculties = action.payload;
		},
		getOrganizingPrograms: (state, action: PayloadAction<Organizer[]>) => {
			state.organizingPrograms = action.payload;
		},
		// updateEvent: (state) => {
		// 	state.loading = true;
		// },
		// updateEventSuccess: (state, action: PayloadAction<Event>) => {
		// 	state.events = state.events.map((event) =>
		// 		event.id === action.payload.id ? action.payload : event
		// 	);
		// 	state.loading = false;
		// 	state.error = '';
		// },
		// updateEventFailure: (state, action: PayloadAction<string>) => {
		// 	state.loading = false;
		// 	state.error = action.payload;
		// },
	},
});

export const {
	getCities,
	getOrganizingFaculties,
	getOrganizingPrograms,
	getEvents,
	getEvent,
	addEvent,
	// updateEvent,
	// updateEventSuccess,
	// updateEventFailure,
	deleteEvent,
} = eventsSlice.actions;

export default eventsSlice.reducer;
