import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
	title: 'Next Boilerplate by hyunz',
	description: 'Next.js를 사용한 프론트엔드 아키텍처',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="ko" suppressHydrationWarning>
			<body className='bg-white text-gray-900'>
				<Providers>
					<Header />  
					<div className="relative flex min-h-screen flex-col">
						<main className="flex-1">{children}</main>
					</div>
					<Footer />
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
