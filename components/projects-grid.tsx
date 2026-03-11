'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FilterBar } from '@/components/filter-bar';
import { ProjectCard } from '@/components/project-card';
import { projects, type Category } from '@/lib/data';

export function ProjectsGrid() {
  const [active, setActive] = useState<Category | 'All'>('All');

  const filtered = useMemo(() => {
    if (active === 'All') {
      return projects;
    }
    return projects.filter((project) => project.category === active);
  }, [active]);

  return (
    <section className="space-y-10">
      <FilterBar active={active} onChange={setActive} />
      <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              layout
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
