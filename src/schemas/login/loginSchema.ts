import z from 'zod';

export const loginSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'El correo electrónico es requerido' })
		.email({ message: 'El correo electrónico no es válido' }),
	password: z.string().min(1, { message: 'La contraseña es requerida' }),
});

export type LoginUser = z.infer<typeof loginSchema>;
