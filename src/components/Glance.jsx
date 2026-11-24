import { motion } from "framer-motion";
import { Counter, ease } from "./motion.jsx";
import { GLANCE } from "../data.js";

export default function Glance() {
  return (
    <section className="glance" id="glance" aria-label="At a glance">
      <div className="wrap glance-grid">
        {GLANCE.map((g, i) => (
          <motion.div
            className="g-item"
            key={g.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 0.85, ease, delay: i * 0.08 }}
          >
            <Counter className="g-num" value={g.value} suffix={g.suffix || ""} />
            <span className="g-label">{g.label}</span>
            <span className="g-sub">{g.sub}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
