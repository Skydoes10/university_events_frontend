import z from 'zod';

export const newSpeakerSchema = z.object({
	identifier: z.string(),
	username: z.string(),
	full_name: z.string(),
	email: z.string(),
	city: z.string(),
	relationship_type: z.string(),
});

export type NewEvent = z.infer<typeof newSpeakerSchema>;
