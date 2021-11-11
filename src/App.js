import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    // in React we can return one container so we need one empty container to put every container on it
    <>
      <Navbar />
      <AboutMe />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
