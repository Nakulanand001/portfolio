import { Mail, ExternalLink, Phone } from "lucide-react";
import { CONTACT } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="eyebrow center">AVAILABLE FOR CONVERSATIONS</div>
        <h2>Let's talk about<br />what you're building.</h2>
        <p>Open to conversations about frontend roles, real-time systems, or just React and TypeScript in general.</p>
        <div className="contact-links">
          <a href={`mailto:${CONTACT.email}`} className="btn btn-primary"><Mail size={15} />{CONTACT.email}</a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">LinkedIn <ExternalLink size={13} /></a>
          <a href={`tel:${CONTACT.phoneHref}`} className="btn btn-ghost"><Phone size={14} />{CONTACT.phone}</a>
        </div>
      </div>
    </section>
  );
}
