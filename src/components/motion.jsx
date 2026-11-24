import { useEffect, useRef } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";

// One easing curve for the whole site: fast start, long soft landing.
export const ease = [0.22, 1, 0.36, 1];

export function Reveal({ as = "div", delay = 0, y = 26, className, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, ease, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function Counter({ value, prefix = "", suffix = "", duration = 1.8, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  useEffect(() => {
    const node = ref.current;
    if (!inView || !node) return undefined;
    if (reduce) {
      node.textContent = prefix + value + suffix;
      return undefined;
    }
    const controls = animate(0, value, {
      duration,
      ease,
      onUpdate: (v) => {
        node.textContent = prefix + Math.round(v) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value, prefix, suffix, duration]);
  return (
    <span className={className}>
      <span ref={ref} aria-hidden="true">
        {prefix}0{suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {value}
        {suffix}
      </span>
    </span>
  );
}

export function Arrow({ dir = "right" }) {
  const d =
    dir === "down" ? "M12 5v14M6 13l6 6 6-6" : dir === "out" ? "M7 17L17 7M9 7h8v8" : "M5 12h14M13 6l6 6-6 6";
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
