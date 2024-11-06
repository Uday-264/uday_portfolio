import { motion } from 'framer-motion';
import { me } from '@/libs/me';

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className=" mx-auto">
        <h2 className="h2">Skills</h2>
        <div className="flex flex-wrap items-center gap-3">
          {me.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex items-center p-2 md:p-4 bg-gray-800/50 rounded-xl md:rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <skill.icon className="text-xl mr-4 text-white" />
              <span className="text-xl md:text-2xl text-gray-300 flex items-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;