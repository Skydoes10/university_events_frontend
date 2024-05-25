import { Speaker } from '@/interfaces';
import { SpeakerItem } from './Speaker';

interface Props {
	speakers: Speaker[];
	className?: string;
}

export const SpeakerList = ({ speakers, className }: Props) => {
	return (
		<div
			className={`transition-all duration-300 bg-white p-4 rounded-lg ${className}`}
		>
			{speakers?.length > 0 ? (
				speakers.map((speaker) => (
					<SpeakerItem key={speaker.username} speaker={speaker} />
				))
			) : (
				<p className="text-gray-700">No hay conferencistas aún</p>
			)}
		</div>
	);
};
