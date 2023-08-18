import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Faruq Adelodun</title>
        <meta
          name="description"
          content="Faruq Adelodun is a junior developer based in Lagos, Nigeria. He is a process engineer and a software engineer."
        />
        <meta
          name="keywords"
          content="portfolio, software engineer, process engineer"
        />
      </Helmet>
      <div>
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
