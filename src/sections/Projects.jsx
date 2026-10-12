import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head js-reveal">
          <div className="eyebrow">PROJECTS</div>
          <h2>Independent builds, outside the sprint board.</h2>
          <p>Smaller in scope, but where a lot of the curiosity happens.</p>
        </div>
        <div className="proj-grid">
          {PROJECTS.map((p, idx) => <ProjectCard project={p} index={idx} key={p.title} />)}
        </div>
      </div>
    </section>
  );
}
