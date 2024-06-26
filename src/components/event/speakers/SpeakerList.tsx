import { Speaker, SpeakerEmployee } from '@/interfaces';
import { SpeakerItem } from './Speaker';

interface Props {
	speakers: Speaker[] | SpeakerEmployee[];
	className?: string;
}

export const SpeakerList = ({ speakers, className }: Props) => {

	

	return (
		<div
			className={`transition-all duration-300 bg-white p-4 rounded-lg ${className}`}
		>
			{speakers?.length > 0 ? (
				speakers.map((speaker, index) => (
					<SpeakerItem key={index} speaker={speaker} />
					
				))
			) : (
				<p className="text-gray-700">No hay conferencistas aún</p>
			)}
		</div>
	);
};
