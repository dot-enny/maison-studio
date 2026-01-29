import { motion } from "motion/react";
import { SectionLabel } from "./SecionLabel";
import { SERVICES } from "../data";

const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const Services: React.FC = () => (
  <section id="services" className="relative z-20 bg-neutral-100 py-24 md:py-48 border-b border-neutral-200">
    <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-32">
      
      <div className="md:col-span-4">
        <SectionLabel text="Capabilities" />
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif text-3xl md:text-5xl text-neutral-900 leading-tight"
        >
          Full-Stack Design.
        </motion.h3>
        <p className="mt-6 md:mt-8 text-neutral-600 leading-relaxed text-base md:text-lg">
          We operate at the intersection of brand strategy and creative coding. 
          One cohesive team for both design and deployment.
        </p>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="md:col-span-8"
      >
        <div className="space-y-0">
          {SERVICES.map((service) => (
            <motion.div 
              variants={fadeInUp}
              key={service.id} 
              // Changed fixed width w-80 to flex-basis based layout
              className="py-8 md:py-12 border-t border-neutral-300 group hover:bg-neutral-200/50 transition-colors px-4 md:px-6 -mx-4 md:-mx-6 rounded-sm cursor-default"
            >
              <h4 className="text-xl md:text-3xl font-serif text-neutral-900 mb-2 md:mb-0 w-full md:w-1/2">{service.title}</h4>
              <p className="text-sm md:text-base text-neutral-500 mt-2 md:mt-0 max-w-sm md:w-1/2">{service.desc}</p>
            </motion.div>
          ))}
          <motion.div variants={fadeInUp} className="border-t border-neutral-300" />
        </div>
      </motion.div>

    </div>
  </section>
);