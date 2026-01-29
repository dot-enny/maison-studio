import { MoveRight, Globe } from "lucide-react";
import { motion } from "motion/react";

export const Footer = () => (
  <footer className="bg-neutral-900 text-neutral-50 py-24 md:py-32">
    <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-5xl md:text-7xl leading-none mb-8">
            Let's build <br />
            something <span className="text-stone-500 italic">solid.</span>
          </h2>
          <div className="flex flex-col gap-4 items-start">
            <a href="mailto:hello@maison.design" className="text-xl md:text-2xl border-b border-stone-700 pb-2 hover:border-white transition-colors">
              hello@maison.design
            </a>
            <button className="flex items-center gap-4 text-sm uppercase tracking-widest text-stone-400 hover:text-white transition-colors mt-8">
              Start a Project <MoveRight />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm text-stone-400">
          <div className="flex flex-col gap-4">
            <span className="text-stone-500 uppercase text-xs tracking-widest mb-2">Socials</span>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter / X</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-stone-500 uppercase text-xs tracking-widest mb-2">Sitemap</span>
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">Work</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-stone-500 uppercase text-xs tracking-widest mb-2">Legal</span>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>

      <div className="mt-24 pt-8 border-t border-stone-800 flex justify-between items-center text-xs text-stone-600 uppercase tracking-widest">
        <span>© Maison 2024</span>
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4" />
          <span>Zurich / Remote</span>
        </div>
      </div>
    </div>
  </footer>
);