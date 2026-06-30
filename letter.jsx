"import { useEffect, useRef, useState } from \"react\";

const LETTER = `Dear Nidhi,

There are some people in life whose existence quietly changes everything — you are mine.

From the very first day you came into our world, you brought a kind of magic with you. The kind that softens hard days, the kind that turns ordinary moments into memories worth keeping.

You are stronger than you know, kinder than the world deserves, and braver than most people will ever be. Watching you grow has been one of the proudest privileges of my life.

So today — on your birthday — I just want you to know: I see you. I'm grateful for you. I love you more than fireworks and golden skies.

Here's to every dream you'll chase, every story you'll write, and every smile yet to come.

Forever in your corner,
— With all my heart`;

export default function Letter() {
  const [text, setText] = useState(\"\");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            setStarted(true);
          }
        });
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const speed = 22;
    const tick = () => {
      i++;
      setText(LETTER.slice(0, i));
      if (i >= LETTER.length) {
        setDone(true);
        return;
      }
      setTimeout(tick, speed);
    };
    tick();
  }, [started]);

  return (
    <section
      id=\"letter\"
      ref={ref}
      className=\"relative py-24 sm:py-32 px-6\"
      data-testid=\"letter-section\"
    >
      <div
        className=\"absolute inset-0 pointer-events-none\"
        style={{
          background:
            \"radial-gradient(ellipse 50% 60% at 50% 50%, rgba(255,215,0,0.06), transparent 70%)\",
        }}
      />
      <div className=\"max-w-3xl mx-auto relative\">
        <div className=\"text-center mb-10\">
          <p className=\"text-xs tracking-[0.4em] uppercase text-pink-300 mb-4\">
            A letter for you
          </p>
          <h2 className=\"font-heading text-4xl sm:text-5xl md:text-6xl font-light text-white\">
            From my heart, <em className=\"italic text-pink-300 glow-pink\">to yours</em>
          </h2>
        </div>

        <div className=\"glass-gold rounded-3xl p-8 sm:p-12\">
          <pre
            className={`font-script whitespace-pre-wrap text-white/90 text-base sm:text-lg leading-loose ${
              !done ? \"caret\" : \"\"
            }`}
            data-testid=\"letter-text\"
          >
            {text}
          </pre>
        </div>
      </div>
    </section>
  );
}
"
