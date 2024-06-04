import { useState } from 'react';
import axiosInstance from '@/utils/axiosInstance';

interface Props {
	eventId: string;
	onCommentAdded: (comment: Comment) => void;
}

export const AddComment = ({ eventId, onCommentAdded }: Props) => {
	const [text, setText] = useState('');

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		if (text.length < 4 || text.length > 100) {
			alert('El comentario debe tener entre 4 y 100 caracteres.');
			return;
		}

		const token = localStorage.getItem('token');

		try {
			const response = await axiosInstance.post(
				`/events/comment/${eventId}`,
				{
					comment: text,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			onCommentAdded(response.data);
			setText('');
		} catch (error) {
			console.error('Error adding comment:', error);
			alert('Hubo un error al agregar el comentario.');
		}
	};

	return (
		<div className="flex items-center my-4 border-b-2 border-gray-100 pb-4">
			<form className="flex flex-col w-full" onSubmit={handleSubmit}>
				<textarea
					className="p-2 border border-gray-200 rounded-md focus:outline-none focus:shadow-outline"
					placeholder="Escribe un comentario..."
					maxLength={100}
					minLength={4}
					value={text}
					onChange={(e) => setText(e.target.value)}
				></textarea>
				<button
					type="submit"
					className="w-1/5 mt-4 btn-primary text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline"
				>
					Enviar
				</button>
			</form>
		</div>
	);
};
