import { useState } from "react";
import { Arrow, Reveal } from "./motion.jsx";
import { CV_URL, EMAIL_DOMAIN, EMAIL_USER } from "../data.js";

export default function Contact() {
  // Assembled at runtime so the address is not sitting in the page source for scrapers.
  const email = EMAIL_USER + "@" + EMAIL_DOMAIN;
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const t = document.createElement("textarea");
      t.value = email;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <footer className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <Reveal as="p" className="kicker">
          Contact
        </Reveal>
        <Reveal as="h2" id="contact-title" delay={0.05}>
          Let's work <em className="gold-text">together.</em>
        </Reveal>
        <Reveal as="p" className="contact-lede" delay={0.1}>
          Open to collaboration on screening, tuberculosis, environmental health and teaching in Community Medicine.
        </Reveal>
        <Reveal className="contact-cta" delay={0.15}>
          <a className="btn btn-gold" href={"mailto:" + email}>
            Write to me <Arrow />
          </a>
          <button type="button" className="btn btn-ghost" onClick={copy} aria-live="polite">
            {copied ? "Email copied" : email}
          </button>
          <a className="btn btn-ghost" href={CV_URL} download>
            Download CV (PDF)
          </a>
        </Reveal>
        <div className="footer">
          <span>© 2026 Dr. Ruchit Nawal · MBBS, MD (Community Medicine)</span>
          <span>Ahmedabad, Gujarat · Updated November 2026</span>
        </div>
      </div>
    </footer>
  );
}
