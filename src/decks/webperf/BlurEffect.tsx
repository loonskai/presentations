import clsx from "clsx";
import React, { useState, useEffect } from "react";

interface BlurEffectProps {
  src: string;
  alt: string;
  speed?: number; // Time for each step in ms
  className?: string;
}

const BlurEffect: React.FC<BlurEffectProps> = ({ src, alt, className }) => {
  const [blurStep, setBlurStep] = useState(0);
  const [speed, setSpeed] = useState(1000); // Randomized speed per step
  const blurLevels = ["10px", "6px", "3px", "0px"]; // 4 blur levels

  useEffect(() => {
    const getRandomSpeed = () =>
      Math.floor(Math.random() * (2000 - 500 + 1)) + 500; // Random between 500ms - 2000ms

    const interval = setInterval(() => {
      setBlurStep((prev) => (prev + 1) % blurLevels.length); // Move to next step
      setSpeed(getRandomSpeed()); // Set a new random speed for the next transition
    }, speed);

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div className={clsx(className, "relative overflow-hidden")}>
      {/* Image with blur effect */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-all duration-500"
        style={{
          filter: `blur(${blurLevels[blurStep]})`, // Apply blur dynamically
        }}
      />

      {/* Spinner Overlay (visible when blur is not 0px) */}
      {blurStep !== 3 && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-20">
          <div className="w-10 h-10 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default BlurEffect;
