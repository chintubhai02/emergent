"import { useEffect, useState } from \"react\";
import FireworksCanvas from \"./FireworksCanvas\";

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`loader-wrapper ${hidden ? \"hidden\" : \"\"}`}
      data-testid=\"loading-screen\"
    >
      <div className=\"absolute inset-0\">
        <FireworksCanvas intensity=\"high\" />
      </div>
      <div className=\"relative z-10 text-center px-6\">
        <p className=\"text-sm tracking-[0.4em] uppercase text-pink-300 mb-4 glow-pink\">
          A Surprise For You
        </p>
        <h1 className=\"font-heading text-4xl sm:text-5xl md:text-6xl font-light text-white glow-gold\">
          Nidhi
        </h1>
        <div className=\"mt-8 flex items-center justify-center gap-2\">
          <span
            className=\"w-2 h-2 rounded-full bg-pink-400 animate-twinkle\"
            style={{ animationDelay: \"0s\" }}
          />
          <span
            className=\"w-2 h-2 rounded-full bg-yellow-300 animate-twinkle\"
            style={{ animationDelay: \"0.3s\" }}
          />
          <span
            className=\"w-2 h-2 rounded-full bg-pink-400 animate-twinkle\"
            style={{ animationDelay: \"0.6s\" }}
          />
        </div>
      </div>
    </div>
  );
}
"
