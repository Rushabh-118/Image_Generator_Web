import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets'

const Navbar = () => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between py-4'>
    <div className="flex items-center gap-3 cursor-pointer group">
      <Link to="/"><div className="flex items-center" style={{ filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))' }}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 200 200"
          className="transform transition-transform group-hover:scale-110 duration-300"
        >
          {/* Animated circles representing AI/neural network */}
          <circle cx="100" cy="100" r="80" fill="none" stroke="#4F46E5" strokeWidth="8" className="animate-pulse"/>
          <circle cx="100" cy="100" r="60" fill="none" stroke="#3B82F6" strokeWidth="6" opacity="0.7" className="animate-spin-slow"/>
          
          {/* Central eye-like shape */}
          <path
            d="M100 70 Q130 100 100 130 Q70 100 100 70"
            fill="#2563EB"
            className="transform origin-center group-hover:scale-110 transition-transform"
          />
          
          {/* Dynamic connection lines */}
          <line x1="60" y1="60" x2="140" y2="140" stroke="#6366F1" strokeWidth="4" className="animate-dash"/>
          <line x1="140" y1="60" x2="60" y2="140" stroke="#6366F1" strokeWidth="4" className="animate-dash"/>   
        </svg>
      </div></Link>
      
      <div className="flex items-center">
        <span className="text-2xl sm:text-3xl font-bold relative">
          <span className="bg-linear-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
            Visgen
          </span>
          <span className="text-blue-500 font-extrabold">.AI</span>
          {/* Decorative dot */}
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-ping"/>
        </span>
      </div>
      
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-dash {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: dash 3s linear infinite;
        }
      `}</style>
    </div>

    <div>
        {user ? 
        <div className='flex items-center gap-2 sm:gap-2'>
            <button>
                <img className='w-5' src={assets.credit_star} alt="" />
                <p>Credits left : 50</p>
            </button>
            <p>Hi, Rushabh</p>
            <div className=' relative group'>
                <img src={assets.profile_icon} className='w-10 drop-shadow-2xl' alt="" />
                <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                    <ul>
                        <li>LOGOUT</li>
                    </ul>
                </div>
            </div>
        </div> : 
        <div className='flex items-center gap-5 sm:gap-5'>
            <p onClick={() => navigate('/buy')} className="text-sm md:text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer">
              Pricing
            </p>
            <button
              type="button"
              className="px-4 py-2 bg-linear-to-r from-indigo-600 to-blue-500 text-white rounded-full shadow-lg hover:scale-105 transform transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-300"
              aria-label="Login"
            >
              Login
            </button>
        </div>}

    </div>
    </div>
  )
}

export default Navbar
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [user, setUser] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="w-full fixed top-4 left-0 z-50 px-4">
      <nav className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between bg-white/60 backdrop-blur-md border border-gray-200/50 shadow-lg rounded-2xl p-3 md:p-4">
          {/* left: logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 text-white shadow-md transform transition-transform hover:scale-105">
                {/* simple SVG mark */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C14 2 20 4 20 12C20 20 14 22 12 22C10 22 4 20 4 12C4 4 10 2 12 2Z" fill="rgba(255,255,255,0.12)"/>
                  <path d="M7.5 12.5C8.5 9.5 10.5 8.5 12 8.5C13.5 8.5 15.5 9.5 16.5 12.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-lg font-bold bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent">
                  Visgen
                </span>
                <span className="text-xs text-blue-600 font-extrabold">.AI</span>
              </div>
            </Link>
          </div>

          {/* center: nav links (desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 transition">Home</Link>
            <Link to="/features" className="text-gray-600 hover:text-indigo-600 transition">Features</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-indigo-600 transition">Pricing</Link>
            <Link to="/docs" className="text-gray-600 hover:text-indigo-600 transition">Docs</Link>
          </div>

          {/* right: actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <p className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer">Pricing</p>
              <button type="button" className="px-4 py-2 bg-white text-indigo-600 border border-indigo-200 rounded-full shadow-sm hover:scale-105 transform transition duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-200">
                Login
              </button>
              <Link to="/signup" className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-full shadow hover:shadow-lg transform hover:scale-105 transition duration-150">
                Get Started
              </Link>
            </div>

            {/* mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div className={`${mobileOpen ? 'block' : 'hidden'} md:hidden mt-3`}>
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl p-4 shadow">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="py-2 px-3 rounded hover:bg-gray-100">Home</Link>
              <Link to="/features" className="py-2 px-3 rounded hover:bg-gray-100">Features</Link>
              <Link to="/pricing" className="py-2 px-3 rounded hover:bg-gray-100">Pricing</Link>
              <Link to="/docs" className="py-2 px-3 rounded hover:bg-gray-100">Docs</Link>
              <div className="pt-2 border-t border-gray-100">
                <Link to="/login" className="block w-full text-center py-2 rounded-md text-indigo-600 font-medium hover:bg-gray-50">Login</Link>
                <Link to="/signup" className="mt-2 block w-full text-center py-2 rounded-md bg-gradient-to-r from-indigo-600 to-blue-500 text-white">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        /* keep lightweight custom animations if needed */
        .animate-pulse { animation: pulse 2.5s ease-in-out infinite; }
        @keyframes pulse { 0% { opacity: 1 } 50% { opacity: 0.65 } 100% { opacity: 1 } }
      `}</style>
    </header>
  )
}

export default Navbar
