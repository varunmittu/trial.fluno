import React from 'react';
import { motion } from 'motion/react';

// Unified abstract animated designs representing the Fluno brand identity:
// - Gentle bubbling soap suds / premium skincare bubbles
// - Swaying organic botanical tea-tree / herbal leaves
// - Dynamic pulsing care liquid splashes
// - Custom, gorgeously animated vertical vector FLUNO letters graphic

interface AnimationProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

// 1. DYNAMIC BUBBLES - Representative of lathering high-efficacy clean handwashes
export const FloatingSoapBubbles: React.FC<AnimationProps> = ({ className = '' }) => {
  // Generate distinct bubble offsets for beautiful multi-layered floating lathers
  const bubbles = [
    // Pre-distributed dense bubbles with negative delays so they are visible from starting of the page load
    { id: 1, left: 3, size: 18, delay: -4, duration: 24, sway: 20 },
    { id: 2, left: 8, size: 32, delay: -12, duration: 28, sway: -30 },
    { id: 3, left: 14, size: 22, delay: -6, duration: 21, sway: 15 },
    { id: 4, left: 20, size: 14, delay: -18, duration: 19, sway: -25 },
    { id: 5, left: 26, size: 40, delay: -2, duration: 32, sway: 35 },
    { id: 6, left: 32, size: 26, delay: -15, duration: 25, sway: -20 },
    { id: 7, left: 38, size: 16, delay: -8, duration: 20, sway: 15 },
    { id: 8, left: 44, size: 36, delay: -22, duration: 30, sway: -40 },
    { id: 9, left: 50, size: 20, delay: -5, duration: 22, sway: 25 },
    { id: 10, left: 56, size: 28, delay: -14, duration: 26, sway: -30 },
    { id: 11, left: 62, size: 12, delay: -9, duration: 17, sway: 18 },
    { id: 12, left: 68, size: 44, delay: -3, duration: 34, sway: -35 },
    { id: 13, left: 74, size: 24, delay: -17, duration: 23, sway: 20 },
    { id: 14, left: 80, size: 18, delay: -11, duration: 21, sway: -15 },
    { id: 15, left: 86, size: 34, delay: -25, duration: 31, sway: 30 },
    { id: 16, left: 92, size: 16, delay: -7, duration: 18, sway: -20 },
    { id: 17, left: 97, size: 28, delay: -20, duration: 27, sway: 25 },
    
    // Additional secondary layer for rich background texture
    { id: 18, left: 6, size: 24, delay: -29, duration: 26, sway: -15 },
    { id: 19, left: 18, size: 12, delay: -2, duration: 16, sway: 20 },
    { id: 20, left: 29, size: 30, delay: -10, duration: 29, sway: -25 },
    { id: 21, left: 41, size: 18, delay: -16, duration: 22, sway: 15 },
    { id: 22, left: 53, size: 38, delay: -21, duration: 33, sway: -30 },
    { id: 23, left: 65, size: 14, delay: -7, duration: 18, sway: 25 },
    { id: 24, left: 77, size: 26, delay: -12, duration: 25, sway: -20 },
    { id: 25, left: 89, size: 22, delay: -27, duration: 24, sway: 15 },
    { id: 26, left: 95, size: 32, delay: -4, duration: 30, sway: -25 },
    { id: 27, left: 12, size: 16, delay: -13, duration: 20, sway: 12 },
    { id: 28, left: 23, size: 36, delay: -24, duration: 32, sway: -30 },
    { id: 29, left: 35, size: 20, delay: -1, duration: 23, sway: 18 },
    { id: 30, left: 47, size: 14, delay: -19, duration: 18, sway: -15 },
    { id: 31, left: 59, size: 42, delay: -8, duration: 35, sway: 35 },
    { id: 32, left: 71, size: 24, delay: -23, duration: 27, sway: -20 },
    { id: 33, left: 83, size: 18, delay: -5, duration: 21, sway: 25 },
    { id: 34, left: 49, size: 30, delay: -31, duration: 28, sway: -22 },
    { id: 35, left: 60, size: 15, delay: -15, duration: 17, sway: 15 },
    { id: 36, left: 79, size: 25, delay: -20, duration: 26, sway: -18 }
  ];

  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none select-none z-0 ${className}`}>
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          className="absolute rounded-full border border-[#EF543B]/30 bg-white/20 shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            bottom: '-10%',
          }}
          animate={{
            y: [0, -1250],
            x: [0, b.sway, -b.sway, 0],
            opacity: [0, 0.65, 0.65, 0],
            scale: [1, 1.1, 0.95, 1]
          }}
          transition={{
            y: {
              duration: b.duration,
              repeat: Infinity,
              ease: "linear",
              delay: b.delay,
            },
            x: {
              duration: b.duration / 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: b.delay,
            },
            opacity: {
              duration: b.duration,
              repeat: Infinity,
              ease: "linear",
              delay: b.delay,
            },
            scale: {
              duration: b.duration / 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: b.delay,
            }
          }}
        >
          {/* Shine highlight */}
          <div 
            className="absolute rounded-full bg-white/70"
            style={{
              width: b.size * 0.28,
              height: b.size * 0.28,
              top: '12%',
              left: '12%',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// 2. SWAYING BOTANICAL LEAVES - Depicting our natural organic plant extracts
export const AnimatedBotanicalLeaves: React.FC<AnimationProps> = ({ className = '', width = 120, height = 120 }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={width}
      height={height}
      className={`${className} select-none`}
      fill="none"
      animate={{
        rotate: [-6, 6, -6],
        y: [0, -4, 0],
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Central plant stem */}
      <path 
        d="M50,90 Q48,50 50,15" 
        stroke="#111C16" 
        strokeWidth="3" 
        strokeLinecap="round" 
      />

      {/* Swaying Leaf 1 - Right Top */}
      <motion.path 
        d="M50,30 Q80,20 75,50 Q55,55 50,30" 
        fill="#76D6A3" 
        stroke="#111C16" 
        strokeWidth="2.5"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Swaying Leaf 2 - Left Mid */}
      <motion.path 
        d="M50,50 Q18,45 25,70 Q45,68 50,50" 
        fill="#76D6A3" 
        stroke="#111C16" 
        strokeWidth="2.5"
        animate={{ scale: [1, 0.96, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Swaying Leaf 3 - Right Bottom */}
      <motion.path 
        d="M50,65 Q78,70 70,90 Q54,82 50,65" 
        fill="#FAF8F4" 
        stroke="#111C16" 
        strokeWidth="2.5"
      />

      {/* Bud/Flower Seed Accents */}
      <motion.circle 
        cx="50" 
        cy="15" 
        r="5" 
        fill="#EF543B" 
        stroke="#111C16" 
        strokeWidth="2"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.svg>
  );
};

// 3. FLUID LIQUID CARE SPLASH - Shape-shifting organic cosmetic formulas
export const AnimatedLiquidSplash: React.FC<AnimationProps> = ({ className = '', width = 140, height = 140 }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg 
        viewBox="0 0 120 120" 
        width={width} 
        height={height} 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none"
      >
        {/* Abstract shape shifting puddle representing skin nourishment gel */}
        <motion.path
          animate={{
            d: [
              "M60,15 C85,10 110,35 105,60 C100,85 80,105 55,100 C30,95 10,75 15,50 C20,25 35,20 60,15 Z",
              "M60,20 C90,15 102,40 100,65 C98,90 85,98 60,105 C35,112 18,85 15,60 C12,35 30,25 60,20 Z",
              "M60,15 C80,25 105,30 105,55 C105,80 75,105 50,100 C25,95 20,70 25,45 C30,20 40,5 60,15 Z"
            ]
          }}
          transition={{
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut",
          }}
          fill="#FAF8F4"
          stroke="#111C16"
          strokeWidth="3"
        />

        {/* Small floating droplets launching and falling back */}
        <motion.circle
          cx="30"
          cy="30"
          animate={{
            y: [0, -18, 5, 0],
            x: [0, -10, 5, 0],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut"
          }}
          r="7"
          fill="#EF543B"
          stroke="#111C16"
          strokeWidth="2"
        />

        <motion.circle
          cx="90"
          cy="85"
          animate={{
            y: [0, 15, -10, 0],
            x: [0, 12, -6, 0],
            scale: [1, 1.3, 0.7, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            delay: 1
          }}
          r="9"
          fill="#76D6A3"
          stroke="#111C16"
          strokeWidth="2"
        />

        {/* Shimmer sparkle */}
        <motion.path
          d="M60,50 L63,44 L70,41 L63,38 L60,32 L57,38 L50,41 L57,44 Z"
          fill="#EF543B"
          animate={{
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear"
          }}
        />
      </svg>
    </div>
  );
};

// 4. ANIMATED FLUNO VECTOR LETTERS - The absolute highlight piece!
// Beautiful thick geometric, vector-art FLUNO wordmark letters stacking vertically,
// each letter individually floating with slight offsets, delivering a modern artistic visual.
export const AnimatedFlunoLetters: React.FC<AnimationProps> = ({ className = '', width = '100%', height = '100%' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 320 620" 
      width={width} 
      height={height} 
      className={`${className} select-none`}
      fill="none"
    >
      {/* Background Graphic Accents */}
      <motion.circle 
        cx="160" cy="310" r="140" 
        fill="#EF543B" 
        fillOpacity="0.08"
        animate={{ scale: [0.93, 1.07, 0.93] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <circle cx="160" cy="310" r="139" stroke="#111C16" strokeDasharray="10 10" strokeWidth="1.5" opacity="0.3" />

      {/* Floating soap bubbles / star rings inside the letter graphic column */}
      <motion.circle 
        cx="70" cy="120" r="18" 
        stroke="#111C16" strokeWidth="2.5" fill="#FAF8F4"
        animate={{ y: [0, -10, 5, 0], x: [0, 8, -6, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      <motion.circle 
        cx="250" cy="500" r="12" 
        fill="#76D6A3" stroke="#111C16" strokeWidth="2"
        animate={{ y: [0, 14, -8, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Sparkling clean vector elements around letters */}
      <motion.path 
        d="M260,180 L264,170 L274,166 L264,162 L260,152 L256,162 L246,166 L256,170 Z" 
        fill="#EF543B"
        animate={{ scale: [1, 1.4, 1], rotate: [0, 45, 0] }}
        transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
      />
      <motion.path 
        d="M50,440 L53,432 L61,429 L53,426 L50,418 L47,426 L39,429 L47,432 Z" 
        fill="#EF543B"
        animate={{ scale: [0.9, 1.2, 0.9], rotate: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 3.4, ease: "easeInOut", delay: 0.3 }}
      />

      {/* THE INTEGRATE WORDMARK LETTERS */}
      {/* 1. Letter 'f' */}
      <g>
        <motion.path
          d="M110,130 L110,65 C110,50 120,40 135,40 L160,40 L160,65 L140,65 L140,90 L160,90 L160,115 L140,115 L140,145 L110,145 Z"
          fill="#111C16"
          stroke="#FAF8F4"
          strokeWidth="3.5"
          strokeLinejoin="round"
          animate={{
            y: [0, -8, 4, 0],
            rotate: [0, -1.8, 1.2, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </g>

      {/* 2. Letter 'l' */}
      <g>
        <motion.path
          d="M115,240 L115,155 L145,155 L145,215 L175,215 L175,240 Z"
          fill="#FAF8F4"
          stroke="#111C16"
          strokeWidth="4"
          strokeLinejoin="round"
          animate={{
            y: [0, 6, -5, 0],
            rotate: [0, 1.5, -1, 0]
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        />
      </g>

      {/* 3. Letter 'u' */}
      <g>
        <motion.path
          d="M110,260 L110,315 C110,335 125,350 145,350 C165,350 180,335 180,315 L180,260 L150,260 L150,315 C150,320 148,324 145,324 C142,324 140,320 140,315 L140,260 Z"
          fill="#EF543B"
          stroke="#FAF8F4"
          strokeWidth="3.5"
          strokeLinejoin="round"
          animate={{
            y: [0, -7, 6, 0],
            scale: [1, 1.02, 0.98, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6
          }}
        />
      </g>

      {/* 4. Letter 'n' */}
      <g>
        <motion.path
          d="M110,365 L140,365 L140,385 C145,373 155,365 170,365 C185,365 195,378 195,395 L195,455 L165,455 L165,400 C165,396 162,392 158,392 C154,392 150,396 150,400 L150,455 L110,455 Z"
          fill="#FAF8F4"
          stroke="#111C16"
          strokeWidth="4"
          strokeLinejoin="round"
          animate={{
            y: [0, 5, -5, 0],
            rotate: [0, -1, 1.5, 0]
          }}
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.9
          }}
        />
      </g>

      {/* 5. Letter 'o' */}
      <g>
        {/* Outer Circle */}
        <motion.circle 
          cx="155" cy="520" r="45" 
          fill="#76D6A3" 
          stroke="#111C16" 
          strokeWidth="4"
          animate={{
            y: [0, -6, 5, 0],
            scale: [1, 1.04, 0.96, 1]
          }}
          transition={{
            duration: 5.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2
          }}
        />
        {/* Inner concentric cutout */}
        <motion.circle 
          cx="155" cy="520" r="14" 
          fill="#FAF8F4" 
          stroke="#111C16" 
          strokeWidth="4.5"
          animate={{
            y: [0, -6, 5, 0],
          }}
          transition={{
            duration: 5.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2
          }}
        />
      </g>
    </svg>
  );
};
