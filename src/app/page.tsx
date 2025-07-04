import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Home() {
  return (
      <div className="flex min-h-screen flex-col">
        {/* --- Header Section --- */}
        <Header />  
        {/* --- Hero Section --- */}
        <section className="relative flex flex-1 items-center justify-center bg-gradient-to-br from-primary/10 to-background py-20 text-center">
          <div className="container max-w-4xl space-y-6 px-4">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Next.js 개발, <span className="text-primary">로켓처럼 빠르게</span>!
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              TypeScript, Tailwind CSS, NextAuth.js 등 현대적인 스택으로 구성된 강력한 Next.js 보일러플레이트.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button size="lg" className="px-8 py-3 text-lg font-semibold" asChild>
                <Link href="/get-started">시작하기</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg font-semibold" asChild>
                <Link href="/demo">데모 보기</Link>
              </Button>
            </div>
            <div className="mt-8">
              <pre className="inline-block rounded-md bg-secondary px-4 py-2 text-sm font-mono text-secondary-foreground">
                <code>npx create-next-app -e https://github.com/hyunz214/nextjs-boilerplate-by-hyunz.git my-boilerplate</code>
              </pre>
            </div>
          </div>
        </section>
  
        {/* --- Features/Tech Stack Section --- */}
        <section className="py-20 bg-background">
          <div className="container">
            <h2 className="mb-12 text-center text-4xl font-bold">주요 기능 및 기술 스택</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-3 text-2xl font-semibold">⚡️ 빠른 시작</h3>
                <p className="text-muted-foreground">몇 분 안에 개발 환경을 설정하고 코딩을 시작하세요.</p>
              </div>
              {/* Feature Card 2 */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-3 text-2xl font-semibold">🔐 인증 & 권한</h3>
                <p className="text-muted-foreground">NextAuth.js 통합으로 강력한 인증 시스템 제공.</p>
              </div>
              {/* Feature Card 3 */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-3 text-2xl font-semibold">💅 Tailwind CSS</h3>
                <p className="text-muted-foreground">유틸리티 우선 CSS로 빠르고 유연한 스타일링.</p>
              </div>
              {/* Feature Card 4 */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-3 text-2xl font-semibold">⚛️ React Query</h3>
                <p className="text-muted-foreground">데이터 페칭, 캐싱, 동기화가 쉬워집니다.</p>
              </div>
              {/* Feature Card 5 */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-3 text-2xl font-semibold">✅ 테스트 환경</h3>
                <p className="text-muted-foreground">Jest, React Testing Library로 견고한 테스트 지원.</p>
              </div>
              {/* Feature Card 6 */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-3 text-2xl font-semibold">🚀 배포 최적화</h3>
                <p className="text-muted-foreground">Vercel, Netlify 등 최신 배포 환경에 최적화.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* --- Quick Start Guide Section --- */}
        <section className="bg-muted py-20">
          <div className="container max-w-3xl text-center">
            <h2 className="mb-10 text-4xl font-bold">빠른 시작 가이드</h2>
            <div className="space-y-6 text-left">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold">1. 저장소 클론</h3>
                <pre className="rounded bg-secondary p-3 text-sm text-secondary-foreground">
                  <code>git clone https://github.com/hyunz214/nextjs-boilerplate-by-hyunz.git my-boilerplate</code>
                </pre>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold">2. 의존성 설치</h3>
                <pre className="rounded bg-secondary p-3 text-sm text-secondary-foreground">
                  <code>cd my-boilerplate<br />pnpm install</code>
                </pre>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold">3. 개발 서버 실행</h3>
                <pre className="rounded bg-secondary p-3 text-sm text-secondary-foreground">
                  <code>pnpm dev</code>
                </pre>
              </div>
            </div>
            <p className="mt-8 text-muted-foreground">
              더 자세한 설정 및 사용법은{' '}
              <Link href="/docs" className="text-primary hover:underline">
                문서 페이지
              </Link>
              를 참조해주세요.
            </p>
          </div>
        </section>
  
        {/* --- Footer Section --- */}
        <Footer />
      </div>
  );
}
