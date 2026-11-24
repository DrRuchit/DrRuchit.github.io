import { useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { CV_URL } from "../data.js";
import { ease } from "./motion.jsx";

const LINKS = [
  ["Story", "#story"],
  ["Research", "#research"],
  ["Publications", "#publications"],
  ["Contact", "#contact"],
];

export default function Nav() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  const [solid, setSolid] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setSolid(v > 40));

  return (
    <>
      <motion.div className="progress" style={{ scaleX: progress }} aria-hidden="true" />
      <motion.header
        className={"nav" + (solid ? " is-solid" : "")}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease, delay: 0.2 }}
      >
        <div className="wrap nav-in">
          <a className="mono" href="#top" aria-label="Dr. Ruchit Nawal, back to top">
            RN
          </a>
          <nav aria-label="Sections">
            <ul className="nav-links">
              {LINKS.map(([label, href]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="btn btn-ghost btn-sm" href={CV_URL} download>
            Download CV
          </a>
        </div>
      </motion.header>
    </>
  );
}
