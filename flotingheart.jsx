"import { useMemo } from \"react\";

export default function FloatingHearts({ count = 14 }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: Math.random() * 12 + 14,
        scale: Math.random() * 0.6 + 0.5,
        sway: (Math.random() * 80 - 40) + \"px\",
      })),
    [count]
  );

  return (
    <div className=\"absolute inset-0 pointer-events-none overflow-hidden\" data-testid=\"floating-hearts\">
      {hearts.map((h) => (
        <div
          key={h.id}
          className=\"absolute bottom-0\"
          style={{
            left: `${h.left}%`,
            animation: `float-up ${h.duration}s linear infinite`,
            animationDelay: `${h.delay}s`,
            \"--sway\": h.sway,
            transform: `scale(${h.scale})`,
          }}
        >
          <div className=\"heart-shape\" />
        </div>
      ))}
    </div>
  );
}
"
