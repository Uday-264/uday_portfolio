"use client"
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from "@/components/Contact"
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <>
      {/* Black themed background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-blue-950 to-black">
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
</div>
      
      {/* Content */}
      <div className="relative z-10 text-white">
        <Navbar />
        <main className="flex justify-center">
          <div className="w-full max-w-7xl">
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact/>
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;