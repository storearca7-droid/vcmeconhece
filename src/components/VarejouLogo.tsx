import React from 'react';

interface VarejouLogoProps {
  variant?: 'horizontal' | 'vertical' | 'icon-only';
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const VarejouLogo: React.FC<VarejouLogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  size = 'md',
  className = '',
}) => {
  const isDark = theme === 'dark';

  // Dimension scaling
  const dimensions = {
    sm: { icon: 28, text: 'text-xl', height: 'h-7' },
    md: { icon: 38, text: 'text-2xl', height: 'h-9' },
    lg: { icon: 48, text: 'text-3xl', height: 'h-12' },
    xl: { icon: 60, text: 'text-4xl', height: 'h-14' },
  }[size];

  // SVG Shopping Bag Icon with V Cutout
  const ShoppingBagIcon = () => (
    <svg
      width={dimensions.icon}
      height={dimensions.icon}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-label="Símbolo Varejou"
    >
      <defs>
        {/* Shopping bag multi-stop gradient: Yellow -> Orange -> Red-Orange */}
        <linearGradient id={`varejou-gradient-${theme}-${size}`} x1="15%" y1="10%" x2="85%" y2="95%">
          <stop offset="0%" stopColor="#FFD21A" />
          <stop offset="48%" stopColor="#FF8617" />
          <stop offset="100%" stopColor="#FF4B00" />
        </linearGradient>

        {/* Handle shadow / depth */}
        <filter id="subtle-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#06234C" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Bag Handles: Navy Blue (or clean white on dark) */}
      <path
        d="M34 32 C34 16 66 16 66 32"
        fill="none"
        stroke={isDark ? '#F8FAFC' : '#06234C'}
        strokeWidth="6.5"
        strokeLinecap="round"
      />

      {/* Bag Body with rounded corners */}
      <path
        d="M20 32 L80 32 C82 32 83.5 33.6 83.2 35.6 L76.5 87.6 C75.8 92.8 71.4 96.5 66.2 96.5 L33.8 96.5 C28.6 96.5 24.2 92.8 23.5 87.6 L16.8 35.6 C16.5 33.6 18 32 20 32 Z"
        fill={`url(#varejou-gradient-${theme}-${size})`}
      />

      {/* Bag Rim highlight / crease */}
      <path
        d="M21 32 C30 34 70 34 79 32"
        stroke="#FFFFFF"
        strokeOpacity="0.35"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Prominent White 'V' monogram centered on the bag */}
      <path
        d="M36 46 L47.5 76 C48.8 79.5 51.2 79.5 52.5 76 L64 46 C64.6 44.5 63.8 44 61.5 44 L57 44 C55.5 44 54.5 45 54 46.5 L50 59 L46 46.5 C45.5 45 44.5 44 43 44 L38.5 44 C36.2 44 35.4 44.5 36 46 Z"
        fill="#FFFFFF"
        filter="url(#subtle-shadow)"
      />
    </svg>
  );

  if (variant === 'icon-only') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <ShoppingBagIcon />
      </div>
    );
  }

  return (
    <div
      className={`group inline-flex items-center gap-2.5 select-none ${
        variant === 'vertical' ? 'flex-col text-center' : 'flex-row'
      } ${className}`}
    >
      <ShoppingBagIcon />
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-display font-extrabold tracking-tight ${dimensions.text} inline-flex items-baseline`}
        >
          <span className={isDark ? 'text-white' : 'text-[#06234C]'}>Varej</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8617] to-[#FF5500]">
            ou
          </span>
        </span>
      </div>
    </div>
  );
};
