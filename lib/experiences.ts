import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Experience } from '@/types/experience';

const experiencesDirectory = path.join(process.cwd(), 'data/experiences');

export function getExperienceSlugs(): string[] {
  if (!fs.existsSync(experiencesDirectory)) {
    return [];
  }
  const files = fs.readdirSync(experiencesDirectory);
  return files
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx?$/, ''));
}

export function getExperienceBySlug(slug: string): Experience | null {
  const realSlug = slug.replace(/\.mdx?$/, '');
  const fullPath = path.join(experiencesDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title || '',
    role: data.role || '',
    company: data.company || '',
    timeframe: data.timeframe || '',
    location: data.location || '',
    metaTitle: data.metaTitle || data.title || '',
    metaDescription: data.metaDescription || data.summary || '',
    tags: data.tags || [],
    summary: data.summary || '',
    responsibilities: data.responsibilities || [],
    keyAchievements: data.keyAchievements || [],
    techStack: data.techStack || [],
    notableProjects: data.notableProjects || [],
    suggestedImageAlt: data.suggestedImageAlt || '',
    relatedResumeSections: data.relatedResumeSections || [],
    missingFields: data.missingFields || [],
    supervisor: data.supervisor,
    content,
  };
}

export function getAllExperiences(): Experience[] {
  const slugs = getExperienceSlugs();
  const experiences = slugs
    .map((slug) => getExperienceBySlug(slug))
    .filter((exp): exp is Experience => exp !== null)
    .sort((a, b) => {
      // Sort by timeframe - more recent first
      return b.timeframe.localeCompare(a.timeframe);
    });
  return experiences;
}

export function getExperiencePaths(): { params: { slug: string } }[] {
  const slugs = getExperienceSlugs();
  return slugs.map((slug) => ({
    params: { slug },
  }));
}
