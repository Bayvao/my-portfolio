import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import resume from "../assets/Resume_Bayvao_Verma.pdf";
import me from "../assets/myself.png";

const Intro = () => {
  return (
    <div className="mt-28">
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-0 lg:px-2 mx-0 lg:mx-2 md:mt-8 md:min-h-[50vh] sm:flex flex-row-reverse items-center justify-between gap-24">
          <img
            className="block rounded-full object-cover
            w-32 h-32 mb-7 md:w-96 md:h-32"
            alt="Bayvao Verma"
            loading="lazy"
            src={me}
          />
          <div className="flex-grow">
            <p className="text-4xl leading-5 font-normal md:text-5xl dark:text-white">
              Bayvao Verma
            </p>
            <p className="text-xl font-normal mt-3 dark:text-white">
              Backend Developer
            </p>
            <p className="text-sm mt-1 font-normal text-gray-800 opacity-90 dark:text-gray-400">
              4 years of hands-on experience in designing, implementing,
              testing, and maintaining complex systems using Java framework.
              Adept at collaborating with cross-functional teams and
              stakeholders to deliver high-quality products.
            </p>
            <a
              className="flex bg-blue-600 text-white px-4 py-2.5 
              rounded-md  w-fit justify-between items-center mt-4 relative"
              href={resume}
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
              <FiDownload className="ml-3" />
            </a>
            <div className="flex gap-2 mt-2 text-2xl  dark:text-white ">
              <a
                className="p-2 hover:text-blue-600 dark:hover:text-blue-600"
                href="https://github.com/Bayvao"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
              <a
                className="p-2 hover:text-blue-600 dark:hover:text-blue-600"
                href="https://www.linkedin.com/in/bayvao/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
