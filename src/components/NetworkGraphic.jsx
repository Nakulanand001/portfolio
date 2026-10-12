/**
 * Renders a set of connected, pulsing nodes as an SVG graphic.
 * Used for both the hero background and the about section illustration.
 */
export default function NetworkGraphic({ net, viewBox, highlightIndex = null, lineOpacity, className }) {
  return (
    <svg className={className} viewBox={viewBox} preserveAspectRatio="xMidYMid slice">
      {net.lines.map((l, idx) => (
        <line
          key={idx}
          x1={net.nodes[l.i].x} y1={net.nodes[l.i].y}
          x2={net.nodes[l.j].x} y2={net.nodes[l.j].y}
          stroke="var(--teal)"
          strokeOpacity={lineOpacity ?? l.opacity}
          strokeWidth="1"
        />
      ))}
      {net.nodes.map((n, idx) => {
        const isHighlighted = highlightIndex !== null && idx === highlightIndex;
        return (
          <circle
            key={idx}
            cx={n.x}
            cy={n.y}
            r={isHighlighted ? 6 : n.r}
            fill={highlightIndex !== null ? (isHighlighted ? "var(--teal)" : "var(--text-faint)") : "var(--teal)"}
            className={isHighlighted ? "pulse-node-big" : highlightIndex === null ? "pulse-node" : ""}
            style={
              highlightIndex === null
                ? { animationDelay: `${n.delay}s`, animationDuration: `${n.dur}s` }
                : undefined
            }
          />
        );
      })}
    </svg>
  );
}
