import { Comment } from '@/interfaces';
import { CommentItem } from './Comment';
import { AddComment } from './AddComment';

interface Props {
	comments: Comment[];
}

export const CommentList = ({ comments }: Props) => {
	return (
		<div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md mb-2">
			<AddComment />
			{comments.length > 0 ? (
				comments.map((comment) => (
					<CommentItem key={comment.text} comment={comment} />
				))
			) : (
				<p className="text-gray-700">No hay comentarios aún</p>
			)}
		</div>
	);
};
