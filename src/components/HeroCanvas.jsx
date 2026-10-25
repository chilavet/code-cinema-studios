import React, { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationFrameId;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Luminous, vibrant ambient color spheres for bright background
    const orbs = [
      { x: width * 0.25, y: height * 0.35, radius: 280, vx: 0.12, vy: 0.08, color: 'rgba(14, 165, 233, 0.09)' },
      { x: width * 0.8, y: height * 0.3, radius: 320, vx: -0.1, vy: 0.07, color: 'rgba(245, 158, 11, 0.08)' },
      { x: width * 0.55, y: height * 0.75, radius: 300, vx: 0.08, vy: -0.1, color: 'rgba(99, 102, 241, 0.07)' }
    ];

    // Minimal floating motes
    const motes = Array.from({ length: 24 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      opacity: Math.random() * 0.15 + 0.05
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render soft ambient colorful light pools
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x - orb.radius < 0 || orb.x + orb.radius > width) orb.vx *= -1;
        if (orb.y - orb.radius < 0 || orb.y + orb.radius > height) orb.vy *= -1;

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render subtle motes
      motes.forEach((m) => {
        m.x += m.vx;
        m.y += m.vy;

        if (m.x < 0) m.x = width;
        if (m.x > width) m.x = 0;
        if (m.y < 0) m.y = height;
        if (m.y > height) m.y = 0;

        ctx.fillStyle = `rgba(15, 23, 42, ${m.opacity})`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-100"
    />
  );
}
