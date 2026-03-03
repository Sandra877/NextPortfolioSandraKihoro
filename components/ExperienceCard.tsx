'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Experience } from '@/types/experience';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  // Map company names to logo filenames
  const getLogoPath = (company: string): string => {
    const companySlug = company.toLowerCase().replace(/[^a-z0-9]/g, '-');
    return `/logos/${companySlug}.svg`;
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={`/experiences/${experience.slug}`}
        className="block h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
      >
        <div className="p-6">
          {/* Company Logo */}
          <div className="flex items-center justify-center h-16 mb-4">
            <Image
              src={getLogoPath(experience.company)}
              alt={experience.suggestedImageAlt || `${experience.company} logo`}
              width={120}
              height={60}
              className="object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>

          {/* Role & Company */}
          <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">
            {experience.role}
          </h3>
          <p className="text-primary-600 font-medium text-center mb-2">
            {experience.company}
          </p>

          {/* Timeframe */}
          <p className="text-sm text-gray-500 text-center mb-4">
            {experience.timeframe}
            {experience.location && ` • ${experience.location}`}
          </p>

          {/* Summary */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {experience.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-center">
            {experience.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700"
              >
                {tag}
              </span>
            ))}
            {experience.tags.length > 3 && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                +{experience.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
