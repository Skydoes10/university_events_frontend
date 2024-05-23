import React from 'react';

export const NewSpeakerEmployeeForm = () => {
	return (
		<form>
			<div className="flex flex-col gap-1 fade-in">
				<span>Correo electrónico</span>
				<input
					type="email"
					className="p-2 border rounded-md bg-white focus:outline-none"
					required
				/>
			</div>

			<div className="flex justify-end pt-20">
				<button className="focus:outline-none px-4 btn-primary p-3 ml-3 rounded-lg text-white hover:bg-blue-700">
					Añadir
				</button>
			</div>
		</form>
	);
};
