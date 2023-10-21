import "./App.css";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import { data } from "../src/utils/data";

function App() {
  const { projects, skills } = data;

  return (
    <div className="overflow-auto bg-gradient-to-r from-cyan-200 to-blue-200 dark:from-slate-800 dark:to-slate-900">
      <Navbar />
      <div className="w-auto sm:w-4/5 max-w-[768px] ml-5 sm:m-auto">
        <Intro />
        <Experience />
        <Skills skills={skills} />
      </div>
    </div>
  );
}

export default App;
