import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getAllExperiences, getExperienceBySlug } from '@/lib/experiences';
import ExperienceDetail from '@/components/ExperienceDetail';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const experiences = getAllExperiences();
  return experiences.map((experience) => ({
    slug: experience.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const experience = getExperienceBySlug(params.slug);
  
  if (!experience) {
    return {
      title: 'Experience Not Found | Sandra Kihoro',
    };
  }

  return {
    title: experience.metaTitle,
    description: experience.metaDescription,
  };
}

export default function ExperiencePage({ params }: Props) {
  const experience = getExperienceBySlug(params.slug);

  if (!experience) {
    notFound();
  }

  return <ExperienceDetail experience={experience} />;
}
