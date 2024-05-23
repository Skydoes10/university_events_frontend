'use client';

import Link from 'next/link';
// import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

// import { useUIStore } from "@/store";
import { titleFonts } from '@/config/fonts';

export const Navbar = () => {
	//   const toggleSideMenu = useUIStore((state) => state.toggleSideMenu);

	return (
		<nav className="flex px-5 py-4 justify-between items-center w-full shadow-sm">
			<div>
				{/* Logo */}
				<Link href="/">
					<span
						className={`${titleFonts.className} antialiased font-bold`}
					>
						Universidad
					</span>
				</Link>
			</div>
			{/* Center Menu */}
			<div className="hidden sm:block">
				<Link
					className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
					href="/"
				>
					Eventos
				</Link>
				<Link
					className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
					href="/nuevo-evento"
				>
					Nuevo Evento
				</Link>
			</div>

			<div>
				<Link
					className="m-2 p-2 rounded-md transition-all hover:bg-red-500 hover:text-white"
					href="/iniciar-sesion"
				>
					Cerrar Sesión
				</Link>
			</div>
		</nav>
	);
};
