import { useEffect, useState } from "react";
import Header from "../components/Header";
import MobileNav from "../components/MobileNav";
import Preloader from "../components/Preloader";
import ScrollProgress from "../components/ScrollProgress";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import Ticker from "../sections/Ticker";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Contact from "../sections/Contact";
import useReveal from "../hooks/useReveal";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [booted, setBooted] = useState(false);
  const [progress, setProgress] = useState(0);

  useReveal();

  useEffect(() => {
    const t1 = setTimeout(() => setBooted(true), 900);
    const t2 = setTimeout(() => setLoaded(true), 1100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100;
      setProgress(scrolled);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = theme === "dark";
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="pf-root" data-theme={theme}>
      <Preloader booted={booted} />
      <ScrollProgress progress={progress} />

      <Header
        isDark={isDark}
        toggleTheme={toggleTheme}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <Hero loaded={loaded} />
      <Ticker />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />

      <Footer />
    </div>
  );
}
