import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import { data } from "../src/utils/data";
import ProjectList from "./components/ProjectList";
import BlogList from "./components/BlogList";
import Home from "./components/Home";

function App() {
  const { projects, skills, blogs } = data;

  return (
    <div className="overflow-auto bg-gradient-to-r from-cyan-300 to-blue-400 dark:from-slate-800 dark:to-slate-900">
      <Navbar />
      <div className="w-auto sm:w-4/5 max-w-[768px] ml-4 sm:m-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
