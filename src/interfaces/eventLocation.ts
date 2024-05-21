import { City } from './city';

export interface EventLocation {
	name: string;
	address?: string;
	city: City;
	link?: string;
	platform?: string;
	password?: string;
}
