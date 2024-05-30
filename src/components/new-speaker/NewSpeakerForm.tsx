'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useEvents } from '@/hooks';
import { Speaker } from '@/interfaces';
import { newSpeakerSchema } from '@/schemas';

type FormData = z.infer<typeof newSpeakerSchema>;

export const NewSpeakerForm = () => {
	const { setSpeaker } = useEvents();
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting, isDirty },
	} = useForm<FormData>({
		resolver: zodResolver(newSpeakerSchema),
	});

	async function onSubmit(data: FormData) {
		console.log(isSubmitting);
		console.log(data);

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

		setSpeaker(speaker);
	}

	return (
		<form className="fade-in" action="" onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col gap-2 sm:gap-5">
				<div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">
					<div className="flex flex-col gap-1">
						<span>Nombre</span>
						<input
							{...(register('firstname'), { required: true })}
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
							{...(register('lastname'), { required: true })}
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
							{...(register('identifier'), { required: true })}
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
							{...(register('email'), { required: true })}
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
						{...(register('city'), { required: true })}
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

				<div className="flex flex-col gap-1">
					<span>Relación con la universidad</span>
					<input
						{...(register('relationship_type'), { required: true })}
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
					type="submit"
					disabled={!isDirty || isSubmitting}
					className="focus:outline-none px-4 btn-primary p-3 ml-3 rounded-lg text-white hover:bg-blue-700"
				>
					Añadir
				</button>
			</div>
		</form>
	);
};
