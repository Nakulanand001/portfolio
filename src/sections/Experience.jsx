import { ChevronRight } from "lucide-react";
import { EXPERIENCE } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head js-reveal">
          <div className="eyebrow">EXPERIENCE</div>
          <h2>Two roles, one habit: ship, measure, harden.</h2>
          <p>A timeline of what I built, and what it was measured against.</p>
        </div>
        <div className="timeline">
          {EXPERIENCE.map((job, idx) => (
            <div className="tl-entry js-reveal" key={idx}>
              <div className="tl-dot" />
              <div className="tl-head">
                <h3>{job.company}</h3>
                <span className="tl-date">{job.date}</span>
              </div>
              <div className="tl-role">{job.role}</div>
              <div className="tl-loc">{job.location}</div>
              {job.subsections.map((sub, si) => (
                <div className="tl-sub" style={sub.title ? {} : { borderTop: "none", paddingTop: 6 }} key={si}>
                  {sub.title && <h4>{sub.title} <em>— {sub.subtitle}</em></h4>}
                  <ul className="tl-list">
                    {sub.items.map((it, ii) => (
                      <li key={ii}><ChevronRight size={13} className="li-chev" />{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
