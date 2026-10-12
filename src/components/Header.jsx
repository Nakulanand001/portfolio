import { Menu, X, Moon, Sun } from "lucide-react";
import { NAV_LINKS } from "../data/portfolioData";

export default function Header({ isDark, toggleTheme, mobileOpen, setMobileOpen }) {
  return (
    <header>
      <div className="wrap nav-inner">
        <a href="#hero" className="logo"><span className="dot" />NAKUL.ANAND</a>
        <nav>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
            ))}
          </ul>
        </nav>
        <div className="nav-right">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button className="hamburger" onClick={() => setMobileOpen((v) => !v)} aria-label="Menu">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
