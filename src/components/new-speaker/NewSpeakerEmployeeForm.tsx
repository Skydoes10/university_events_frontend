'use client';
import * as z from 'zod';
import { newSpeakerEmployeeSchema } from '@/schemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEvents } from '@/hooks';

type FormData = z.infer<typeof newSpeakerEmployeeSchema>;

export const NewSpeakerEmployeeForm = () => {
	const { fetchSpeaker } = useEvents();
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting, isDirty },
	} = useForm<FormData>({
		resolver: zodResolver(newSpeakerEmployeeSchema),
	});

	async function onSubmit(data: FormData) {
		console.log(isSubmitting);
		console.log(data);

		try {
			await fetchSpeaker(data.email);
		} catch (error: any) {
			console.log(error);
		}
	}

	return (
		<form action="" method="GET" onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col gap-1 fade-in">
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
