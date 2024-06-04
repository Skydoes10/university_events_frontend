'use client';
import Link from 'next/link';
import { useState } from 'react';
import { RegisterEmployee, RegisterNotEmployee, Title } from '@/components';
import axiosInstance from '../../../utils/axiosInstance';

export default function SignUpPage() {
	const [isEmployee, setIsEmployee] = useState<boolean>(true);

	const handleIsEmployee = () => {
		setIsEmployee(true);
	};

	const handleIsNotEmployee = () => {
		setIsEmployee(false);
	};

	const handleRegister = async (data: any) => {
		try {
			const response = await axiosInstance.post('http://localhost:3000/assistants', data);
			console.log('User registered:', response.data);
			// Redirigir o mostrar un mensaje de éxito según sea necesario
		} catch (error) {
			console.error('Error registering user:', error);
			// Manejar errores, mostrar mensaje de error, etc.
		}
	};

	return (
		<div className="fade-in">
			<Title title="Registrarse" />

			<div className="flex flex-col gap-4">
				<div className="flex gap-4">
					<span>¿Eres un empleado?</span>
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
								onClick={handleIsNotEmployee}
								checked={!isEmployee}
							/>
							<span>No</span>
						</label>
					</div>
				</div>

				{isEmployee ? <RegisterEmployee onRegister={handleRegister} /> : <RegisterNotEmployee onRegister={handleRegister} />}
			</div>

			<div className="flex justify-center mt-4">
				<p>
					¿Ya tienes cuenta?{' '}
					<Link
						href="/iniciar-sesion"
						className="text-blue-500 hover:underline"
					>
						Inicia sesión
					</Link>
				</p>
			</div>
		</div>
	);
}
