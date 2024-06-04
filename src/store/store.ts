import { configureStore } from '@reduxjs/toolkit';
import userSlice from '@/features/user/userSlice';
import eventsSlice from '@/features/events/eventsSlice';

export const store = configureStore({
	reducer: {
		user: userSlice,
		events: eventsSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
