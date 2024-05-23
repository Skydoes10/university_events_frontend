import type { Metadata } from 'next';
import { inter } from '@/config/fonts';
import './globals.css';
import ReduxProvider from './provider';

export const metadata: Metadata = {
	title: 'Eventos',
	description: 'Gestión de eventos',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}
