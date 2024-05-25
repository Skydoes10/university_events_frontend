import z from 'zod';

export const newSpeakerSchema = z.object({
	identifier: z
		.string()
		.min(1, { message: 'El número de identificación es requerido' }),
	firstname: z.string().min(1, { message: 'El nombre es requerido' }),
	lastname: z.string().min(1, { message: 'El apellido es requerido' }),
	email: z.string().min(1, { message: 'El email es requerido' }).email(),
	city: z.string(),
	relationship_type: z
		.string()
		.min(1, { message: 'El tipo de relación es requerido' }),
});

export const newSpeakerEmployeeSchema = z.object({
	email: z.string().min(1, { message: 'El email es requerido' }).email(),
});

export type NewSpeaker = z.infer<typeof newSpeakerSchema>;

export type NewSpeakerEmployee = z.infer<typeof newSpeakerEmployeeSchema>;
