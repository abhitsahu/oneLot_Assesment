import HeroSection from '@/components/sections/home/HeroSection';
import FeaturesSection from '@/components/sections/home/FeaturesSection';
import ProductShowcaseSection from '@/components/sections/home/ProductShowcaseSection';
import WhyOneLotSection from '@/components/sections/home/WhyOneLotSection';
import TestimonialsSection from '@/components/sections/home/TestimonialsSection';
import StayConnectedSection from '@/components/sections/home/StayConnectedSection';
import FAQSection from '@/components/sections/home/FAQSection';
import GetStartedSection from '@/components/sections/home/GetStartedSection';

export default function Home() {
  return (
    <main className='min-h-screen bg-white'>
      <HeroSection />

      <FeaturesSection />

      <ProductShowcaseSection />

      <WhyOneLotSection />

      <TestimonialsSection />

      <StayConnectedSection />

      <FAQSection />

      <GetStartedSection />
    </main>
  );
}
