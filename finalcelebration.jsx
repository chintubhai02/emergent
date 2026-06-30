"import { useEffect, useRef, useState } from \"react\";
import confetti from \"canvas-confetti\";
import FireworksCanvas from \"./FireworksCanvas\";
import FloatingHearts from \"./FloatingHearts\";
import StarsField from \"./StarsField\";

export default function FinalCelebration({ onCelebrate }) {
  const ref = useRef(null);
  const triggeredRef = useRef(false);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !triggeredRef.current) {
            triggeredRef.current = true;
            setTriggered(true);
            fireConfetti();
            onCelebrate?.();
          }
        });
      },
      { threshold: 0.35 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [onCelebrate]);

  const fireConfetti = () => {
    const duration = 6 * 1000;
    const end = Date.now() + duration;
    const colors = [\"#ff1493\", \"#ffd700\", \"#ff69b4\", \"#ffffff\", \"#daa520\"];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.2 },
        colors,
        scalar: 1.1,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.2 },
        colors,
        scalar: 1.1,
      });
      confetti({
        particleCount: 3,
        startVelocity: 25,
        spread: 360,
        gravity: 0.6,
        origin: { x: Math.random(), y: 0 },
        colors,
        scalar: 0.9,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();

    // big bursts
    setTimeout(() => {
      confetti({ particleCount: 200, spread: 160, origin: { y: 0.4 }, colors });
    }, 300);
    setTimeout(() => {
      confetti({ particleCount: 150, spread: 140, origin: { x: 0.2, y: 0.5 }, colors });
      confetti({ particleCount: 150, spread: 140, origin: { x: 0.8, y: 0.5 }, colors });
    }, 1200);
  };

  const replay = () => {
    fireConfetti();
  };

  return (
    <section
      id=\"final\"
      ref={ref}
      className=\"relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-6\"
      data-testid=\"final-section\"
    >
      <StarsField count={180} />
      <FireworksCanvas intensity={triggered ? \"high\" : \"normal\"} />
      <FloatingHearts count={20} />
      <div className=\"fog\" />

      <div className=\"relative z-10 text-center max-w-3xl\">
        <p className=\"text-xs tracking-[0.5em] uppercase text-pink-300 mb-6 glow-pink\">
          The Final Surprise
        </p>
        <h2
          className=\"font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight\"
          data-testid=\"final-title\"
        >
          <span className=\"block text-white\">Happy Birthday</span>
          <span className=\"block mt-3\">
            <span className=\"bg-gradient-to-r from-pink-400 via-yellow-300 to-pink-400 bg-clip-text text-transparent glow-pink\">
              Nidhi
            </span>{\" \"}
            <span className=\"text-pink-400 glow-pink\">❤</span>
          </span>
        </h2>
        <p className=\"mt-8 font-heading italic text-xl sm:text-2xl md:text-3xl text-white/80 leading-relaxed\">
          May every dream of yours
          <br className=\"hidden sm:block\" /> come true.
        </p>

        <div className=\"mt-12\">
          <button
            onClick={replay}
            className=\"neon-btn\"
            data-testid=\"replay-celebration-button\"
          >
            Celebrate Again
          </button>
        </div>

        <p className=\"mt-16 text-white/40 text-xs tracking-[0.3em] uppercase\">
          made with ❤ — just for you
        </p>
      </div>
    </section>
  );
}
"
