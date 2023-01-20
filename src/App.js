import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import "./App.scss";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import { NavBar } from "./components/navBar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import option from "./utilis/particles";

function App() {
  const location = useLocation();
  console.log(location);

  const renderParticlesJsInHomePage = location.pathname === "/";

  const handleParticles = async (main) => {
    await loadFull(main);
  };
  return (
    <div className="App">
      {renderParticlesJsInHomePage && (
        <Particles id="particles" options={option} init={handleParticles} />
      )}
      <NavBar />
      <div className="App_main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
