import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Event } from '@/interfaces';

export interface EventsState {
	events: Event[];
	event: Event | null;
	loading: boolean;
	error: string;
}

const initialState: EventsState = {
	events: [],
	event: null,
	loading: false,
	error: '',
};

export const eventsSlice = createSlice({
	name: 'events',
	initialState,
	reducers: {
		getEvents: (state) => {
			state.loading = true;
		},
		getEventsSuccess: (state, action: PayloadAction<Event[]>) => {
			state.events = action.payload;
			state.loading = false;
			state.error = '';
		},
		getEventsFailure: (state, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
		},
		getEvent: (state) => {
			state.loading = true;
		},
		getEventSuccess: (state, action: PayloadAction<Event>) => {
			state.event = action.payload;
			state.loading = false;
			state.error = '';
		},
		getEventFailure: (state, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
		},
		addEvent: (state) => {
			state.loading = true;
		},
		addEventSuccess: (state, action: PayloadAction<Event>) => {
			state.events.push(action.payload);
			state.loading = false;
			state.error = '';
		},
		addEventFailure: (state, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
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
		deleteEvent: (state) => {
			state.loading = true;
		},
		deleteEventSuccess: (state, action: PayloadAction<string>) => {
			state.events = state.events.filter(
				(event) => event.id !== action.payload
			);
			state.loading = false;
			state.error = '';
		},
		deleteEventFailure: (state, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	getEvents,
	getEventsSuccess,
	getEventsFailure,
	getEvent,
	getEventSuccess,
	getEventFailure,
	addEvent,
	addEventSuccess,
	addEventFailure,
	// updateEvent,
	// updateEventSuccess,
	// updateEventFailure,
	deleteEvent,
	deleteEventSuccess,
	deleteEventFailure,
} = eventsSlice.actions;

export default eventsSlice.reducer;
