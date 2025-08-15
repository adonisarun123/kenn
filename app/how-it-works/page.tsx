'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight, Users, Shield, Vote, Building, Heart, TreePine, CheckCircle, Calendar, MapPin, DollarSign, FileText, Key, Target, Lightbulb, Home } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

const sections = [
  {
    id: 'welcome',
    title: "Welcome to Kenn EcoEstates",
    subtitle: "Where Clean Living Meets Collective Consciousness",
    icon: <Heart className="text-primary-green" size={48} />,
    content: "A comprehensive journey through India's first ultra-premium, wellness-driven land community designed for health-conscious achievers.",
    highlights: [
      "Ultra-premium wellness community",
      "100 carefully selected families",
      "30+-acre pristine land near Bangalore",
      "Private land trust ownership model"
    ],
    bgColor: "bg-gradient-to-br from-primary-white via-primary-mist/30 to-primary-white"
  },
  {
    id: 'problem',
    title: "The Urban Challenge",
    subtitle: "Understanding the Problem We're Solving",
    icon: <Target className="text-primary-clay" size={48} />,
    content: "Modern urban living presents unique challenges for health-conscious professionals seeking meaningful community and wellness-focused lifestyle.",
    challenges: [
      { title: "Pollution & Noise", desc: "City air quality deteriorating, constant noise affecting mental health", icon: "🏭" },
      { title: "Stress & Burnout", desc: "High-achievers struggling with work-life balance and purpose", icon: "😰" },
      { title: "Expensive Club Memberships", desc: "₹60+ Lakhs for access without ownership or long-term value", icon: "🏠" },
      { title: "Lack of Community", desc: "Difficulty finding like-minded individuals with shared values", icon: "🤝" }
    ],
    bgColor: "bg-gradient-to-br from-gray-50 to-white"
  },
  {
    id: 'solution',
    title: "Our Comprehensive Solution",
    subtitle: "More Than Land Ownership - Complete Lifestyle Transformation",
    icon: <Lightbulb className="text-primary-green" size={48} />,
    content: "Kenn EcoEstates offers a holistic solution combining land ownership, community governance, wellness infrastructure, and exclusive lifestyle.",
    solutionAreas: [
      { title: "Land Ownership", desc: "10,000 sq ft individual plots within 30+-acre community", icon: <MapPin className="text-primary-green" size={24} /> },
      { title: "Democratic Governance", desc: "0.5% voting rights per plot owner with transparent decision-making", icon: <Vote className="text-primary-clay" size={24} /> },
      { title: "Wellness Infrastructure", desc: "Open-air gyms, trails, gardens, and curated wellness programs", icon: <Building className="text-primary-green" size={24} /> },
      { title: "Exclusive Community", desc: "Limited to 100 families with 5-year no-resale policy", icon: <Users className="text-primary-clay" size={24} /> }
    ],
    bgColor: "bg-gradient-to-br from-primary-white via-primary-mist/20 to-primary-white"
  },
  {
    id: 'process',
    title: "The Step-by-Step Journey",
    subtitle: "Your Path to Wellness Community Membership",
    icon: <TreePine className="text-primary-green" size={48} />,
    content: "A carefully designed process ensuring alignment with our values and vision for sustainable wellness living.",
    bgColor: "bg-gradient-to-br from-blue-50 via-white to-green-50"
  }
]

const processSteps = [
  {
    id: 1,
    title: "Application & Vision Alignment",
    subtitle: "Joining Our Exclusive Community",
    content: "Submit comprehensive application demonstrating alignment with wellness values and community vision.",
    icon: <FileText className="text-primary-clay" size={40} />,
    highlights: [
      "Comprehensive application form",
      "Background and vision alignment check",
      "Community interview process",
      "Charter member privileges for early joiners"
    ]
  },
  {
    id: 2,
    title: "Land Trust Ownership",
    subtitle: "Revolutionary Ownership Model",
    content: "Unlike traditional real estate, our private land trust ensures collective ownership and democratic governance.",
    icon: <Shield className="text-primary-green" size={40} />,
    highlights: [
      "Private land trust structure",
      "Collective ownership benefits",
      "Legal protection and clarity",
      "No traditional real estate complications"
    ]
  },
  {
    id: 3,
    title: "Your 10,000 Sq Ft Parcel",
    subtitle: "Personal Wellness Paradise",
    content: "Each family receives a thoughtfully planned land parcel within our 30+-acre community ecosystem.",
    icon: <MapPin className="text-primary-clay" size={40} />,
    highlights: [
      "10,000 sq ft individual parcel",
      "Premium location selection",
      "Natural landscape integration",
      "Privacy with community connection"
    ]
  },
  {
    id: 4,
    title: "Democratic Governance",
    subtitle: "Your Voice in Every Decision",
    content: "0.5% voting rights per plot owner ensuring transparent and democratic community governance.",
    icon: <Vote className="text-primary-green" size={40} />,
    highlights: [
      "0.5% voting rights per plot",
      "Democratic decision making",
      "Transparent governance process",
      "Active community participation"
    ]
  },
  {
    id: 5,
    title: "Shared Wellness Infrastructure",
    subtitle: "Premium Amenities for Holistic Health",
    content: "Access world-class wellness facilities designed for comprehensive mind, body, and spirit wellness.",
    icon: <Building className="text-primary-clay" size={40} />,
    highlights: [
      "Open-air fitness facilities",
      "Nature walking trails",
      "Organic kitchen gardens",
      "Community wellness programs"
    ]
  },
  {
    id: 6,
    title: "Transparent Investment",
    subtitle: "10% Flat Service Charge - No Hidden Costs",
    content: "Transparent pricing eliminates agents, commissions, and hidden markups with complete cost clarity.",
    icon: <DollarSign className="text-primary-green" size={40} />,
    highlights: [
      "10% flat service charge only",
      "No agent commissions",
      "No hidden markups",
      "Complete cost transparency"
    ]
  },
  {
    id: 7,
    title: "Building Your Dreams",
    subtitle: "Creating Your Wellness Sanctuary",
    content: "Work with approved architects and builders to create your dream wellness home following community guidelines.",
    icon: <Key className="text-primary-clay" size={40} />,
    highlights: [
      "Approved architect network",
      "Sustainable building practices",
      "Community-approved designs",
      "Wellness-focused architecture"
    ]
  },
  {
    id: 8,
    title: "Lifetime Community",
    subtitle: "Your Forever Wellness Family",
    content: "Enjoy lifetime membership with ongoing wellness programs, events, and meaningful legacy building.",
    icon: <Users className="text-primary-green" size={40} />,
    highlights: [
      "Lifetime community membership",
      "Regular wellness events",
      "Networking with like-minded families",
      "Legacy building for future generations"
    ]
  }
]

const advantages = [
  {
    title: "Clear Purpose & Vision",
    description: "Ultra-premium, wellness-driven community specifically designed for urban professionals seeking health-centric lifestyle",
    icon: "🎯"
  },
  {
    title: "Unique Ownership Model",
    description: "Private land trust with democratic governance, voting rights, and transparent 10% flat service charge",
    icon: "🗳️"
  },
  {
    title: "Robust Wellness Infrastructure",
    description: "Comprehensive amenities reinforcing health-first ethos with curated wellness programs",
    icon: "🏃‍♂️"
  },
  {
    title: "Premium Branding Experience",
    description: "Evocative narrative focused on wellness, purpose, and community for emotionally compelling experience",
    icon: "✨"
  },
  {
    title: "Strong Exclusivity",
    description: "Limited to 100 health-conscious families with charter privileges and 5-year no-resale policy",
    icon: "👑"
  }
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const [activeSection, setActiveSection] = useState('welcome')

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-primary-white">
      <Header />
      
      {/* Hero Section */}
      <section id="welcome" className="py-20 bg-gradient-to-r from-primary-green to-primary-clay text-primary-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Heart className="text-primary-white" size={80} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-2xl md:text-3xl opacity-90 mb-8">
              Where Clean Living Meets Collective Consciousness
            </p>
            <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
              A comprehensive guide to joining Kenn EcoEstates and becoming part of India's most exclusive wellness community
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 bg-primary-mist/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-black text-center mb-8">Journey Overview</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`p-4 rounded-2xl text-center transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-primary-green text-primary-white shadow-lg scale-105'
                      : 'bg-primary-white text-primary-black hover:bg-primary-green hover:text-primary-white shadow-md'
                  }`}
                >
                  <div className="flex justify-center mb-2">{section.icon}</div>
                  <div className="text-sm font-semibold">{section.title}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <Target className="text-primary-clay" size={60} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-6">The Urban Challenge</h2>
              <p className="text-xl text-primary-sage max-w-3xl mx-auto">
                Understanding the challenges that drive successful professionals to seek wellness-focused community living
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections[1].challenges?.map((challenge, index) => (
                <div key={index} className="bg-primary-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{challenge.icon}</span>
                    <h3 className="text-2xl font-bold text-primary-black">{challenge.title}</h3>
                  </div>
                  <p className="text-primary-sage leading-relaxed">{challenge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section id="solution" className="py-20 bg-gradient-to-br from-primary-white via-primary-mist/20 to-primary-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <Lightbulb className="text-primary-green" size={60} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-6">Our Comprehensive Solution</h2>
              <p className="text-xl text-primary-sage max-w-3xl mx-auto">
                More than land ownership - a complete lifestyle transformation through community, wellness, and purpose
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {sections[2].solutionAreas?.map((area, index) => (
                <div key={index} className="bg-primary-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-mist hover:border-primary-green/30">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary-mist rounded-2xl flex items-center justify-center mr-4">
                      {area.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-primary-black">{area.title}</h3>
                  </div>
                  <p className="text-primary-sage leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section id="process" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <TreePine className="text-primary-green" size={60} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-6">Your Step-by-Step Journey</h2>
              <p className="text-xl text-primary-sage max-w-3xl mx-auto">
                A carefully designed process ensuring alignment with our values and vision for sustainable wellness living
              </p>
            </div>

            {/* Interactive Step Navigation */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {processSteps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      index === activeStep
                        ? 'bg-primary-green text-primary-white shadow-lg'
                        : 'bg-primary-white text-primary-sage hover:bg-primary-mist'
                    }`}
                  >
                    Step {step.id}
                  </button>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-primary-mist rounded-full h-2 mb-8">
                <div 
                  className="bg-primary-green h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Active Step Display */}
            <div className="bg-primary-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-8 flex justify-center lg:justify-start">
                    {processSteps[activeStep].icon}
                  </div>
                  
                  <div className="text-sm font-semibold text-primary-green mb-2">
                    STEP {processSteps[activeStep].id} OF {processSteps.length}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
                    {processSteps[activeStep].title}
                  </h3>
                  
                  <h4 className="text-xl text-primary-clay font-semibold mb-6">
                    {processSteps[activeStep].subtitle}
                  </h4>
                  
                  <p className="text-lg text-primary-sage leading-relaxed mb-8">
                    {processSteps[activeStep].content}
                  </p>

                  {/* Navigation Buttons */}
                  <div className="flex gap-4">
                    <button
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      disabled={activeStep === 0}
                      className="flex items-center gap-2 px-6 py-3 bg-primary-mist text-primary-black rounded-xl font-semibold hover:bg-primary-sage hover:text-primary-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft size={20} />
                      Previous
                    </button>
                    
                    <button
                      onClick={() => setActiveStep(Math.min(processSteps.length - 1, activeStep + 1))}
                      disabled={activeStep === processSteps.length - 1}
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
                    {processSteps[activeStep].highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <CheckCircle className="text-primary-green flex-shrink-0 mt-1" size={20} />
                        <span className="text-primary-black font-medium">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA for last step */}
                  {activeStep === processSteps.length - 1 && (
                    <div className="mt-8 pt-8 border-t border-primary-sage/20">
                      <Link
                        href="/apply"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary-green text-primary-white rounded-xl font-bold hover:bg-primary-clay transition-colors"
                      >
                        Start Your Application
                        <ArrowRight size={20} />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* All Steps Overview */}
            <div className="mt-16 bg-primary-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary-black mb-8 text-center">
                Complete Journey Overview
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className={`p-6 rounded-xl text-left transition-all duration-300 ${
                      index === activeStep
                        ? 'bg-primary-green text-primary-white transform scale-105'
                        : 'bg-primary-mist text-primary-black hover:bg-primary-sage hover:text-primary-white'
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      {step.icon}
                      <span className="ml-3 text-sm font-bold">Step {step.id}</span>
                    </div>
                    <div className="text-sm font-semibold">
                      {step.title}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kenn EcoEstates is Different */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-primary-mist/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-6">Why We're Different</h2>
              <p className="text-xl text-primary-sage max-w-3xl mx-auto">
                Discover the unique advantages that make Kenn EcoEstates more than just land ownership
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-primary-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-mist hover:border-primary-green/30">
                  <div className="text-4xl mb-4 text-center">{advantage.icon}</div>
                  <h3 className="text-xl font-bold text-primary-black mb-4 text-center">{advantage.title}</h3>
                  <p className="text-primary-sage text-center leading-relaxed">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <DollarSign className="text-primary-clay" size={60} />
            </div>
            <h2 className="text-4xl font-bold text-primary-black mb-6">Transparent Investment</h2>
            <p className="text-xl text-primary-sage mb-12">
              Clear pricing with no hidden costs - just 10% flat service charge
            </p>

            <div className="bg-primary-white rounded-3xl p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-primary-green mb-6">What's Included</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="text-primary-green mr-3" size={20} />
                      <span className="text-primary-sage">10,000 sq ft land parcel</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="text-primary-green mr-3" size={20} />
                      <span className="text-primary-sage">Community infrastructure</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="text-primary-green mr-3" size={20} />
                      <span className="text-primary-sage">Wellness amenities access</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="text-primary-green mr-3" size={20} />
                      <span className="text-primary-sage">Democratic voting rights</span>
                    </div>
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-primary-clay mb-6">What's Not</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="text-red-500 mr-3">✗</span>
                      <span className="text-primary-sage">Agent commissions</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-3">✗</span>
                      <span className="text-primary-sage">Hidden markups</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-3">✗</span>
                      <span className="text-primary-sage">Broker fees</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-3">✗</span>
                      <span className="text-primary-sage">Surprise charges</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-green to-primary-clay text-primary-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto">
            Join an exclusive community of 100 health-conscious families building something extraordinary together
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
            <Link
              href="/apply"
              className="flex-1 bg-primary-white text-primary-green px-8 py-4 rounded-full hover:bg-primary-mist transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
            >
              <FileText className="mr-2" size={20} />
              Start Application
            </Link>
            <Link
              href="/"
              className="flex-1 border-2 border-primary-white text-primary-white px-8 py-4 rounded-full hover:bg-primary-white hover:text-primary-green transition-all duration-300 font-bold flex items-center justify-center"
            >
              <Home className="mr-2" size={20} />
              Back to Home
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100</div>
              <div className="text-lg opacity-80">Exclusive Families</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">30</div>
              <div className="text-lg opacity-80">Acres of Wellness</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">150km</div>
              <div className="text-lg opacity-80">From Bangalore</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}