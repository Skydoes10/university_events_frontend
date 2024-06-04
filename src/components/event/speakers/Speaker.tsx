import { Speaker, SpeakerEmployee } from '@/interfaces';
import { useEffect, useState } from 'react';

import axiosInstance from '@/utils/axiosInstance';

interface Props {
	speaker: Speaker | SpeakerEmployee;
}

export const SpeakerItem = ({ speaker }: Props) => {
	const isSpeaker = (
		speaker: Speaker | SpeakerEmployee
	): speaker is Speaker => {
		return (speaker as Speaker).fullName !== undefined;
	};

	return (
		<div className="flex items-center my-4 border-b-2 border-gray-100 pb-4">
			<div className="ml-4">
				<p className="font-semibold text-gray-700">
					{isSpeaker(speaker)
						? speaker.fullName
						: speaker.nombres.charAt(0) +
						  speaker.nombres.slice(1).toLowerCase() +
						  ' ' +
						  speaker.apellidos.charAt(0) +
						  speaker.apellidos.slice(1).toLowerCase()}
				</p>
			</div>
		</div>
	);
};
