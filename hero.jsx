"import FireworksCanvas from \"./FireworksCanvas\";
import StarsField from \"./StarsField\";
import FloatingHearts from \"./FloatingHearts\";
import { ChevronDown } from \"lucide-react\";

export default function Hero({ onStart }) {
  return (
    <section
      id=\"hero\"
      className=\"relative min-h-screen flex items-center justify-center overflow-hidden\"
      data-testid=\"hero-section\"
    >
      <StarsField count={150} />
      <FireworksCanvas intensity=\"normal\" />
      <FloatingHearts count={10} />
      <div className=\"fog\" />

      <div className=\"relative z-10 text-center px-6 max-w-4xl\">
        <p
          className=\"text-xs sm:text-sm tracking-[0.5em] uppercase text-pink-300 mb-6 glow-pink\"
          data-testid=\"hero-overline\"
        >
          07 · July · 2026
        </p>
        <h1
          className=\"font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight\"
          data-testid=\"hero-title\"
        >
          <span className=\"block text-white\">Happy Birthday</span>
          <span className=\"block mt-2\">
            <span className=\"bg-gradient-to-r from-pink-400 via-yellow-300 to-pink-400 bg-clip-text text-transparent glow-pink\">
              Nidhi
            </span>{\" \"}
            <span className=\"text-pink-400 glow-pink\">❤</span>
          </span>
        </h1>
        <p
          className=\"mt-8 text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed\"
          data-testid=\"hero-subtitle\"
        >
          To the most beautiful sister.
          <br />
          Thank you for filling my life with happiness, laughter and countless memories.
        </p>

        <div className=\"mt-12 flex flex-col items-center gap-6\">
          <button
            onClick={onStart}
            className=\"neon-btn\"
            data-testid=\"start-surprise-button\"
          >
            Start the Surprise
          </button>
          <ChevronDown
            className=\"text-pink-300/60 animate-bounce\"
            size={28}
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
"
