import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative flex flex-1 items-center justify-center bg-gradient-to-br from-primary/10 to-background py-20 text-center">
      <div className="container max-w-4xl space-y-6 px-4">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Next.js 개발,<br/><span className="text-primary">로켓처럼 빠르게</span>!
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          TypeScript, Tailwind CSS, NextAuth.js 등 현대적인 스택으로 구성된 강력한 Next.js 보일러플레이트.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Button size="lg" className="px-8 py-3 text-lg font-semibold" >
            <Link href="/get-started">시작하기</Link>
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-3 text-lg font-semibold" >
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
  );
};

export default HeroSection;