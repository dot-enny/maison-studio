import { motion } from "motion/react";
import { PROJECTS } from "../data";
import { WorkItem } from "./WorkItem";
import { SectionLabel } from "./SecionLabel";

export const SelectedWork: React.FC = () => (
  <section id="work" className="relative z-20 bg-white py-24 md:py-32 overflow-hidden">
    <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
      
      <div className="flex justify-between items-end border-b border-neutral-200 pb-12 mb-24">
        <div>
          <SectionLabel text="Selected Projects" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-8xl text-neutral-900 mt-4 leading-none"
          >
            The Archive
          </motion.h2>
        </div>
        <div className="hidden md:block">
           <button className="text-sm font-medium border-b border-neutral-900 pb-1 hover:opacity-50 transition-opacity mb-2">
             View All Cases (24)
           </button>
        </div>
      </div>

      {/* THE FLOATING GRID */}
      {/* We use a 12-column grid but rely on 'col-span' and margins 
         defined in the PROJECTS array to create the random scatter effect. 
         Gap-y-32 ensures massive vertical whitespace.
      */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 w-full">
        {PROJECTS.map((project, index) => (
          <WorkItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);