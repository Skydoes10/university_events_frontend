import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/interfaces';

export interface UserState {
	user: User;
	isAuthenticated?: boolean;
}

const initialState: UserState = {
	user: {
		id: '',
		identifier: '',
		fullName: '',
		username: '',
		email: '',
		city: '',
		relationship_type: '',
		isAdmin: false,
	},
	isAuthenticated: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
			state.isAuthenticated = true;
		},
		clearUser: (state) => {
			state.user = initialState.user;
			state.isAuthenticated = false;
		},
	},
});

export const { clearUser, setUser } = userSlice.actions;

export default userSlice.reducer;
