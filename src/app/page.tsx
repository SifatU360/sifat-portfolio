import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';

import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="space-y-24 py-8">
      <Hero />
      <About />
      <Education />
       
      <Skills />
      <Projects />
      
      <Contact />
      <Footer />
    </main>
  );
}
