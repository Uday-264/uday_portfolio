import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link'
import {me} from '@/libs/me'
const Hero = () => {
 

  return (
    <div 
      id="hero" 
      className="min-h-screen w-full flex items-center justify-center pt-16 md:pt-20 lg:pt-24 section-padding"
    >
      <div className=" max-w-4xl md:mx-auto relative">
        <motion.img 
          src="uday.png" 
          alt="Udaykumar Bethi" 
          className=" w-48 h-48  rounded-full border-4 border-purple-200 object-cover mx-auto mb-4 "
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <h1 
          className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-gradient-to-r from-[#6dd5fa] via-[#c1cfff] to-[#e0eaff] bg-clip-text  relative z-10 "
        >
          Hi, I&apos;m <span className='text-[#affc41]'> Udaykumar Bethi</span>
        </h1>

        <h2 
          className="text-2xl lg:text-3xl text-purple-200 mb-6 font-light relative z-10 md:text-center"
        >
          Web Developer
        </h2>

        <p 
          className="text-xl text-gray-300 mb-12 max-w-2xl md:mx-auto font-light relative z-10"
        >
          I love to build fun, high-quality experiences and continuously learn new things.
        </p>

        <div 
          className="flex flex-wrap justify-center items-center gap-6 sm:gap-6 relative z-10"
        >
          <Link
            href={me.socialLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className=" px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 group"
          >
            <FileText className="w-5 h-5 group-hover:text-purple-300 transition-colors" />
            <span className="text-lg group-hover:text-purple-300 transition-colors">Resume</span>
          </Link>
          <Link
            href={me.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className=" px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 group"
          >
            <Github className="w-5 h-5 group-hover:text-purple-300 transition-colors" />
            <span className="text-lg group-hover:text-purple-300 transition-colors">GitHub</span>
          </Link>
          <Link
            href={me.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className=" px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 group"
          >
            <Linkedin className="w-5 h-5 group-hover:text-purple-300 transition-colors" />
            <span className="text-lg group-hover:text-purple-300 transition-colors">LinkedIn</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;