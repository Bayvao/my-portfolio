import "./App.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="w-5/6 md:w-4/5 max-w-[768px] m-auto ">
        <Navbar />
        <Intro />
      </div>
    </div>
  );
}

export default App;
