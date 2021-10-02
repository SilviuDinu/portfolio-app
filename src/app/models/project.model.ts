export interface Project {
  title: string,
  city: string,
  description: string,
  period: string,
  tools: string[],
  repo?: string,
  website?: string,
  videoUrl?: string,
  isVideo?: boolean,
  alt?: string,
  isYTVideo?: boolean
}