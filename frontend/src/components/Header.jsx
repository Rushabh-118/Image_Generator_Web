import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="relative h-screen w-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]"></div>

      <div className="relative z-10 w-full px-0 pt-20 lg:pt-32">
        <div className="text-center mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 hover:bg-white/15 transition-all duration-300 group">
            <span className="w-2 h-2 bg-linear-to-r from-green-400 to-blue-500 rounded-full animate-ping"></span>
            <span className="text-sm font-medium text-white/90">
              AI-Powered Image Generation
            </span>
            <span className="text-xs text-white/60">Just Released</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="block bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Imagination
            </span>
            Into Reality
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            Create stunning, unique images in seconds with our advanced AI
            technology. No design skills required.
          </p>

          {/* Generate Image Button */}
          <div className="flex justify-center">
            <button className="group relative px-12 py-6 bg-linear-to-r from-purple-600 to-blue-600 text-white font-bold text-xl rounded-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-105 overflow-hidden">
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-linear-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Shine effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute -inset-x-24 -inset-y-8 bg-linear-to-r from-transparent via-white/20 to-transparent transform rotate-12 scale-y-150 group-hover:translate-x-64 transition-transform duration-1000"></div>
              </div>

              {/* Button content */}
              <div className="relative z-10 flex items-center gap-3">
                <svg
                  className="w-6 h-6 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <div className="flex items-center gap-3">
                  <span className="bg-linear-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent font-bold text-lg tracking-wide relative">
                    Generate Image
                    {/* Floating star particles */}
                    <div className="absolute -top-3 -right-6">
                      <div className="relative">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-ping absolute"></div>
                        <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -left-4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-300"></div>
                  </span>

                  <img src={assets.star_group} alt="" className="h-10 w-10" />
                </div>

                {/* Sparkle effect */}
                <div className="absolute -top-1 -right-1">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                </div>
              </div>

              {/* Pulse animation */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/30 animate-pulse group-hover:animate-none"></div>
            </button>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-white/60">Images Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2.5s</div>
              <div className="text-white/60">Average Generation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99%</div>
              <div className="text-white/60">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-4 h-4 bg-purple-400 rounded-full animate-bounce"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-300"></div>
      <div className="absolute top-40 left-20 w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-700"></div>
    </div>
  );
};

export default Header;
