import About from "./conponents/About";
import Contact from "./conponents/Contact";
import Experience from "./conponents/Experience";
import Home from "./conponents/Home";
import NavBar from "./conponents/NavBar";
import Portfolio from "./conponents/Portfolio";
import SocialLinks from "./conponents/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
