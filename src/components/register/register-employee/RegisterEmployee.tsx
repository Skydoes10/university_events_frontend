'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { registerEmployeeSchema } from '@/schemas';
import { useRegister } from '@/hooks';

type FormData = z.infer<typeof registerEmployeeSchema>;

export const RegisterEmployee = () => {
	const { registerEmployee } = useRegister();
	const router = useRouter();
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting, isDirty },
	} = useForm<FormData>({
		resolver: zodResolver(registerEmployeeSchema),
	});

	async function onSubmit(data: FormData) {
		console.log(isSubmitting);
		console.log(data);

		const user = {
			email: data.email,
			password: data.password,
		};

		await registerEmployee(user);

		router.push('/');
	}

	return (
		<form
			className="flex flex-col gap-4"
			action=""
			method="POST"
			onSubmit={handleSubmit(onSubmit)}
		>
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
