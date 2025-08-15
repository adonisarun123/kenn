'use client'

import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-primary-white flex items-center justify-center overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-white via-primary-mist/30 to-primary-white"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-green/5 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary-clay/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main heading - clean and premium */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-black mb-6 fade-in">
            Kenn EcoEstates
          </h1>

          {/* Key stats */}
          <div className="text-xl md:text-3xl font-semibold text-primary-green mb-8 slide-in-left">
            30 Acres • 100 Wellness-Driven Families • 1 Purpose
          </div>

          {/* Value proposition */}
          <div className="text-lg md:text-2xl text-primary-sage mb-12 slide-in-right max-w-4xl mx-auto">
            <p className="font-medium leading-relaxed">
              Not just land ownership. A curated, ultra-premium wellness community — 
              co-created by <span className="text-primary-clay font-semibold">health-conscious achievers</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in">
            <a
              href="/#vision"
              className="bg-primary-green text-primary-white px-8 py-4 rounded-full hover:bg-primary-clay transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore The Vision
            </a>
            <a
              href="/how-it-works"
              className="border-2 border-primary-clay text-primary-clay px-8 py-4 rounded-full hover:bg-primary-clay hover:text-primary-white transition-all duration-300 font-semibold"
            >
              📚 How It Works
            </a>
            <a
              href="/apply"
              className="border-2 border-primary-green text-primary-green px-8 py-4 rounded-full hover:bg-primary-green hover:text-primary-white transition-all duration-300 font-semibold"
            >
              Apply Now
            </a>
          </div>

          {/* Key highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 fade-in">
            <div className="bg-primary-white/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-mist">
              <div className="text-3xl mb-3">🏡</div>
              <h3 className="font-semibold text-primary-black mb-2">10,000 sq ft</h3>
              <p className="text-primary-sage text-sm">Individual land ownership</p>
            </div>
            <div className="bg-primary-white/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-mist">
              <div className="text-3xl mb-3">🗳️</div>
              <h3 className="font-semibold text-primary-black mb-2">0.5% Voting Rights</h3>
              <p className="text-primary-sage text-sm">Per plot owner in community decisions</p>
            </div>
            <div className="bg-primary-white/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-mist">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-semibold text-primary-black mb-2">Within 150 km</h3>
              <p className="text-primary-sage text-sm">From Bangalore, away from pollution</p>
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