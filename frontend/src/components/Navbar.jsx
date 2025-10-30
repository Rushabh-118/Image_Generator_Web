import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const {user, setShowLogin} = useContext(AppContext)
    const navigate = useNavigate()

    return (
        <nav className=" bg-transparent px-20 backdrop-blur-lg sticky top-0 z-50">
            <div className="w-full px-0">
                <div className="flex items-center justify-between py-4 px-0">
                    {/* Logo Section */}
                    <div className="flex items-center cursor-pointer group">
                        <Link to="/" className="flex items-center">
                            <div className="flex items-center" style={{ filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))' }}>
                                <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 200 200"
                                    className="transform transition-transform group-hover:scale-110 duration-300"
                                >
                                    <circle cx="100" cy="100" r="80" fill="none" stroke="#4F46E5" strokeWidth="8" className="animate-pulse"/>
                                    <circle cx="100" cy="100" r="60" fill="none" stroke="#3B82F6" strokeWidth="6" opacity="0.7" className="animate-spin-slow"/>
                                    <path
                                        d="M100 70 Q130 100 100 130 Q70 100 100 70"
                                        fill="#2563EB"
                                        className="transform origin-center group-hover:scale-110 transition-transform"
                                    />
                                    <line x1="60" y1="60" x2="140" y2="140" stroke="#6366F1" strokeWidth="4" className="animate-dash"/>
                                    <line x1="140" y1="60" x2="60" y2="140" stroke="#6366F1" strokeWidth="4" className="animate-dash"/>   
                                </svg>
                            </div>
                            <div className="flex items-center ml-2">
                                <span className="text-2xl sm:text-3xl font-bold relative">
                                    <span className="bg-linear-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                                        Visgen
                                    </span>
                                    <span className="text-blue-500 font-extrabold">.AI</span>
                                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-ping"/>
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Navigation Section */}
                    <div className="flex items-center gap-4">
                        {user ? (
                            <div className="flex items-center gap-4 sm:gap-6">
                                {/* Credits Button */}
                                <button onClick={() => navigate('/buy')} className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-amber-400 to-amber-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group">
                                    <img 
                                        className="w-5 h-5 transform" 
                                        src={assets.credit_star} 
                                        alt="Credits" 
                                    />
                                    <span className="text-sm font-semibold whitespace-nowrap">
                                        Credits: <span className="text-amber-100">50</span>
                                    </span>
                                </button>

                                {/* User Greeting - Hidden on mobile */}
                                <div className="hidden sm:block">
                                    <p className="text-gray-700 font-medium">Hi, Rushabh! 👋</p>
                                </div>

                                {/* Profile Dropdown */}
                                <div className="relative">
                                    <button 
                                        onClick={() => setShowDropdown(!showDropdown)}
                                        className="relative group"
                                    >
                                        <img 
                                            src={assets.profile_icon} 
                                            className="w-10 h-10 rounded-full border-2 border-transparent group-hover:border-blue-500 transition-all duration-200 shadow-md" 
                                            alt="Profile" 
                                        />
                                        <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-200 blur-sm"></div>
                                    </button>

                                    {/* Dropdown Menu */}
                                    {showDropdown && (
                                        <>
                                            <div 
                                                className="fixed inset-0 z-40" 
                                                onClick={() => setShowDropdown(false)}
                                            ></div>
                                            <div className="absolute right-0 mt-3 w-48 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 py-2 z-50 animate-in fade-in slide-in-from-top-5 duration-200">
                                                <div className="px-4 py-2 border-b border-gray-100">
                                                    <p className="text-sm font-semibold text-gray-900">Rushabh</p>
                                                    <p className="text-xs text-gray-500">Premium User</p>
                                                </div>
                                                <div className="py-2">
                                                    <button 
                                                        onClick={() => {
                                                            setShowDropdown(false)
                                                            // Add logout logic here
                                                        }}
                                                        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors duration-150 flex items-center gap-2"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                        </svg>
                                                        Logout
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center gap-4 sm:gap-6">
                                {/* Pricing Link */}
                                <button 
                                    onClick={() => navigate('/buy')}
                                    className="text-sm md:text-base font-medium text-gray-900 hover:text-indigo-600 transition-colors duration-200 hover:scale-105 transform hidden sm:block"
                                >
                                    Pricing
                                </button>

                                {/* Login Button */}
                                <button
                                    onClick={() => setShowLogin(true)}
                                    className="px-6 py-2.5 bg-linear-to-r from-indigo-600 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-300 font-semibold text-sm sm:text-base"
                                >
                                    Login
                                </button>

                                {/* Mobile Menu Button */}
                                <button className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
                                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
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
        </nav>
    )
}

export default Navbar