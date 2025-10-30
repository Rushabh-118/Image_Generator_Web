import React from 'react'
import { assets } from '../assets/assets';

const stepsData = [
  {
    title: 'Describe Your Vision',
    description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
    icon: assets.step_icon_1
  },
  {
    title: 'Watch the Magic',
    description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
    icon: assets.step_icon_2
  },
  {
    title: 'Download & Share',
    description: 'Instantly download your creation or share it with the world directly from our platform.',
    icon: assets.step_icon_3
  },
];

const Steps = () => {
  return (
    <section className="py-20 bg-linear-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-7 md:text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Create Magic in 3 Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your imagination into stunning visuals with our AI-powered platform
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-linear-to-r from-transparent via-blue-300 to-transparent"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {stepsData.map((step, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Step Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group-hover:scale-105">
                  
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-linear-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Icon Container */}
                  <div className="w-20 h-20 bg-linear-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors duration-300">
                    {/* assets.step_icon_* are file paths (strings). Render them with img, not as components */}
                    <img src={step.icon} alt={`${step.title} icon`} className="w-10 h-10 object-contain" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Mobile Connector */}
                <div className="md:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-linear-to-b from-blue-200 to-purple-200 last:hidden"></div>
              </div>
            ))}
          </div>
        </div>
        </div>
    </section>
  )
}

export default Steps