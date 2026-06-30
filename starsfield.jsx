"import { useMemo } from \"react\";

export default function StarsField({ count = 120 }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
        color: Math.random() > 0.7 ? \"#ffd700\" : Math.random() > 0.5 ? \"#ff69b4\" : \"#ffffff\",
      })),
    [count]
  );

  return (
    <div className=\"absolute inset-0 pointer-events-none overflow-hidden\" data-testid=\"stars-field\">
      {stars.map((s) => (
        <div
          key={s.id}
          className=\"absolute rounded-full animate-twinkle\"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: s.color,
            boxShadow: `0 0 ${s.size * 4}px ${s.color}`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
"
