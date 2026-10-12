import { SKILLS } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head js-reveal">
          <div className="eyebrow">SKILLS</div>
          <h2>The stack, grouped by what it's for.</h2>
          <p>Not a wall of logos — the tools sorted by the job they do.</p>
        </div>
        <div className="skill-clusters js-reveal">
          {SKILLS.map((s) => (
            <div className="cluster" key={s.cat}>
              <h4>{s.cat}</h4>
              <div className="tags">
                {s.items.map((it) => <span className="tag" key={it}>{it}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
