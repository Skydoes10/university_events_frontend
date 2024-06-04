'use client';
import * as z from 'zod';
// import { newSpeakerEmployeeSchema } from '@/schemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEvents } from '@/hooks';
import { SelectorEmployee } from '../ui/selector/SelectorEmployee';
import { SpeakerEmployee } from '@/interfaces';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSpeaker } from '@/features/events/eventsSlice';

interface AddSpeakerProps {
	speakers: SpeakerEmployee[];
}

// type FormData = z.infer<typeof newSpeakerEmployeeSchema>;

export const NewSpeakerEmployeeForm = ({ speakers }: AddSpeakerProps) => {
	const dispatch = useDispatch();
	// const { fetchSpeaker } = useEvents();

	const [selectedSpeaker, setSelectedSpeaker] =
		useState<SpeakerEmployee | null>(null);
	console.log('aaaaaaa', selectedSpeaker);

	function onSubmit() {
		try {
			// await fetchSpeaker(data.email);
			dispatch(addSpeaker(selectedSpeaker));
			// addSpeaker(selectedSpeaker);
		} catch (error: any) {
			console.log(error);
		}
	}

	// const handleSelectedSpeaker = (selected: SpeakerEmployee[]) => {
	// 	setSelectedSpeaker(selected.length > 0 ? selected[0] : null);
	// };

	const handleSelectedSpeaker = (e: any) => {
		const speaker = speakers.find(
			(speaker) =>
				speaker.nombres + ' ' + speaker.apellidos === e.target.value
		);
		setSelectedSpeaker(speaker!);
	};

	return (
		<>
			{/* <SelectorEmployee
				name="Conferencista"
				onChange={handleSelectedSpeaker}
				items={speakers}
			/> */}

			<select onChange={handleSelectedSpeaker} className="p-2 border rounded-md bg-white focus:outline-none">
				<option value="">Selecciona un conferencista</option>
				{speakers.map((speaker) => (
					<option
						key={speaker.identificacion}
						value={speaker.nombres + ' ' + speaker.apellidos}
					>
						{speaker.nombres.charAt(0) +
							speaker.nombres.slice(1).toLowerCase() +
							' ' +
							speaker.apellidos.charAt(0) +
							speaker.apellidos.slice(1).toLowerCase()}
					</option>
				))}
			</select>

			<div className="flex justify-end pt-20">
				<button
					type="button"
					onClick={onSubmit}
					className="focus:outline-none px-4 btn-primary p-3 ml-3 rounded-lg text-white hover:bg-blue-700 cursor-pointer"
				>
					Añadir
				</button>
			</div>
		</>
	);
};
