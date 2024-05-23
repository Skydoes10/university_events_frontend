import z from 'zod';

export const newEventSchema = z.object({
	title: z
		.string()
		.min(3, { message: 'El título debe tener al menos 3 caracteres' })
		.max(100, { message: 'El título no debe tener más de 100 caracteres' }),
	description: z
		.string()
		.min(10, {
			message: 'La descripción debe tener al menos 10 caracteres',
		})
		.max(300, {
			message: 'La descripción no debe tener más de 300 caracteres',
		}),
	date: z.string(),
	city: z.string(),
	categories: z.string(),
	organizingFaculties: z.array(z.string()),
	organizingPrograms: z.array(z.string()),
	// speakers: z.array(z.object({} as Speaker)),
	speakers: z
		.array(
			z.object({
				identifier: z.string(),
				username: z.string(),
				full_name: z.string(),
				email: z.string(),
				city: z.string(),
				relationship_type: z.string(),
			})
		)
		.nonempty(),
});

export type NewEvent = z.infer<typeof newEventSchema>;
