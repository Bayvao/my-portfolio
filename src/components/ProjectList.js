import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { BsChevronDown } from "react-icons/bs";
import { data } from "../utils/data";
import { useLocation } from "react-router-dom";

const container = {
  hidden: { opacity: 0, y: 300 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
  transition: 0.5,
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const ProjectList = () => {
  const { projects } = data;
  const { pathname } = useLocation();

  return (
    <div className={`${pathname === "/blogs" ? "mt-24" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1
          className="font-semibold relative inline-block
         tracking-wider text-3xl font-serif dark:text-white"
        >
          Projects
        </h1>
        <motion.section variants={container} initial="hidden" animate="visible">
          <div className="mt-10 grid gap-6 grid-cols-1 ss:grid-cols-2 md:grid-cols-3 ">
            {projects.map((project) => (
              <motion.div key={project.id} variants={item}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {projects.length >= 3 && (
            <div
              className="flex justify-center items-center bg-transparent 
                rounded-md mx-auto my-6 w-fit px-2 py-6
                 text-slate-700 hover:cursor-pointer dark:text-white"
            >
              See more <BsChevronDown className="ml-2 text-sm" />
            </div>
          )}
        </motion.section>
      </motion.div>
    </div>
  );
};

export default ProjectList;
