import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { QuickStartGuide } from '@/components/sections/QuickStartGuide';

export default function Home() {
  return (
      <div className="flex min-h-screen flex-col">
        <Header />  
        <main className='flex-1'>
          <HeroSection />    
          <FeaturesSection />    
          <QuickStartGuide />    
        </main>
        <Footer />
      </div>
  );
}
