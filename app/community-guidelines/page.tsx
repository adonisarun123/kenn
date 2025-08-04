'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Shield, Users, Heart, CheckCircle, AlertTriangle, Crown, Star } from 'lucide-react'

export default function CommunityGuidelines() {
  const coreRequirements = [
    {
      icon: <Shield className="text-red-600" size={32} />,
      title: "Financial Readiness",
      description: "Demonstrate liquid investment capacity of ₹2.5+ Crores without affecting your primary residence or emergency fund.",
      level: "Non-Negotiable"
    },
    {
      icon: <Heart className="text-red-600" size={32} />,
      title: "Wellness Commitment",
      description: "Active participation in at least 3 wellness practices with documented experience and genuine lifestyle alignment.",
      level: "Essential"
    },
    {
      icon: <Users className="text-red-600" size={32} />,
      title: "Community Contribution",
      description: "Proven track record of collaborative mindset and ability to contribute meaningfully to group initiatives.",
      level: "Required"
    },
    {
      icon: <Crown className="text-red-600" size={32} />,
      title: "Professional Standing",
      description: "Established career or business with stable income source and positive professional reputation.",
      level: "Mandatory"
    }
  ]

  const exclusionCriteria = [
    "Purely investment-focused mindset without genuine wellness interest",
    "History of conflicts in community or residential settings",
    "Inability to commit to minimum 5-year community involvement",
    "Lack of respect for shared spaces and community guidelines",
    "Commercial or business intentions for the land parcel",
    "Unwillingness to participate in community governance and decision-making"
  ]

  const membershipStandards = [
    {
      title: "Respectful Communication",
      description: "All interactions must maintain dignity, respect, and constructive dialogue"
    },
    {
      title: "Wellness Priority",
      description: "Personal health and wellness must be a genuine lifestyle priority, not a trend"
    },
    {
      title: "Community First",
      description: "Decisions should consider community benefit alongside personal interests"
    },
    {
      title: "Environmental Responsibility",
      description: "Commitment to sustainable and eco-friendly practices in all community activities"
    },
    {
      title: "Long-term Vision",
      description: "Alignment with building a lasting legacy rather than short-term gains"
    },
    {
      title: "Transparency",
      description: "Open and honest communication about intentions, concerns, and contributions"
    }
  ]

  return (
    <div className="min-h-screen bg-primary-white">
      {/* Header */}
      <div className="bg-primary-white border-b border-primary-mist">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/kenn-logo.png"
                alt="Kenn EcoEstates"
                width={120}
                height={40}
                className="w-auto h-8"
              />
            </Link>
            <Link 
              href="/"
              className="text-primary-sage hover:text-primary-green transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-white via-primary-mist/20 to-primary-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-3 bg-red-50 px-6 py-3 rounded-full mb-8">
              <AlertTriangle className="text-red-600" size={24} />
              <span className="text-red-800 font-semibold">Exclusive Community Standards</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-primary-black mb-6">
              Community Guidelines
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-sage mb-8 leading-relaxed">
              Kenn EcoEstates is not for everyone. We maintain the highest standards to ensure a 
              <span className="font-semibold text-primary-green"> curated, harmonious community</span> of genuinely committed wellness achievers.
            </p>
            
            <div className="bg-primary-green rounded-2xl p-8 text-primary-white">
              <h2 className="text-2xl font-bold mb-4">🎯 Our Philosophy</h2>
              <p className="text-lg opacity-90 leading-relaxed">
                "We believe that exceptional communities are built through careful curation, shared values, 
                and unwavering commitment to collective growth. Quality over quantity, always."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Requirements */}
      <section className="py-20 bg-primary-mist">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-8">
                Non-Negotiable Requirements
              </h2>
              <p className="text-xl text-primary-sage max-w-4xl mx-auto">
                Every member must meet these four fundamental criteria. No exceptions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreRequirements.map((requirement, index) => (
                <div key={index} className="bg-primary-white rounded-3xl p-8 shadow-lg border-l-4 border-red-500">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {requirement.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-primary-black">
                          {requirement.title}
                        </h3>
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {requirement.level}
                        </span>
                      </div>
                      <p className="text-primary-sage leading-relaxed">
                        {requirement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exclusion Criteria */}
      <section className="py-20 bg-primary-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-8">
                Automatic Exclusion Criteria
              </h2>
              <p className="text-xl text-primary-sage max-w-4xl mx-auto">
                Applications demonstrating any of these characteristics will be respectfully declined.
              </p>
            </div>

            <div className="bg-red-50 rounded-3xl p-8 md:p-12 border border-red-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {exclusionCriteria.map((criterion, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-bold">✕</span>
                    </div>
                    <p className="text-red-800 leading-relaxed">
                      {criterion}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Standards */}
      <section className="py-20 bg-primary-mist">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-8">
                Community Standards
              </h2>
              <p className="text-xl text-primary-sage max-w-4xl mx-auto">
                Our shared principles that guide every interaction and decision within the community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {membershipStandards.map((standard, index) => (
                <div key={index} className="bg-primary-white rounded-3xl p-6 shadow-lg text-center">
                  <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-primary-white" size={24} />
                  </div>
                  <h3 className="font-bold text-primary-black mb-3 text-lg">
                    {standard.title}
                  </h3>
                  <p className="text-primary-sage leading-relaxed text-sm">
                    {standard.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-primary-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-8">
              Ready to Apply?
            </h2>
            
            <div className="bg-primary-green rounded-3xl p-8 md:p-12 text-primary-white mb-12">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Star className="text-yellow-300" size={32} />
                <h3 className="text-2xl font-bold">Selection Process</h3>
                <Star className="text-yellow-300" size={32} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">01</div>
                  <h4 className="font-semibold mb-2">Application Review</h4>
                  <p className="opacity-90 text-sm">Comprehensive evaluation of your background and alignment</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">02</div>
                  <h4 className="font-semibold mb-2">Personal Interview</h4>
                  <p className="opacity-90 text-sm">One-on-one discussion about vision and commitment</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">03</div>
                  <h4 className="font-semibold mb-2">Community Integration</h4>
                  <p className="opacity-90 text-sm">Meeting current members and final approval process</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/apply"
                className="bg-primary-green text-primary-white px-8 py-4 rounded-full hover:bg-primary-clay transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Begin Application Process
              </Link>
              <Link 
                href="/"
                className="border-2 border-primary-green text-primary-green px-8 py-4 rounded-full hover:bg-primary-green hover:text-primary-white transition-all duration-300 font-semibold"
              >
                Learn More About Community
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}