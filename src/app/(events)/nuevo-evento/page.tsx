'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useEvents } from '@/hooks';
import { newEventSchema } from '@/schemas';
import { AddSpeaker, Selector, Title, SpeakerList } from '@/components';
import { useEffect, useState } from 'react';
import { Organizer } from '@/interfaces';
import axiosInstance from '../../../utils/axiosInstance';
import { useFetchData } from '@/hooks';
import { useDispatch, useSelector } from 'react-redux';
import eventsSlice, {
	EventsState,
	clearSpeakers,
} from '../../../features/events/eventsSlice';

type FormData = z.infer<typeof newEventSchema>;

export default function NewEventPage() {
	const { data: organizingFaculties } = useFetchData('/faculties');
	const { data: organizingPrograms } = useFetchData('/programs');
	const { data: speakers } = useFetchData('/employees');
	// console.log('speaker', speakers);

	const dispatch = useDispatch();
	const speakersAdded = useSelector((state: { events: EventsState }) => state.events.speakers);
    console.log('speakersAdded', speakersAdded);
    

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
			dispatch(clearSpeakers());
			router.push('/');
		} catch (error: any) {
			console.error(
				'Error creating event:',
				error.response?.data || error.message
			);
		}
	};

	return (
		<div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0 fade-in">
			<div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
				<Title title="Nuevo evento" />

				<form
					action=""
					method="POST"
					onSubmit={handleSubmit(handleRegister)}
				>
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
								<span>Nombre del lugar</span>
								<input
									{...register('placeName', {
										required: true,
									})}
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
								<span>Ciudad</span>
								<input
									{...register('city', { required: true })}
									id="city"
									name="city"
									type="text"
									className="p-2 border rounded-md bg-white focus:outline-none"
									max={100}
									min={3}
								/>
								{errors?.city && (
									<span className="text-red-500 text-sm">
										{errors?.city?.message}
									</span>
								)}
							</div>

							<div className="flex flex-col mb-2 gap-1">
								<span>Categorías</span>
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
						</div>
					</div>

					<div className="flex flex-col gap-2 sm:gap-5 sm:grid-cols-2">
						<Selector
							name="Facultades"
							onChange={handleFaculties}
							items={organizingFaculties}
						/>
						<Selector
							name="Programas"
							onChange={handlePrograms}
							items={organizingPrograms}
						/>
					</div>

					<div className="flex flex-col mb-2 gap-2">
						<span>
							Conferencistas
							<AddSpeaker speakers={speakers} />
						</span>
						<SpeakerList speakers={speakersAdded} />
					</div>

					<button
						type="submit"
						disabled={isSubmitting}
						className="mt-5 p-2 bg-blue-500 text-white rounded-md"
					>
						Crear evento
					</button>
				</form>
			</div>
		</div>
	);
}
