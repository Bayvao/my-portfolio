import { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { BsMoon, BsSun } from "react-icons/bs";

export const navLinks = [
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "blogs",
    title: "Blogs",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const handleThemeToggle = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };

  return (
    <nav className="w-full flex py-6 justify-start items-center navbar ">
      {/* Logo */}
      <h1 className="hidden sm:inline-block mx-16 text-2xl text-black">
        Bayvao
      </h1>

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-start items-start flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-start items-center">
        <div
          className="w-8 h-8 object-contain"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <IoMdClose className="w-7 h-7" />
          ) : (
            <HiOutlineMenuAlt2 className="w-7 h-7" />
          )}
        </div>

        {/* Sidebar */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-10 right-2/3
           mx-6 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-black" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-1 md:mx-48 my-2 flex justify-between items-end">
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          className="opacity-0 absolute checked:translate-x-6"
          checked={theme === "dark"}
          onChange={handleThemeToggle}
        />

        <label
          htmlFor="checkbox"
          className="cursor-pointer flex w-14 h-6 md:h-7 justify-between items-center
          relative p-2 rounded-2xl bg-blue-500"
        >
          <div
            className={`default:translate-x-0 absolute top-1 md:top-1.5 left-2 w-4 h-4 bg-white rounded-full 
            ${
              theme === "dark"
                ? "transition duration-500 ease-in-out transform translate-x-6"
                : "transition duration-500 ease-in-out transform"
            }`}
          ></div>
          <BsMoon className="text-white" />
          <BsSun className="text-white" />
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
