"import { useEffect, useRef, useState } from \"react\";

export default function CursorGlow() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (typeof window === \"undefined\") return;
    if (window.matchMedia(\"(max-width: 768px)\").matches) {
      setEnabled(false);
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let glowX = mouseX;
    let glowY = mouseY;
    let raf;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mouseX + \"px\";
        dotRef.current.style.top = mouseY + \"px\";
      }
      const tgt = e.target;
      if (tgt && (tgt.closest(\"button\") || tgt.closest(\"a\"))) {
        glowRef.current?.classList.add(\"hover\");
      } else {
        glowRef.current?.classList.remove(\"hover\");
      }
    };

    const tick = () => {
      glowX += (mouseX - glowX) * 0.18;
      glowY += (mouseY - glowY) * 0.18;
      if (glowRef.current) {
        glowRef.current.style.left = glowX + \"px\";
        glowRef.current.style.top = glowY + \"px\";
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener(\"mousemove\", handleMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener(\"mousemove\", handleMove);
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div ref={glowRef} className=\"cursor-glow\" data-testid=\"cursor-glow\" />
      <div ref={dotRef} className=\"cursor-dot\" data-testid=\"cursor-dot\" />
    </>
  );
}
"
