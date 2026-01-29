interface Project {
  id: number;
  client: string;
  category: string;
  year: string;
  image: string;
  // New props for the floating grid physics
  speed: number; 
  alignment: string; // Tailwind classes for positioning
  aspect: string; // Aspect ratio class
}

interface Service {
  id: string;
  title: string;
  desc: string;
}

interface ProcessStep {
  id: string;
  title: string;
  desc: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    client: "Vanguard Architecture",
    category: "Digital Presence",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    speed: 0.05, // Slow (Heavy)
    alignment: "col-span-12 md:col-span-7 md:ml-0",
    aspect: "aspect-[16/10]"
  },
  {
    id: 2,
    client: "Ochre & Ash",
    category: "E-Commerce",
    year: "2023",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    speed: 0.15, // Fast (Light)
    alignment: "col-span-12 md:col-span-4 md:col-start-9 md:-mt-32", // Overlap/Offset
    aspect: "aspect-[3/4]"
  },
  {
    id: 3,
    client: "Serif Publishing",
    category: "Identity System",
    year: "2023",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop",
    speed: 0.08,
    alignment: "col-span-12 md:col-span-5 md:col-start-2 md:mt-24",
    aspect: "aspect-square"
  },
  {
    id: 4,
    client: "Mono Tech",
    category: "SaaS Platform",
    year: "2024",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2632&auto=format&fit=crop",
    speed: 0.04,
    alignment: "col-span-12 md:col-span-6 md:col-start-7 md:-mt-12",
    aspect: "aspect-video"
  },
  {
    id: 5,
    client: "Aether Cosmetics",
    category: "Packaging",
    year: "2023",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop",
    speed: 0.12,
    alignment: "col-span-12 md:col-span-4 md:col-start-1 md:mt-32",
    aspect: "aspect-[4/5]"
  },
  {
    id: 6,
    client: "Zurich Kunsthalle",
    category: "Exhibition Site",
    year: "2022",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    speed: 0.06,
    alignment: "col-span-12 md:col-span-6 md:col-start-6 md:mt-12",
    aspect: "aspect-[4/3]"
  }
];

const PROCESS: ProcessStep[] = [
  { id: '01', title: 'Discovery', desc: 'We audit your current digital state and define the architectural constraints.' },
  { id: '02', title: 'Direction', desc: 'We propose three distinct aesthetic routes before a single pixel is polished.' },
  { id: '03', title: 'Execution', desc: 'Agile development cycles with weekly deploy previews and rigorous testing.' },
  { id: '04', title: 'Handoff', desc: 'Complete documentation, design system export, and white-glove launch support.' },
];

const SERVICES: Service[] = [
  { id: '01', title: 'Art Direction', desc: 'Visual narrative and aesthetic strategy.' },
  { id: '02', title: 'Interface Design', desc: 'Systematic UI built on atomic principles.' },
  { id: '03', title: 'Development', desc: 'React/TypeScript engineering with focus on performance.' },
  { id: '04', title: 'Brand Identity', desc: 'Logo, typography, and voice definition.' },
];

export { PROJECTS, PROCESS, SERVICES }