import Image from 'next/image';
import { notFound } from 'next/navigation';
import { LightboxGallery } from '@/components/lightbox-gallery';
import { projects } from '@/lib/data';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-7xl space-y-10 px-6 py-14 lg:px-10">
      <header className="grid gap-8 border-b border-softWhite/10 pb-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-subtleCyan">{project.category}</p>
          <h1 className="text-4xl font-light">{project.title}</h1>
          <p className="mt-4 max-w-3xl text-softWhite/75">{project.concept}</p>
        </div>
        <div className="space-y-1 text-sm text-warmGray lg:col-span-4">
          <p>{project.location}</p>
          <p>{project.year}</p>
        </div>
      </header>

      <div className="relative h-[56vh] overflow-hidden border border-softWhite/10">
        <Image src={project.heroImage} alt={project.title} fill className="object-cover" priority />
      </div>

      <section className="grid gap-5 md:grid-cols-2">
        {Object.entries(project.sections).map(([key, value]) => (
          <div key={key} className="border border-softWhite/10 bg-white/[0.02] p-6">
            <h2 className="mb-2 text-sm uppercase tracking-[0.2em] text-mutedBeige">{key.replace(/([A-Z])/g, ' $1')}</h2>
            <p className="text-sm leading-relaxed text-softWhite/75">{value}</p>
          </div>
        ))}
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-light">Drawings & Visual Process</h2>
        <LightboxGallery images={project.gallery} />
      </section>
    </article>
  );
}
