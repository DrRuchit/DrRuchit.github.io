import { motion } from "framer-motion";
import { Reveal, ease } from "./motion.jsx";
import { AWARDS, EDUCATION, REGISTRATION, SKILLS } from "../data.js";

const ICONS = {
  medal: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14L7 22l5-3 5 3-1.5-8" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  star: <path d="M12 2.5l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.3l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z" />,
};

export default function Credentials() {
  return (
    <section className="section creds-sec" aria-labelledby="creds-title">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="p" className="kicker">
            Recognition and training
          </Reveal>
          <Reveal as="h2" id="creds-title" delay={0.05}>
            What the work <em>has earned</em>
          </Reveal>
        </div>

        <div className="awards">
          {AWARDS.map((a, i) => (
            <motion.div
              key={a.title}
              className="award"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.85, ease, delay: i * 0.1 }}
            >
              <span className="ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {ICONS[a.icon]}
                </svg>
              </span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="cred-grid">
          <div>
            <Reveal as="h3" className="col-title">
              Education
            </Reveal>
            <ol className="edu-list">
              {EDUCATION.map((e, i) => (
                <Reveal as="li" key={e.title} delay={i * 0.06}>
                  <span className="edu-yr">{e.years}</span>
                  <span>
                    <strong>{e.title}</strong>
                    <span className="edu-where">{e.where}</span>
                  </span>
                </Reveal>
              ))}
            </ol>
          </div>
          <div>
            <Reveal as="h3" className="col-title">
              Skills
            </Reveal>
            {SKILLS.map((g, gi) => (
              <div className="skill-group" key={g.group}>
                <Reveal as="h4" delay={gi * 0.05}>
                  {g.group}
                </Reveal>
                <div className="chips">
                  {g.items.map((s, i) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "0px 0px -6% 0px" }}
                      transition={{ duration: 0.5, ease, delay: 0.05 + i * 0.035 }}
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={0.05}>
          <dl className="reg">
            {REGISTRATION.map(([k, v]) => (
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
