// components/About.js
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="section-padding flex flex-col md:flex-row justify-center text-white">
      {/* Left Side: Heading */}
      <div className="flex-1">
        <motion.h1
          className="text-6xl md:text-7xl font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-blue-400 mr-3">I make things</span>
          <br className="hidden md:block"/>
          <span className="text-purple-400">for the web</span>
        </motion.h1>
      </div>

      {/* Right Side: About Text */}
      <div className="flex-1 mt-10 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="h2 mb-4">About</h2>
          <p className="text-lg max-w-lg">
            I’m a passionate web developer focused on creating user-friendly, responsive websites.
            I love solving problems and exploring new technologies, always seeking to make a positive
            impact through innovative solutions and collaboration.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
