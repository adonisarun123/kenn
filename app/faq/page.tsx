'use client'

import { useState } from 'react'
import { Search, ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: React.ReactNode
  category: string
}

const faqs: FAQItem[] = [
  {
    question: "How much does a managed farmland plot cost at Kenn EcoEstates?",
    answer: (
      <div className="space-y-4">
        <p>
          Prices start around ₹1.3 Cr for an acre Wellness Grove and scale with:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Size</li>
          <li>Soil depth</li>
          <li>Water-table index</li>
        </ul>
        <p>
          Every plot is pre-certified organic and comes with a 30-year regenerative-ag management plan baked into the price—no hidden "agronomy fees" later.
        </p>
      </div>
    ),
    category: "Pricing & Investment"
  },
  {
    question: "Do I own the land outright or is it a lease?",
    answer: (
      <p>
        You get freehold, clear-title land registered in your name. We then layer a Stewardship Covenant on top that protects the land's ecological value forever—think of it as a constitutional amendment for your soil.
      </p>
    ),
    category: "Legal & Ownership"
  },
  {
    question: "What exactly is included in the \"turn-key\" model?",
    answer: (
      <div className="space-y-4">
        <ul className="list-disc pl-6 space-y-2">
          <li>Soil rebirth program (carbon-enriched composting, mycorrhizal inoculation)</li>
          <li>Perennial food-forest design & planting (mango, avocado, moringa, pepper vines)</li>
          <li>Drip + sprinkler irrigation with IoT moisture sensors</li>
          <li>Weekend cottage shell (250 sq ft, expandable) built from stabilized earth blocks</li>
          <li>Community shared assets: yoga barn, co-working loft, cold-press juicery</li>
          <li>Annual harvest concierge: we pick, pack, and deliver your produce to Bangalore</li>
        </ul>
      </div>
    ),
    category: "Features & Amenities"
  },
  {
    question: "How far is the estate from Bangalore city center?",
    answer: (
      <div className="space-y-4">
        <p>
          Gate-to-Gate: 90–120 minutes depending on traffic (Sarjapur Road → Kanakapura → estate).
        </p>
        <p>
          We run a twice-daily shuttle on weekends for members who'd rather meditate than drive.
        </p>
      </div>
    ),
    category: "Location & Access"
  },
  {
    question: "Can I build a bigger home later?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes. Architectural guidelines keep the visual harmony (earthen tones, living roofs, max 15% ground coverage) but you can expand up to 1,500 sq ft on a ½-acre plot.
        </p>
        <p>
          Our in-house design studio helps you stay code-compliant and carbon-positive.
        </p>
      </div>
    ),
    category: "Construction & Development"
  },
  {
    question: "What water security looks like in 2035?",
    answer: (
      <div className="space-y-4">
        <p>Each plot has:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Recharged open well (min 40 ft water column year-round)</li>
          <li>150 m² roof rainwater harvesting feeding a 25,000 L tank</li>
          <li>Shared 3-acre lake with floating wetlands for natural filtration</li>
        </ul>
        <p>
          We also insure every member against a "drought year" via a communal contingency fund.
        </p>
      </div>
    ),
    category: "Sustainability & Resources"
  },
  {
    question: "Are there income opportunities from the land?",
    answer: (
      <div className="space-y-4">
        <p>Absolutely.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Agri-tourism: Host weekend retreats, earn ₹40–60 K per month</li>
          <li>Value-add: We teach you to turn surplus turmeric & moringa into wellness powders (ROI ~18% in year 3)</li>
          <li>Carbon credits: Our regenerative practices qualify for premium voluntary credits—first payout projected 2026</li>
        </ul>
      </div>
    ),
    category: "Income & Returns"
  },
  {
    question: "What legal checks are done before handover?",
    answer: (
      <div className="space-y-4">
        <ul className="list-disc pl-6 space-y-2">
          <li>7/12 extract & RTC going back 50 years</li>
          <li>Encumbrance & litigation-free certificate</li>
          <li>NOC from Karnataka Pollution Control Board for organic certification</li>
          <li>RERA registration for the cottage component</li>
        </ul>
        <p>
          You get a digital vault link with all scanned docs after booking.
        </p>
      </div>
    ),
    category: "Legal & Ownership"
  },
  {
    question: "Can Non-Resident Indians buy?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes—under RBI's "Repatriation Basis" route. Our legal partners handle the FEMA paperwork; average closing time for NRIs is 45 days.
        </p>
      </div>
    ),
    category: "Legal & Ownership"
  },
  {
    question: "What is the exit policy?",
    answer: (
      <div className="space-y-4">
        <p>
          To ensure the development of a strong, committed community, there is a mandatory 5-year lock-in period before any resale is permitted. This policy helps build lasting relationships and ensures members are invested in the community's long-term success.
        </p>
        <p>
          After the lock-in period, you may sell to a buyer who aligns with our community values and signs the same Stewardship Covenant. Kenn EcoEstates retains a right of first refusal for 30 days to maintain community integrity.
        </p>
        <p>
          This community-first approach has proven beneficial for all members—historically, plots have appreciated 12–15% CAGR due to our built-in organic premium and strong community foundation.
        </p>
      </div>
    ),
    category: "Legal & Ownership"
  }
]

const categories = Array.from(new Set(faqs.map(faq => faq.category)))

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [openQuestions, setOpenQuestions] = useState<number[]>([])

  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-primary-white">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": typeof faq.answer === 'string' 
                  ? faq.answer 
                  : (faq.answer as any)?.props?.children?.[0]?.props?.children || ""
              }
            }))
          })
        }}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-green to-primary-clay text-primary-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl opacity-90">
            Everything you need to know about Kenn EcoEstates
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-sage" />
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-primary-mist focus:outline-none focus:ring-2 focus:ring-primary-green"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-3 rounded-lg border border-primary-mist focus:outline-none focus:ring-2 focus:ring-primary-green bg-white"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-primary-mist rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-primary-mist/10 transition-colors duration-200"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium text-lg pr-8">{faq.question}</span>
                {openQuestions.includes(index) ? (
                  <ChevronUp className="flex-shrink-0 text-primary-sage" />
                ) : (
                  <ChevronDown className="flex-shrink-0 text-primary-sage" />
                )}
              </button>
              {openQuestions.includes(index) && (
                <div className="px-6 py-4 bg-primary-mist/5">
                  <div className="prose max-w-none text-primary-sage">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-primary-sage">
              No questions found matching your search. Try different keywords or browse all categories.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}