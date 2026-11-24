import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Arrow, Reveal, ease } from "./motion.jsx";
import { PUBS } from "../data.js";

const FILTERS = [
  ["all", "All"],
  ["article", "Articles"],
  ["abstract", "Abstracts"],
  ["session", "Award sessions"],
];

function Authors({ list }) {
  return (
    <p className="authors">
      {list.map((a, i) => (
        <span key={a}>
          {i ? ", " : ""}
          {a === "Nawal R" ? <b>{a}</b> : a}
        </span>
      ))}
    </p>
  );
}

export default function Publications() {
  const [filter, setFilter] = useState("all");
  const items = PUBS.filter((p) => filter === "all" || p.type === filter);

  return (
    <section className="section pubs-sec" id="publications" aria-labelledby="pubs-title">
      <div className="wrap">
        <div className="pubs-top">
          <div className="section-head">
            <Reveal as="p" className="kicker">
              Publications and presentations
            </Reveal>
            <Reveal as="h2" id="pubs-title" delay={0.05}>
              On the <em>record</em>
            </Reveal>
          </div>
          <Reveal className="seg seg-light" role="group" aria-label="Filter publications" delay={0.1}>
            {FILTERS.map(([key, label]) => (
              <button key={key} type="button" aria-pressed={filter === key} onClick={() => setFilter(key)}>
                {filter === key && <motion.span layoutId="pub-pill" className="pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                <span className="seg-label">{label}</span>
              </button>
            ))}
          </Reveal>
        </div>

        <Reveal className="pub-list" delay={0.1}>
          <AnimatePresence mode="popLayout" initial={false}>
            {items.map((p) => (
              <motion.article
                layout
                key={p.id}
                className="pub"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease }}
              >
                <div className="pub-side">
                  <span className="pub-type">{p.label}</span>
                  {p.year && <span className="pub-year">{p.year}</span>}
                  {p.badge && <span className="badge">{p.badge}</span>}
                </div>
                <div className="pub-main">
                  <h3>{p.title}</h3>
                  {p.authors && <Authors list={p.authors} />}
                  {p.note && <p className="authors">{p.note}</p>}
                  {p.venue && <p className="venue">{p.venue}</p>}
                  {p.links && (
                    <div className="plinks">
                      {p.links.map((l) => (
                        <a key={l.href} className="plink" href={l.href} target="_blank" rel="noopener noreferrer">
                          {l.label} <Arrow dir="out" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
