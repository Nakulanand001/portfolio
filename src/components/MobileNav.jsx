import { NAV_LINKS } from "../data/portfolioData";

export default function MobileNav({ open, onClose }) {
  return (
    <div className={`mobile-nav ${open ? "open" : ""}`}>
      {NAV_LINKS.map((l) => (
        <a key={l} href={`#${l.toLowerCase()}`} onClick={onClose}>{l}</a>
      ))}
    </div>
  );
}
