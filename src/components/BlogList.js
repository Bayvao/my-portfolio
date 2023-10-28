import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import BlogCard from "./BlogCard";
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

const BlogList = () => {
  const { pathname } = useLocation();

  const { blogs } = data;
  return (
    <div className={`${pathname === "/blogs" ? "mt-24" : ""}`}>
      <section className="mb-10">
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className="font-semibold relative inline-block
         tracking-wider text-3xl font-serif dark:text-white"
          >
            Blogs
          </h1>
        </motion.div>
        <motion.section variants={container} initial="hidden" animate="visible">
          <ul className="list-none my-6">
            {pathname === "/"
              ? blogs.slice(0, 3).map((blog, index) => (
                  <motion.div key={index} variants={item}>
                    <BlogCard blog={blog} key={index} />
                  </motion.div>
                ))
              : blogs.map((blog, index) => (
                  <motion.div key={index} variants={item}>
                    <BlogCard blog={blog} key={index} />
                  </motion.div>
                ))}
          </ul>
          {blogs.length > 3 && pathname === "/" && (
            <button
              className="flex justify-center items-center bg-transparent 
                rounded-md mx-auto my-6 w-fit px-2 py-6
                 text-slate-700 hover:cursor-pointer dark:text-white"
            >
              See more <BsChevronDown className="ml-2 text-sm" />
            </button>
          )}
        </motion.section>
      </section>
    </div>
  );
};

export default BlogList;
