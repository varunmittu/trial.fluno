import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';

interface Product {
  id: string;
  name: string;
  category: string;
  size: string;
  image: string;
  tag: string;
  backdrop: string;
  description: string;
  isUpcoming?: boolean;
}

interface ThemeProps {
  cardBg: string;
  borderClass: string;
  mutedTextClass: string;
}

interface ProductCardProps {
  product: Product;
  t: ThemeProps;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, t }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Width and height of the bounding card frame
    const width = rect.width;
    const height = rect.height;
    
    // Calculate relative cursor position from -1 to 1 based on the center of the card
    const rawX = e.clientX - rect.left;
    const rawY = e.clientY - rect.top;
    
    const x = (rawX - width / 2) / (width / 2);
    const y = (rawY - height / 2) / (height / 2);
    
    setCoords({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  // Safe limits for elegant rotational degree tilts
  const rotateX = coords.y * -8; // Rotates along X-axis from -8deg to 8deg
  const rotateY = coords.x * 8;  // Rotates along Y-axis from -8deg to 8deg
  
  // Parallax translation offset for the image inside the card
  const imgTranslateX = coords.x * 6; // Moves image slightly left/right
  const imgTranslateY = coords.y * 6; // Moves image slightly up/down

  // Dynamic light overlay gradient centered at the cursor
  const shineLeft = (coords.x + 1) * 50; // Map -1..1 to 0..100%
  const shineTop = (coords.y + 1) * 50;

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        perspective: 1000,
      }}
      className="overflow-hidden flex flex-col group select-none cursor-pointer"
      id={`lookbook-card-${product.id}`}
    >
      {/* 3D Photo Frame */}
      <motion.div
        animate={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          scale: isHovered ? 1.015 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 280,
          mass: 0.8,
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className={`relative h-80 sm:h-96 w-full flex items-center justify-center p-8 rounded-2xl ${product.backdrop} border ${t.borderClass} overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300`}
      >
        {/* Dynamic Interactive Shine Reflection */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none mix-blend-color-dodge transition-opacity duration-300 z-20"
            style={{
              background: `radial-gradient(circle 180px at ${shineLeft}% ${shineTop}%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)`,
            }}
          />
        )}

        {/* Category Label badge */}
        <span 
          style={{ transform: 'translateZ(20px)' }}
          className="absolute top-4 left-4 text-[9px] font-mono font-bold tracking-widest uppercase bg-white/90 text-[#111C16] px-2.5 py-1 rounded-md border border-gray-100 z-10 shadow-xs"
        >
          {product.category}
        </span>

        {/* Upcoming badge */}
        {product.isUpcoming && (
          <span 
            style={{ transform: 'translateZ(20px)' }}
            className="absolute top-4 right-4 text-[9px] font-mono font-bold tracking-widest uppercase bg-[#EF543B] text-white px-2.5 py-1 rounded-md z-10 shadow-xs"
          >
            Upcoming
          </span>
        )}

        {/* Parallax Content Layer (Product Image) */}
        <motion.div
          animate={{
            x: isHovered ? imgTranslateX : 0,
            y: isHovered ? imgTranslateY : 0,
            scale: isHovered ? 1.06 : 1,
          }}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 220,
          }}
          style={{
            transformStyle: 'preserve-3d',
          }}
          className="relative h-full w-full flex items-center justify-center z-1"
        >
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            style={{
              transform: 'translateZ(40px)',
            }}
            className="h-full w-full object-contain pointer-events-none drop-shadow-[0_15px_25px_rgba(17,28,22,0.18)] select-none transition-transform duration-300"
          />
        </motion.div>

        {/* Size tag badge */}
        <span 
          style={{ transform: 'translateZ(15px)' }}
          className="absolute bottom-4 right-4 bg-[#111C16]/85 backdrop-blur-md text-white px-3 py-1 rounded-lg font-mono text-[9px] tracking-widest uppercase z-10 shadow-sm"
        >
          {product.size}
        </span>
      </motion.div>

      {/* Description Meta */}
      <div className="pt-4 text-center space-y-1">
        <span className="text-[10px] font-mono uppercase tracking-widest font-extrabold text-[#EF543B]">
          {product.tag}
        </span>
        <h4 className="text-base font-serif font-semibold tracking-tight text-[#111C16]">
          {product.name}
        </h4>
        <p className={`text-[11px] leading-relaxed max-w-xs mx-auto line-clamp-2 ${t.mutedTextClass}`}>
          {product.description}
        </p>
      </div>
    </motion.div>
  );
};
