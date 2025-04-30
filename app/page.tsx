import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import Philosophy from '@/components/sections/philosophy';
import Programs from '@/components/sections/programs';
import FaqSection from '@/components/sections/faq';
import Location from '@/components/sections/location';
import ContactForm from '@/components/sections/contact-form';
import CallToAction from '@/components/sections/call-to-action';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Services />
      <Philosophy />
      <Programs />
      <FaqSection />
      <Location />
      <CallToAction />
      <ContactForm />
    </div>
  );
}