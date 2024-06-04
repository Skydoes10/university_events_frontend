'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useEvents } from '@/hooks';
import { Speaker } from '@/interfaces';
import { newSpeakerSchema } from '@/schemas';
import { addSpeaker } from '@/features/events/eventsSlice';
import axiosInstance from '@/utils/axiosInstance';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

type FormData = z.infer<typeof newSpeakerSchema>;

interface City {
	name: string;
	department: string;
	country: string;
}

export const NewSpeakerForm = () => {
	// const { setSpeaker } = useEvents();
	const dispatch = useDispatch();
	const [cities, setCities] = useState<City[]>([]);

	useEffect(() => {
		const fetchCities = async () => {
			try {
				const response = await axiosInstance.get(
					'http://localhost:3000/cities'
				);
				setCities(response.data);
			} catch (error) {
				console.error('Error fetching cities:', error);
			}
		};

		fetchCities();
	}, []);

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting, isDirty },
	} = useForm<FormData>({
		resolver: zodResolver(newSpeakerSchema),
	});

	function onSubmit(data: FormData) {
		const city = data.city.split(', ');

		const speaker: Speaker = {
			identifier: data.identifier,
			fullName: `${data.firstname} ${data.lastname}`,
			email: data.email,
			city: {
				name: city[0],
				department: city[1],
				country: city[2],
			},
			relationship_type: data.relationship_type,
		};

		console.log('speaker', speaker);

		dispatch(addSpeaker(speaker));
		// setSpeaker(speaker);
	}

	return (
		// <form className="fade-in" action="" onSubmit={handleSubmit(onSubmit)}>
		<>
			<div className="flex flex-col gap-2 sm:gap-5 fade-in">
				<div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">
					<div className="flex flex-col gap-1">
						<span>Nombre</span>
						<input
							{...register('firstname')}
							id="firstname"
							name="firstname"
							type="text"
							className="p-2 border rounded-md bg-white focus:outline-none"
						/>
						{errors?.firstname && (
							<span className="text-red-500 text-sm">
								{errors?.firstname?.message}
							</span>
						)}
					</div>
					<div className="flex flex-col gap-1">
						<span>Apellido</span>
						<input
							{...register('lastname')}
							id="lastname"
							name="lastname"
							type="text"
							className="p-2 border rounded-md bg-white focus:outline-none"
						/>
						{errors?.lastname && (
							<span className="text-red-500 text-sm">
								{errors?.lastname?.message}
							</span>
						)}
					</div>
					<div className="flex flex-col gap-1">
						<span>Número de identificación</span>
						<input
							{...register('identifier')}
							id="identifier"
							name="identifier"
							type="text"
							className="p-2 border rounded-md bg-white focus:outline-none"
						/>
						{errors?.identifier && (
							<span className="text-red-500 text-sm">
								{errors?.identifier?.message}
							</span>
						)}
					</div>
					<div className="flex flex-col gap-1">
						<span>Correo electrónico</span>
						<input
							{...register('email')}
							id="email"
							name="email"
							type="email"
							className="p-2 border rounded-md bg-white focus:outline-none"
						/>
						{errors?.email && (
							<span className="text-red-500 text-sm">
								{errors?.email?.message}
							</span>
						)}
					</div>
				</div>

				<div className="flex flex-col gap-1">
					<span>Ciudad</span>
					<select
						{...register('city')}
						id="city"
						name="city"
						className="p-2 border rounded-md bg-white focus:outline-none"
					>
						<option value="">Seleccionar</option>
						{cities.map((city, index) => (
							<option
								key={index}
								value={`${city.name}, ${city.department}, ${city.country}`}
							>
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

				<div className="flex flex-col gap-1">
					<span>Relación con la universidad</span>
					<input
						{...register('relationship_type')}
						id="relationship_type"
						name="relationship_type"
						type="text"
						className="p-2 border rounded-md bg-white focus:outline-none"
					/>
					{errors?.relationship_type && (
						<span className="text-red-500 text-sm">
							{errors?.relationship_type?.message}
						</span>
					)}
				</div>
			</div>

			<div className="flex justify-end pt-20">
				<button
					type="button"
					onClick={handleSubmit(onSubmit)}
					disabled={!isDirty || isSubmitting}
					className="focus:outline-none px-4 btn-primary p-3 ml-3 rounded-lg text-white hover:bg-blue-700"
				>
					Añadir
				</button>
			</div>
		</>
	);
};
