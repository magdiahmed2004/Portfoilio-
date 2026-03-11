import { referenceStudio, projects } from '@/lib/data';
import { LightboxGallery } from '@/components/lightbox-gallery';

const referenceImages = projects.map((project) => project.heroImage);

export default function ReferenceStudioPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-10 px-6 py-14 lg:px-10">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-warmGray">Reference Studio</p>
        <h1 className="text-4xl font-light">Precedents, Materiality, and Spatial Mood Boards</h1>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {referenceStudio.map((item) => (
          <div key={item} className="border border-softWhite/10 p-6">
            <h2 className="text-lg font-light">{item}</h2>
          </div>
        ))}
      </div>

      <LightboxGallery images={referenceImages} />
    </section>
  );
}
