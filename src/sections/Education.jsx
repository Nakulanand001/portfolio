import { EDUCATION, BADGES } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="section-head js-reveal">
          <div className="eyebrow">EDUCATION &amp; CERTIFICATIONS</div>
          <h2>Where the foundation was built.</h2>
        </div>
        <div className="twocol js-reveal">
          {EDUCATION.map((e) => (
            <div className="info-card" key={e.title}>
              <div className="k">{e.date}</div>
              <h3>{e.title}</h3>
              <div className="meta">{e.meta}</div>
              <div className="score">{e.score}</div>
            </div>
          ))}
        </div>
        <div className="badge-grid js-reveal">
          {BADGES.map((b) => {
            const Icon = b.icon;
            return (
              <div className="badge-card" key={b.title}>
                <div className="badge-icon"><Icon size={17} /></div>
                <div><h4>{b.title}</h4><p>{b.meta}</p></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
