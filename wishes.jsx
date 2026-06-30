"import { Heart, Star, Sparkles, Gift, Cake, Music } from \"lucide-react\";

const WISHES = [
  {
    icon: Heart,
    title: \"Love, always\",
    text: \"May your heart stay as wide and warm as it has always been. The world is better for it.\",
  },
  {
    icon: Star,
    title: \"Shine bright\",
    text: \"Keep being the brightest star in every room you walk into — including the ones you don't realize you light up.\",
  },
  {
    icon: Sparkles,
    title: \"Magic everywhere\",
    text: \"May ordinary days surprise you with extraordinary joy. Tiny miracles, on repeat.\",
  },
  {
    icon: Gift,
    title: \"Endless gifts\",
    text: \"May life keep handing you the things you didn't even know you needed — and the people who feel like home.\",
  },
  {
    icon: Cake,
    title: \"Every dream\",
    text: \"Make a wish. Make many. May every single one find its way back to you, sweeter than you imagined.\",
  },
  {
    icon: Music,
    title: \"Your song\",
    text: \"May your life keep playing the most beautiful melody — one you write fearlessly, your way.\",
  },
];

export default function Wishes() {
  return (
    <section
      id=\"wishes\"
      className=\"relative py-24 sm:py-32 px-6\"
      data-testid=\"wishes-section\"
    >
      <div className=\"max-w-6xl mx-auto\">
        <div className=\"text-center mb-16\">
          <p className=\"text-xs tracking-[0.4em] uppercase text-pink-300 mb-4\">
            Wishes
          </p>
          <h2 className=\"font-heading text-4xl sm:text-5xl md:text-6xl font-light text-white\">
            Six little <em className=\"italic text-yellow-300 glow-gold\">spells</em> for you
          </h2>
        </div>

        <div className=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6\">
          {WISHES.map((w, i) => {
            const Icon = w.icon;
            return (
              <div
                key={i}
                className=\"glass-pink rounded-2xl p-8 lift relative overflow-hidden\"
                data-testid={`wish-card-${i}`}
              >
                <div className=\"absolute -top-6 -right-6 w-24 h-24 rounded-full bg-pink-500/20 blur-2xl\" />
                <Icon
                  className=\"text-yellow-300 mb-5\"
                  size={28}
                  strokeWidth={1.5}
                />
                <h3 className=\"font-heading text-2xl text-white mb-3 leading-tight\">
                  {w.title}
                </h3>
                <p className=\"text-white/70 font-light leading-relaxed\">
                  {w.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"
