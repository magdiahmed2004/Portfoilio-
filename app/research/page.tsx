import { researchTopics } from '@/lib/data';

export default function ResearchPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-10 px-6 py-14 lg:px-10">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-warmGray">Research</p>
        <h1 className="text-4xl font-light">Analytical and Academic Work</h1>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {researchTopics.map((topic) => (
          <article key={topic} className="border border-softWhite/10 bg-white/[0.02] p-7">
            <h2 className="text-lg font-light">{topic}</h2>
            <p className="mt-3 text-sm text-softWhite/70">
              This section contains layered diagrams, spatial analytics, and mapping workflows presented with a refined publication-inspired layout.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
