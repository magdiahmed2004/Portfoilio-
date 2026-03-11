'use client';

import type { Category } from '@/lib/data';

const categories: Array<Category | 'All'> = ['All', 'Architecture', 'Urban Design', 'Landscape', 'Research', 'Academic Projects'];

export function FilterBar({ active, onChange }: { active: Category | 'All'; onChange: (value: Category | 'All') => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={`border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
            active === category
              ? 'border-mutedBeige bg-mutedBeige/20 text-softWhite'
              : 'border-softWhite/20 text-softWhite/70 hover:border-softWhite/50 hover:text-softWhite'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
