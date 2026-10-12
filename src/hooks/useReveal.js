import { useEffect } from "react";

/**
 * Observes all elements with the `.js-reveal` class and adds
 * `.is-visible` once they scroll into view, triggering the CSS
 * fade/slide transition defined in styles/global.css.
 */
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".js-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
