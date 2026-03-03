import { getAllExperiences } from '@/lib/experiences';
import Hero from '@/components/Hero';
import ExperienceGrid from '@/components/ExperienceGrid';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const experiences = getAllExperiences();

  return (
    <>
      <Hero />
      <ExperienceGrid experiences={experiences} />
      <ContactForm />
    </>
  );
}
