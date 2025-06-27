import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers'; // 클라이언트 Provider 컴포넌트

export const metadata: Metadata = {
  title: 'Next Boilerplate',
  description: 'Next.js를 사용한 프론트엔드 아키텍처',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={'min-h-screen bg-background font-sans antialiased'}>
      <Providers>
        <div className="relative flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
