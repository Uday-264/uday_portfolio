// components/Education.js
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="section-padding text-white">
      <div className="">
        <h2 className="h2">Education</h2>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Date */}
          <p className="text-xl">2018 - 2022</p>

          {/* Institution */}
          <h3 className="text-3xl md:text-4xl font-bold ">
            Vaagdevi College Of Engineering
          </h3>

          {/* Degree */}
          <p className="text-xl md:text-3xl  text-gray-300">
            Bachelor of Technology in Computer Science Engineering
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
