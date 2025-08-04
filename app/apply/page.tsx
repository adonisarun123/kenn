'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { CheckCircle, ArrowLeft, Send, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    // Section 1 - Identity
    fullName: '',
    mobile: '',
    email: '',
    linkedin: '',
    
    // Section 2 - Wellness Lifestyle
    wellnessPractices: [] as string[],
    healthExperience: '',
    wellnessThemes: [] as string[],
    wellnessThemesOther: '',
    
    // Section 3 - Time & Engagement
    landUsage: '',
    engagementStyle: '',
    serviceChargeAgreement: '',
    
    // Section 4 - Financial Readiness
    financialReadiness: '',
    sharedInfraSupport: '',
    
    // Section 5 - Community Building
    skillsContribution: '',
    referredBy: '',
    
    // Section 6 - Commitment & Values
    pledge: false,
    finalThoughts: ''
  })

  const [currentSection, setCurrentSection] = useState(1)
  const [currentMotivation, setCurrentMotivation] = useState(0)
  const [sectionErrors, setSectionErrors] = useState<string[]>([])
  const totalSections = 6

  const motivationalMessages = [
    "🌟 Only 150 applications will be accepted - secure your spot in this exclusive community!",
    "⏰ Limited time opportunity - be part of India's first land-based wellness collective!",
    "🏡 Your dream 10,000 sq ft wellness retreat is just one application away!",
    "💎 Founding members get priority plot selection - don't miss this chance!",
    "🌱 Join 99 other health-conscious achievers in building something extraordinary!",
    "🎯 This isn't just land ownership - it's your gateway to purposeful living!",
    "✨ Transform your weekends into wellness retreats in your own private sanctuary!",
    "🤝 Be part of a curated community that values health over wealth!"
  ]

  // Motivational message rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMotivation((prev) => (prev + 1) % motivationalMessages.length)
    }, 10000) // Every 10 seconds

    return () => clearInterval(interval)
  }, [])

  const wellnessPracticeOptions = [
    'Functional fitness',
    'Yoga',
    'Clean eating',
    'Outdoor movement',
    'Nature walks',
    'Other'
  ]

  const wellnessThemeOptions = [
    'Organic farming',
    'Home gardening',
    'Natural construction',
    'Forest bathing / Trekking',
    'Nutrition / Clean food',
    'Sustainable architecture',
    'Quiet retreats',
    'Other'
  ]

  const handleCheckboxChange = (field: 'wellnessPractices' | 'wellnessThemes', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your application! You will receive a confirmation email with a PDF deck and FAQs shortly.')
  }

  const validateSection = (section: number): string[] => {
    const errors: string[] = []
    
    switch (section) {
      case 1:
        if (!formData.fullName.trim()) errors.push('Full Name is required')
        if (!formData.mobile.trim()) errors.push('Mobile Number is required')
        if (!formData.email.trim()) errors.push('Email Address is required')
        break
      case 2:
        if (formData.wellnessPractices.length === 0) errors.push('Select at least one wellness practice')
        if (!formData.healthExperience.trim()) errors.push('Health experience is required')
        if (formData.wellnessThemes.length === 0) errors.push('Select at least one wellness theme')
        break
      case 3:
        if (!formData.landUsage) errors.push('Land usage frequency is required')
        if (!formData.engagementStyle) errors.push('Engagement style is required')
        if (!formData.serviceChargeAgreement) errors.push('Service charge agreement is required')
        break
      case 4:
        if (!formData.financialReadiness) errors.push('Financial readiness status is required')
        break
      case 5:
        if (!formData.skillsContribution.trim()) errors.push('Skills contribution is required')
        break
      case 6:
        if (!formData.pledge) errors.push('You must agree to the pledge')
        break
    }
    
    return errors
  }

  const nextSection = () => {
    const errors = validateSection(currentSection)
    setSectionErrors(errors)
    
    if (errors.length === 0 && currentSection < totalSections) {
      setCurrentSection(currentSection + 1)
      setSectionErrors([])
    }
  }

  const prevSection = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1)
      setSectionErrors([])
    }
  }

  const renderProgressBar = () => {
    const progress = (currentSection / totalSections) * 100
    return (
      <div className="w-full bg-primary-mist rounded-full h-2 mb-8">
        <div 
          className="bg-primary-green h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-mist to-primary-white">
      {/* Header */}
      <div className="bg-primary-white shadow-sm border-b border-primary-mist">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <ArrowLeft className="text-primary-sage hover:text-primary-green transition-colors" size={24} />
              <Image
                src="/kenn-logo.png"
                alt="Kenn EcoEstates"
                width={120}
                height={40}
                className="w-auto h-8"
              />
            </Link>
            <div className="text-sm text-primary-sage">
              Step {currentSection} of {totalSections}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-black mb-4">
              Kenn EcoEstates Application Form
            </h1>
            <p className="text-xl text-primary-sage mb-2">
              Join India's First Land-Based Health & Wellness Collective
            </p>
            <p className="text-primary-clay font-medium">
              This form takes <span className="font-bold">under 2 minutes</span> and helps us assess your intent, interest, and alignment with our health-forward vision.
            </p>
          </div>

          {/* Progress Bar */}
          {renderProgressBar()}

          {/* Motivational Message */}
          <div className="bg-primary-green rounded-2xl p-4 mb-8 text-center shadow-lg">
            <p className="text-primary-white font-medium animate-pulse">
              {motivationalMessages[currentMotivation]}
            </p>
          </div>

          {/* Section Errors */}
          {sectionErrors.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-red-800 font-semibold mb-2">Please complete the following:</h3>
                  <ul className="space-y-1">
                    {sectionErrors.map((error, index) => (
                      <li key={index} className="text-red-700 text-sm">• {error}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-primary-white rounded-3xl p-8 md:p-12 shadow-lg">
            {/* Section 1 - Identity */}
            {currentSection === 1 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-primary-black mb-2">
                    SECTION 1 — IDENTITY
                  </h2>
                  <p className="text-primary-sage">Tell us about yourself</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-primary-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-black mb-2">
                      Mobile Number (WhatsApp preferred) *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-primary-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                      placeholder="+91 12345 67890"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-black mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-primary-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-black mb-2">
                      LinkedIn Profile URL
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-primary-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                    <p className="text-xs text-primary-sage mt-1">To understand your background and interests</p>
                  </div>
                </div>
              </div>
            )}

            {/* Section 2 - Wellness Lifestyle */}
            {currentSection === 2 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-primary-black mb-2">
                    SECTION 2 — WELLNESS LIFESTYLE
                  </h2>
                  <p className="text-primary-sage">Your health and wellness journey</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-black mb-4">
                    Your Current Wellness Practices *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {wellnessPracticeOptions.map((practice) => (
                      <label key={practice} className="flex items-center space-x-3 p-3 border border-primary-mist rounded-lg hover:bg-primary-mist transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.wellnessPractices.includes(practice)}
                          onChange={() => handleCheckboxChange('wellnessPractices', practice)}
                          className="w-4 h-4 text-primary-green focus:ring-primary-green border-primary-sage rounded"
                        />
                        <span className="text-sm text-primary-black">{practice}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-black mb-2">
                    One experience that changed your approach to health/lifestyle * (50 words max)
                  </label>
                  <textarea
                    name="healthExperience"
                    required
                    value={formData.healthExperience}
                    onChange={handleInputChange}
                    rows={3}
                    maxLength={300}
                    className="w-full px-4 py-3 border border-primary-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green resize-none"
                    placeholder="Share a transformative moment in your wellness journey..."
                  />
                  <p className="text-xs text-primary-sage mt-1">{formData.healthExperience.length}/300 characters</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-black mb-4">
                    Which wellness themes excite you most? (Pick 3 max) *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {wellnessThemeOptions.map((theme) => (
                      <label key={theme} className="flex items-center space-x-3 p-3 border border-primary-mist rounded-lg hover:bg-primary-mist transition-colors cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.wellnessThemes.includes(theme)}
                          onChange={() => handleCheckboxChange('wellnessThemes', theme)}
                          disabled={formData.wellnessThemes.length >= 3 && !formData.wellnessThemes.includes(theme)}
                          className="w-4 h-4 text-primary-green focus:ring-primary-green border-primary-sage rounded"
                        />
                        <span className={`text-sm ${formData.wellnessThemes.length >= 3 && !formData.wellnessThemes.includes(theme) ? 'text-primary-sage' : 'text-primary-black'}`}>
                          {theme}
                        </span>
                      </label>
                    ))}
                  </div>
                  {formData.wellnessThemes.includes('Other') && (
                    <input
                      type="text"
                      name="wellnessThemesOther"
                      value={formData.wellnessThemesOther}
                      onChange={handleInputChange}
                      className="w-full mt-3 px-4 py-3 border border-primary-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                      placeholder="Please specify other wellness themes..."
                    />
                  )}
                  <p className="text-xs text-primary-sage mt-2">Selected: {formData.wellnessThemes.length}/3</p>
                </div>
              </div>
            )}

            {/* Section 3 - Time & Engagement */}
            {currentSection === 3 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-primary-black mb-2">
                    SECTION 3 — TIME & ENGAGEMENT
                  </h2>
                  <p className="text-primary-sage">How do you plan to engage with the community?</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-black mb-4">
                    How often do you see yourself using your land in Year 1–3? *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['<30 days/year', '30–60 days', '60–120 days', '120+'].map((option) => (
                      <label key={option} className="flex items-center space-x-3 p-4 border border-primary-mist rounded-lg hover:bg-primary-mist transition-colors cursor-pointer">
                        <input
                          type="radio"
                          name="landUsage"
                          value={option}
                          checked={formData.landUsage === option}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-primary-green focus:ring-primary-green"
                        />
                        <span className="text-sm text-primary-black font-medium">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-black mb-4">
                    Your ideal engagement style *
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: 'active', label: 'Active participant (build, host, help)', desc: 'I want to be involved in community building activities' },
                      { value: 'passive', label: 'Passive co-owner (weekend stays only)', desc: 'I prefer to enjoy the space without active involvement' },
                      { value: 'financial', label: 'Financial contributor (observer/investor mindset)', desc: 'I see this primarily as an investment opportunity' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-start space-x-3 p-4 border border-primary-mist rounded-lg hover:bg-primary-mist transition-colors cursor-pointer">
                        <input
                          type="radio"
                          name="engagementStyle"
                          value={option.value}
                          checked={formData.engagementStyle === option.value}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-primary-green focus:ring-primary-green mt-1"
                        />
                        <div>
                          <span className="text-sm text-primary-black font-medium block">{option.label}</span>
                          <span className="text-xs text-primary-sage">{option.desc}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-black mb-4">
                    Are you comfortable with a 10% flat service charge + transparent books? *
                  </label>
                  <div className="flex space-x-6">
                    {['Yes', 'No'].map((option) => (
                      <label key={option} className="flex items-center space-x-3 p-4 border border-primary-mist rounded-lg hover:bg-primary-mist transition-colors cursor-pointer">
                        <input
                          type="radio"
                          name="serviceChargeAgreement"
                          value={option}
                          checked={formData.serviceChargeAgreement === option}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-primary-green focus:ring-primary-green"
                        />
                        <span className="text-sm text-primary-black font-medium">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Section 4 - Financial Readiness */}
            {currentSection === 4 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-primary-black mb-2">
                    SECTION 4 — FINANCIAL READINESS
                  </h2>
                  <p className="text-primary-sage">Investment timeline and community support</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-black mb-4">
                    Are you financially ready to secure your 10,000 sq ft share? *
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: 'now', label: 'Yes – available now', desc: 'Ready to proceed immediately' },
                      { value: '60days', label: 'Yes – within 60 days', desc: 'Need some time to arrange finances' },
                      { value: 'exploring', label: 'Exploring', desc: 'Still evaluating the opportunity' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-start space-x-3 p-4 border border-primary-mist rounded-lg hover:bg-primary-mist transition-colors cursor-pointer">
                        <input
                          type="radio"
                          name="financialReadiness"
                          value={option.value}
                          checked={formData.financialReadiness === option.value}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-primary-green focus:ring-primary-green mt-1"
                        />
                        <div>
                          <span className="text-sm text-primary-black font-medium block">{option.label}</span>
                          <span className="text-xs text-primary-sage">{option.desc}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-black mb-2">
                    Would you like to support shared infra (community gym, trails, events)?
                  </label>
                  <textarea
                    name="sharedInfraSupport"
                    value={formData.sharedInfraSupport}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-primary-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green resize-none"
                    placeholder="Optional amount or description of how you'd like to contribute to shared infrastructure..."
                  />
                  <p className="text-xs text-primary-sage mt-1">Optional - Any amount or in-kind contribution ideas</p>
                </div>
              </div>
            )}

            {/* Section 5 - Community Building */}
            {currentSection === 5 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-primary-black mb-2">
                    SECTION 5 — COMMUNITY BUILDING
                  </h2>
                  <p className="text-primary-sage">Your contribution to our collective vision</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-black mb-2">
                    What skills or resources can you contribute to this health-forward community? * (50 words max)
                  </label>
                  <textarea
                    name="skillsContribution"
                    required
                    value={formData.skillsContribution}
                    onChange={handleInputChange}
                    rows={3}
                    maxLength={300}
                    className="w-full px-4 py-3 border border-primary-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green resize-none"
                    placeholder="E.g., organic farming expertise, yoga instruction, sustainable architecture, event planning, wellness coaching..."
                  />
                  <p className="text-xs text-primary-sage mt-1">{formData.skillsContribution.length}/300 characters</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-black mb-2">
                    Were you referred by someone?
                  </label>
                  <input
                    type="text"
                    name="referredBy"
                    value={formData.referredBy}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-primary-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                    placeholder="Mention name (if any)"
                  />
                  <p className="text-xs text-primary-sage mt-1">Referral-based benefits apply only if mentioned now</p>
                </div>
              </div>
            )}

            {/* Section 6 - Commitment & Values */}
            {currentSection === 6 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-primary-black mb-2">
                    SECTION 6 — COMMITMENT & VALUES
                  </h2>
                  <p className="text-primary-sage">Final commitment and thoughts</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-black mb-4">
                    Pledge *
                  </label>
                  <div className="bg-primary-mist rounded-lg p-6 mb-4">
                    <p className="text-primary-black leading-relaxed">
                      "I commit to respecting the community's rules, preserving land purity, and upholding its health-first values."
                    </p>
                  </div>
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="pledge"
                      checked={formData.pledge}
                      onChange={handleInputChange}
                      required
                      className="w-5 h-5 text-primary-green focus:ring-primary-green border-primary-sage rounded mt-1"
                    />
                    <span className="text-sm text-primary-black font-medium">
                      I agree to this pledge *
                    </span>
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-black mb-2">
                    Any final thoughts or questions?
                  </label>
                  <textarea
                    name="finalThoughts"
                    value={formData.finalThoughts}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-primary-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green resize-none"
                    placeholder="Share any questions, concerns, or additional thoughts about joining our community..."
                  />
                </div>

                {/* Submission Details */}
                <div className="bg-gradient-to-br from-primary-green to-primary-clay rounded-2xl p-6 text-primary-white">
                  <h3 className="text-xl font-bold mb-4">✅ SUBMISSION DETAILS</h3>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• Total form entries accepted: <span className="font-bold">150</span></li>
                    <li>• Founding members will be shortlisted from this group</li>
                    <li>• You'll get a <span className="font-bold">confirmation + 2-page PDF deck + FAQs</span> via email after submission</li>
                    <li>• <span className="font-bold">Shortlisted members</span> will receive a link to schedule a <span className="font-bold">15-min Zoom call</span> within 7 days</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-primary-mist">
              <button
                type="button"
                onClick={prevSection}
                disabled={currentSection === 1}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  currentSection === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-primary-sage text-primary-white hover:bg-primary-clay'
                }`}
              >
                Previous
              </button>

              <div className="text-center">
                <p className="text-sm text-primary-sage">
                  Let's build something meaningful — with land, wellness, and community at its heart.
                </p>
              </div>

              {currentSection < totalSections ? (
                <button
                  type="button"
                  onClick={nextSection}
                  className="px-6 py-3 bg-primary-green text-primary-white rounded-full hover:bg-primary-clay transition-all duration-200 font-medium"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!formData.pledge}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-200 flex items-center space-x-2 ${
                    formData.pledge
                      ? 'bg-primary-green text-primary-white hover:bg-primary-clay shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Send size={20} />
                  <span>Submit Application</span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Fixed Bottom Completion Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-primary-white border-t border-primary-mist shadow-lg z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-sm font-medium text-primary-black">
                Application Progress
              </div>
              <div className="flex-1 w-64 bg-primary-mist rounded-full h-2">
                <div 
                  className="bg-primary-green h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentSection / totalSections) * 100}%` }}
                />
              </div>
              <div className="text-sm text-primary-sage">
                {currentSection}/{totalSections} Complete
              </div>
            </div>
            
            <div className="hidden md:block">
              <p className="text-sm text-primary-sage">
                🏡 <span className="font-semibold text-primary-green">
                  {Math.round(((currentSection / totalSections) * 100))}% completed
                </span> - Your wellness retreat awaits!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom padding to account for fixed status bar */}
      <div className="h-20"></div>
    </div>
  )
}