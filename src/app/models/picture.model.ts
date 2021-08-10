export interface Picture {
  path: string,
  width: string | number,
  height: string | number,
  url: URL | string,
  alt?: string
}