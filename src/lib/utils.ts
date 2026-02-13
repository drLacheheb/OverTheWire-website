import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPath(path: string) {
  const base = import.meta.env.BASE_URL;
  // If path is absolute (starts with /), prepend base if not already there
  // Remove leading slash from path if base ends with slash to avoid double slashes
  // However, Astro's BASE_URL usually ends with a slash if it's set.
  // Standardize: ensure base ends with slash, path doesn't start with slash, then join.

  const cleanBase = base.endsWith('/') ? base : base + '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  return cleanBase + cleanPath;
}
