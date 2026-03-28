import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Hero from '../components/sections/Hero';
import TechStackBar from '../components/sections/TechStackBar';
import Stats from '../components/sections/Stats';
import TrustedBy from '../components/sections/TrustedBy';
import Services from '../components/sections/Services';
import WhyUs from '../components/sections/WhyUs';
import SolutionsShowcase from '../components/sections/SolutionsShowcase';
import ProcessSteps from '../components/sections/ProcessSteps';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import ContactCTA from '../components/sections/ContactCTA';

export default function HomePage() {
  useDocumentTitle();

  return (
    <>
      <Hero />
      <TechStackBar />
      <Stats />
      <TrustedBy />
      <Services />
      <WhyUs />
      <SolutionsShowcase />
      <ProcessSteps />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}
