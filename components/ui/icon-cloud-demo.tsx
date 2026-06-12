"use client";

import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "postgresql",
  "firebase",
  "vercel",
  "python",
  "docker",
  "git",
  "github",
  "visualstudiocode",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full min-h-[400px] items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
