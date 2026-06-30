"import { useEffect, useRef, useState } from \"react\";
import { Volume2, VolumeX } from \"lucide-react\";

const MUSIC_URL =
  \"https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=emotional-piano-106575.mp3\";

export default function MusicControl({ playSignal = 0, volumeBoost = false }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      const a = new Audio(MUSIC_URL);
      a.loop = true;
      a.volume = 0.35;
      audioRef.current = a;
    }
    // Try autoplay
    const tryPlay = async () => {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    };
    tryPlay();

    const onFirstClick = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
      }
      window.removeEventListener(\"click\", onFirstClick);
    };
    window.addEventListener(\"click\", onFirstClick);

    return () => {
      window.removeEventListener(\"click\", onFirstClick);
      audioRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    if (playSignal > 0 && audioRef.current && audioRef.current.paused) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [playSignal]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volumeBoost ? 0.7 : 0.35;
    }
  }, [volumeBoost]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <button
      onClick={toggle}
      className=\"music-btn glass-gold animate-pulse-glow\"
      aria-label={playing ? \"Pause music\" : \"Play music\"}
      data-testid=\"music-toggle-button\"
    >
      {playing ? <Volume2 size={22} /> : <VolumeX size={22} />}
    </button>
  );
}
"
