import { Speaker } from '@/interfaces/speaker';
import { SpeakerItem } from './Speaker';
import { AddSpeaker } from './AddSpeaker'; 

interface Props {
    speakers: Speaker[];
}

export const SpeakerList = ({ speakers }: Props) => {
    return (
        <div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 mb-2">
            {speakers.length > 0 ? (
                speakers.map((speaker) => (
                    <SpeakerItem key={speaker.username} speaker={speaker} />
                ))
            ) : (
                <p className="text-gray-700">No hay speakers aún</p>
            )}
        </div>
    );
};
