import { AddSpeaker, Selector, Title } from '@/components';
import { SpeakerList } from '@/components/event/speakers/SpeakerList';

export default function NewEventPage() {
	return (
		<div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0 fade-in">
			<div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
				<Title title="Nuevo evento" />

				<form>
					<div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">
						<div className="flex flex-col gap-2 sm:gap-5 sm:grid-cols-2">
							<div className="flex flex-col mb-2 gap-1">
								<span>Título</span>
								<input
									type="text"
									className="p-2 border rounded-md bg-white focus:outline-none"
									required
									max={100}
									min={3}
								/>
							</div>

							<div className="flex flex-col mb-2 gap-1">
								<span>Descripción</span>
								<textarea
									rows={5}
									className="p-2 border rounded-md bg-white focus:outline-none"
									required
									maxLength={300}
									minLength={10}
								/>
							</div>
						</div>

						<div className="flex flex-col gap-2 sm:gap-5 sm:grid-cols-2">
							<div className="flex flex-col mb-2 gap-1">
								<span>Fecha</span>
								<input
									type="datetime-local"
									className="p-2 border rounded-md bg-white focus:outline-none"
									required
								/>
							</div>

							<div className="flex flex-col mb-2 gap-1">
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

							<div className="flex flex-col mb-2 gap-1">
								<span>
									Categorías
									<span className="text-gray-500">
										{' '}
										(separadas por coma)
									</span>
								</span>
								<input
									type="text"
									className="p-2 border rounded-md bg-white focus:outline-none"
									required
									max={100}
									min={3}
								/>
							</div>
						</div>
						<div className="flex flex-col mb-2 gap-1">
							<span>Facultades organizadoras</span>
							<Selector required={true} />
						</div>
						<div className="flex flex-col mb-2 gap-1">
							<span>
								Programas organizadores
								<span className="text-gray-500">
									{' '}
									(opcional)
								</span>
							</span>
							<Selector required={false} />
						</div>

						<div className="flex flex-col mb-2 gap-2">
							<span>
								Conferencistas
								<AddSpeaker />
							</span>
							<SpeakerList speakers={[]} />
						</div>
					</div>

					<div className="flex flex-col mb-2 mt-4 sm:mt-6">
						<input
							type="submit"
							value="Añadir evento"
							className="btn-primary flex w-full sm:w-1/2 justify-center font-bold"
						/>
					</div>
				</form>
			</div>
		</div>
	);
}
