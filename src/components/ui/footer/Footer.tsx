import Link from 'next/link';

import { titleFonts } from '@/config/fonts';

export const Footer = () => {
	return (
		<div className="flex w-full justify-center text-xs mb-10 mt-6">
			<Link href="/eventos">
				<span
					className={`${titleFonts.className} antialiased font-bold`}
				>
					Universidad{' '}
				</span>
				<span>© {new Date().getFullYear()}</span>
			</Link>

			<Link href="/eventos" className="mx-3">
				<span>Privacy & Legal</span>
			</Link>

			<Link href="/eventos">
				<span>Locations</span>
			</Link>
		</div>
	);
};
