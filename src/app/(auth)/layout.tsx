export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="min-h-screen flex flex-col pt-24 sm:pt-32 sm:items-center px-10 sm:px-0 fade-in">
			<div className="w-full xl:w-[500px] flex flex-col justify-center text-left">
				<div className="bg-white shadow-md rounded-md p-5">
					{children}
				</div>
			</div>
		</div>
	);
}
