import { Assistant } from './assistant';
import { EventLocation } from './eventLocation';
import { Organizer } from './organizer';
import { Comment } from './comment';
import { Speaker } from './speaker';

export interface Event {
	id?: string;
	title: string;
	description: string;
	dateTime: Date | string;
	categories: string[];
	organizing_faculties: Organizer[];
	organizing_programs: Organizer[];
	speakers: Speaker[];
	assistants: Assistant[];
	event_location: EventLocation[]
	comments: Comment[];
}
