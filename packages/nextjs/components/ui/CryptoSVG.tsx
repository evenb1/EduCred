// File: packages/nextjs/components/ui/CryptoSVG.tsx
"use client";

import { motion } from "framer-motion";

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

// File: packages/nextjs/components/ui/CryptoSVG.tsx

export const CryptoGrid = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg viewBox="0 0 1400 1000" className="w-full h-full">
        <defs>
          <linearGradient id="gridLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Flowing grid lines */}
        <motion.path
          d="M0,200 L1400,200"
          stroke="url(#gridLine)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,500 L1400,500"
          stroke="url(#gridLine)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,800 L1400,800"
          stroke="url(#gridLine)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
        />

        {/* Vertical lines */}
        <motion.path
          d="M300,0 L300,1000"
          stroke="url(#gridLine)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, delay: 1.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M800,0 L800,1000"
          stroke="url(#gridLine)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, delay: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M1100,0 L1100,1000"
          stroke="url(#gridLine)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, delay: 2.5, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

export const CryptoNodes = () => {
  return (
    <>
      {/* Node network pattern */}
      <div className="absolute top-1/4 right-20 w-40 h-40 opacity-20">
        <svg viewBox="0 0 160 160" className="w-full h-full">
          {/* Nodes */}
          <motion.circle
            cx="40"
            cy="40"
            r="3"
            fill="#8B5CF6"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
          <motion.circle
            cx="120"
            cy="40"
            r="3"
            fill="#8B5CF6"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="4"
            fill="#8B5CF6"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          />
          <motion.circle
            cx="40"
            cy="120"
            r="3"
            fill="#8B5CF6"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          />
          <motion.circle
            cx="120"
            cy="120"
            r="3"
            fill="#8B5CF6"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          />

          {/* Connecting lines */}
          <motion.line
            x1="40"
            y1="40"
            x2="80"
            y2="80"
            stroke="#8B5CF6"
            strokeWidth="1"
            opacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          />
          <motion.line
            x1="120"
            y1="40"
            x2="80"
            y2="80"
            stroke="#8B5CF6"
            strokeWidth="1"
            opacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
          />
          <motion.line
            x1="80"
            y1="80"
            x2="40"
            y2="120"
            stroke="#8B5CF6"
            strokeWidth="1"
            opacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.9 }}
          />
          <motion.line
            x1="80"
            y1="80"
            x2="120"
            y2="120"
            stroke="#8B5CF6"
            strokeWidth="1"
            opacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 2.1 }}
          />
        </svg>
      </div>

      {/* Blockchain blocks */}
      <div className="absolute bottom-1/4 left-16 w-32 h-32 opacity-15">
        <svg viewBox="0 0 120 120" className="w-full h-full">
          {[...Array(9)].map((_, i) => (
            <motion.rect
              key={i}
              x={10 + (i % 3) * 35}
              y={10 + Math.floor(i / 3) * 35}
              width="25"
              height="25"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="1"
              rx="2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Connecting lines between blocks */}
          <motion.line
            x1="35"
            y1="22"
            x2="45"
            y2="22"
            stroke="#8B5CF6"
            strokeWidth="0.5"
            opacity="0.8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
          <motion.line
            x1="70"
            y1="22"
            x2="80"
            y2="22"
            stroke="#8B5CF6"
            strokeWidth="0.5"
            opacity="0.8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
        </svg>
      </div>
    </>
  );
};

export const HexagonalPattern = () => {
  return (
    <div className="absolute top-2/3 right-1/4 w-24 h-24 opacity-12">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.path
          d="M50,10 L80,30 L80,70 L50,90 L20,70 L20,30 Z"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="1"
          initial={{ pathLength: 0, rotate: 0 }}
          animate={{ pathLength: 1, rotate: 360 }}
          transition={{
            pathLength: { duration: 2, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
        />
        <motion.path
          d="M50,25 L67,37 L67,63 L50,75 L33,63 L33,37 Z"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="0.5"
          opacity="0.6"
          initial={{ pathLength: 0, rotate: 0 }}
          animate={{ pathLength: 1, rotate: -360 }}
          transition={{
            pathLength: { duration: 2, delay: 0.5, ease: "easeInOut" },
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          }}
        />
      </svg>
    </div>
  );
};

export const DataFlow = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg viewBox="0 0 1200 800" className="w-full h-full">
        <defs>
          <linearGradient id="dataGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Data flow paths */}
        <motion.path
          d="M100,300 Q400,200 700,300 T1100,250"
          fill="none"
          stroke="url(#dataGrad)"
          strokeWidth="2"
          strokeDasharray="5,10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, delay: 2, ease: "easeInOut" }}
        />

        <motion.path
          d="M200,500 Q500,400 800,500 T1200,450"
          fill="none"
          stroke="url(#dataGrad)"
          strokeWidth="1.5"
          strokeDasharray="3,8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, delay: 3, ease: "easeInOut" }}
        />

        {/* Moving data points with framer-motion */}
        <motion.circle
          cx="100"
          cy="300"
          r="2"
          fill="#8B5CF6"
          opacity="0.8"
          animate={{
            x: [0, 300, 600, 1000],
            y: [0, -100, 0, -50],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: 4,
            ease: "easeInOut",
          }}
        />

        <motion.circle
          cx="200"
          cy="500"
          r="1.5"
          fill="#8B5CF6"
          opacity="0.6"
          animate={{
            x: [0, 300, 600, 1000],
            y: [0, -100, 0, -50],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 5,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
};
