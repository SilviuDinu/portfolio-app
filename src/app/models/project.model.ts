export interface Project {
  title: string,
  city: string,
  description: string,
  period: string,
  tools: string[],
  repo?: string,
  website?: string,
  videoDescription?: string,
  isVideo?: boolean,
  alt?: string
}