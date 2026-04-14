import React from 'react';

export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  const [error, setError] = React.useState(false);

  return (
    <div className={`${className} flex items-center justify-center relative`}>
      {!error ? (
        <img 
          src="/logo.png" 
          alt="AXON & COUTURE Logo" 
          className="w-full h-full object-contain"
          onError={() => setError(true)}
        />
      ) : (
        <svg 
          viewBox="0 0 120 100" 
          className="w-full h-full"
          style={{ display: 'block' }}
        >
          {/* Right 'A' - Negro Grafito / Adapts to context */}
          <path 
            d="M75 15 L45 85 H58 L64 70 H86 L92 85 H105 L75 15 Z M68 60 L75 42 L82 60 H68 Z" 
            fill="currentColor" 
          />
          {/* Left 'A' - Azul Prusia Mate */}
          <path 
            d="M45 15 L15 85 H28 L34 70 H56 L62 85 H75 L45 15 Z M38 60 L45 42 L52 60 H38 Z" 
            fill="#003153"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.1"
          />
        </svg>
      )}
    </div>
  );
}
