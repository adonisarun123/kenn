'use client'

import { useState } from 'react'
import { Star, Crown, Vote, Users } from 'lucide-react'

export default function Join() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    interests: '',
    intent: '',
    experience: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will contact you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="join" className="py-20 bg-primary-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-8">
              ✅ Join Us Early — Founding Members Get:
            </h2>
            <p className="text-xl text-primary-sage max-w-3xl mx-auto">
              Be part of something special from the beginning. Founding members enjoy exclusive benefits and help shape our community's future.
            </p>
          </div>

          {/* Founding Member Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-primary-green to-primary-clay text-primary-white rounded-3xl p-8 text-center">
              <Crown className="mx-auto mb-4" size={48} />
              <h3 className="font-bold text-lg mb-2">First Rights</h3>
              <p className="text-sm opacity-90">First rights on land demarcation</p>
            </div>
            
            <div className="bg-primary-mist rounded-3xl p-8 text-center border-2 border-primary-green">
              <Star className="mx-auto mb-4 text-primary-green" size={48} />
              <h3 className="font-bold text-lg mb-2 text-primary-black">3% Referral</h3>
              <p className="text-sm text-primary-sage">3% referral on the plot cost (founding members only)</p>
            </div>
            
            <div className="bg-gradient-to-br from-primary-clay to-primary-green text-primary-white rounded-3xl p-8 text-center">
              <Users className="mx-auto mb-4" size={48} />
              <h3 className="font-bold text-lg mb-2">Founding Status</h3>
              <p className="text-sm opacity-90">Name listed as Founding Member</p>
            </div>
            
            <div className="bg-primary-mist rounded-3xl p-8 text-center border-2 border-primary-clay">
              <Vote className="mx-auto mb-4 text-primary-clay" size={48} />
              <h3 className="font-bold text-lg mb-2 text-primary-black">Voting Rights</h3>
              <p className="text-sm text-primary-sage">Voting rights in all future decisions</p>
            </div>
          </div>

          {/* Invitation Process */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left column - Process */}
            <div>
              <div className="bg-primary-mist rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-primary-black mb-6">
                  📩 Invitation Process
                </h3>
                <p className="text-lg text-primary-sage mb-8">
                  This is an <span className="font-semibold text-primary-green">invite-only community</span>. 
                  We believe in <span className="font-semibold text-primary-clay">relationships over resumes</span>.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-green text-primary-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-black mb-1">Request to Join</h4>
                      <p className="text-primary-sage text-sm">Click the "Request to Join" button and fill our form</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-green text-primary-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-black mb-1">Share Your Values</h4>
                      <p className="text-primary-sage text-sm">Tell us about your values, interests, and intent</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-green text-primary-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-black mb-1">Community Review</h4>
                      <p className="text-primary-sage text-sm">The core group will review and connect with shortlisted members</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-primary-sage mb-4">
                  📞 Questions? Reach out at:
                </p>
                <a 
                  href="mailto:connect@kennecoestates.in" 
                  className="text-primary-green font-semibold hover:text-primary-clay transition-colors duration-200"
                >
                  connect@kennecoestates.in
                </a>
              </div>
            </div>

            {/* Right column - Form */}
            <div className="bg-primary-white border-2 border-primary-mist rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary-black mb-6 text-center">
                Request to Join Our Community
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-black mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary-black mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                    placeholder="+91 12345 67890"
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-primary-black mb-2">
                    Current Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                    placeholder="City, State/Country"
                  />
                </div>
                
                <div>
                  <label htmlFor="interests" className="block text-sm font-medium text-primary-black mb-2">
                    Wellness Interests *
                  </label>
                  <textarea
                    id="interests"
                    name="interests"
                    required
                    rows={3}
                    value={formData.interests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green resize-none"
                    placeholder="Yoga, meditation, organic farming, etc."
                  />
                </div>
                
                <div>
                  <label htmlFor="intent" className="block text-sm font-medium text-primary-black mb-2">
                    Your Intent with the Community *
                  </label>
                  <textarea
                    id="intent"
                    name="intent"
                    required
                    rows={4}
                    value={formData.intent}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-mist rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green resize-none"
                    placeholder="What draws you to this community? How do you envision using the space?"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary-green text-primary-white py-4 rounded-lg font-semibold hover:bg-primary-clay transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Submit Request to Join
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}