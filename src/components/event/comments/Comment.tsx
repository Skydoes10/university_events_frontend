import { Comment } from '@/interfaces';

interface Props {
	comment: Comment;
}

export const CommentItem = ({ comment }: Props) => {
	return (
		<div className="flex items-center my-4 border-b-2 border-gray-100 pb-4">
			<div className="ml-4">
			<p className="font-semibold text-gray-700">
          		{comment.user ? comment.user.fullName : 'Usuario desconocido'}
        	</p>
				<p className="text-gray-600">{comment.text}</p>
			</div>
		</div>
	);
};
