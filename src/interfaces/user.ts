export interface User {
	id?: string;
	identifier: string;
	username: string;
	fullName: string;
	email: string;
	city: string;
	relationship_type: string;
	isAdmin?: boolean;
}

export interface UserResponse {
	accessToken: string;
	user: User;
}
