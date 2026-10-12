import { ArrowRight } from "lucide-react";
import NetworkGraphic from "../components/NetworkGraphic";
import useNetworkNodes from "../hooks/useNetworkNodes";

const HEADLINE = ["Interfaces built", "for markets that", "never pause."];

export default function Hero({ loaded }) {
  const heroNet = useNetworkNodes(22, 1200, 800, 1);

  return (
    <section id="hero">
      <div className="hero-grid" />
      <NetworkGraphic net={heroNet} viewBox="0 0 1200 800" className="hero-canvas" />

      <div className="wrap hero-inner">
        <div className="eyebrow">FRONTEND SOFTWARE ENGINEER — FX CONNECT, STATE STREET</div>
        <h1>
          {HEADLINE.map((line, i) => (
            <span className="line" key={i}>
              <span className={loaded ? "in" : ""} style={{ transitionDelay: `${i * 120 + 100}ms` }}>{line}</span>
            </span>
          ))}
        </h1>
        <p className={`hero-sub fade-up ${loaded ? "in" : ""}`}>
          I'm Nakul Anand, a frontend engineer at State Street Corporation, shipping React and TypeScript
          features on live FX trading platforms — where sub-second updates and 75–90% test coverage
          aren't nice-to-haves, they're the job.
        </p>
        <div className={`hero-cta fade-up ${loaded ? "in" : ""}`}>
          <a href="#experience" className="btn btn-primary">View Experience <ArrowRight size={15} /></a>
          <a href="#contact" className="btn btn-ghost">Get in touch</a>
        </div>
        <div className={`hero-meta fade-up ${loaded ? "in" : ""}`}>
          <div><strong>Hyderabad, India</strong>Based &amp; working</div>
          <div><strong>State Street Corp.</strong>Current employer</div>
          <div><strong>CEH Certified</strong>Security-first mindset</div>
        </div>
      </div>
      <div className="scroll-cue"><span>SCROLL</span><span className="stem" /></div>
    </section>
  );
}
