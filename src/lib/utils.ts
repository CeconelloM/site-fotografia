import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function driveUrl(id: string): string {
  return `https://lh3.googleusercontent.com/d/${id}`;
}
