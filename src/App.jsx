import SideNav from "./components/SideNav";
import Navbar from "./components/NavBar";
import Main from "./components/Main";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <SideNav />
      <Navbar />
      <Main />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
