'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useEvents } from '@/hooks';
import { newEventSchema } from '@/schemas';
import { AddSpeaker, Selector, Title, SpeakerList } from '@/components';
import { useEffect, useState } from 'react';
import { City, Organizer, Speaker, SpeakerEmployee } from '@/interfaces';
import axiosInstance from '../../../utils/axiosInstance';
import { useFetchData } from '@/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { EventsState, clearSpeakers } from '../../../features/events/eventsSlice';

const transformSpeakerEmployeeToSpeaker = (employee: SpeakerEmployee): Speaker => {
	return {
		identifier: employee.identificacion,
		fullName: `${employee.nombres} ${employee.apellidos}`,
		email: employee.email,
		city: '',  // Ajusta según sea necesario
		relationship_type: '',  // Ajusta según sea necesario
	};
}

type FormData = z.infer<typeof newEventSchema>;

export default function NewEventPage() {
	const { data: organizingFaculties } = useFetchData('/faculties');
	const { data: organizingPrograms } = useFetchData('/programs');
	const { data: speakers } = useFetchData('/employees');

	const dispatch = useDispatch();
	const speakersAdded = useSelector((state: { events: EventsState }) => state.events.speakers);

	const { createEvent } = useEvents();
	const router = useRouter();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [date, setDate] = useState('');
	const [placeName, setPlaceName] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [categories, setCategories] = useState('');
	const [faculties, setFaculties] = useState<Organizer[]>([]);
	const [programs, setPrograms] = useState<Organizer[]>([]);
	const [cities, setCities] = useState<City[]>([]);

	const handleFaculties = (faculties: Organizer[]) => {
		setFaculties(faculties);
	};

	const handlePrograms = (programs: Organizer[]) => {
		setPrograms(programs);
	};

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

	
	
	const handleRegister = async () => {

		//const newSpeakerFormat = 
		const speakers = speakersAdded.map((speaker: any) => {
			if (speaker.nombres) {
				return {
					identifier: speaker.identificacion,
					fullName: `${speaker.nombres} ${speaker.apellidos}`,
					email: speaker.email,
					city: speaker.ciudad,
					relationship_type: speaker.tipo_relacion,
				};
			}
		});
		try {
			const token = localStorage.getItem('token');
			console.log(token)
			const cityParts = city.split(', ');
			
			const event = {
				title,
				description,
				dateTime: date,
				event_location: [
					{
						city: {
							name: cityParts[0],
							department: cityParts[1],
							country: cityParts[2],
						},
						address,
						name: placeName,
					},
				],
				categories: categories.split(', '),
				organizing_faculties: faculties,
				organizing_programs: programs,
				speakers: speakers,
				assistants: [],
			};

			console.log(event,"Sapohpta")

			const response = await axiosInstance.post('/events', event);
			console.log('Event created:', response.data);
			dispatch(clearSpeakers());
			router.push('/');
		} catch (error: any) {
			console.error('Error creating event:', error.response?.data || error.message);
		}
	};

	return (
		<div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0 fade-in">
			<div className="w-full xl:w-[1000px] flex flex-col justify-center text-left">
				<Title title="Nuevo evento" />

				<div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">
					<div className="flex flex-col gap-2 sm:gap-5 sm:grid-cols-2">
						<div className="flex flex-col mb-2 gap-1">
							<span>Título</span>
							<input
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								id="title"
								name="title"
								type="text"
								className="p-2 border rounded-md bg-white focus:outline-none"
								maxLength={100}
								minLength={3}
							/>
						</div>

						<div className="flex flex-col mb-2 gap-1">
							<span>Descripción</span>
							<textarea
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								id="description"
								name="description"
								className="p-2 border rounded-md bg-white focus:outline-none"
								rows={5}
								maxLength={300}
								minLength={10}
							/>
						</div>
					</div>

					<div className="flex flex-col gap-2 sm:gap-5 sm:grid-cols-2">
						<div className="flex flex-col mb-2 gap-1">
							<span>Fecha</span>
							<input
								value={date}
								onChange={(e) => setDate(e.target.value)}
								id="date"
								name="date"
								type="datetime-local"
								className="p-2 border rounded-md bg-white focus:outline-none"
							/>
						</div>

						<div className="flex flex-col mb-2 gap-1">
							<span>Nombre del lugar</span>
							<input
								value={placeName}
								onChange={(e) => setPlaceName(e.target.value)}
								id="placeName"
								name="placeName"
								type="text"
								className="p-2 border rounded-md bg-white focus:outline-none"
								maxLength={100}
								minLength={3}
							/>
						</div>

						<div className="flex flex-col mb-2 gap-1">
							<span>Dirección</span>
							<input
								value={address}
								onChange={(e) => setAddress(e.target.value)}
								id="address"
								name="address"
								type="text"
								className="p-2 border rounded-md bg-white focus:outline-none"
								maxLength={100}
								minLength={3}
							/>
						</div>

						<div className="flex flex-col mb-2 gap-1">
							<span>Ciudad</span>
							<select
								value={city}
								onChange={(e) => setCity(e.target.value)}
								id="city"
								name="city"
								className="p-2 border rounded-md bg-white focus:outline-none"
							>
								<option value="">Seleccionar</option>
								{cities.map((city, index) => (
									<option key={index} value={`${city.name}, ${city.department}, ${city.country}`}>
										{`${city.name}, ${city.department}, ${city.country}`}
									</option>
								))}
							</select>
						</div>

						<div className="flex flex-col mb-2 gap-1">
							<span>Categorías</span>
							<input
								value={categories}
								onChange={(e) => setCategories(e.target.value)}
								id="categories"
								name="categories"
								type="text"
								className="p-2 border rounded-md bg-white focus:outline-none"
								maxLength={100}
								minLength={3}
							/>
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
					type="button"
					onClick={handleRegister}
					className="mt-5 p-2 bg-blue-500 text-white rounded-md"
				>
					Crear evento
				</button>
			</div>
		</div>
	);
}
