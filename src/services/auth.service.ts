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

	async login(email: string, password: string) {
		try {
			const res = await this.instance.post('/login', { email, password });
			return res.data;
		} catch (error) {
			throw error;
		}
	}

	async register(email: string, password: string) {
		try {
			const res = await this.instance.post('/register', {
				email,
				password,
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
