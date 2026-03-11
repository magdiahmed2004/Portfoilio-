'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

export function LightboxGallery({ images }: { images: string[] }) {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const close = () => {
    setActiveImage(null);
    setZoom(1);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        {images.map((image) => (
          <button key={image} type="button" className="relative h-52 overflow-hidden border border-softWhite/10" onClick={() => setActiveImage(image)}>
            <Image src={image} alt="Drawing" fill loading="lazy" className="object-cover transition hover:scale-105" />
          </button>
        ))}
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-8">
          <div className="absolute right-6 top-6 flex gap-2">
            <button type="button" onClick={() => setZoom((value) => Math.max(1, value - 0.25))} className="border border-softWhite/30 p-2 text-softWhite">
              <ZoomOut size={16} />
            </button>
            <button type="button" onClick={() => setZoom((value) => Math.min(3, value + 0.25))} className="border border-softWhite/30 p-2 text-softWhite">
              <ZoomIn size={16} />
            </button>
            <button type="button" onClick={close} className="border border-softWhite/30 p-2 text-softWhite">
              <X size={16} />
            </button>
          </div>
          <div className="relative h-[80vh] w-full max-w-6xl overflow-auto">
            <div className="relative mx-auto h-full w-full" style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}>
              <Image src={activeImage} alt="Zoomed drawing" fill className="object-contain" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
