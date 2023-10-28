import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { data } from "../utils/data";

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

const Skills = () => {
  const { skills } = data;
  return (
    <div className="sm:mx-4 sm:my-14">
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1
          className="relative inline-block font-serif font-semibold
         tracking-wider text-3xl dark:text-white"
        >
          Skills
        </h1>
      </motion.div>
      <motion.section variants={container} initial="hidden" animate="visible">
        <div className="my-8 grid gap-6 justify-center grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {skills.map((skill) => (
            <motion.div key={skill.title} variants={item}>
              <SkillCard title={skill.title} icon={skill.icon} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Skills;
