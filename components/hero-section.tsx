import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative flex h-[88vh] items-end overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=2200&q=80"
        alt="Architectural hero"
        fill
        priority
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-6 pb-16 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-8">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-mutedBeige">Architecture & Urban Design Portfolio</p>
          <h1 className="text-4xl font-light leading-tight md:text-6xl">
            Minimal Scandinavian presentation for spatial, urban, and research explorations.
          </h1>
        </div>
        <div className="lg:col-span-4 lg:pl-10">
          <p className="text-sm leading-relaxed text-softWhite/80">
            A curated digital exhibition of architectural projects, analytical studies, and design process work with a calm and academic visual language.
          </p>
          <Link
            href="/projects"
            className="mt-6 inline-block border border-softWhite/30 px-5 py-2 text-xs uppercase tracking-[0.2em] text-softWhite transition hover:border-softWhite"
          >
            Explore Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
