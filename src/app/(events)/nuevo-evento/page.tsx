'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useEvents } from '@/hooks';
import { newEventSchema } from '@/schemas';
import { AddSpeaker, Selector, Title, SpeakerList } from '@/components';
import { useState } from 'react';
import { Organizer } from '@/interfaces';
import { useSelector } from 'react-redux';
import { EventsState } from '@/features/events/eventsSlice';
import axiosInstance from '../../../utils/axiosInstance';

type FormData = z.infer<typeof newEventSchema>;

export default function NewEventPage() {
	const organizingFaculties = useSelector(
		(state: EventsState) => state.organizingFaculties
	);
	const organizingPrograms = useSelector(
		(state: EventsState) => state.organizingPrograms
	);
	const speakers = useSelector((state: EventsState) => state.speakers);

	const { createEvent } = useEvents();
	const router = useRouter();
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting, isDirty },
	} = useForm<FormData>({
		resolver: zodResolver(newEventSchema),
	});
	const [faculties, setFaculties] = useState<Organizer[]>([]);
	const [programs, setPrograms] = useState<Organizer[]>([]);

	const handleFaculties = (faculties: Organizer[]) => {
		setFaculties(faculties);
	};

	const handlePrograms = (programs: Organizer[]) => {
		setPrograms(programs);
	};

	const handleRegister = async (data: FormData) => {
		try {
			const city = data.city.split(', ');

			const event = {
				title: data.title,
				description: data.description,
				dateTime: data.date,
				event_location: [
					{
						city: {
							name: city[0],
							department: city[1],
							country: city[2],
						},
						address: data.address,
						name: data.placeName,
					},
				],
				categories: data.categories.split(', '),
				organizing_faculties: faculties,
				organizing_programs: programs,
				speakers: speakers,
				assistants: [],
			};

			const response = await axiosInstance.post('/events', event);
			console.log('Event created:', response.data);

			// Redirigir a la página principal u otra página después de la creación
			router.push('/');
		} catch (error: any) {
			console.error('Error creating event:', error.response?.data || error.message);
		}
	};

	return (
		<div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0 fade-in">
			<div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
				<Title title="Nuevo evento" />

				<form action="" method="POST" onSubmit={handleSubmit(handleRegister)}>
					<div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">
						<div className="flex flex-col gap-2 sm:gap-5 sm:grid-cols-2">
							<div className="flex flex-col mb-2 gap-1">
								<span>Título</span>
								<input
									{...register('title', { required: true })}
									id="title"
									name="title"
									type="text"
									className="p-2 border rounded-md bg-white focus:outline-none"
									max={100}
									min={3}
								/>
								{errors?.title && (
									<span className="text-red-500 text-sm">
										{errors?.title?.message}
									</span>
								)}
							</div>

							<div className="flex flex-col mb-2 gap-1">
								<span>Descripción</span>
								<textarea
									{...register('description', {
										required: true,
									})}
									id="description"
									name="description"
									className="p-2 border rounded-md bg-white focus:outline-none"
									rows={5}
									maxLength={300}
									minLength={10}
								/>
								{errors?.description && (
									<span className="text-red-500 text-sm">
										{errors?.description?.message}
									</span>
								)}
							</div>
						</div>

						<div className="flex flex-col gap-2 sm:gap-5 sm:grid-cols-2">
							<div className="flex flex-col mb-2 gap-1">
								<span>Fecha</span>
								<input
									{...register('date', { required: true })}
									id="date"
									name="date"
									type="datetime-local"
									className="p-2 border rounded-md bg-white focus:outline-none"
								/>
								{errors?.date && (
									<span className="text-red-500 text-sm">
										{errors?.date?.message}
									</span>
								)}
							</div>

							<div className="flex flex-col mb-2 gap-1">
								<span>
									Categorías
									<span className="text-gray-500">
										{' '}
										(separadas por coma)
									</span>
								</span>
								<input
									{...register('categories', {
										required: true,
									})}
									id="categories"
									name="categories"
									type="text"
									className="p-2 border rounded-md bg-white focus:outline-none"
									max={100}
									min={3}
								/>
								{errors?.categories && (
									<span className="text-red-500 text-sm">
										{errors?.categories?.message}
									</span>
								)}
							</div>

							<div className="flex flex-col mb-2 gap-1">
								<span>Ciudad</span>
								<select
									{...register('city', { required: true })}
									id="city"
									name="city"
									className="p-2 border rounded-md bg-white focus:outline-none"
								>
									<option value="">Seleccionar</option>
									<option value="cali">
										Cali, Valle del Cauca, Colombia
									</option>
								</select>
								{errors?.city && (
									<span className="text-red-500 text-sm">
										{errors?.city?.message}
									</span>
								)}
							</div>
						</div>

						<div className="flex flex-col mb-2 gap-1">
							<span>Dirección</span>
							<input
								{...register('address', { required: true })}
								id="address"
								name="address"
								type="text"
								className="p-2 border rounded-md bg-white focus:outline-none"
								max={100}
								min={3}
							/>
							{errors?.address && (
								<span className="text-red-500 text-sm">
									{errors?.address?.message}
								</span>
							)}
						</div>

						<div className="flex flex-col mb-2 gap-1">
							<span>Nombre del lugar</span>
							<input
								{...register('placeName', { required: true })}
								id="placeName"
								name="placeName"
								type="text"
								className="p-2 border rounded-md bg-white focus:outline-none"
								max={100}
								min={3}
							/>
							{errors?.placeName && (
								<span className="text-red-500 text-sm">
									{errors?.placeName?.message}
								</span>
							)}
						</div>

						<div className="flex flex-col mb-2 gap-1">
							<span>Facultades organizadoras</span>
							<Selector
								required={true}
								optionsToSelect={organizingFaculties}
								handleSelected={handleFaculties}
							/>
						</div>

						<div className="flex flex-col mb-2 gap-1">
							<span>
								Programas organizadores
								<span className="text-gray-500">
									{' '}
									(opcional)
								</span>
							</span>
							<Selector
								required={false}
								optionsToSelect={organizingPrograms}
								handleSelected={handlePrograms}
							/>
						</div>

						<div className="flex flex-col mb-2 gap-2">
							<span>
								Conferencistas
								<AddSpeaker />
							</span>
							<SpeakerList speakers={speakers} />
						</div>
					</div>
					<div className="flex flex-col mb-2 mt-4 mr-5 sm:mt-6">
						<button
							type="submit"
							disabled={!isDirty || isSubmitting}
							className="btn-primary flex w-full sm:w-1/2 justify-center font-bold cursor-pointer"
						>
							Añadir evento
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
