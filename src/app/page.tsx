'use client';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import QuickStartGuide from '@/components/sections/QuickStartGuide';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/Button';
import { toast } from '@/lib/toast';
import Spinner from '@/components/ui/Spinner';

const fetchHello = async () => {
	throw new Error('의도적인 에러 발생!');
	// return 'Hello from React Query';
};

const Home = () => {
	const { data, isLoading, error, isError } = useQuery({
		queryKey: ['hello'],
		queryFn: fetchHello,
	});

	if (isLoading) return <Spinner />;
	if (isError) return <p>에러가 발생했습니다.</p>;

	return (
		<div className="flex min-h-screen flex-col">
			<main className='flex-1'>
				<Button onClick={() => toast.default('기본 토스트가 열렸습니다.')}>
					토스트 열기
				</Button>
				<HeroSection />    
				<FeaturesSection />    
				<QuickStartGuide />    
			</main>
		</div>
	);
};

export default Home;