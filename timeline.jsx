"import { useEffect, useRef, useState } from \"react\";

const MEMORIES = [
  {
    year: \"2006\",
    title: \"The Day You Arrived\",
    text: \"The world got softer, brighter, kinder. A little hand wrapped around mine and never really let go.\",
  },
  {
    year: \"2010\",
    title: \"First Adventures\",
    text: \"Tiny shoes, mismatched socks, the loudest laughs in the quietest rooms. We were a team from day one.\",
  },
  {
    year: \"2014\",
    title: \"Schoolyard Heroes\",
    text: \"Sharing secrets in stairwells, defending each other on playgrounds — partners in everything.\",
  },
  {
    year: \"2018\",
    title: \"Late Night Talks\",
    text: \"Dreams, fears, songs on repeat. You taught me that listening is its own kind of love.\",
  },
  {
    year: \"2022\",
    title: \"Becoming You\",
    text: \"Watching you grow into a fierce, gentle, unstoppable human — proudest brother/sister in the world.\",
  },
  {
    year: \"Today\",
    title: \"Still The Best Part\",
    text: \"Through every season, you remain the warmest chapter of my story. Here's to all the ones still to come.\",
  },
];

export default function Timeline() {
  const itemRefs = useRef([]);
  const [visible, setVisible] = useState(new Set());

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible((v) => new Set(v).add(Number(e.target.dataset.idx)));
          }
        });
      },
      { threshold: 0.3 }
    );
    itemRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id=\"timeline\"
      className=\"relative py-24 sm:py-32 px-6\"
      data-testid=\"timeline-section\"
    >
      <div className=\"max-w-6xl mx-auto\">
        <div className=\"text-center mb-16\">
          <p className=\"text-xs tracking-[0.4em] uppercase text-pink-300 mb-4\">
            Memories
          </p>
          <h2 className=\"font-heading text-4xl sm:text-5xl md:text-6xl font-light text-white\">
            A timeline of <em className=\"italic text-pink-300 glow-pink\">us</em>
          </h2>
        </div>

        <div className=\"relative\">
          <div className=\"timeline-line\" />
          <div className=\"space-y-12 md:space-y-20\">
            {MEMORIES.map((m, i) => {
              const isLeft = i % 2 === 0;
              const isVis = visible.has(i);
              return (
                <div
                  key={i}
                  ref={(el) => (itemRefs.current[i] = el)}
                  data-idx={i}
                  className={`reveal ${isVis ? \"visible\" : \"\"} relative flex ${
                    isLeft ? \"md:justify-start\" : \"md:justify-end\"
                  } pl-12 md:pl-0`}
                  data-testid={`timeline-item-${i}`}
                >
                  {/* Dot */}
                  <div className=\"absolute left-[20px] md:left-1/2 top-6 -translate-x-1/2 z-10\">
                    <div className=\"w-4 h-4 rounded-full bg-gradient-to-br from-pink-400 to-yellow-300 shadow-[0_0_20px_rgba(255,20,147,0.7)]\" />
                  </div>

                  <div
                    className={`glass rounded-2xl p-6 sm:p-8 lift w-full md:w-[44%] ${
                      isLeft ? \"md:mr-auto md:pr-12\" : \"md:ml-auto md:pl-12\"
                    }`}
                  >
                    <span className=\"font-script text-sm tracking-widest text-yellow-300\">
                      {m.year}
                    </span>
                    <h3 className=\"font-heading text-2xl sm:text-3xl text-white mt-2 mb-3\">
                      {m.title}
                    </h3>
                    <p className=\"text-white/70 font-light leading-relaxed\">
                      {m.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
"
