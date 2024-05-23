'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Title } from '@/components';
import { loginSchema } from '@/schemas';
import { useLogin } from '@/hooks';

type FormData = z.infer<typeof loginSchema>;
export default function LoginPage() {
	const { login } = useLogin();
	const router = useRouter();
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting, isDirty, isValid },
	} = useForm<FormData>({
		resolver: zodResolver(loginSchema),
	});

	async function onSubmit(data: FormData) {
		console.log(isSubmitting);
		console.log(data);

		const user = { email: data.email, password: data.password };
		await login(user);

		router.push('/');
	}

	return (
		<>
			<Title title="Iniciar sesión" />

			<form
				className="flex flex-col gap-4"
				action=""
				method="POST"
				onSubmit={handleSubmit(onSubmit)}
			>
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
					<span>Contraseña</span>
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

				<button
					type="submit"
					disabled={!isDirty || isSubmitting}
					className="btn-primary font-bold cursor-pointer disabled:opacity-70"
				>
					Ingresar
				</button>
			</form>

			<div className="flex justify-center mt-4">
				<p>
					¿Aún no tienes cuenta?{' '}
					<Link
						href="/registrarse"
						className="text-blue-500 hover:underline"
					>
						Regístrate
					</Link>
				</p>
			</div>
		</>
	);
}
