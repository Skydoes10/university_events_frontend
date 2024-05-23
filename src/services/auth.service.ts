import { LoginUser, RegisterUser } from '@/schemas';
import axios, { AxiosInstance } from 'axios';

export class AuthService {
	protected readonly instance: AxiosInstance;

	constructor(url: string) {
		this.instance = axios.create({
			baseURL: url,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}

	async login(user: LoginUser) {
		try {
			const res = await this.instance.post('/login', {
				email: user.email,
				password: user.password,
			});
			return res.data;
		} catch (error) {
			throw error;
		}
	}

	async register(user: RegisterUser) {
		try {
			const res = await this.instance.post('/register', {
				fullName: user.firstName + ' ' + user.lastName,
				email: user.email,
				password: user.password,
				identification: user.identification,
				city: user.city,
				username: user.username,
			});
			return res.data;
		} catch (error) {
			throw error;
		}
	}

	async getMe(userId: string) {
		try {
			const res = await this.instance.get(`/users/${userId}`);
			return res.data;
		} catch (error) {
			throw error;
		}
	}
}
