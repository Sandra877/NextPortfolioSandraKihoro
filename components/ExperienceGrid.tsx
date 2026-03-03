'use client';

import { Experience } from '@/types/experience';
import ExperienceCard from './ExperienceCard';

interface ExperienceGridProps {
  experiences: Experience[];
}

export default function ExperienceGrid({ experiences }: ExperienceGridProps) {
  if (!experiences || experiences.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No experiences to display yet.</p>
      </div>
    );
  }

  return (
    <section id="experiences" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of my professional journey, from internships to full-time roles.
            Each experience has shaped my skills as a developer and QA engineer.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.slug} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
