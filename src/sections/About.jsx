import NetworkGraphic from "../components/NetworkGraphic";
import useNetworkNodes from "../hooks/useNetworkNodes";
import { CONTACT } from "../data/portfolioData";

export default function About() {
  const aboutNet = useNetworkNodes(8, 400, 400, 2);

  return (
    <section id="about">
      <div className="wrap about-grid">
        <div className="js-reveal">
          <div className="node-graphic corner-brackets">
            <NetworkGraphic net={aboutNet} viewBox="0 0 400 400" highlightIndex={2} lineOpacity={0.18} />
          </div>
        </div>
        <div className="js-reveal">
          <div className="eyebrow">ABOUT</div>
          <h2 className="h-md">Frontend engineering, held to a trading floor's standard.</h2>
          <div className="about-copy">
            <p>I build production UI for <strong>FX Connect</strong>, State Street's flagship foreign
              exchange trading platform used by institutional clients across <strong>30+ countries</strong> —
              and for <strong>Market Execution Portfolio</strong>, a multi-module portfolio management
              product. That means React and TypeScript components that render trade data accurately,
              WebSocket feeds that update positions in under a second, and code held to the scrutiny of a
              SOX-compliant, regulated environment.</p>
            <p>I work in two-week Agile Scrum sprints alongside cross-functional teams spanning Hyderabad
              and global time zones, ship through Harness CI/CD pipelines, and hold my own components to
              <strong> 75–90% unit test coverage</strong> with Jest and React Testing Library. I'm also
              <strong> CEH-certified</strong>, which shapes how I think about the security surface of
              everything I build.</p>
            <p>Before State Street, I was building things end-to-end as a frontend intern at WebTechFly,
              and before that, wiring sensors to Arduino boards and writing Python NLP tools — the
              throughline is the same: take a system that needs to be reliable, and make the interface
              to it clear.</p>
          </div>
          <div className="fact-grid">
            <div className="fact"><div className="k">Location</div><div className="v">{CONTACT.location}</div></div>
            <div className="fact"><div className="k">Email</div><div className="v">{CONTACT.email}</div></div>
            <div className="fact"><div className="k">Phone</div><div className="v">{CONTACT.phone}</div></div>
            <div className="fact"><div className="k">LinkedIn</div><div className="v">{CONTACT.linkedinLabel}</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
