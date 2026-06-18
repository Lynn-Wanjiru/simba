import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { StatsBar } from "./components/StatsBar";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { SustainabilitySection } from "./components/SustainabilitySection";
import { ValuesSection } from "./components/ValuesSection";
import { TeamSection } from "./components/TeamSection";
import { CTASection } from "./components/CTASection";
import { FooterSection } from "./components/FooterSection";

export default function App() {
  return (
    <div className="bg-[#080a10] min-h-screen overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <SustainabilitySection />
      <ValuesSection />
      <TeamSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
