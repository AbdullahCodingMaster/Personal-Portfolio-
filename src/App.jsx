import SideNav from "./components/SideNav";
import Main from "./components/Main";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Nav from "./components/NavBar";

const App = () => {
  return (
    <>
      <SideNav />
      <Nav />
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
