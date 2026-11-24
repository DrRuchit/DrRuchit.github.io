import { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Counter, Reveal, ease } from "./motion.jsx";
import { TB } from "../data.js";

// Deterministic scatter: the 92 dots start loose and settle into place, row by row,
// as the card comes into view. Same pattern on every visit.
function scatter(n, seed) {
  let s = seed;
  const rnd = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  return Array.from({ length: n }, (_, i) => ({
    x: (rnd() - 0.5) * 560,
    y: (rnd() - 0.5) * 240,
    d: 0.1 + (i % 23) * 0.02 + Math.floor(i / 23) * 0.08,
  }));
}

const dot = {
  out: (p) => ({ x: p.x, y: p.y, opacity: 0, scale: 0.2 }),
  in: (p) => ({
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 70, damping: 14, mass: 0.9, delay: p.d },
  }),
};

function DelayRow({ label, days, pct, muted }) {
  return (
    <div className={"delay" + (muted ? " muted" : "")}>
      <span>{label}</span>
      <span className="track">
        <motion.i
          className="fill"
          style={{ width: pct + "%" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 1.4, ease, delay: muted ? 0.35 : 0.15 }}
        />
      </span>
      <b>{days} days</b>
    </div>
  );
}

export default function TbAudit() {
  const points = useMemo(() => scatter(92, 23), []);
  const vizRef = useRef(null);
  const inView = useInView(vizRef, { once: true, margin: "0px 0px -25% 0px" });

  return (
    <section className="section tb" aria-labelledby="tb-title">
      <div className="wrap">
        <div className="tb-head">
          <div>
            <Reveal as="p" className="kicker">
              MD dissertation · H.M. Patel Award session 2026
            </Reveal>
            <Reveal as="h2" id="tb-title" delay={0.05}>
              Ninety-two deaths, <em>audited one by one</em>
            </Reveal>
          </div>
          <div>
            <Reveal as="p" className="official" delay={0.1}>
              {TB.title}
            </Reveal>
            <Reveal as="p" className="study-body" delay={0.15}>
              {TB.body}
            </Reveal>
          </div>
        </div>

        <Reveal className="tb-card" delay={0.1} y={40}>
          <div className="tb-toolbar">
            <p className="inst-label">One dot for each person who died</p>
            <p className="tb-total">
              <Counter className="tb-total-num" value={92} duration={2.4} />
              <span>deaths audited</span>
            </p>
          </div>
          <div ref={vizRef} className="tb-viz" role="img" aria-label="92 dots, one for each death audited">
            <div className="tb-all">
              {points.map((p, i) => (
                <motion.span key={i} className="dot" custom={p} variants={dot} initial="out" animate={inView ? "in" : "out"} />
              ))}
            </div>
          </div>
          <p className="caveat">
            {TB.caption} {TB.note}
          </p>
        </Reveal>

        <div className="tb-lower">
          <Reveal className="delays-card">
            <p className="inst-label">Median delays, three-delays framework</p>
            <div className="delays">
              <DelayRow label="Patient delay" days={14} pct={100} />
              <DelayRow label="Diagnostic delay" days={7} pct={50} muted />
            </div>
          </Reveal>
          <Reveal as="p" className="insight" delay={0.1}>
            {TB.insight}
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <dl className="meta meta-4">
            {TB.meta.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
