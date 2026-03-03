'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Experience } from '@/types/experience';

interface ExperienceDetailProps {
  experience: Experience;
}

export default function ExperienceDetail({ experience }: ExperienceDetailProps) {
  const getLogoPath = (company: string): string => {
    const companySlug = company.toLowerCase().replace(/[^a-z0-9]/g, '-');
    return `/logos/${companySlug}.svg`;
  };

  return (
    <article className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg px-2 py-1"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <header className="mb-12">
          {/* Company Logo */}
          <div className="flex items-center justify-center h-24 mb-6">
            <Image
              src={getLogoPath(experience.company)}
              alt={experience.suggestedImageAlt || `${experience.company} logo`}
              width={180}
              height={90}
              className="object-contain"
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
            {experience.title}
          </h1>

          <div className="text-center space-y-2">
            <p className="text-xl text-primary-600 font-semibold">
              {experience.role} at {experience.company}
            </p>
            <p className="text-gray-500">
              {experience.timeframe}
              {experience.location && ` • ${experience.location}`}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {experience.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-50 text-primary-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Summary */}
        {experience.summary && (
          <section className="mb-10">
            <div className="bg-primary-50 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Overview</h2>
              <p className="text-gray-700 leading-relaxed">{experience.summary}</p>
            </div>
          </section>
        )}

        {/* Content from markdown */}
        {experience.content && (
          <div 
            className="prose prose-lg max-w-none mb-10"
            dangerouslySetInnerHTML={{ __html: experience.content }}
          />
        )}

        {/* Responsibilities */}
        {experience.responsibilities && experience.responsibilities.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
            <ul className="space-y-3">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{responsibility}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Key Achievements */}
        {experience.keyAchievements && experience.keyAchievements.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Selected Achievements</h2>
            <ul className="space-y-3">
              {experience.keyAchievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <span className="text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Tech Stack */}
        {experience.techStack && experience.techStack.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tech & Tools</h2>
            <div className="flex flex-wrap gap-2">
              {experience.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Notable Projects */}
        {experience.notableProjects && experience.notableProjects.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="space-y-4">
              {experience.notableProjects.map((project, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      View Project
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Supervisor Contact */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Supervisor Contact</h2>
          {experience.supervisor && experience.supervisor.name ? (
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <p className="font-semibold text-gray-900">{experience.supervisor.name}</p>
              <p className="text-primary-600">{experience.supervisor.role}</p>
              {experience.supervisor.email && (
                <p className="text-gray-600">
                  <a href={`mailto:${experience.supervisor.email}`} className="text-primary-600 hover:underline">
                    {experience.supervisor.email}
                  </a>
                </p>
              )}
              {experience.supervisor.phone && (
                <p className="text-gray-600">{experience.supervisor.phone}</p>
              )}
            </div>
          ) : (
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <p className="text-gray-600">
                Supervisor contact not provided —{' '}
                <a href="/#contact" className="text-primary-600 hover:underline">
                  request details?
                </a>
              </p>
            </div>
          )}
        </section>

        {/* Related Resume Sections */}
        {experience.relatedResumeSections && experience.relatedResumeSections.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Resume Sections</h2>
            <div className="flex flex-wrap gap-2">
              {experience.relatedResumeSections.map((section) => (
                <span
                  key={section}
                  className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-600 rounded-lg"
                >
                  {section}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
