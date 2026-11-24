import { motion } from "framer-motion";
import { Arrow, Counter, Reveal, ease } from "./motion.jsx";
import { VEL } from "../data.js";

function BarRow({ label, value, pct, vel }) {
  return (
    <div className={"bar-row" + (vel ? " vel" : "")}>
      <span className="bar-label">{label}</span>
      <span className="track">
        <motion.i
          className="fill"
          style={{ width: pct + "%" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 1.7, ease, delay: vel ? 0.45 : 0.2 }}
        />
      </span>
      <b>
        <Counter value={value} duration={vel ? 2.1 : 1.6} />
      </b>
    </div>
  );
}

export default function BlueLight() {
  return (
    <section className="section blue" id="velscope" aria-labelledby="vel-title">
      <div className="wrap blue-grid">
        <div className="blue-copy">
          <Reveal as="p" className="kicker">
            Research · H.M. Patel Award session 2024
          </Reveal>
          <Reveal as="h2" id="vel-title" delay={0.05}>
            Betting on
            <br />
            <em>blue light</em>
          </Reveal>
          <Reveal as="p" className="study-sub" delay={0.1}>
            VELscope autofluorescence versus conventional oral examination among Gujarat's tobacco users.
          </Reveal>
          <Reveal as="p" className="study-body" delay={0.15}>
            {VEL.body}
          </Reveal>
          <Reveal delay={0.2}>
            <dl className="meta">
              {VEL.meta.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal className="links" delay={0.25}>
            <a className="btn btn-blue" href={VEL.doi} target="_blank" rel="noopener noreferrer">
              Read the paper <Arrow dir="out" />
            </a>
            <a className="btn btn-ghost" href={VEL.pubmed} target="_blank" rel="noopener noreferrer">
              PubMed <Arrow dir="out" />
            </a>
          </Reveal>
        </div>

        <Reveal className="instrument" delay={0.1} y={40}>
          <motion.div
            className="beam"
            aria-hidden="true"
            initial={{ x: "-160%" }}
            whileInView={{ x: "420%" }}
            viewport={{ once: true, margin: "0px 0px -20% 0px" }}
            transition={{ duration: 2.6, ease: "easeInOut", delay: 0.5 }}
          />
          <p className="inst-label">Same 310 mouths, two examinations</p>
          <div className="big-delta">
            <Counter className="delta-num" value={414} prefix="+" duration={2.2} />
            <span>more areas of change seen under blue light</span>
          </div>
          <div className="bars">
            <BarRow label="White-light exam" value={245} pct={37.2} />
            <BarRow label="VELscope" value={659} pct={100} vel />
          </div>
          <p className="caveat">{VEL.caveat}</p>
          <p className="venue-line">{VEL.venue}</p>
        </Reveal>
      </div>
    </section>
  );
}
