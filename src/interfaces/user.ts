import { City } from './city';
export interface User {
	id?: string;
	identifier: string;
	username?: string;
	fullName: string;
	email: string;
	city: string | City;
	relationshipType: string;
	isAdmin?: boolean;
}

export interface UserResponse {
	accessToken: string;
	user: User;
}
