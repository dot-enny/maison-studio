import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import type { Project } from "../App";

interface WorkItemProps {
  project: Project;
  index: number;
}

const imageReveal = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1.2, ease: "easeOut" }
};

export const WorkItem: React.FC<WorkItemProps> = ({ project, index }) => {
  const ref = useRef(null);
  
  // Create relative scroll timeline for this specific element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // PARALLAX PHYSICS
  // Calculate movement based on speed. Slower/Heavier items move less. Faster/Lighter items move more.
  const y = useTransform(scrollYProgress, [0, 1], [0, -200 * project.speed * 5]);
  
  // THE LERP (Spring smoothing)
  // This makes the item "catch up" to the scroll position
  const smoothY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    mass: 0.1
  });

  return (
    <div 
      ref={ref}
      className={`${project.alignment} relative mb-24 md:mb-0`} 
    >
      <motion.div 
        style={{ y: smoothY }}
        className="relative w-full"
      >
        <motion.div
          variants={imageReveal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          className={`${project.aspect} group relative overflow-hidden cursor-pointer bg-neutral-100 shadow-sm hover:shadow-2xl transition-shadow duration-700`}
        >
          {/* Inner Parallax Image (Creating the window effect) */}
          <motion.div className="w-full h-[120%] -y-[10%] relative">
             <motion.img 
              style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]) }} // Subtle inner parallax
              src={project.image} 
              alt={project.client} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors duration-500" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex justify-between items-end bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider mb-2 opacity-80">{project.category}</p>
              <h3 className="text-2xl md:text-3xl font-serif italic">{project.client}</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </motion.div>
        
        {/* Caption below image for editorial look */}
        <div className="mt-4 flex justify-between items-center opacity-0 md:opacity-100">
             <span className="text-xs font-mono text-neutral-400">0{project.id}</span>
             <span className="text-xs font-sans text-neutral-900 uppercase tracking-widest">{project.year}</span>
        </div>

      </motion.div>
    </div>
  );
};