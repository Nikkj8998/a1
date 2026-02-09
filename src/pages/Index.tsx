import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import PillarsSection from '@/components/PillarsSection';
import ProgramsSection from '@/components/ProgramsSection';
import ImpactSection from '@/components/ImpactSection';
import VisionSection from '@/components/VisionSection';
import ConnectSection from '@/components/ConnectSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <PillarsSection />
      <ProgramsSection />
      <VisionSection />
      <ConnectSection />
      <Footer />
    </div>
  );
};

export default Index;
