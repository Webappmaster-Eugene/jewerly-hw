import './globals.css';
import { Metadata } from 'next';
import { DM_Sans, Allerta_Stencil } from 'next/font/google';
import { Header } from './components/index';
import { Footer } from './components/index';

const DMSans = DM_Sans({ subsets: ['latin'] });
const AllertaStencil = Allerta_Stencil({
	subsets: ['latin'],
	weight: '400'
});

export const metadata: Metadata = {
	title: 'Онлайн магазин',
	description: 'Онлайн магазин украшений'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={DMSans.className}>
				<Header logoClassName={AllertaStencil.className} />
				{children}
				<Footer />
			</body>
		</html>
	);
}
