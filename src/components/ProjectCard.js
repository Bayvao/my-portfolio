import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <article
      className="mt-3 backdrop-filter backdrop-blur-2xl rounded-md
      overflow-hidden bg-[#ffffff] bg-opacity-50 dark:bg-slate-900 mr-4"
    >
      <img
        className="aspect-[4/3]"
        src={project.img}
        alt={project.title}
        loading="lazy"
      />
      <div className="p-4">
        <h2 className="text-black text-xl tracking-wide font-bold dark:text-white">
          {project.title}
        </h2>
        <small className="text-md text-[#3c3838] dark:text-white">
          {project.desc}
        </small>

        <div className="flex justify-between items-start gap-2">
          {project.github && (
            <a
              className="px-1 py-2 mt-4 relative overflow-hidden 
              text-center justify-center items-center
              text-sm border rounded-md flex w-full
             border-blue-700 text-blue-700
              after:content-[''] after:absolute after:w-8 after:h-16 after:bg-white
               after:opacity-50 after:blur-[10px] after:rotate-[30deg] after:transition-all
               after:duration-[550ms] after:ease-[cubic-bezier(0.19,1,0.22,1)] 
               after:-left-16 after:-top-2.5
               hover:after:transition-all hover:after:duration-[550ms] 
               hover:after:ease-[cubic-bezier(0.19,1,0.22,1)] hover:after:left-[120%]
             dark:text-white "
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              Source <FaGithub className="ml-2" />
            </a>
          )}
          <a
            className="mx-2 px-1 py-2 mt-4 relative overflow-hidden text-center justify-center items-center
              text-sm border rounded-md flex w-full border-blue-700 text-white bg-blue-600
              after:content-[''] after:absolute after:w-8 after:h-16 after:bg-white
               after:opacity-50 after:blur-[10px] after:rotate-[30deg] after:transition-all
               after:duration-[550ms] after:ease-[cubic-bezier(0.19,1,0.22,1)] 
               after:-left-16 after:-top-2.5
               hover:after:transition-all hover:after:duration-[550ms] 
               hover:after:ease-[cubic-bezier(0.19,1,0.22,1)] hover:after:left-[120%]"
            href={project.live}
            primary
            target="_blank"
            rel="noreferrer"
          >
            Live <HiOutlineExternalLink className="ml-2" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
