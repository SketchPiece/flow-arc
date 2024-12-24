import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function truncate(str: string, maxLength: number) {
  if (str.length <= maxLength) {
    return str;
  }

  let truncated = str.slice(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(" ");

  if (lastSpaceIndex !== -1) {
    truncated = truncated.slice(0, lastSpaceIndex);
  }

  return truncated + "...";
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
