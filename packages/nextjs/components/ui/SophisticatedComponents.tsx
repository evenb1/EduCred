// File: packages/nextjs/components/ui/SophisticatedComponents.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// File: packages/nextjs/components/ui/SophisticatedComponents.tsx

// Animated Counter Component
export const AnimatedCounter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const startCount = 0;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(startCount + (end - startCount) * progress));
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, isInView]);

  return <div ref={ref}>{count}</div>;
};

// Magnetic Button Effect
export const MagneticButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();

    const x = (clientX - left - width / 2) * 0.15;
    const y = (clientY - top - height / 2) * 0.15;

    ref.current!.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    ref.current!.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
};

// Sophisticated Gradient Orb
export const GradientOrb = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay, ease: "easeOut" }}
      className={`absolute rounded-full blur-3xl ${className}`}
      style={{
        background:
          "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%)",
      }}
    />
  );
};

// Text Reveal Animation
export const TextReveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Parallax Container
export const ParallaxContainer = ({ children, offset = 50 }: { children: React.ReactNode; offset?: number }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, offset]);

  return <motion.div style={{ y }}>{children}</motion.div>;
};

// Sophisticated Card with Glow Effect
export const GlowCard = ({
  children,
  className = "",
  glowColor = "purple",
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: "purple" | "cyan" | "blue";
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const glowColors = {
    purple: "rgba(139, 92, 246, 0.4)",
    cyan: "rgba(6, 182, 212, 0.4)",
    blue: "rgba(59, 130, 246, 0.4)",
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Glow effect */}
      <div
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColors[glowColor]}, transparent 40%)`,
        }}
      />

      {/* Card content */}
      <div className="relative">{children}</div>
    </motion.div>
  );
};

// Floating Particles
export const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            x: [null, Math.random() * window.innerWidth],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Sophisticated Badge with Pulse
export const PulseBadge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 bg-purple-500/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};
