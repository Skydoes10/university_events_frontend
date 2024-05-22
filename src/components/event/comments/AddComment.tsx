export const AddComment = () => {
	return (
		<div className="flex items-center my-4 border-b-2 border-gray-100 pb-4">
			<form className="flex flex-col w-full">
				<textarea
					className=" p-2 border border-gray-200 rounded-md focus:outline-none focus:shadow-outline"
					placeholder="Escribe un comentario..."
					maxLength={100}
					minLength={4}
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
