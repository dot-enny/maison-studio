import { motion, useScroll, useTransform } from "motion/react";
import { SectionLabel } from "./SecionLabel";
import { Play } from "lucide-react";
import { useRef } from "react";

const transition:any = { duration: 1.4, ease: [0.42, 0, 0.58, 1] }; // "Editorial" Easing

export const Hero: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <header ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-50">
      
      {/* 1. Cinematic Grain Overlay (SVG Noise) */}
      <div className="absolute inset-0 pointer-events-none z-40 opacity-[0.07] mix-blend-overlay">
        <svg className='w-full h-full'>
          <filter id='noiseFilter'>
            <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch' />
          </filter>
          <rect width='100%' height='100%' filter='url(#noiseFilter)' />
        </svg>
      </div>

      {/* 2. The Images Layer (Behind Text, Spread Out) */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        
        {/* Image 1: Left - Slightly higher */}
        <motion.div style={{ y: y1 }} className="absolute top-[20%] left-[5%] md:left-[15%] w-[35vw] md:w-[20vw] h-[30vh] md:h-[40vh] z-10">
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             className="w-full h-full overflow-hidden"
           >
             <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Construction detail" />
           </motion.div>
        </motion.div>

        {/* Image 2: Right - Mid level */}
        <motion.div style={{ y: y2 }} className="absolute top-[30%] right-[5%] md:right-[15%] w-[40vw] md:w-[22vw] h-[35vh] md:h-[45vh] z-20 shadow-2xl">
          <motion.div 
             initial={{ clipPath: 'inset(100% 0 0 0)' }}
             animate={{ clipPath: 'inset(0 0 0 0)' }}
             transition={{ duration: 1.5, ease: [0.6, 0.01, 0.05, 0.9] }}
             className="w-full h-full overflow-hidden"
           >
             <img src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-90" alt="Architectural Structure" />
           </motion.div>
        </motion.div>

        {/* Image 3: Bottom Left - Lower */}
        <motion.div style={{ y: y3 }} className="absolute bottom-[10%] left-[20%] md:left-[35%] w-[30vw] md:w-[15vw] h-[25vh] md:h-[30vh] z-0">
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
             className="w-full h-full overflow-hidden"
           >
             <img src="https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" alt="Texture detail" />
           </motion.div>
        </motion.div>

      </div>

      {/* 3. Text Layer (Centered & Overlapping) */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center px-6 mix-blend-difference text-white md:mix-blend-normal md:text-neutral-900">
        <SectionLabel text="Design Engineering" />
        
        <h1 className="font-serif text-6xl sm:text-8xl lg:text-9xl text-neutral-900 leading-[0.85] tracking-tighter mb-8 md:mix-blend-normal">
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...transition, delay: 0.1 }}>
            Digital
          </motion.div>
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...transition, delay: 0.2 }} className="italic text-neutral-500">
            Reality
          </motion.div>
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...transition, delay: 0.3 }}>
            Architects.
          </motion.div>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.8 }}
          className="font-sans text-neutral-600 text-lg md:text-xl max-w-md leading-relaxed mt-4 bg-neutral-50/50 backdrop-blur-sm p-4 rounded-sm md:bg-transparent md:backdrop-blur-none"
        >
          We don't just build websites. We engineer digital monuments that stand the test of time.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex items-center gap-4 cursor-pointer group"
        >
          <div className="w-12 h-12 rounded-full border border-neutral-400 flex items-center justify-center group-hover:bg-neutral-900 group-hover:border-neutral-900 group-hover:text-white transition-all">
            <Play className="w-4 h-4 ml-1" />
          </div>
          <span className="text-xs uppercase tracking-widest font-medium">Play Reel</span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-40"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-neutral-300 overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }} 
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-full h-1/2 bg-neutral-900" 
          />
        </div>
      </motion.div>

    </header>
  );
};