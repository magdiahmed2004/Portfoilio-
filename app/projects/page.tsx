import { ProjectsGrid } from '@/components/projects-grid';

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-10 px-6 py-14 lg:px-10">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-warmGray">Projects Archive</p>
        <h1 className="text-4xl font-light">Architecture and Urban Design Projects</h1>
      </div>
      <ProjectsGrid />
    </section>
  );
}
