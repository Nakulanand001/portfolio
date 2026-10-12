export default function Preloader({ booted }) {
  return (
    <div className={`preloader ${booted ? "hide" : ""}`}>
      <div className="pre-line">BOOTING PORTFOLIO.SYS</div>
      <div className="pre-bar"><span /></div>
    </div>
  );
}
