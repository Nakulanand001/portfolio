import { useMemo } from "react";

/**
 * Deterministically generates a set of nodes + connecting lines for the
 * decorative network graphics in the hero and about sections. Uses a
 * seeded pseudo-random generator so output is stable across renders.
 */
export default function useNetworkNodes(count, w, h, seedOffset = 0) {
  return useMemo(() => {
    let seed = 42 + seedOffset;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    const nodes = Array.from({ length: count }, () => ({
      x: rand() * w,
      y: rand() * h,
      r: 1.6 + rand() * 1.8,
      delay: rand() * 2.4,
      dur: 1.4 + rand() * 1.8,
    }));
    const lines = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < w * 0.19) lines.push({ i, j, opacity: Math.max(0.02, 0.16 - d / (w * 10)) });
      }
    }
    return { nodes, lines };
  }, [count, w, h, seedOffset]);
}
