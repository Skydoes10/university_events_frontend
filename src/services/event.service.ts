import axios, { AxiosInstance } from 'axios';

export class EventService {
	protected readonly instance: AxiosInstance;

	constructor(url: string) {
		this.instance = axios.create({
			baseURL: url,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}

	async getEvents() {
		try {
			const res = await this.instance.get('/events');
			return res.data;
		} catch (error) {
			throw error;
		}
	}

	async getEvent(id: string) {
		try {
			const res = await this.instance.get(`/events/${id}`);
			return res.data;
		} catch (error) {
			throw error;
		}
	}

	async addEvent(event: any) {
		try {
			const res = await this.instance.post('/events', event);
			return res.data;
		} catch (error) {
			throw error;
		}
	}

	async deleteEvent(id: string) {
		try {
			await this.instance.delete(`/events/${id}`);
		} catch (error) {
			throw error;
		}
	}
}
