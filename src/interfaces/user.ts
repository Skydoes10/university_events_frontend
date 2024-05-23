export interface User {
	id: string;
	identifier: string;
	username: string;
	full_name: string;
	email: string;
	city: string;
	relationship_type: string;
	is_admin: boolean;
}

export interface UserResponse {
	accessToken: string;
	user: User;
}
