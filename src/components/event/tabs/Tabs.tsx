'use client';
import React, { useState } from 'react';
import { CommentList } from '../comments/CommentList';
import { Assistant, Comment } from '@/interfaces';
import { Speaker } from '@/interfaces/speaker';
import { SpeakerList } from '../speakers/SpeakerList';
import { AssistantList } from '../assistants/AssistantList';

interface Props {
	comments: Comment[];
	assistants: Assistant[];
	speakers: Speaker[];
}

export const Tabs = ({ comments, assistants, speakers }: Props) => {
	const [openTab, setOpenTab] = useState<number>(1);

	return (
		// <div className="bg-gray-100 font-sans flex h-screen items-center justify-center">
		// 	<div className="p-8">
		<div className="w-full mx-auto">
			<div className="mb-4 flex space-x-4 bg-white p-2 rounded-lg shadow-sm">
				<button
					onClick={() => setOpenTab(1)}
					className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
						openTab === 1 ? 'btn-primary text-white' : ''
					}`}
				>
					Comentarios
				</button>
				<button
					onClick={() => setOpenTab(2)}
					className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
						openTab === 2 ? 'btn-primary text-white' : ''
					}`}
				>
					Conferencistas
				</button>
				<button
					onClick={() => setOpenTab(3)}
					className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
						openTab === 3 ? 'btn-primary text-white' : ''
					}`}
				>
					Asistentes
				</button>
			</div>

			{openTab === 1 && (
				<CommentList comments={comments} />
				// <div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4">
				// </div>
			)}

			{openTab === 2 && (
				<SpeakerList speakers={speakers} className={'shadow-md mb-2'} />
			)}

			{openTab === 3 && <AssistantList assistants={assistants} />}
		</div>
		// 	</div>
		// </div>
	);
};
