import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <p>© 2026 NAKUL ANAND — BUILT IN REACT.</p>
        <a href="#hero" className="back-to-top" aria-label="Back to top"><ArrowUp size={15} /></a>
      </div>
    </footer>
  );
}
