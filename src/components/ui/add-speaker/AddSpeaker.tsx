'use client';
import { NewSpeakerEmployeeForm } from '@/components/new-speaker/NewSpeakerEmployeeForm';
import { NewSpeakerForm } from '@/components/new-speaker/NewSpeakerForm';
import { useState } from 'react';

export const AddSpeaker = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isEmployee, setisEmployee] = useState<boolean>(true);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const handleIsEmployee = () => {
		setisEmployee(true);
	};

	const handleIsNotEmployee = () => {
		setisEmployee(false);
	};

	return (
		<>
			{/* Add Speaker Button */}
			<button
				type="button"
				onClick={openModal}
				className="ml-4 btn-primary hover:bg-blue-700 text-white text-sm font-bold p-1 rounded"
			>
				Añadir
			</button>

			{isOpen && (
				<div
					className={`main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated faster ${
						isOpen && 'fade-in'
					}`}
					style={{ background: 'rgba(0,0,0,.7)' }}
					onClick={closeModal}
				>
					<div
						className="border modal-container bg-white w-11/12 md:max-w-xl mx-auto rounded-xl shadow-lg z-50 overflow-y-auto"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="modal-content py-4 text-left px-6">
							{/* Title */}
							<div className="flex justify-between items-center pb-3">
								<p className="text-xl font-bold">
									Añadir conferencista
								</p>
								<div
									className="modal-close cursor-pointer z-50 focus:outline-none hover:bg-gray-200 rounded-full p-2"
									onClick={closeModal}
								>
									<svg
										className="fill-current text-black"
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 18 18"
									>
										<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
									</svg>
								</div>
							</div>
							<form>
								{/* Body */}
								<div className="my-5 flex flex-col gap-4">
									<div className="flex flex-col gap-1">
										<span>
											¿El conferencista es un empleado?
										</span>
										<div className="flex gap-2">
											<label className="flex items-center gap-1">
												<input
													type="radio"
													name="isEmployee"
													value="true"
													onClick={handleIsEmployee}
													checked={isEmployee}
												/>
												<span>Si</span>
											</label>
											<label className="flex items-center gap-1">
												<input
													type="radio"
													name="isEmployee"
													value="false"
													onClick={
														handleIsNotEmployee
													}
													checked={!isEmployee}
												/>
												<span>No</span>
											</label>
										</div>
									</div>

									{isEmployee ? (
										<NewSpeakerEmployeeForm />
									) : (
										<NewSpeakerForm />
									)}
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
