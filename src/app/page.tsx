import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import QuickStartGuide from '@/components/sections/QuickStartGuide';

const Home = () => {
  return (
      <div className="flex min-h-screen flex-col">
        <main className='flex-1'>
          <HeroSection />    
          <FeaturesSection />    
          <QuickStartGuide />    
        </main>
      </div>
  );
};

export default Home;