import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const backgroundVideoSrc = `${import.meta.env.BASE_URL}abstract-network-bg.webm`;

  return (
    <>
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src={backgroundVideoSrc} type="video/webm" />
      </video>
      <div className="background-video-overlay" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <ScrollToTopButton />
    </>
  );
}

export default App;
