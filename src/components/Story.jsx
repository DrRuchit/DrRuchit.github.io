import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useScroll, useSpring } from "framer-motion";
import { Reveal, ease } from "./motion.jsx";
import { CHAPTERS } from "../data.js";

function Chapter({ c, i, active, onActive }) {
  const ref = useRef(null);
  const centred = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (centred) onActive(i);
  }, [centred, i, onActive]);

  return (
    <article ref={ref} id={"ch-" + c.id} className={"chapter" + (active ? " is-active" : "")}>
      <div className="chapter-body">
        <span className="node" aria-hidden="true" />
        <Reveal as="p" className="ch-meta">
          {c.years} · {c.place}
        </Reveal>
        <Reveal as="h3" className="ch-title" delay={0.05}>
          {c.title}
        </Reveal>
        <Reveal as="p" className="ch-role" delay={0.1}>
          {c.role}
        </Reveal>
        <Reveal as="p" className="ch-text" delay={0.15}>
          {c.text}
        </Reveal>
        <Reveal className="ch-tags" delay={0.2}>
          {c.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </Reveal>
      </div>
    </article>
  );
}

export default function Story() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start 55%", "end 55%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.4 });
  const c = CHAPTERS[active];

  return (
    <section className="section story" id="story" aria-labelledby="story-title">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="p" className="kicker">
            The story so far
          </Reveal>
          <Reveal as="h2" id="story-title" delay={0.05}>
            Six chapters, <em>one thread.</em>
          </Reveal>
          <Reveal as="p" className="lede" delay={0.1}>
            From a medical college in Valsad to the department where I now teach: the posts that shaped the work.
          </Reveal>
        </div>

        <div className="story-grid">
          <aside className="story-sticky">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -26 }}
                transition={{ duration: 0.45, ease }}
              >
                <p className="chap-n">Chapter {c.n} of VI</p>
                <p className="chap-years">{c.years}</p>
                <p className="chap-place">{c.place}</p>
              </motion.div>
            </AnimatePresence>
            <ol className="chap-list">
              {CHAPTERS.map((ch, i) => (
                <li key={ch.id} className={i === active ? "on" : ""}>
                  <a href={"#ch-" + ch.id}>
                    <span className="pip" aria-hidden="true" />
                    {ch.title}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <div className="story-track" ref={trackRef}>
            <div className="thread" aria-hidden="true">
              <motion.div className="thread-fill" style={{ scaleY: fill }} />
            </div>
            {CHAPTERS.map((ch, i) => (
              <Chapter key={ch.id} c={ch} i={i} active={i === active} onActive={setActive} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
