import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll } from "motion/react";
import { useState, useEffect } from "react";

export const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const previous = scrollY.getPrevious() || 0;
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    });
  }, [scrollY]);

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-transparent mix-blend-difference text-white"
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
          <div className="text-xl md:text-2xl font-serif font-bold tracking-tight cursor-pointer z-50 relative">
            Maison.
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-16">
            {['Work', 'Studio', 'Services'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:opacity-70 transition-opacity">
                {item}
              </a>
            ))}
            <button className="border border-white/20 px-6 lg:px-8 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
              Let's Talk
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden z-50 relative" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-neutral-900 text-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-2xl font-serif">
              {['Work', 'Studio', 'Services'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white"
                >
                  {item}
                </a>
              ))}
              <div className="h-px w-full bg-white/10 my-4" />
              <button className="text-left text-sm font-sans uppercase tracking-widest text-neutral-400">
                Start a Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};