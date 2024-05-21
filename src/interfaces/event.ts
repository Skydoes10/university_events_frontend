import { Assistant } from './assistant';
import { EventLocation } from './eventLocation';
import { Organizer } from './organizer';

export interface Event {
	id: string;
	title: string;
	description: string;
	date: Date;
	categories: string[];
	organizingFaculties: Organizer[];
	organizingPrograms: Organizer[];
	speakers: Assistant[];
	assistants: Assistant[];
	eventLocation: EventLocation;
	comments: Comment[];
}
