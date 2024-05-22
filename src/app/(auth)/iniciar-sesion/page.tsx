import { Title } from '@/components';
import Link from 'next/link';

export default function LoginPage() {
	return (
		<>
			<Title title="Iniciar sesión" />

			<form className="flex flex-col gap-4">
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

				<button className="btn-primary">Ingresar</button>
			</form>

			<div className="flex justify-center mt-4">
				<p>
					¿Aún no tienes cuenta?{' '}
					<Link
						href="/registrarse"
						className="text-blue-500 hover:underline"
					>
						Regístrate
					</Link>
				</p>
			</div>
		</>
	);
}
