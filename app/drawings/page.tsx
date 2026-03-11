import { LightboxGallery } from '@/components/lightbox-gallery';
import { drawingLibrary, projects } from '@/lib/data';

const drawingImages = projects.flatMap((project) => project.gallery);

export default function DrawingsPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-10 px-6 py-14 lg:px-10">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-warmGray">Drawings Library</p>
        <h1 className="text-4xl font-light">Plans, Sections, Elevations, and Technical Sets</h1>
      </header>

      <div className="grid gap-4 md:grid-cols-5">
        {drawingLibrary.map((item) => (
          <div key={item} className="border border-softWhite/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-softWhite/75">
            {item}
          </div>
        ))}
      </div>

      <LightboxGallery images={drawingImages} />
    </section>
  );
}
