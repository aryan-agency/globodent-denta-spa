import type { BestServiceContent } from "./types";

// Auto-register every content file in this folder (one per landing page slug).
const modules = import.meta.glob<{ default: BestServiceContent }>("./best-*.ts", { eager: true });

export const bestContentBySlug: Record<string, BestServiceContent> = Object.entries(modules).reduce(
  (acc, [path, mod]) => {
    const content = mod?.default;
    if (content && typeof content === "object" && "slug" in content) {
      acc[content.slug] = content;
    }
    return acc;
  },
  {} as Record<string, BestServiceContent>,
);

export type { BestServiceContent };
