// File: packages/nextjs/components/ui/FloatingElements.tsx

"use client";

export const FloatingCertificate = () => {
  return (
    <div className="absolute top-20 right-10 animate-pulse">
      <div className="relative">
        <div className="w-32 h-24 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-lg backdrop-blur-sm border border-purple-400/30 shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-700">
          <div className="absolute inset-2 border-2 border-dashed border-purple-300/40 rounded"></div>
          <div className="absolute top-3 left-3 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export const FloatingQR = () => {
  return (
    <div className="absolute bottom-32 left-10 animate-bounce">
      <div className="w-20 h-20 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-xl backdrop-blur-sm border border-orange-400/30 shadow-2xl p-3">
        <div className="w-full h-full bg-gradient-to-br from-white/80 to-gray-200/80 rounded-lg p-1">
          <div className="w-full h-full bg-black/80 rounded grid grid-cols-4 gap-px">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className={`${Math.random() > 0.5 ? "bg-white" : "bg-black"} rounded-sm`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const FloatingShield = () => {
  return (
    <div className="absolute top-1/2 left-5 transform -translate-y-1/2 animate-pulse">
      <div className="w-16 h-20 bg-gradient-to-b from-emerald-400/20 to-teal-400/20 rounded-t-full rounded-b-lg backdrop-blur-sm border border-emerald-400/30 shadow-2xl flex items-center justify-center">
        <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};
