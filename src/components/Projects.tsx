import { motion } from 'framer-motion';
import { me } from '@/libs/me';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link'
const Projects = () => {
  const { projects } = me;

  return (
    <section
      id="projects"
      className="section-padding"
    >
      <div className="">
        <h2 className="h2">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-800/50 rounded-2xl p-6 backdrop-filter backdrop-blur-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-[#d6d6d6]">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-600/20 rounded-full text-sm text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={project.github}
                target='_blank'
                className="flex items-center text-blue-400 hover:text-blue-300"
              >
                <FaGithub className="mr-2" /> View on GitHub
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;