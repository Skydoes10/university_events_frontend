import { Comment } from '@/interfaces';
import { CommentItem } from './Comment';
import { AddComment } from './AddComment';

interface Props {
	eventId: string;
	onCommentAdded: (comment: any) => void;
	comments: Comment[];
}

export const CommentList = ({ eventId, comments, onCommentAdded }: Props) => {
	return (
		<div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md mb-2">
			<AddComment eventId={eventId} onCommentAdded={onCommentAdded} />
			{comments.length > 0 ? (
				comments.map((comment, index) => (
					<CommentItem key={index} comment={comment} />
				))
			) : (
				<p className="text-gray-700">No hay comentarios aún</p>
			)}
		</div>
	);
};
