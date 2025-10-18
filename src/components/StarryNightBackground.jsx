import { useEffect, useRef } from "react";

export default function StarryNightBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: 300 }).map(() => ({ // Increased stars for a denser look
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5, // Slightly larger stars
      alpha: 0.5 + Math.random() * 0.5, // Brighter stars
      speed: Math.random() * 0.05, // Slower twinkling
    }));

    const comets = Array.from({ length: 6 }).map(() => ({ // Fewer, more prominent comets
      x: Math.random() * -width * 0.5, // Start further left
      y: Math.random() * height * 0.3, // Start higher up
      length: 300 + Math.random() * 200, // Longer comets
      speed: 4 + Math.random() * 3, // Faster comets
      size: 3 + Math.random() * 2, // Thicker comets
      trail: [],
      hue: Math.random() * 360, // Individual comet colors
    }));

    function drawStars() {
      ctx.fillStyle = "#010114"; // Dark background
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "white";
      stars.forEach((s) => {
        ctx.globalAlpha = s.alpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();

        // Simple twinkling effect
        s.alpha += s.speed * (Math.random() > 0.5 ? 1 : -1);
        if (s.alpha < 0.2) s.alpha = 0.2;
        if (s.alpha > 1) s.alpha = 1;
      });
    }

    function drawComets() {
      comets.forEach((comet) => {
        // Push current position to trail
        comet.trail.push({ x: comet.x, y: comet.y });
        // Keep trail length consistent
        if (comet.trail.length > 80) comet.trail.shift(); // Longer trail

        // Create a dynamic gradient for the comet
        const gradient = ctx.createLinearGradient(
          comet.x - comet.length * 1.2, // Start gradient further back
          comet.y - comet.length * 0.4,
          comet.x,
          comet.y
        );

        // Use HSL for dynamic color
        const color1 = `hsla(${comet.hue}, 100%, 70%, 0)`;
        const color2 = `hsla(${comet.hue}, 100%, 70%, 0.4)`;
        const color3 = `hsla(${comet.hue + 30}, 100%, 80%, 0.8)`; // Slightly different color for head
        const color4 = `hsla(${comet.hue + 60}, 100%, 90%, 1)`; // Brightest head

        gradient.addColorStop(0, color1); // Faded tail end
        gradient.addColorStop(0.6, color2);
        gradient.addColorStop(0.8, color3);
        gradient.addColorStop(1, color4); // Brightest head

        ctx.strokeStyle = gradient;
        ctx.lineWidth = comet.size;
        ctx.shadowBlur = 20; // Increased blur for glow
        ctx.shadowColor = `hsla(${comet.hue}, 100%, 70%, 0.8)`; // Shadow color matching comet
        ctx.beginPath();
        ctx.moveTo(comet.trail[0].x, comet.trail[0].y); // Start from the beginning of the trail
        ctx.lineTo(comet.x, comet.y);
        ctx.stroke();
        ctx.shadowBlur = 0; // Reset shadow blur

        // Draw the main body of the comet
        ctx.fillStyle = `hsla(${comet.hue}, 100%, 95%, 1)`;
        ctx.beginPath();
        ctx.arc(comet.x, comet.y, comet.size / 2 + 1, 0, Math.PI * 2); // Brighter head
        ctx.fill();

        // Move diagonally down-right
        comet.x += comet.speed;
        comet.y += comet.speed * 0.4; // Adjusted y-speed for a more natural angle

        // Reset when off screen
        if (comet.x > width + 300 || comet.y > height + 300) {
          comet.x = Math.random() * -width * 0.5; // Reset further back
          comet.y = Math.random() * height * 0.3;
          comet.length = 300 + Math.random() * 200;
          comet.speed = 4 + Math.random() * 3;
          comet.size = 3 + Math.random() * 2;
          comet.hue = Math.random() * 360;
          comet.trail = [];
        }
      });
    }

    function animate() {
      drawStars();
      drawComets();
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    />
  );
}