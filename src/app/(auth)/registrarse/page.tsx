'use client';
import Link from 'next/link';
import { useState } from 'react';
import { RegisterEmployee, RegisterNotEmployee, Title } from '@/components';

export default function SignUpPage() {
	const [isEmployee, setisEmployee] = useState<boolean>(true);

	const handleIsEmployee = () => {
		setisEmployee(true);
	};

	const handleIsNotEmployee = () => {
		setisEmployee(false);
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

				{isEmployee ? <RegisterEmployee /> : <RegisterNotEmployee />}
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
