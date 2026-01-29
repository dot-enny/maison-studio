import { motion } from "motion/react";
import { PROCESS } from "../data";
import { SectionLabel } from "./SecionLabel";

export const Process: React.FC = () => (
  <section id="process" className="relative z-20 bg-neutral-900 text-neutral-50 py-24 md:py-48">
    <div className="mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
        <div className="md:col-span-4 md:sticky md:top-32 self-start">
          <SectionLabel text="Our Process" color="white" />
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-8 leading-tight">
            Structure <br />
            before <span className="text-neutral-500">styling.</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
            We don't rely on inspiration. We rely on a rigorous four-step engineering process that guarantees results.
          </p>
        </div>

        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 md:gap-y-24">
          {PROCESS.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border-l border-neutral-700 pl-6 md:pl-8"
            >
              <span className="block text-sm font-mono text-neutral-500 mb-4">{step.id}</span>
              <h3 className="text-xl md:text-2xl font-serif text-white mb-4">{step.title}</h3>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
