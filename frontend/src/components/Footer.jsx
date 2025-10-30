import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-6 px-4 mt-20 bg-white border-t border-gray-200">
      <Link to="/" className="flex items-center px-16 gap-2 group">
        <div className="flex items-center" style={{ filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))' }}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 200 200"
            className="transform transition-transform group-hover:scale-110 duration-300"
          >
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#4F46E5"
              strokeWidth="8"
              className="animate-pulse"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="6"
              opacity="0.7"
              className="animate-spin-slow"
            />
            <path
              d="M100 70 Q130 100 100 130 Q70 100 100 70"
              fill="#2563EB"
              className="transform origin-center group-hover:scale-110 transition-transform"
            />
            <line
              x1="60"
              y1="60"
              x2="140"
              y2="140"
              stroke="#6366F1"
              strokeWidth="4"
              className="animate-dash"
            />
            <line
              x1="140"
              y1="60"
              x2="60"
              y2="140"
              stroke="#6366F1"
              strokeWidth="4"
              className="animate-dash"
            />
          </svg>
        </div>
        <span className="text-2xl sm:text-3xl font-bold relative">
          <span className="bg-linear-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
            Visgen
          </span>
          <span className="text-blue-500 font-extrabold">.AI</span>
        </span>
      </Link>
      
      <p className="text-sm text-gray-600 text-center">
        Copyright @RushabhMistry | All right reserved.
      </p>
    </div>
  );
};

export default Footer;