import React, { useEffect, useState } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onComplete(), 500); // Wait for fade out animation
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 backdrop-blur-xl transition-opacity duration-500 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}>
      {/* Glass morphism container */}
      <div className="relative p-12 rounded-3xl backdrop-blur-md bg-white/20 border border-white/30 shadow-2xl">
        {/* Animated logo/icon */}
        <div className="flex flex-col items-center space-y-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-white/40 to-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center animate-pulse">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-gray-400/60 to-gray-300/40 backdrop-blur-sm"></div>
          </div>
          
          {/* App name */}
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            InstagramLike
          </h1>
          
          {/* Loading animation */}
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-gray-400/60 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-gray-400/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
        
        {/* Subtle decorative elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full blur-sm"></div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/20 rounded-full blur-sm"></div>
      </div>
    </div>
  );
};

export default SplashScreen;