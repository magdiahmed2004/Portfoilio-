import { HeroSection } from '@/components/hero-section';
import { ProjectsGrid } from '@/components/projects-grid';

export default function HomePage() {
  return (
    <div className="space-y-16 pb-20">
      <HeroSection />
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-light">Featured Projects</h2>
          <p className="text-sm uppercase tracking-[0.2em] text-subtleCyan">Curated Selection</p>
        </div>
        <ProjectsGrid />
      </section>
    </div>
  );
}
