"/* Elegant placeholder gallery — abstract gradients + silhouettes */
const PALETTES = [
  [\"#ff1493\", \"#ffd700\"],
  [\"#8a2be2\", \"#ff69b4\"],
  [\"#ffd700\", \"#ff4500\"],
  [\"#1e90ff\", \"#ff1493\"],
  [\"#ff69b4\", \"#daa520\"],
  [\"#9370db\", \"#ffd700\"],
];

function Placeholder({ idx, label }) {
  const [a, b] = PALETTES[idx % PALETTES.length];
  return (
    <div className=\"relative w-full h-full rounded-2xl overflow-hidden\">
      <div
        className=\"absolute inset-0\"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${a}55, transparent 60%), radial-gradient(circle at 70% 70%, ${b}55, transparent 60%), linear-gradient(135deg, #0b0c1a, #05050a)`,
        }}
      />
      <svg
        viewBox=\"0 0 200 260\"
        className=\"absolute inset-0 w-full h-full opacity-80\"
        preserveAspectRatio=\"xMidYMid slice\"
      >
        <defs>
          <linearGradient id={`sil-${idx}`} x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">
            <stop offset=\"0%\" stopColor=\"#1a1a2e\" />
            <stop offset=\"100%\" stopColor=\"#000\" />
          </linearGradient>
        </defs>
        <ellipse cx=\"100\" cy=\"90\" rx=\"34\" ry=\"40\" fill={`url(#sil-${idx})`} />
        <path
          d=\"M 45 260 Q 45 165 100 145 Q 155 165 155 260 Z\"
          fill={`url(#sil-${idx})`}
        />
      </svg>
      <div className=\"absolute inset-0 flex items-end p-4\">
        <span className=\"font-heading italic text-white/70 text-sm\">
          {label}
        </span>
      </div>
    </div>
  );
}

const GALLERY = [
  { label: \"a forever smile\", span: \"row-span-2\" },
  { label: \"golden afternoons\", span: \"\" },
  { label: \"quiet courage\", span: \"\" },
  { label: \"kindness in motion\", span: \"row-span-2\" },
  { label: \"laughter, on repeat\", span: \"\" },
  { label: \"your light, always\", span: \"\" },
];

export default function Gallery() {
  return (
    <section
      id=\"gallery\"
      className=\"relative py-24 sm:py-32 px-6\"
      data-testid=\"gallery-section\"
    >
      <div className=\"max-w-6xl mx-auto\">
        <div className=\"text-center mb-16\">
          <p className=\"text-xs tracking-[0.4em] uppercase text-pink-300 mb-4\">
            Gallery
          </p>
          <h2 className=\"font-heading text-4xl sm:text-5xl md:text-6xl font-light text-white\">
            Frames of <em className=\"italic text-yellow-300 glow-gold\">you</em>
          </h2>
          <p className=\"mt-4 text-white/50 text-sm font-light\">
            (real photos coming soon — placeholders for now)
          </p>
        </div>

        <div className=\"grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[180px] sm:auto-rows-[220px]\">
          {GALLERY.map((g, i) => (
            <div
              key={i}
              className={`glass rounded-2xl overflow-hidden lift ${g.span}`}
              data-testid={`gallery-tile-${i}`}
            >
              <Placeholder idx={i} label={g.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"
