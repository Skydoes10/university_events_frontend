export interface User {
	fullName: string;
	username: string;
}

export interface UserResponse {
	accessToken: string;
	user: User;
}
