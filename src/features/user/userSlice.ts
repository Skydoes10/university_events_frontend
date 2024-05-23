import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/interfaces';

export interface UserState {
	user: User;
}

const initialState: UserState = {
	user: {
		fullName: '',
		username: '',
	},
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
		},
		clearUser: (state) => {
			state.user = initialState.user;
		},
	},
});

export const { clearUser, setUser } = userSlice.actions;

export default userSlice.reducer;
