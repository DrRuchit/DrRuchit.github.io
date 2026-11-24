import { useEffect, useRef } from "react";

// Gold "bandhani" field: knots of dots on a loose hex grid, denser to the right, breathing slowly.
export default function DotField() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let dots = [];
    let raf = 0;
    let running = false;

    const seed = () => {
      dots = [];
      const step = w < 700 ? 38 : 46;
      let row = 0;
      for (let y = step / 2; y < h + step; y += step * 0.866, row++) {
        for (let x = (row % 2) * (step / 2); x < w + step; x += step) {
          const bias = x / w;
          if (Math.random() > 0.18 + bias * 0.72) continue;
          dots.push({
            x: x + (Math.random() - 0.5) * 8,
            y: y + (Math.random() - 0.5) * 8,
            r: 1.1 + Math.random() * 0.9,
            a: 0.22 + Math.random() * 0.45,
            p: Math.random() * Math.PI * 2,
            knot: Math.random() < 0.3,
          });
        }
      }
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#C9A96E";
      for (const d of dots) {
        const twinkle = reduce ? 1 : 0.62 + 0.38 * Math.sin(t / 1500 + d.p);
        const dy = reduce ? 0 : Math.sin(t / 3200 + d.p) * 2.2;
        ctx.globalAlpha = d.a * twinkle;
        ctx.beginPath();
        ctx.arc(d.x, d.y + dy, d.r, 0, Math.PI * 2);
        ctx.fill();
        if (d.knot) {
          ctx.globalAlpha = d.a * twinkle * 0.55;
          for (let k = 0; k < 8; k++) {
            const an = (k * Math.PI) / 4;
            ctx.beginPath();
            ctx.arc(d.x + Math.cos(an) * 5.2, d.y + dy + Math.sin(an) * 5.2, 0.75, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = (t) => {
      if (!running) return;
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const nw = canvas.clientWidth;
      const nh = canvas.clientHeight;
      const reseed = Math.abs(nw - w) > 40 || Math.abs(nh - h) > 160 || dots.length === 0;
      w = nw;
      h = nh;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reseed) seed();
      draw(performance.now());
    };

    resize();
    window.addEventListener("resize", resize);
    const io = new IntersectionObserver(([entry]) => {
      const next = entry.isIntersecting && !reduce;
      if (next && !running) {
        running = true;
        raf = requestAnimationFrame(loop);
      } else if (!next) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(canvas);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="dotfield" aria-hidden="true" />;
}
