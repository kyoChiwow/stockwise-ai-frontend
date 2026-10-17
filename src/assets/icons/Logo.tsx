export default function Logo() {
  return (
    <div className="flex items-center gap-2 group cursor-pointer select-none">
      {/* Inject custom keyframe styles right into the component */}
      <style>{`
        @keyframes boxFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-1px); }
        }
        @keyframes aiPulse {
          0%, 100% { opacity: 0.6; stroke-width: 2.5; }
          50% { opacity: 1; stroke-width: 3; stroke: #3b82f6; } /* Turns AI blue on pulse */
        }
        @keyframes flowDown {
          0% { transform: translateY(-2px); opacity: 0.3; }
          50% { opacity: 1; }
          100% { transform: translateY(2px); opacity: 0.3; }
        }
        .animate-box { animation: boxFloat 3s ease-in-out infinite; }
        .animate-ai { animation: aiPulse 2s ease-in-out infinite; }
        .animate-flow { animation: flowDown 1.5s ease-in-out infinite; }
        
        /* Interactive hover state overrides */
        .group:hover .animate-box { animation-duration: 1.5s; }
        .group:hover .animate-ai { animation-duration: 1s; }
      `}</style>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="30"
        viewBox="0 0 38 34"
        fill="none"
        className="overflow-visible"
      >
        {/* 1. Outer Box (Floating Frame) */}
        <path
          className="animate-box"
          d="M19 2L4 10.5V23.5L19 32L34 23.5V10.5L19 2Z"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinejoin="round"
          style={{ transformOrigin: 'center' }}
        />
        
        {/* 2. Inner Y-Core Lines (AI Pulse Processor) */}
        <path
          className="animate-ai"
          d="M19 2V15.5M4 10.5L19 15.5M34 10.5L19 15.5"
          stroke="currentColor"
          strokeWidth="2.5"
          style={{ transition: 'stroke 0.3s ease' }}
        />
        
        {/* 3. Lower Arrow/Shelf (Fulfillment Flow) */}
        <path
          className="animate-flow"
          d="M10 19L19 24L28 19"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ transformOrigin: 'center' }}
        />
      </svg>
      
      {/* Typography supporting light and dark modes */}
      <span className="font-sans font-extrabold tracking-tight text-neutral-900 dark:text-neutral-200 text-lg transition-colors">
        StockWise<span className="text-neutral-500 dark:text-neutral-400 font-medium group-hover:text-blue-500 transition-colors">AI</span>
      </span>
    </div>
  );
}
