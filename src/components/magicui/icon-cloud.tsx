"use client";

import { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const IconCloud = ({
  images,
  random = 1,
}: {
  images: string[];
  random?: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const points = useRef<{ x: number; y: number; z: number }[]>([]);
  const noise = createNoise3D();

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      setContext(ctx);
    }

    const imgs = images.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    if (canvasRef.current) {
      const { width, height } = canvasRef.current;
      points.current = Array.from({ length: imgs.length }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * width,
      }));
    }

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.002;
      if (context && canvasRef.current) {
        const { width, height } = canvasRef.current;
        context.clearRect(0, 0, width, height);

        points.current.forEach((point, i) => {
          point.x += noise(time * random, point.y * 0.01, 1) * 2;
          point.y += noise(time * random, point.x * 0.01, 2) * 2;
          point.z += noise(time * random, point.x * 0.01, 3) * 2;

          if (point.x > width) point.x = 0;
          if (point.x < 0) point.x = width;
          if (point.y > height) point.y = 0;
          if (point.y < 0) point.y = height;

          const img = imgs[i];
          if (img.complete) {
            context.globalAlpha = Math.max(
              0.2,
              Math.min(0.8, point.z / width)
            );
            context.drawImage(
              img,
              point.x - 16,
              point.y - 16,
              32,
              32
            );
          }
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [context, images, random]);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      className="size-full opacity-80"
    />
  );
};