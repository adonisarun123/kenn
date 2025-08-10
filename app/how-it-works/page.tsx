'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight, Users, Shield, Vote, Building, Heart, TreePine, CheckCircle, Calendar, MapPin, DollarSign, FileText, Key } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const slides = [
  {
    id: 1,
    title: "Welcome to Kenn EcoEstates",
    subtitle: "Your Journey to Wellness Living Starts Here",
    content: "Discover how we're revolutionizing community living through our unique land trust model, transparent governance, and wellness-focused infrastructure.",
    icon: <Heart className="text-primary-green" size={64} />,
    highlights: [
      "Ultra-premium wellness community",
      "100 carefully selected families",
      "30-acre pristine land near Bangalore",
      "Private land trust ownership model"
    ]
  },
  {
    id: 2,
    title: "Step 1: Understanding the Vision",
    subtitle: "More Than Land Ownership - It's Community Building",
    content: "Kenn EcoEstates isn't just real estate. It's a carefully curated ecosystem where health-conscious achievers come together to build a legacy of wellness and purposeful living.",
    icon: <TreePine className="text-primary-green" size={64} />,
    highlights: [
      "Health-first community design",
      "Shared values and vision",
      "Sustainable living practices",
      "Long-term community legacy"
    ]
  },
  {
    id: 3,
    title: "Step 2: The Application Process",
    subtitle: "Joining Our Exclusive Community",
    content: "Our selective application process ensures that every member shares our commitment to wellness, community values, and sustainable living.",
    icon: <FileText className="text-primary-clay" size={64} />,
    highlights: [
      "Comprehensive application form",
      "Background and vision alignment check",
      "Community interview process",
      "Charter member privileges for early joiners"
    ]
  },
  {
    id: 4,
    title: "Step 3: Land Trust Ownership",
    subtitle: "Revolutionary Ownership Model",
    content: "Unlike traditional real estate, our private land trust model ensures collective ownership, democratic governance, and protection from commercialization.",
    icon: <Shield className="text-primary-green" size={64} />,
    highlights: [
      "Private land trust structure",
      "Collective ownership benefits",
      "Legal protection and clarity",
      "No traditional real estate complications"
    ]
  },
  {
    id: 5,
    title: "Step 4: Your Land Parcel",
    subtitle: "10,000 Sq Ft of Wellness Paradise",
    content: "Each family receives a thoughtfully planned 10,000 sq ft land parcel within our 30-acre community, perfect for building your wellness retreat.",
    icon: <MapPin className="text-primary-clay" size={64} />,
    highlights: [
      "10,000 sq ft individual parcel",
      "Premium location selection",
      "Natural landscape integration",
      "Privacy with community connection"
    ]
  },
  {
    id: 6,
    title: "Step 5: Democratic Governance",
    subtitle: "Your Voice Matters in Every Decision",
    content: "As a land owner, you receive 0.5% voting rights in all community decisions, ensuring transparent and democratic governance of our shared spaces and policies.",
    icon: <Vote className="text-primary-green" size={64} />,
    highlights: [
      "0.5% voting rights per plot",
      "Democratic decision making",
      "Transparent governance process",
      "Active community participation"
    ]
  },
  {
    id: 7,
    title: "Step 6: Shared Infrastructure",
    subtitle: "Premium Wellness Amenities for All",
    content: "Access world-class wellness infrastructure including open-air gyms, walking trails, kitchen gardens, and curated wellness programs designed for holistic health.",
    icon: <Building className="text-primary-clay" size={64} />,
    highlights: [
      "Open-air fitness facilities",
      "Nature walking trails",
      "Organic kitchen gardens",
      "Community wellness programs"
    ]
  },
  {
    id: 8,
    title: "Step 7: Community Guidelines",
    subtitle: "Maintaining Our Shared Values",
    content: "Structured guidelines ensure our community maintains its wellness focus, environmental sustainability, and quality standards for generations to come.",
    icon: <CheckCircle className="text-primary-green" size={64} />,
    highlights: [
      "Architecture and design standards",
      "Environmental sustainability rules",
      "Community behavior guidelines",
      "Wellness-focused regulations"
    ]
  },
  {
    id: 9,
    title: "Step 8: Transparent Investment",
    subtitle: "10% Flat Service Charge - No Hidden Costs",
    content: "Our transparent pricing model eliminates agents, commissions, and hidden markups. Pay only a 10% service charge for complete community development and management.",
    icon: <DollarSign className="text-primary-clay" size={64} />,
    highlights: [
      "10% flat service charge only",
      "No agent commissions",
      "No hidden markups",
      "Complete cost transparency"
    ]
  },
  {
    id: 10,
    title: "Step 9: Building Your Dreams",
    subtitle: "Creating Your Wellness Sanctuary",
    content: "Once you're part of the community, work with our approved architects and builders to create your dream wellness home following our community guidelines.",
    icon: <Key className="text-primary-green" size={64} />,
    highlights: [
      "Approved architect network",
      "Sustainable building practices",
      "Community-approved designs",
      "Wellness-focused architecture"
    ]
  },
  {
    id: 11,
    title: "Step 10: Lifetime Community",
    subtitle: "Your Forever Wellness Family",
    content: "Enjoy lifetime membership in an exclusive community of like-minded individuals, with ongoing wellness programs, events, and the satisfaction of building something meaningful together.",
    icon: <Users className="text-primary-clay" size={64} />,
    highlights: [
      "Lifetime community membership",
      "Regular wellness events",
      "Networking with like-minded families",
      "Legacy building for future generations"
    ]
  }
]

export default function HowItWorks() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <div className="min-h-screen bg-primary-mist">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary-green text-primary-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            How It Works
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            A step-by-step guide to joining Kenn EcoEstates and becoming part of India's most exclusive wellness community
          </p>
        </div>
      </section>

      {/* Slide Presentation */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-primary-sage">
                  Step {currentSlide + 1} of {slides.length}
                </span>
                <span className="text-sm font-medium text-primary-sage">
                  {Math.round(((currentSlide + 1) / slides.length) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-primary-white rounded-full h-2">
                <div 
                  className="bg-primary-green h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Main Slide */}
            <div className="bg-primary-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                
                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-8 flex justify-center lg:justify-start">
                    {currentSlideData.icon}
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
                    {currentSlideData.title}
                  </h2>
                  
                  <h3 className="text-xl text-primary-clay font-semibold mb-6">
                    {currentSlideData.subtitle}
                  </h3>
                  
                  <p className="text-lg text-primary-sage leading-relaxed mb-8">
                    {currentSlideData.content}
                  </p>

                  {/* Navigation Buttons */}
                  <div className="flex gap-4">
                    <button
                      onClick={prevSlide}
                      disabled={currentSlide === 0}
                      className="flex items-center gap-2 px-6 py-3 bg-primary-mist text-primary-black rounded-xl font-semibold hover:bg-primary-sage hover:text-primary-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft size={20} />
                      Previous
                    </button>
                    
                    <button
                      onClick={nextSlide}
                      disabled={currentSlide === slides.length - 1}
                      className="flex items-center gap-2 px-6 py-3 bg-primary-green text-primary-white rounded-xl font-semibold hover:bg-primary-clay transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                {/* Highlights Side */}
                <div className="bg-primary-mist p-8 md:p-12 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold text-primary-black mb-8">
                    Key Highlights
                  </h4>
                  
                  <div className="space-y-4">
                    {currentSlideData.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <CheckCircle className="text-primary-green flex-shrink-0 mt-1" size={20} />
                        <span className="text-primary-black font-medium">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA for last slide */}
                  {currentSlide === slides.length - 1 && (
                    <div className="mt-8 pt-8 border-t border-primary-sage/20">
                      <a
                        href="/apply"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary-green text-primary-white rounded-xl font-bold hover:bg-primary-clay transition-colors"
                      >
                        Start Your Application
                        <ArrowRight size={20} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-12 gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide 
                      ? 'bg-primary-green' 
                      : 'bg-primary-sage/30 hover:bg-primary-sage/50'
                  }`}
                />
              ))}
            </div>

            {/* Quick Navigation */}
            <div className="mt-16 bg-primary-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary-black mb-8 text-center">
                Quick Navigation
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`p-4 rounded-xl text-left transition-colors ${
                      index === currentSlide
                        ? 'bg-primary-green text-primary-white'
                        : 'bg-primary-mist text-primary-black hover:bg-primary-sage hover:text-primary-white'
                    }`}
                  >
                    <div className="text-sm font-bold mb-1">
                      Step {index + 1}
                    </div>
                    <div className="text-xs opacity-90">
                      {slide.title.replace(/^Step \d+: /, '')}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
