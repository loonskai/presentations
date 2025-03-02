import React, { useEffect, useRef } from "react";

const MatrixEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Characters used in the Matrix effect
    const characters = "01 10 11 00 110 101 011 001 111 100".split(" ");

    // Define font size and columns
    const fontSize = 18;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const drawMatrixEffect = () => {
      // Clear canvas WITHOUT black background (transparent effect)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0"; // Matrix green color
      ctx.font = `${fontSize}px monospace`;

      // Loop through drops array
      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    // Animate at ~30 FPS
    const interval = setInterval(drawMatrixEffect, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ backgroundColor: "transparent" }} // Ensure transparency
    />
  );
};

export default MatrixEffect;
