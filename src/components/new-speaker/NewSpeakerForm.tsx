import React from 'react';

export const NewSpeakerForm = () => {
	return (
		<form>
			<div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2 fade-in">
				<div className="flex flex-col gap-1">
					<span>Nombre</span>
					<input
						type="text"
						className="p-2 border rounded-md bg-white focus:outline-none"
						required
					/>
				</div>
				<div className="flex flex-col gap-1">
					<span>Apellido</span>
					<input
						type="text"
						className="p-2 border rounded-md bg-white focus:outline-none"
						required
					/>
				</div>
			</div>

			<div className="flex justify-end pt-20">
				<button className="focus:outline-none px-4 btn-primary p-3 ml-3 rounded-lg text-white hover:bg-blue-700">
					Añadir
				</button>
			</div>
		</form>
	);
};
