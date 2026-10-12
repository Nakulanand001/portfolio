import { TICKER } from "../data/portfolioData";

export default function Ticker() {
  return (
    <div className="ticker-strip">
      <div className="ticker-track">
        {[...TICKER, ...TICKER].map(([n, l], idx) => (
          <span className="ticker-item" key={idx}><span className="up">▲</span><b>{n}</b> {l}</span>
        ))}
      </div>
    </div>
  );
}
