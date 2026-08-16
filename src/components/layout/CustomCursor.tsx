import { useEffect, useRef, useState } from "react";

/** Premium pointer treatment for desktop; disabled on touch/reduced-motion devices. */
export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(finePointer.matches && !reduced.matches);
    update();
    finePointer.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      finePointer.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let targetX = ringX;
    let targetY = ringY;
    let frame = 0;

    const move = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }
    };

    const hover = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setActive(Boolean(target?.closest("a,button,[role='button'],input,textarea,select")));
    };

    const click = () => {
      setClicking(true);
      window.setTimeout(() => setClicking(false), 120);
    };

    const animate = () => {
      ringX += (targetX - ringX) * 0.55;
      ringY += (targetY - ringY) * 0.28;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", hover, { passive: true });
    window.addEventListener("mousedown", click, { passive: true });
    frame = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", hover);
      window.removeEventListener("mousedown", click);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div className="custom-cursor-dot" ref={dot} aria-hidden="true" />
      <div
        className={`custom-cursor-ring ${active ? "is-active" : ""} ${clicking ? "is-clicking" : ""}`}
        ref={ring}
        aria-hidden="true"
      >
        <span />
      </div>
    </>
  );
}
