import { Speaker } from "@/interfaces/speaker";

interface Props {
    speaker: Speaker;
}

export const SpeakerItem = ( { speaker }: Props) => {

    return (
        <div className="flex items-center my-4 border-b-2 border-gray-100 pb-4">
			<div className="ml-4">
				<p className="font-semibold text-gray-700">
					{speaker.fullName}
				</p>
			</div>
		</div>
    );

}