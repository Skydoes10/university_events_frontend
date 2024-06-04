'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { registerNotEmployeeSchema } from '@/schemas';
import axiosInstance from '@/utils/axiosInstance';

type FormData = z.infer<typeof registerNotEmployeeSchema>;

interface RegisterNotEmployeeProps {
	onRegister: (data: FormData) => Promise<void>;
}

interface City {
	name: string;
	department: string;
	country: string;
}

export const RegisterNotEmployee = ({ onRegister }: RegisterNotEmployeeProps) => {
	const router = useRouter();
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting, isDirty },
	} = useForm<FormData>({
		resolver: zodResolver(registerNotEmployeeSchema),
	});

	const [cities, setCities] = useState<City[]>([]);

	useEffect(() => {
		const fetchCities = async () => {
			try {
				const response = await axiosInstance.get('http://localhost:3000/cities');
				setCities(response.data);
			} catch (error) {
				console.error('Error fetching cities:', error);
			}
		};

		fetchCities();
	}, []);

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

				<div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">
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
						<span>Relación con la universidad</span>
						<input
							{...register('relationshipType', { required: true })}
							id="relationshipType"
							name="relationshipType"
							type="text"
							className="p-2 border rounded-md bg-gray-200 focus:outline-none"
						/>
						{errors?.relationshipType && (
							<span className="text-red-500 text-sm">
								{errors?.relationshipType?.message}
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
						{cities.map((city, index) => (
							<option key={index} value={`${city.name}, ${city.department}, ${city.country}`}>
								{`${city.name}, ${city.department}, ${city.country}`}
							</option>
						))}
					</select>
					{errors?.city && (
						<span className="text-red-500 text-sm">
							{errors?.city?.message}
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
