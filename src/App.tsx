import ReactLenis, { useLenis } from 'lenis/react';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/NavBar';
import { Process } from './components/Process';
import { SelectedWork } from './components/SelectedWork';
import { Services } from './components/Services';

export interface Project {
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

const App = () => {
  const lenis = useLenis((lenis) => {
    // console.log(lenis)
  })

  return (
    <>
      <ReactLenis root />
      <div className="min-h-screen max-w-screen overflow-hidden bg-stone-50 text-stone-900 selection:bg-stone-900 selection:text-white font-sans antialiased">
        <Navbar />
        <main>
          <Hero />
          <SelectedWork />
          <Process />
          <Services />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;