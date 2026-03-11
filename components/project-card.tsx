import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/data';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block overflow-hidden border border-softWhite/10 bg-white/[0.02]">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          loading="lazy"
          className="object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-80"
        />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-warmGray">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="text-xl font-light">{project.title}</h3>
        <p className="text-sm text-softWhite/70">{project.location}</p>
      </div>
    </Link>
  );
}
