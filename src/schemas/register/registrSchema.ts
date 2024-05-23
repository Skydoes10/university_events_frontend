import z from 'zod';

export const registerSchema = z.object({
	firstName: z.string().min(1, { message: 'El nombre es requerido' }),
	lastName: z.string().min(1, { message: 'El apellido es requerido' }),
	username: z
		.string()
		.min(1, { message: 'El nombre de usuario es requerido' }),
	identification: z
		.string()
		.min(1, { message: 'El número de identificación es requerido' }),
	email: z
		.string()
		.min(1, { message: 'El correo electrónico es requerido' })
		.email({ message: 'El correo electrónico no es válido' }),
	password: z.string().min(1, { message: 'La contraseña es requerida' }),
	city: z.string().min(1, { message: 'La ciudad es requerida' }),
});

export type RegisterUser = z.infer<typeof registerSchema>;
