import Link from 'next/link';

const QuickStartGuide = () => {
  return (
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
  );
};

export default QuickStartGuide;