import React from "react";

const SkillCard = ({ title, icon }) => {
  return (
    <div>
      <img
        className="aspect-square max-w-[48px] mx-auto"
        alt={title}
        src={`./icons/${icon}.svg`}
      />
      <h3 className="mt-1.5 font-medium text-center dark:text-white">
        {title}
      </h3>
    </div>
  );
};

export default SkillCard;
