import { Title } from '@/components';
import Link from 'next/link';

export default function SignUpPage() {
	return (
		<>
			<Title title="Registrarse" />

			<form className="flex flex-col gap-4">
				<div className="flex flex-col mb-2">
					<span>Nombre</span>
					<input
						type="text"
						className="p-2 border rounded-md bg-gray-200 focus:outline-none"
						required
					/>
				</div>

				<div className="flex flex-col mb-2">
					<span>Apellido</span>
					<input
						type="text"
						className="p-2 border rounded-md bg-gray-200 focus:outline-none"
						required
					/>
				</div>

				<div className="flex flex-col mb-2">
					<span>Correo electrónico</span>
					<input
						type="email"
						className="p-2 border rounded-md bg-gray-200 focus:outline-none"
						required
					/>
				</div>

				<div className="flex flex-col mb-2">
					<span>Contraseña</span>
					<input
						type="password"
						className="p-2 border rounded-md bg-gray-200 focus:outline-none"
						required
					/>
				</div>

				<button className="btn-primary">Registrarse</button>
			</form>

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
		</>
	);
}
