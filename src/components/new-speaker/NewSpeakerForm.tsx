import React from 'react';

export const NewSpeakerForm = () => {
	return (
		<form className="fade-in">
			<div className="flex flex-col gap-2 sm:gap-5">
				<div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">
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
					<div className="flex flex-col gap-1">
						<span>Número de identificación</span>
						<input
							type="text"
							className="p-2 border rounded-md bg-white focus:outline-none"
							required
						/>
					</div>
					<div className="flex flex-col gap-1">
						<span>Correo electrónico</span>
						<input
							type="email"
							className="p-2 border rounded-md bg-white focus:outline-none"
							required
						/>
					</div>
				</div>

				<div className="flex flex-col gap-1">
					<span>Ciudad</span>
					<select
						className="p-2 border rounded-md bg-white focus:outline-none"
						required
					>
						<option value="">Seleccionar</option>
						<option value="cali">
							Cali, Valle del Cauca, Colombia
						</option>
					</select>
				</div>

				<div className="flex flex-col gap-1">
					<span>Relación con la universidad</span>
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
