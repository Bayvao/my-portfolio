import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <a
      className="my-8 no-underline rounded flex"
      href={blog.url}
      target="_blank"
    >
      <img
        className="mr-4 block w-full bg-white 
         h-auto max-w-[240px] max-h-[180px]  rounded-md object-cover"
        src={blog.imgUrl}
        alt={blog.title}
        loading="lazy"
      />
      <div className="flex flex-col justify-center">
        <h1 className="font-semibold text-lg font-serif text-blue-700 hover:underline dark:text-white">
          {blog.title}
        </h1>
        <p className="opacity-80 dark:text-white text-sm mt-2">
          {blog.desc.slice(0, 120) + "..."}
        </p>
      </div>
    </a>
  );
};

export default BlogCard;
