import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-800/50"
          variants={childVariants}
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
          
          {/* Content */}
          <div className="relative z-10">
            <motion.div variants={childVariants}>
              <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mb-8" />
            </motion.div>

            <motion.div 
              className="space-y-6"
              variants={childVariants}
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                I&apos;m a passionate web developer focused on creating user-friendly, responsive websites.
                I love solving problems and exploring new technologies, always seeking to make a positive
                impact through innovative solutions and collaboration.
              </p>
              
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;