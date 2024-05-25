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
	address: z.string().min(3, {
		message: 'La dirección debe tener al menos 3 caracteres',
	}),
	placeName: z.string().min(3, {
		message: 'El nombre del lugar debe tener al menos 3 caracteres',
	}),
	categories: z.string().min(4, {
		message: 'Las categorías deben tener al menos 4 caracteres',
	}),
	organizingFaculties: z
		.array(
			z.object({
				id: z.string(),
				name: z.string(),
			})
		)
		.min(1, { message: 'Debe haber al menos una facultad organizadora' }),
	organizingPrograms: z.array(
		z.object({
			id: z.string(),
			name: z.string(),
		})
	),
	speakers: z
		.array(
			z.object({
				identifier: z.string(),
				fullName: z.string(),
				email: z.string(),
				city: z.string(),
				relationship_type: z.string(),
			})
		)
		.min(1, { message: 'Debe haber al menos un conferencista' }),
});

export type NewEvent = z.infer<typeof newEventSchema>;
