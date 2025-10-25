import { useEffect, useRef } from "react";

export default function StarryNightBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationFrameId;

    // 🌟 ดาว
    const stars = Array.from({ length: 250 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.3,
      alpha: 0.4 + Math.random() * 0.6,
      speed: Math.random() * 0.04,
    }));

    // ☄️ ดาวหาง
    const comets = Array.from({ length: 5 }).map(() => ({
      x: Math.random() * -width * 0.5,
      y: Math.random() * height * 0.4,
      length: 250 + Math.random() * 150,
      speed: 3 + Math.random() * 2,
      size: 2 + Math.random() * 1.5,
      trail: [],
      hue: Math.random() * 360,
    }));

    // 🌌 วาดพื้นหลังและดาว
    function drawStars() {
      ctx.fillStyle = "#01010a";
      ctx.fillRect(0, 0, width, height);

      stars.forEach((s) => {
        ctx.globalAlpha = s.alpha;
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();

        // เอฟเฟกต์กระพริบ
        s.alpha += s.speed * (Math.random() > 0.5 ? 1 : -1);
        if (s.alpha < 0.2) s.alpha = 0.2;
        if (s.alpha > 1) s.alpha = 1;
      });
      ctx.globalAlpha = 1;
    }

    // ☄️ วาดดาวหาง
    function drawComets() {
      comets.forEach((comet) => {
        comet.trail.push({ x: comet.x, y: comet.y });
        if (comet.trail.length > 60) comet.trail.shift();

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
        ctx.shadowBlur = 15;
        ctx.shadowColor = `hsla(${comet.hue}, 100%, 70%, 0.7)`;

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

        // รีเซ็ตเมื่อออกจอ
        if (comet.x > width + 200 || comet.y > height + 200) {
          comet.x = Math.random() * -width * 0.5;
          comet.y = Math.random() * height * 0.4;
          comet.length = 250 + Math.random() * 150;
          comet.speed = 3 + Math.random() * 2;
          comet.size = 2 + Math.random() * 1.5;
          comet.hue = Math.random() * 360;
          comet.trail = [];
        }
      });
    }

    // 🎬 วนภาพเคลื่อนไหว
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
