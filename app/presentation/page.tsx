'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Home, Download } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface Slide {
  id: number
  title: string
  content: React.ReactNode
  bgColor?: string
}

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides: Slide[] = [
    {
      id: 1,
      title: "Welcome to Kenn EcoEstates",
      content: (
        <div className="text-center space-y-8">
          <div className="text-6xl mb-8">🏡</div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary-black mb-6">
            Kenn EcoEstates
          </h1>
          <p className="text-2xl md:text-3xl text-primary-green font-semibold mb-8">
            Where Clean Living Meets Collective Consciousness
          </p>
          <div className="bg-primary-mist rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-xl text-primary-sage leading-relaxed">
              A comprehensive guide to understanding our vision of an ultra-premium, 
              wellness-driven land community designed for health-conscious achievers.
            </p>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-primary-white via-primary-mist/30 to-primary-white"
    },
    {
      id: 2,
      title: "The Problem We're Solving",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <div className="text-5xl mb-6">🏙️</div>
            <h2 className="text-4xl font-bold text-primary-black mb-6">Urban Life Challenges</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-400">
              <h3 className="text-2xl font-bold text-red-800 mb-4">🏭 Pollution & Noise</h3>
              <p className="text-red-700 leading-relaxed">
                City air quality deteriorating, constant noise pollution affecting mental health and overall well-being.
              </p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-8 border-l-4 border-orange-400">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">😰 Stress & Burnout</h3>
              <p className="text-orange-700 leading-relaxed">
                High-achievers struggling with work-life balance, seeking meaningful connections and purpose.
              </p>
            </div>
            <div className="bg-yellow-50 rounded-2xl p-8 border-l-4 border-yellow-400">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4">🏠 Expensive Club Memberships</h3>
              <p className="text-yellow-700 leading-relaxed">
                Elite clubs cost ₹60+ Lakhs just for access, with no ownership or long-term value.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-400">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">🤝 Lack of Community</h3>
              <p className="text-blue-700 leading-relaxed">
                Difficulty finding like-minded individuals who share similar values and lifestyle goals.
              </p>
            </div>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-gray-50 to-white"
    },
    {
      id: 3,
      title: "Our Solution: Kenn EcoEstates",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <div className="text-5xl mb-6">💡</div>
            <h2 className="text-4xl font-bold text-primary-black mb-6">The Kenn EcoEstates Solution</h2>
            <p className="text-xl text-primary-sage max-w-3xl mx-auto">
              More than just land ownership - a complete lifestyle transformation
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-primary-white rounded-2xl p-8 shadow-lg border border-primary-green/20">
              <h3 className="text-2xl font-bold text-primary-green mb-4">🏡 Land Ownership</h3>
              <ul className="space-y-2 text-primary-sage">
                <li>• 10,000 sq ft individual plots</li>
                <li>• 30-acre community development</li>
                <li>• Located within 150km of Bangalore</li>
                <li>• Clean air, no pollution</li>
              </ul>
            </div>
            <div className="bg-primary-white rounded-2xl p-8 shadow-lg border border-primary-clay/20">
              <h3 className="text-2xl font-bold text-primary-clay mb-4">🗳️ Democratic Governance</h3>
              <ul className="space-y-2 text-primary-sage">
                <li>• 0.5% voting rights per plot owner</li>
                <li>• Community decision-making power</li>
                <li>• Transparent 10% service charge</li>
                <li>• Private land trust structure</li>
              </ul>
            </div>
            <div className="bg-primary-white rounded-2xl p-8 shadow-lg border border-primary-green/20">
              <h3 className="text-2xl font-bold text-primary-green mb-4">🏃‍♂️ Wellness Infrastructure</h3>
              <ul className="space-y-2 text-primary-sage">
                <li>• Open-air gyms & fitness trails</li>
                <li>• Organic kitchen gardens</li>
                <li>• Walking & meditation paths</li>
                <li>• Curated wellness programs</li>
              </ul>
            </div>
            <div className="bg-primary-white rounded-2xl p-8 shadow-lg border border-primary-clay/20">
              <h3 className="text-2xl font-bold text-primary-clay mb-4">👥 Exclusive Community</h3>
              <ul className="space-y-2 text-primary-sage">
                <li>• Limited to 100 families</li>
                <li>• Health-conscious achievers</li>
                <li>• 5-year no-resale policy</li>
                <li>• Charter member privileges</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-primary-white via-primary-mist/20 to-primary-white"
    },
    {
      id: 4,
      title: "Target Community: Who Should Join",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <div className="text-5xl mb-6">🎯</div>
            <h2 className="text-4xl font-bold text-primary-black mb-6">Our Ideal Community Members</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-primary-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">👔</div>
              <h3 className="text-2xl font-bold text-primary-black mb-4">Urban Professionals</h3>
              <ul className="text-primary-sage space-y-2 text-left">
                <li>• Successful executives & entrepreneurs</li>
                <li>• Seeking work-life balance</li>
                <li>• Values-driven decision makers</li>
                <li>• Looking for second home in nature</li>
              </ul>
            </div>
            <div className="text-center bg-primary-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-2xl font-bold text-primary-black mb-4">Health-Conscious Families</h3>
              <ul className="text-primary-sage space-y-2 text-left">
                <li>• Passionate about clean living</li>
                <li>• Focus on holistic health</li>
                <li>• Want natural environment for children</li>
                <li>• Interested in organic lifestyle</li>
              </ul>
            </div>
            <div className="text-center bg-primary-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🧘‍♀️</div>
              <h3 className="text-2xl font-bold text-primary-black mb-4">Wellness Seekers</h3>
              <ul className="text-primary-sage space-y-2 text-left">
                <li>• Tired of city chaos</li>
                <li>• Seeking calm and clarity</li>
                <li>• Interested in mindful living</li>
                <li>• Value community connections</li>
              </ul>
            </div>
          </div>
          <div className="bg-primary-mist rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-primary-black mb-4">💰 Investment Profile</h3>
            <p className="text-xl text-primary-sage leading-relaxed">
              Those who can afford elite club memberships (₹60+ Lakhs) but want 
              <span className="text-primary-green font-semibold"> ownership, influence, and long-term value</span> 
              instead of just access.
            </p>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-blue-50 via-white to-green-50"
    },
    {
      id: 5,
      title: "Financial Model & Transparency",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <div className="text-5xl mb-6">💰</div>
            <h2 className="text-4xl font-bold text-primary-black mb-6">Clear & Transparent Pricing</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-primary-white rounded-2xl p-8 shadow-lg border-l-4 border-primary-green">
              <h3 className="text-2xl font-bold text-primary-green mb-6">🏷️ Pricing Structure</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-primary-mist">
                  <span className="text-primary-sage">Land Cost</span>
                  <span className="font-semibold text-primary-black">Transparent Market Rate</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-primary-mist">
                  <span className="text-primary-sage">Service Charge</span>
                  <span className="font-semibold text-primary-clay">10% Flat Fee</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-primary-mist">
                  <span className="text-primary-sage">Hidden Costs</span>
                  <span className="font-semibold text-primary-green">₹0</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-primary-sage">Community Amenities</span>
                  <span className="font-semibold text-primary-green">Included</span>
                </div>
              </div>
            </div>
            <div className="bg-primary-white rounded-2xl p-8 shadow-lg border-l-4 border-primary-clay">
              <h3 className="text-2xl font-bold text-primary-clay mb-6">🤝 Governance Model</h3>
              <div className="space-y-6">
                <div className="bg-primary-mist/50 rounded-xl p-4">
                  <h4 className="font-semibold text-primary-black mb-2">Private Land Trust</h4>
                  <p className="text-primary-sage text-sm">
                    Legal structure ensuring community control and long-term stability.
                  </p>
                </div>
                <div className="bg-primary-mist/50 rounded-xl p-4">
                  <h4 className="font-semibold text-primary-black mb-2">Voting Rights</h4>
                  <p className="text-primary-sage text-sm">
                    0.5% voting power per plot owner in all community decisions.
                  </p>
                </div>
                <div className="bg-primary-mist/50 rounded-xl p-4">
                  <h4 className="font-semibold text-primary-black mb-2">Democratic Decisions</h4>
                  <p className="text-primary-sage text-sm">
                    Community amenities, rules, and developments decided collectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-primary-green to-primary-clay rounded-2xl p-8 text-primary-white text-center">
            <h3 className="text-2xl font-bold mb-4">🔒 Security & Exclusivity</h3>
            <p className="text-xl leading-relaxed">
              5-year no-resale policy ensures committed community members and protects 
              the integrity of our wellness-focused environment.
            </p>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-green-50 via-white to-blue-50"
    },
    {
      id: 6,
      title: "Wellness Infrastructure in Detail",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <div className="text-5xl mb-6">🌿</div>
            <h2 className="text-4xl font-bold text-primary-black mb-6">Comprehensive Wellness Ecosystem</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">🏃‍♂️</span>
                <h3 className="text-xl font-bold text-primary-black">Fitness & Movement</h3>
              </div>
              <ul className="space-y-2 text-primary-sage">
                <li>• Open-air gymnasium with natural setting</li>
                <li>• Jogging and walking trails through nature</li>
                <li>• Outdoor yoga and meditation spaces</li>
                <li>• Swimming pool with chemical-free water</li>
              </ul>
            </div>
            <div className="bg-primary-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">🌱</span>
                <h3 className="text-xl font-bold text-primary-black">Organic Living</h3>
              </div>
              <ul className="space-y-2 text-primary-sage">
                <li>• Community organic kitchen gardens</li>
                <li>• Composting and waste management</li>
                <li>• Rainwater harvesting systems</li>
                <li>• Solar-powered common areas</li>
              </ul>
            </div>
            <div className="bg-primary-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">🧘</span>
                <h3 className="text-xl font-bold text-primary-black">Mental Wellness</h3>
              </div>
              <ul className="space-y-2 text-primary-sage">
                <li>• Dedicated meditation pavilion</li>
                <li>• Quiet zones for reading and reflection</li>
                <li>• Community library and learning spaces</li>
                <li>• Regular wellness workshops and retreats</li>
              </ul>
            </div>
            <div className="bg-primary-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">👥</span>
                <h3 className="text-xl font-bold text-primary-black">Community Spaces</h3>
              </div>
              <ul className="space-y-2 text-primary-sage">
                <li>• Central community hall for gatherings</li>
                <li>• Outdoor amphitheater for events</li>
                <li>• Children's natural play areas</li>
                <li>• Co-working spaces for remote professionals</li>
              </ul>
            </div>
          </div>
          <div className="bg-primary-mist rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary-black mb-4 text-center">🎯 Curated Programs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl mb-2">🧘‍♀️</div>
                <h4 className="font-semibold text-primary-black">Mindfulness</h4>
                <p className="text-primary-sage text-sm">Regular meditation and yoga sessions</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🌿</div>
                <h4 className="font-semibold text-primary-black">Nutrition</h4>
                <p className="text-primary-sage text-sm">Organic cooking and nutrition workshops</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🎨</div>
                <h4 className="font-semibold text-primary-black">Creativity</h4>
                <p className="text-primary-sage text-sm">Art therapy and creative expression</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-green-50 via-white to-primary-mist/30"
    },
    {
      id: 7,
      title: "Why Kenn EcoEstates is Different",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <div className="text-5xl mb-6">⭐</div>
            <h2 className="text-4xl font-bold text-primary-black mb-6">Our Unique Advantages</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-primary-white rounded-2xl p-6 shadow-lg border-l-4 border-primary-green">
                <h3 className="text-xl font-bold text-primary-green mb-3">🎯 Clear Purpose & Vision</h3>
                <p className="text-primary-sage">
                  Ultra-premium, wellness-driven community specifically designed for urban professionals 
                  seeking a health-centric lifestyle.
                </p>
              </div>
              <div className="bg-primary-white rounded-2xl p-6 shadow-lg border-l-4 border-primary-clay">
                <h3 className="text-xl font-bold text-primary-clay mb-3">🗳️ Unique Ownership Model</h3>
                <p className="text-primary-sage">
                  Private land trust with democratic governance, voting rights, and transparent 
                  10% flat service charge - unlike typical real estate.
                </p>
              </div>
              <div className="bg-primary-white rounded-2xl p-6 shadow-lg border-l-4 border-primary-green">
                <h3 className="text-xl font-bold text-primary-green mb-3">🏃‍♂️ Robust Wellness Infrastructure</h3>
                <p className="text-primary-sage">
                  Comprehensive amenities reinforcing our health-first ethos: open-air gyms, 
                  walking trails, organic gardens, and curated wellness programs.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-primary-white rounded-2xl p-6 shadow-lg border-l-4 border-primary-clay">
                <h3 className="text-xl font-bold text-primary-clay mb-3">✨ Premium Branding</h3>
                <p className="text-primary-sage">
                  Evocative narrative using "wellness," "purpose," "community," and "transparent" 
                  to create emotionally compelling brand experience.
                </p>
              </div>
              <div className="bg-primary-white rounded-2xl p-6 shadow-lg border-l-4 border-primary-green">
                <h3 className="text-xl font-bold text-primary-green mb-3">👑 Strong Exclusivity</h3>
                <p className="text-primary-sage">
                  Limited to 100 health-conscious families with charter privileges and 
                  5-year no-resale policy ensuring purpose-led community.
                </p>
              </div>
              <div className="bg-gradient-to-r from-primary-green to-primary-clay rounded-2xl p-6 text-primary-white">
                <h3 className="text-xl font-bold mb-3">💎 Superior Value Proposition</h3>
                <p>
                  Better than ₹60+ Lakh club memberships - you get ownership, influence, 
                  and long-term appreciation instead of just access.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-yellow-50 via-white to-primary-mist/20"
    },
    {
      id: 8,
      title: "Next Steps: Join Our Community",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <div className="text-5xl mb-6">🚀</div>
            <h2 className="text-4xl font-bold text-primary-black mb-6">Ready to Transform Your Lifestyle?</h2>
            <p className="text-xl text-primary-sage max-w-3xl mx-auto">
              Take the first step towards purposeful living in a wellness-driven community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-primary-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-primary-black mb-4">Step 1: Apply</h3>
              <p className="text-primary-sage mb-6">
                Submit your application to join our exclusive community of 100 wellness-focused families.
              </p>
              <a
                href="/apply"
                className="bg-primary-green text-primary-white px-6 py-3 rounded-full hover:bg-primary-clay transition-all duration-300 font-semibold inline-block"
              >
                Apply Now
              </a>
            </div>
            <div className="text-center bg-primary-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-primary-black mb-4">Step 2: Connect</h3>
              <p className="text-primary-sage mb-6">
                Meet our team and fellow community members to understand the vision and values.
              </p>
              <a
                href="/how-it-works"
                className="bg-primary-clay text-primary-white px-6 py-3 rounded-full hover:bg-primary-green transition-all duration-300 font-semibold inline-block"
              >
                Learn More
              </a>
            </div>
            <div className="text-center bg-primary-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="text-2xl font-bold text-primary-black mb-4">Step 3: Own</h3>
              <p className="text-primary-sage mb-6">
                Secure your 10,000 sq ft plot and begin your journey towards holistic wellness.
              </p>
              <button className="bg-gradient-to-r from-primary-green to-primary-clay text-primary-white px-6 py-3 rounded-full font-semibold">
                Start Journey
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-r from-primary-green to-primary-clay rounded-3xl p-8 text-primary-white text-center">
            <h3 className="text-3xl font-bold mb-4">🌟 Join the Movement</h3>
            <p className="text-xl mb-6 opacity-90">
              Be part of something bigger than just land ownership. Create a legacy of wellness 
              and purposeful living for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/apply"
                className="bg-primary-white text-primary-green px-8 py-4 rounded-full hover:bg-primary-mist transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Apply Today
              </a>
              <a
                href="/"
                className="border-2 border-primary-white text-primary-white px-8 py-4 rounded-full hover:bg-primary-white hover:text-primary-green transition-all duration-300 font-semibold"
              >
                Back to Homepage
              </a>
            </div>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-primary-mist/30 via-white to-green-50"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-primary-white">
      <Header />
      
      {/* Presentation Header */}
      <div className="bg-gradient-to-r from-primary-green to-primary-clay text-primary-white py-6 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Kenn EcoEstates Presentation</h1>
              <p className="text-lg opacity-90">Complete Guide to Our Wellness Community</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <span className="text-lg font-semibold">
                {currentSlide + 1} / {slides.length}
              </span>
              <a
                href="/"
                className="flex items-center space-x-2 bg-primary-white text-primary-green px-4 py-2 rounded-full hover:bg-primary-mist transition-all duration-300"
              >
                <Home size={18} />
                <span>Home</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Content */}
      <div className={`min-h-screen py-12 ${slides[currentSlide].bgColor || 'bg-primary-white'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto lg:ml-80">
            {slides[currentSlide].content}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-0 left-0 right-0 bg-primary-white/95 backdrop-blur-sm border-t border-primary-mist p-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="flex items-center space-x-2 bg-primary-green text-primary-white px-6 py-3 rounded-full hover:bg-primary-clay transition-all duration-300 disabled:opacity-50"
              disabled={currentSlide === 0}
            >
              <ChevronLeft size={20} />
              <span>Previous</span>
            </button>

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary-green scale-125'
                      : 'bg-primary-mist hover:bg-primary-sage'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="flex items-center space-x-2 bg-primary-green text-primary-white px-6 py-3 rounded-full hover:bg-primary-clay transition-all duration-300 disabled:opacity-50"
              disabled={currentSlide === slides.length - 1}
            >
              <span>Next</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Slide Titles Sidebar - Hidden on mobile */}
      <div className="hidden lg:block fixed left-4 top-32 w-72 bg-primary-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-primary-mist z-40">
        <h3 className="font-bold text-primary-black mb-4">Presentation Outline</h3>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 text-sm ${
                index === currentSlide
                  ? 'bg-primary-green text-primary-white'
                  : 'text-primary-sage hover:bg-primary-mist hover:text-primary-black'
              }`}
            >
              {index + 1}. {slide.title}
            </button>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
