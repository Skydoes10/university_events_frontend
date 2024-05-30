'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { registerEmployeeSchema } from '@/schemas';
import axiosInstance from '@/utils/axiosInstance';

type FormData = z.infer<typeof registerEmployeeSchema>;

interface RegisterEmployeeProps {
	onRegister: (data: FormData) => Promise<void>;
}

export const RegisterEmployee = ({ onRegister }: RegisterEmployeeProps) => {
	const router = useRouter();
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting, isDirty },
	} = useForm<FormData>({
		resolver: zodResolver(registerEmployeeSchema),
	});

	async function onSubmit(data: FormData) {
		try {
			await onRegister(data);
			router.push('/');
		} catch (error) {
			console.error('Error registering user:', error);
			// Manejar errores, mostrar mensaje de error, etc.
		}
	}

	return (
		<form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col fade-in gap-4">
				<div className="flex flex-col mb-2 gap-1">
					<span>Correo electrónico</span>
					<input
						{...register('email', { required: true })}
						id="email"
						name="email"
						type="email"
						className="p-2 border rounded-md bg-gray-200 focus:outline-none"
					/>
					{errors?.email && (
						<span className="text-red-500 text-sm">
							{errors?.email?.message}
						</span>
					)}
				</div>

				<div className="flex flex-col mb-2 gap-1">
					<span>Crea una contraseña</span>
					<input
						{...register('password', { required: true })}
						id="password"
						name="password"
						type="password"
						className="p-2 border rounded-md bg-gray-200 focus:outline-none"
					/>
					{errors?.password && (
						<span className="text-red-500 text-sm">
							{errors?.password?.message}
						</span>
					)}
				</div>
			</div>

			<button
				type="submit"
				disabled={!isDirty || isSubmitting}
				className="btn-primary font-bold"
			>
				Registrarse
			</button>
		</form>
	);
};
