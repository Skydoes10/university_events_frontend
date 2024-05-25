import axios, { AxiosInstance } from 'axios';
import { getAuthHeader } from './getAuthHeader';

export class EventService {
	protected readonly instance: AxiosInstance;

	constructor(url: string) {
		const { Authorization } = getAuthHeader();
		this.instance = axios.create({
			baseURL: url,
			headers: {
				'Content-Type': 'application/json',
				Authorization,
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

	async fetchSpeaker(email: any) {
		try {
			const res = await this.instance.get(`/speakers/`, email);
			return res.data;
		} catch (error) {
			throw error;
		}
	}

	async getCities() {
		try {
			const res = await this.instance.get('/cities');
			return res.data;
		} catch (error) {
			throw error;
		}
	}

	async getOrganizingFaculties() {
		try {
			const res = await this.instance.get('/organizing-faculties');
			return res.data;
		} catch (error) {
			throw error;
		}
	}

	async getOrganizingPrograms() {
		try {
			const res = await this.instance.get('/organizing-programs');
			return res.data;
		} catch (error) {
			throw error;
		}
	}
}
