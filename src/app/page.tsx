'use client';

import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import QuickStartGuide from '@/components/sections/QuickStartGuide';
import { Button } from '@/components/ui/Button';
import { useToastStore } from '@/stores/toastStore';

const Home = () => {
	const { showToast } = useToastStore();

	return (
		<div className="flex min-h-screen flex-col">
			<main className='flex-1'>
				<Button onClick={() => showToast('기본 토스트가 열렸습니다.', 'default')}>
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