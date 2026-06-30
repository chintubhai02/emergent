"import { useEffect, useRef } from \"react\";

/**
 * Continuous realistic fireworks canvas.
 * intensity: \"low\" | \"normal\" | \"high\"
 */
export default function FireworksCanvas({ intensity = \"normal\", className = \"\" }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext(\"2d\");
    let particles = [];
    let rockets = [];
    let width, height;

    const resize = () => {
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };
    resize();
    window.addEventListener(\"resize\", resize);

    const colors = [
      [255, 20, 147], // pink
      [255, 105, 180], // light pink
      [255, 215, 0], // gold
      [218, 165, 32], // gold soft
      [255, 255, 255], // white
      [173, 216, 230], // light blue
      [255, 140, 0], // orange
      [186, 85, 211], // purple
    ];

    const intensityMap = { low: 0.012, normal: 0.04, high: 0.12 };
    const launchProb = intensityMap[intensity] || 0.04;

    class Rocket {
      constructor() {
        this.x = Math.random() * width;
        this.y = height;
        this.targetY = Math.random() * height * 0.55 + height * 0.05;
        this.vy = -(Math.random() * 4 + 8) * window.devicePixelRatio;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.trail = [];
      }
      update() {
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > 8) this.trail.shift();
        this.y += this.vy;
        this.vy += 0.12 * window.devicePixelRatio;
        return this.y <= this.targetY || this.vy >= 0;
      }
      draw() {
        for (let i = 0; i < this.trail.length; i++) {
          const a = i / this.trail.length;
          ctx.beginPath();
          ctx.arc(this.trail[i].x, this.trail[i].y, 2 * window.devicePixelRatio * a, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${this.color[0]},${this.color[1]},${this.color[2]},${a * 0.8})`;
          ctx.fill();
        }
      }
      explode() {
        const count = 60 + Math.floor(Math.random() * 50);
        const type = Math.random();
        for (let i = 0; i < count; i++) {
          const angle = (Math.PI * 2 * i) / count;
          let speed;
          if (type < 0.3) speed = Math.random() * 4 + 2; // small
          else if (type < 0.7) speed = Math.random() * 6 + 3; // medium
          else speed = Math.random() * 8 + 5; // big
          speed *= window.devicePixelRatio;
          particles.push(
            new Particle(this.x, this.y, Math.cos(angle) * speed, Math.sin(angle) * speed, this.color)
          );
        }
      }
    }

    class Particle {
      constructor(x, y, vx, vy, color) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.life = 1;
        this.decay = Math.random() * 0.012 + 0.008;
        this.size = Math.random() * 2 + 1.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.98;
        this.vy *= 0.98;
        this.vy += 0.08 * window.devicePixelRatio; // gravity
        this.life -= this.decay;
        return this.life > 0;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * window.devicePixelRatio * this.life, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color[0]},${this.color[1]},${this.color[2]},${this.life})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = `rgba(${this.color[0]},${this.color[1]},${this.color[2]},${this.life})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const animate = () => {
      ctx.fillStyle = \"rgba(5, 5, 10, 0.18)\";
      ctx.fillRect(0, 0, width, height);

      if (Math.random() < launchProb) {
        rockets.push(new Rocket());
      }
      rockets = rockets.filter((r) => {
        const exploded = r.update();
        r.draw();
        if (exploded) {
          r.explode();
          return false;
        }
        return true;
      });
      particles = particles.filter((p) => {
        const alive = p.update();
        if (alive) p.draw();
        return alive;
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener(\"resize\", resize);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      data-testid=\"fireworks-canvas\"
    />
  );
}
"
