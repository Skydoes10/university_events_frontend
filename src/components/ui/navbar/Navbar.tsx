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

			{/* Search, Cart, Menu
      <div className="flex items-center">
        <Link className="mx-2" href="/search">
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <Link className="mx-2" href="/cart">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          onClick={toggleSideMenu}
        >
          Menu
        </button>
      </div> */}
		</nav>
	);
};
