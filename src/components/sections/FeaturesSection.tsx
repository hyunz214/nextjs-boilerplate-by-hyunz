interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h3 className="mb-3 text-2xl font-semibold">{icon} {title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export function FeaturesSection() {
  const features = [
    { icon: '⚡️', title: '빠른 시작', description: '몇 분 안에 개발 환경을 설정하고 코딩을 시작하세요.' },
    { icon: '💅', title: 'Tailwind CSS', description: '유틸리티 우선 CSS로 빠르고 유연한 스타일링.' },
    // { icon: '🔐', title: '인증 & 권한', description: 'NextAuth.js 통합으로 강력한 인증 시스템 제공.' },
    // { icon: '⚛️', title: 'React Query', description: '데이터 페칭, 캐싱, 동기화가 쉬워집니다.' },
    // { icon: '✅', title: '테스트 환경', description: 'Jest, React Testing Library로 견고한 테스트 지원.' },
    // { icon: '🚀', title: '배포 최적화', description: 'Vercel, Netlify 등 최신 배포 환경에 최적화.' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="mb-12 text-center text-4xl font-bold">주요 기능 및 기술 스택</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}