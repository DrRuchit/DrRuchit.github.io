import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DotField from "./DotField.jsx";
import { Arrow, ease } from "./motion.jsx";
import { CV_URL } from "../data.js";

const line = {
  hidden: { y: "110%" },
  show: (i) => ({ y: "0%", transition: { duration: 1.15, ease, delay: 0.35 + i * 0.13 } }),
};
const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (d) => ({ opacity: 1, y: 0, transition: { duration: 0.95, ease, delay: d } }),
};

function Ring() {
  const dots = Array.from({ length: 56 }, (_, i) => {
    const a = (i / 56) * Math.PI * 2;
    return { x: 100 + 94 * Math.cos(a), y: 100 + 94 * Math.sin(a), r: i % 2 ? 0.9 : 1.6, o: 0.35 + 0.65 * (0.5 + 0.5 * Math.cos(a + 0.8)) };
  });
  return (
    <div className="ring" aria-hidden="true">
      <svg viewBox="0 0 200 200">
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="#C9A96E" opacity={d.o} />
        ))}
      </svg>
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const yFrame = useTransform(scrollYProgress, [0, 1], [0, 36]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);

  return (
    <section className="hero" id="top" ref={ref}>
      <DotField />
      <motion.div className="wrap hero-grid" style={{ opacity: fadeOut }}>
        <div className="hero-copy">
          <motion.p className="kicker" variants={fade} initial="hidden" animate="show" custom={0.2}>
            Public health physician · Gujarat, India
          </motion.p>
          <h1 className="hero-name">
            <span className="mask">
              <motion.span variants={line} initial="hidden" animate="show" custom={0}>
                Dr. Ruchit
              </motion.span>
            </span>
            <span className="mask">
              <motion.span className="gold-text" variants={line} initial="hidden" animate="show" custom={1}>
                Nawal
              </motion.span>
            </span>
          </h1>
          <motion.p className="creds" variants={fade} initial="hidden" animate="show" custom={0.8}>
            MBBS, MD (Community Medicine)
          </motion.p>
          <motion.div className="hero-rule" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.1, ease, delay: 0.95 }} />
          <motion.p className="role" variants={fade} initial="hidden" animate="show" custom={1.0}>
            Senior Resident, Department of Community Medicine
            <br />
            B.J. Medical College, Ahmedabad
          </motion.p>
          <motion.p className="thesis" variants={fade} initial="hidden" animate="show" custom={1.15}>
            I study who the health system misses, and why.
          </motion.p>
          <motion.div className="hero-cta" variants={fade} initial="hidden" animate="show" custom={1.3}>
            <a className="btn btn-gold" href="#story">
              Begin the story <Arrow dir="down" />
            </a>
            <a className="btn btn-ghost" href={CV_URL} download>
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease, delay: 0.3 }}
        >
          <Ring />
          <motion.div className="frame" style={{ y: yFrame }} aria-hidden="true" />
          <motion.div className="arch" style={{ y: yPortrait }}>
            <img src="/portrait.webp" alt="Portrait of Dr. Ruchit Nawal" width="460" height="460" />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a href="#glance" className="scroll-cue" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}>
        <span>Scroll</span>
        <i />
      </motion.a>
    </section>
  );
}
