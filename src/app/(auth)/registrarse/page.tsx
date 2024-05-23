'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Title } from '@/components';
import { registerSchema } from '@/schemas';
import { useRegister } from '@/hooks/auth/useRegister';

type FormData = z.infer<typeof registerSchema>;

export default function SignUpPage() {
	const { register: registerUser } = useRegister();
	const router = useRouter();
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting, isDirty, isValid },
	} = useForm<FormData>({
		resolver: zodResolver(registerSchema),
	});

	async function onSubmit(data: FormData) {
		console.log(isSubmitting);
		console.log(data);

		const user = {
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			password: data.password,
			identification: data.identification,
			city: data.city,
			username: data.username,
		};

		await registerUser(user);

		await new Promise<void>((resolve) => {
			setTimeout(() => {
				resolve();
			}, 2000); // 2 seconds in milliseconds
		});

		router.push('/');
	}

	return (
		<>
			<Title title="Registrarse" />

			<form
				className="flex flex-col gap-4"
				action=""
				method="POST"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">
					<div className="flex flex-col mb-2 gap-1">
						<span>Nombre</span>
						<input
							{...register('firstName', { required: true })}
							id="firstName"
							name="firstName"
							type="text"
							className="p-2 border rounded-md bg-gray-200 focus:outline-none"
						/>
						{errors?.firstName && (
							<span className="text-red-500 text-sm">
								{errors?.firstName?.message}
							</span>
						)}
					</div>

					<div className="flex flex-col mb-2 gap-1">
						<span>Apellido</span>
						<input
							{...register('lastName', { required: true })}
							id="lastName"
							name="lastName"
							type="text"
							className="p-2 border rounded-md bg-gray-200 focus:outline-none"
						/>
						{errors?.lastName && (
							<span className="text-red-500 text-sm">
								{errors?.lastName?.message}
							</span>
						)}
					</div>
				</div>

				<div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">
					<div className="flex flex-col mb-2 gap-1">
						<span>Nombre de usuario</span>
						<input
							{...register('username', { required: true })}
							id="username"
							name="username"
							type="text"
							className="p-2 border rounded-md bg-gray-200 focus:outline-none"
						/>
						{errors?.username && (
							<span className="text-red-500 text-sm">
								{errors?.username?.message}
							</span>
						)}
					</div>

					<div className="flex flex-col mb-2 gap-1">
						<span>Número de identificación</span>
						<input
							{...register('identification', { required: true })}
							id="identification"
							name="identification"
							type="text"
							className="p-2 border rounded-md bg-gray-200 focus:outline-none"
						/>
						{errors?.identification && (
							<span className="text-red-500 text-sm">
								{errors?.identification?.message}
							</span>
						)}
					</div>
				</div>

				<div className="flex flex-col mb-2 gap-1">
					<span>Ciudad</span>
					<select
						{...register('city', { required: true })}
						id="city"
						name="city"
						className="p-2 border rounded-md bg-gray-200 focus:outline-none"
					>
						<option value="">Seleccionar</option>
						<option value="cali">
							Cali, Valle del Cauca, Colombia
						</option>
					</select>
				</div>

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
					className="btn-primary font-bold"
				>
					Registrarse
				</button>
			</form>

			<div className="flex justify-center mt-4">
				<p>
					¿Ya tienes cuenta?{' '}
					<Link
						href="/iniciar-sesion"
						className="text-blue-500 hover:underline"
					>
						Inicia sesión
					</Link>
				</p>
			</div>
		</>
	);
}
