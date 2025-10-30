import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets'

const Desc = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const [observer, setObserver] = useState(null)

  useEffect(() => {
    const newObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    setObserver(newObserver)

    if (sectionRef.current) newObserver.observe(sectionRef.current)
    if (imageRef.current) newObserver.observe(imageRef.current)
    if (textRef.current) newObserver.observe(textRef.current)

    return () => {
      newObserver.disconnect()
      setObserver(null)
    }
  }, [])

  return (
    <div className='min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden'>
      {/* Animated background elements */}
      <div className='fixed inset-0 -z-10'>
        <div className='absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float'></div>
        <div className='absolute top-1/3 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-2000'></div>
        <div className='absolute bottom-1/4 left-1/2 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-4000'></div>
      </div>

      {/* Header Section */}
      <div 
        ref={sectionRef}
        className='max-w-4xl mx-auto text-center mb-16 transform transition-all duration-1000 opacity-0 translate-y-8'
        style={{ animationDelay: '0.1s' }}
      >
        <h1 className='text-4xl md:text-6xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6 animate-gradient'>
          Create Images with AI
        </h1>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 opacity-0 translate-y-8'>
          Describe your vision and let our advanced AI generate stunning, unique images for you in seconds.
        </p>
      </div>

      {/* Main Content Section */}
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
          {/* Image Section */}
          <div className='flex-1'>
            <div 
              ref={imageRef}
              className='relative group transform transition-all duration-1000 opacity-0 -translate-x-8'
              style={{ animationDelay: '0.5s' }}
            >
              <div className='absolute -inset-4 bg-linear-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-slow'></div>
              <div className='relative rounded-xl shadow-2xl overflow-hidden'>
                <img 
                  src={assets.sample_img_2} 
                  alt="AI Generated Art" 
                  className='w-full h-auto transform group-hover:scale-110 transition duration-700 ease-out cursor-pointer'
                />
                <div className='absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center pb-6'>
                  <span className='text-white font-semibold text-lg'>✨ AI Generated Masterpiece</span>
                </div>
              </div>
              {/* Floating elements around image */}
              <div className='absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce'></div>
              <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce animation-delay-1000'></div>
            </div>
          </div>

          {/* Text Content Section */}
          <div 
            ref={textRef}
            className='flex-1 space-y-8 transform transition-all duration-1000 opacity-0 translate-x-8'
            style={{ animationDelay: '0.8s' }}
          >
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                Unleash Your <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 animate-gradient'>Creativity</span>
              </h2>
              <p className='text-lg text-gray-600 leading-relaxed'>
                Our cutting-edge AI image generator transforms your text descriptions into unique, 
                high-quality visual masterpieces. Whether you need artwork for professional projects, 
                social media content, or personal inspiration, our platform makes it effortless to 
                bring your imagination to life.
              </p>
            </div>

            {/* Features Section */}
            <div className='space-y-6'>
              <h3 className='text-2xl font-semibold text-gray-900 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text'>
                Why Choose Our AI Generator?
              </h3>
              
              <div className='grid gap-4'>
                {[
                  {
                    color: 'blue',
                    title: 'Lightning Fast Generation',
                    desc: 'Create stunning images in seconds, not hours',
                    icon: '⚡'
                  },
                  {
                    color: 'green',
                    title: 'Crystal Clear Quality',
                    desc: 'High-resolution outputs perfect for any use case',
                    icon: '🎯'
                  },
                  {
                    color: 'purple',
                    title: 'Endless Possibilities',
                    desc: 'Multiple styles, themes, and artistic directions',
                    icon: '🎨'
                  }
                ].map((feature, index) => (
                  <div 
                    key={feature.title}
                    ref={(el) => {
                      if (el) observer?.observe(el)
                    }}
                    className='flex items-start space-x-3 p-4 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 border border-white/20 group cursor-pointer'
                  >
                    <div className={`shrink-0 w-12 h-12 ${
                      feature.color === 'blue' ? 'bg-blue-100' :
                      feature.color === 'green' ? 'bg-green-100' :
                      'bg-purple-100'
                    } rounded-xl flex items-center justify-center group-hover:scale-110 transition duration-300`}>
                      <span className='text-2xl'>{feature.icon}</span>
                    </div>
                    <div className='flex-1'>
                      <h4 className='font-semibold text-gray-900 group-hover:text-gray-800 transition-colors'>
                        {feature.title}
                      </h4>
                      <p className='text-gray-600 text-sm mt-1'>{feature.desc}</p>
                    </div>
                    <div className='opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300'>
                      <div className={`w-2 h-2 ${
                        feature.color === 'blue' ? 'bg-blue-500' :
                        feature.color === 'green' ? 'bg-green-500' :
                        'bg-purple-500'
                      } rounded-full`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.4; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-in {
          opacity: 1 !important;
          transform: none !important;
        }
      `}</style>
    </div>
  )
}

export default Desc