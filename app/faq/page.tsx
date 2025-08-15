'use client'

import { useState } from 'react'
import { ChevronDown, Search, Plus, Minus } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

// FAQ Categories with their questions
const faqCategories = [
  {
    id: 'general',
    name: 'General Information',
    icon: '🏡',
    questions: [
      {
        q: "What is Kenn EcoEstates?",
        a: "Kenn EcoEstates is India's first ultra-premium wellness-driven land community, spanning 30+ acres near Bangalore. We offer 10,000 sq ft land parcels within a thoughtfully designed ecosystem that combines private ownership with community wellness facilities. Our unique model includes democratic governance, with each owner receiving 0.5% voting rights in community decisions."
      },
      {
        q: "Where is Kenn EcoEstates located?",
        a: "Kenn EcoEstates is strategically located within 150 km of Bangalore, offering the perfect balance of accessibility and serenity. The exact location details are shared with serious applicants to maintain the exclusivity and security of our community. The site is carefully chosen to ensure clean air, natural surroundings, and freedom from urban pollution."
      },
      {
        q: "How is Kenn EcoEstates different from traditional land ownership?",
        a: "Unlike traditional land ownership, Kenn EcoEstates offers a unique combination of benefits: 1) Private land trust structure ensuring collective interests, 2) Democratic governance with 0.5% voting rights per plot, 3) Premium wellness infrastructure including open-air gyms and walking trails, 4) Curated community of 100 health-conscious families, and 5) Transparent pricing with a flat 10% service charge."
      }
    ]
  },
  {
    id: 'ownership',
    name: 'Land Ownership & Investment',
    icon: '🔑',
    questions: [
      {
        q: "What is the plot size and ownership structure?",
        a: "Each member receives a 10,000 sq ft land parcel within our 30+-acre community. The ownership is structured through a private land trust, ensuring both individual ownership rights and community interests are protected. This model combines the benefits of private ownership with shared community governance."
      },
      {
        q: "What is the investment model and pricing structure?",
        a: "Our pricing is transparent with a flat 10% service charge. The base land cost follows market rates, and there are no hidden fees or commissions. The investment includes: 1) 10,000 sq ft land parcel, 2) Access to all community wellness facilities, 3) Voting rights in community decisions, and 4) Infrastructure development."
      },
      {
        q: "Is this a good investment compared to traditional real estate?",
        a: "Kenn EcoEstates offers unique investment advantages: 1) Premium land appreciation potential, 2) Built-in community and wellness infrastructure adding value, 3) Democratic governance ensuring community interests, 4) No traditional real estate hassles or hidden costs, and 5) Part of a growing wellness-focused real estate segment."
      }
    ]
  },
  {
    id: 'community',
    name: 'Community & Lifestyle',
    icon: '👥',
    questions: [
      {
        q: "Who are the typical members of Kenn EcoEstates?",
        a: "Our community consists of health-conscious urban professionals, including successful entrepreneurs, executives, and wellness enthusiasts. Members share common values around health, sustainability, and community living. They typically seek a balance between their urban professional lives and a wellness-focused lifestyle."
      },
      {
        q: "What wellness amenities are included?",
        a: "Our wellness infrastructure includes: 1) Open-air fitness facilities, 2) Walking and meditation trails, 3) Organic kitchen gardens, 4) Community wellness programs, 5) Natural landscape integration, 6) Sustainable architecture guidelines, and 7) Curated wellness events and workshops."
      },
      {
        q: "How does the community governance work?",
        a: "Each plot owner receives 0.5% voting rights in community decisions. This democratic model ensures transparent governance in matters like: 1) Community development initiatives, 2) Wellness program planning, 3) Infrastructure improvements, 4) Community guidelines evolution, and 5) Shared resource management."
      }
    ]
  },
  {
    id: 'application',
    name: 'Application Process',
    icon: '📝',
    questions: [
      {
        q: "What is the application process?",
        a: "The application process involves: 1) Submitting an initial application form, 2) Background and vision alignment check, 3) Community interview process, 4) Financial readiness verification, and 5) Final approval. We accept only 100 families to maintain the community's exclusivity and shared values."
      },
      {
        q: "What are the criteria for selection?",
        a: "We evaluate applications based on: 1) Alignment with community wellness values, 2) Commitment to health-conscious living, 3) Professional background and community contribution potential, 4) Financial readiness, and 5) Long-term community engagement plans."
      },
      {
        q: "Are there any restrictions on land use or building?",
        a: "Yes, we maintain certain guidelines to ensure community harmony: 1) Sustainable building practices requirement, 2) Architectural guidelines for aesthetic consistency, 3) Environmental impact considerations, 4) 5-year no-resale policy, and 5) Wellness-focused development principles."
      }
    ]
  },
  {
    id: 'sustainability',
    name: 'Sustainability & Environment',
    icon: '🌱',
    questions: [
      {
        q: "What sustainable practices are implemented at Kenn EcoEstates?",
        a: "Our sustainability initiatives include: 1) Organic farming areas, 2) Rainwater harvesting systems, 3) Solar power integration, 4) Waste management programs, 5) Native species preservation, 6) Sustainable building guidelines, and 7) Environmental education programs."
      },
      {
        q: "How do you maintain environmental balance in the community?",
        a: "We maintain environmental balance through: 1) Limited development footprint, 2) Native landscape preservation, 3) Sustainable infrastructure design, 4) Organic farming practices, 5) Wildlife corridor protection, and 6) Regular environmental impact assessments."
      }
    ]
  },
  {
    id: 'technology',
    name: 'Smart Features & Technology',
    icon: '💡',
    questions: [
      {
        q: "What smart features are integrated into the community?",
        a: "Our community incorporates modern technology through: 1) Smart security systems, 2) Community app for governance participation, 3) Wellness tracking integration, 4) Sustainable energy monitoring, 5) Digital community engagement platforms."
      },
      {
        q: "How is technology used in community management?",
        a: "We leverage technology for: 1) Democratic voting system, 2) Community communications, 3) Wellness program scheduling, 4) Resource sharing platforms, 5) Environmental monitoring, and 6) Security management."
      }
    ]
  }
]

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('general')
  const [openQuestions, setOpenQuestions] = useState<{[key: string]: boolean}>({})

  const toggleQuestion = (categoryId: string, questionIndex: number) => {
    const key = `${categoryId}-${questionIndex}`
    setOpenQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  // Filter questions based on search
  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-primary-white">
      <Header />

      {/* Schema.org FAQ Markup */}
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqCategories.flatMap(category => 
            category.questions.map(q => ({
              "@type": "Question",
              "name": q.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": q.a
              }
            }))
          )
        })}
      </Script>
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-green/10 via-primary-white to-primary-clay/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-black mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-sage mb-12">
              Everything you need to know about Kenn EcoEstates and our wellness-focused community.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                className="w-full px-6 py-4 bg-white rounded-full shadow-lg border border-primary-mist focus:outline-none focus:ring-2 focus:ring-primary-green text-primary-black placeholder-primary-sage"
              />
              <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-primary-sage" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-primary-green text-primary-white shadow-lg'
                    : 'bg-primary-mist text-primary-black hover:bg-primary-sage hover:text-primary-white'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 bg-gradient-to-br from-primary-white via-primary-mist/20 to-primary-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {(searchQuery ? filteredCategories : faqCategories).map((category) => (
              <div
                key={category.id}
                className={`mb-12 ${
                  searchQuery || activeCategory === category.id ? 'block' : 'hidden'
                }`}
              >
                <h2 className="text-3xl font-bold text-primary-black mb-8 flex items-center gap-3">
                  <span>{category.icon}</span>
                  {category.name}
                </h2>

                <div className="space-y-4">
                  {category.questions.map((q, index) => {
                    const key = `${category.id}-${index}`
                    const isOpen = openQuestions[key]

                    return (
                      <div
                        key={index}
                        className="bg-primary-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-mist"
                      >
                        <button
                          onClick={() => toggleQuestion(category.id, index)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left"
                        >
                          <span className="font-semibold text-primary-black flex-1 pr-4">
                            {q.q}
                          </span>
                          {isOpen ? (
                            <Minus className="text-primary-green flex-shrink-0" size={20} />
                          ) : (
                            <Plus className="text-primary-green flex-shrink-0" size={20} />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <div className="pt-4 border-t border-primary-mist">
                              <p className="text-primary-sage whitespace-pre-line">
                                {q.a}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-r from-primary-green to-primary-clay text-primary-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Our team is here to help you understand every aspect of Kenn EcoEstates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/apply"
                className="px-8 py-4 bg-primary-white text-primary-green rounded-full font-semibold hover:bg-primary-mist transition-all duration-300"
              >
                Apply Now
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-primary-white text-primary-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
