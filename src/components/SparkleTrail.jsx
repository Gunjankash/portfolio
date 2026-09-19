import { useEffect, useRef } from 'react';

function SparkleTrail() {
  const canvasRef = useRef(null);
  const sparkles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    const mouse = { x: 0, y: 0 };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      createSparkle(mouse.x, mouse.y);
    });

    function createSparkle(x, y) {
      for (let i = 0; i < 2; i++) {
        sparkles.push({
          x,
          y,
          size: Math.random() * 3 + 1,
          opacity: 1,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
        });
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < sparkles.length; i++) {
        const s = sparkles[i];
        s.x += s.speedX;
        s.y += s.speedY;
        s.opacity -= 0.02;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 192, 203, ${s.opacity})`; 
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        if (s.opacity <= 0) {
          sparkles.splice(i, 1);
          i--;
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}

export default SparkleTrail;
