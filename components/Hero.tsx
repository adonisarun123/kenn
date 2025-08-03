'use client'

import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-mist to-primary-white flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-green/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-clay/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Emoji decoration */}
          <div className="text-6xl md:text-8xl mb-8 fade-in">
            🐘🌿
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-black mb-6 slide-in-left">
            Welcome to{' '}
            <span className="text-primary-green">Kenn EcoEstates</span>
          </h1>

          {/* Subtitle */}
          <div className="text-xl md:text-2xl text-primary-sage mb-8 slide-in-right">
            <p className="font-semibold mb-2">
              A Private, Purpose-Driven Community of 100 Wellness Seekers
            </p>
            <p className="italic">
              For Those Who Seek Nature, Balance, and Belonging.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in">
            <a
              href="#vision"
              className="bg-primary-green text-primary-white px-8 py-4 rounded-full hover:bg-primary-clay transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Discover Our Vision
            </a>
            <a
              href="#join"
              className="border-2 border-primary-green text-primary-green px-8 py-4 rounded-full hover:bg-primary-green hover:text-primary-white transition-all duration-300 font-semibold"
            >
              Request to Join
            </a>
          </div>

          {/* Key highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12 fade-in">
            <div className="bg-primary-white/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-mist">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="font-semibold text-primary-black mb-2">Purpose-Driven</h3>
              <p className="text-primary-sage text-sm">Not profit-driven, but community-centered</p>
            </div>
            <div className="bg-primary-white/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-mist">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-semibold text-primary-black mb-2">30 Acres</h3>
              <p className="text-primary-sage text-sm">Within 150km of Bangalore</p>
            </div>
            <div className="bg-primary-white/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-mist">
              <div className="text-3xl mb-3">🧘‍♀️</div>
              <h3 className="font-semibold text-primary-black mb-2">Mindful Living</h3>
              <p className="text-primary-sage text-sm">Yoga, meditation & wellness focus</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-primary-sage" size={32} />
        </div>
      </div>
    </section>
  )
}