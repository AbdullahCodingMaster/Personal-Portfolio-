import SideNav from "./components/SideNav";
import Main from "./components/Main";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

const App = () => {
  return (
    <>
      <SideNav />
      <Main />
      <Resume />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
