import { useEffect, useRef } from "react";

export default function StarryNightBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationFrameId;

    // 🌟 สร้างดาว
    const stars = Array.from({ length: 300 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5,
      alpha: 0.5 + Math.random() * 0.5,
      speed: Math.random() * 0.05,
    }));

    // ☄️ สร้างดาวหาง
    const comets = Array.from({ length: 6 }).map(() => ({
      x: Math.random() * -width * 0.5,
      y: Math.random() * height * 0.3,
      length: 300 + Math.random() * 200,
      speed: 4 + Math.random() * 3,
      size: 3 + Math.random() * 2,
      trail: [],
      hue: Math.random() * 360,
    }));

    // 🌫️ หมอกบาง ๆ
    function drawFog() {
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        width / 1.2
      );
      gradient.addColorStop(0, "rgba(0, 30, 60, 0.4)");
      gradient.addColorStop(1, "rgba(0, 0, 10, 0.9)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    // 🌙 ดวงจันทร์
    function drawMoon() {
      const moonX = width * 0.8;
      const moonY = height * 0.2;
      const gradient = ctx.createRadialGradient(
        moonX,
        moonY,
        20,
        moonX,
        moonY,
        100
      );
      gradient.addColorStop(0, "rgba(255,255,230,0.95)");
      gradient.addColorStop(1, "rgba(255,255,230,0.05)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(moonX, moonY, 60, 0, Math.PI * 2);
      ctx.fill();
    }

    // 🌟 ดาวระยิบระยับ
    function drawStars() {
      ctx.fillStyle = "#010114";
      ctx.fillRect(0, 0, width, height);

      drawFog();
      drawMoon();

      stars.forEach((s) => {
        ctx.globalAlpha = s.alpha;
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();

        // กระพริบเบา ๆ
        s.alpha += s.speed * (Math.random() > 0.5 ? 1 : -1);
        if (s.alpha < 0.2) s.alpha = 0.2;
        if (s.alpha > 1) s.alpha = 1;
      });
      ctx.globalAlpha = 1;
    }

    // ☄️ ดาวหาง
    function drawComets() {
      comets.forEach((comet) => {
        comet.trail.push({ x: comet.x, y: comet.y });
        if (comet.trail.length > 80) comet.trail.shift();

        const gradient = ctx.createLinearGradient(
          comet.x - comet.length * 1.2,
          comet.y - comet.length * 0.4,
          comet.x,
          comet.y
        );

        const color1 = `hsla(${comet.hue}, 100%, 70%, 0)`;
        const color2 = `hsla(${comet.hue}, 100%, 70%, 0.4)`;
        const color3 = `hsla(${comet.hue + 30}, 100%, 80%, 0.8)`;
        const color4 = `hsla(${comet.hue + 60}, 100%, 90%, 1)`;

        gradient.addColorStop(0, color1);
        gradient.addColorStop(0.6, color2);
        gradient.addColorStop(0.8, color3);
        gradient.addColorStop(1, color4);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = comet.size;
        ctx.shadowBlur = 20;
        ctx.shadowColor = `hsla(${comet.hue}, 100%, 70%, 0.8)`;

        ctx.beginPath();
        ctx.moveTo(comet.trail[0].x, comet.trail[0].y);
        ctx.lineTo(comet.x, comet.y);
        ctx.stroke();

        ctx.shadowBlur = 0;
        ctx.fillStyle = `hsla(${comet.hue}, 100%, 95%, 1)`;
        ctx.beginPath();
        ctx.arc(comet.x, comet.y, comet.size / 2 + 1, 0, Math.PI * 2);
        ctx.fill();

        comet.x += comet.speed;
        comet.y += comet.speed * 0.4;

        if (comet.x > width + 300 || comet.y > height + 300) {
          comet.x = Math.random() * -width * 0.5;
          comet.y = Math.random() * height * 0.3;
          comet.length = 300 + Math.random() * 200;
          comet.speed = 4 + Math.random() * 3;
          comet.size = 3 + Math.random() * 2;
          comet.hue = Math.random() * 360;
          comet.trail = [];
        }
      });
    }

    // 🎬 วนแอนิเมชัน
    function animate() {
      drawStars();
      drawComets();
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // 🧹 Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    />
  );
}
