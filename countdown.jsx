"import { useEffect, useState } from \"react\";

const TARGET = new Date(\"2026-07-07T00:00:00\").getTime();

function computeDiff() {
  const now = Date.now();
  let diff = Math.max(0, TARGET - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * 1000 * 60 * 60 * 24;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * 1000 * 60 * 60;
  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * 1000 * 60;
  const seconds = Math.floor(diff / 1000);
  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [time, setTime] = useState(computeDiff());

  useEffect(() => {
    const t = setInterval(() => setTime(computeDiff()), 1000);
    return () => clearInterval(t);
  }, []);

  const items = [
    { label: \"Days\", value: time.days },
    { label: \"Hours\", value: time.hours },
    { label: \"Minutes\", value: time.minutes },
    { label: \"Seconds\", value: time.seconds },
  ];

  return (
    <section
      id=\"countdown\"
      className=\"relative py-24 sm:py-32 px-6\"
      data-testid=\"countdown-section\"
    >
      <div className=\"max-w-5xl mx-auto text-center\">
        <p className=\"text-xs tracking-[0.4em] uppercase text-pink-300 mb-4\">
          Counting down to your big day
        </p>
        <h2 className=\"font-heading text-4xl sm:text-5xl md:text-6xl font-light text-white\">
          Until <span className=\"italic text-pink-300 glow-pink\">07 July 2026</span>
        </h2>
        <div className=\"mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto\">
          {items.map((it) => (
            <div
              key={it.label}
              className=\"glass rounded-2xl p-6 sm:p-8 lift\"
              data-testid={`countdown-${it.label.toLowerCase()}`}
            >
              <div className=\"font-heading text-5xl sm:text-6xl md:text-7xl font-light text-yellow-300 glow-gold tabular-nums\">
                {String(it.value).padStart(2, \"0\")}
              </div>
              <div className=\"mt-2 text-xs tracking-[0.3em] uppercase text-white/60\">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"
