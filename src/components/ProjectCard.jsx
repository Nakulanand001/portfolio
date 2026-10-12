import { useRef } from "react";

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className="proj-card js-reveal"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="proj-index">{project.tag}</div>
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <div className="proj-stack">
        {project.stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </div>
  );
}
