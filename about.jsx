"import FloatingHearts from \"./FloatingHearts\";

export default function About() {
  return (
    <section
      id=\"about\"
      className=\"relative py-24 sm:py-32 px-6 overflow-hidden\"
      data-testid=\"about-section\"
    >
      <FloatingHearts count={6} />
      <div className=\"max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center\">
        {/* Portrait silhouette frame */}
        <div className=\"relative order-2 md:order-1\">
          <div
            className=\"relative aspect-[3/4] rounded-3xl overflow-hidden glass-pink p-2\"
            data-testid=\"about-portrait\"
          >
            <div className=\"w-full h-full rounded-2xl relative overflow-hidden\">
              <div
                className=\"absolute inset-0\"
                style={{
                  background:
                    \"radial-gradient(ellipse 60% 70% at 50% 40%, rgba(255,20,147,0.35), transparent 65%), radial-gradient(ellipse 80% 60% at 50% 75%, rgba(255,215,0,0.2), transparent 70%), linear-gradient(135deg, #0b0c1a, #05050a)\",
                }}
              />
              <svg
                viewBox=\"0 0 300 400\"
                className=\"absolute inset-0 w-full h-full\"
                preserveAspectRatio=\"xMidYMid slice\"
              >
                <defs>
                  <linearGradient id=\"sil\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">
                    <stop offset=\"0%\" stopColor=\"#1a1a2e\" />
                    <stop offset=\"100%\" stopColor=\"#000\" />
                  </linearGradient>
                </defs>
                <ellipse cx=\"150\" cy=\"140\" rx=\"55\" ry=\"65\" fill=\"url(#sil)\" />
                <path
                  d=\"M 70 400 Q 70 260 150 230 Q 230 260 230 400 Z\"
                  fill=\"url(#sil)\"
                />
              </svg>
              <div className=\"absolute inset-0 flex items-end justify-center pb-6\">
                <span className=\"font-heading italic text-2xl text-pink-200/70\">
                  the star of the day
                </span>
              </div>
            </div>
          </div>
          <div className=\"absolute -top-4 -left-4 w-24 h-24 rounded-full bg-pink-500/20 blur-3xl\" />
          <div className=\"absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-yellow-400/20 blur-3xl\" />
        </div>

        {/* Text */}
        <div className=\"order-1 md:order-2\">
          <p className=\"text-xs tracking-[0.4em] uppercase text-pink-300 mb-4\">
            About Her
          </p>
          <h2 className=\"font-heading text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight\">
            A heart made of <em className=\"italic text-yellow-300 glow-gold\">stardust</em> & sunshine.
          </h2>
          <p className=\"mt-6 text-base sm:text-lg text-white/70 leading-relaxed font-light\">
            Nidhi — my sister, my best friend, my first hero. You walk through
            this world with a kindness that feels impossibly rare and a smile
            that turns ordinary days into something we want to remember.
          </p>
          <p className=\"mt-4 text-base sm:text-lg text-white/70 leading-relaxed font-light\">
            You are courage in soft clothing, laughter that fills every empty
            room, and the quiet magic that keeps our little family glowing. This
            page is a small love letter to all the light you give without ever
            asking for any back.
          </p>
          <div className=\"mt-8 flex flex-wrap gap-3\" data-testid=\"about-tags\">
            {[\"kind\", \"fearless\", \"luminous\", \"thoughtful\", \"irreplaceable\"].map(
              (t) => (
                <span
                  key={t}
                  className=\"px-4 py-2 rounded-full glass text-sm text-white/80 font-light tracking-wider\"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
"
