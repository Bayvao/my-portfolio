import Intro from "./Intro";
import Experience from "./Experience";
import Skills from "./Skills";
import ProjectList from "./ProjectList";
import BlogList from "./BlogList";

const Home = () => {
  return (
    <div>
      <Intro />
      <Experience />
      <Skills />
      {/**<ProjectList /> */}
      <BlogList />
    </div>
  );
};

export default Home;
