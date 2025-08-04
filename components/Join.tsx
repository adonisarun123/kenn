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
    <>
      {/* Mission Section */}
      <section id="mission" className="py-20 bg-primary-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-8">
              🎯 Our Mission
            </h2>
            
            <div className="bg-gradient-to-br from-primary-green to-primary-clay rounded-3xl p-8 md:p-12 text-primary-white mb-12">
              <blockquote className="text-2xl md:text-3xl font-bold leading-relaxed mb-6">
                "To co-create India's most trusted and transparent health-forward living collective — away from the city, without losing touch with progress."
              </blockquote>
              
              <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-4xl mx-auto">
                We're building a <span className="font-bold">life-centric, not luxury-centric</span> space — 
                for achievers who want to <span className="font-bold">reclaim their time, body, and mental peace</span>.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="font-semibold text-primary-black mb-2">Reclaim Your Time</h3>
                <p className="text-primary-sage text-sm">Escape the urban rush and reconnect with what truly matters</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🧘‍♂️</div>
                <h3 className="font-semibold text-primary-black mb-2">Restore Your Body</h3>
                <p className="text-primary-sage text-sm">Clean air, organic food, and natural movement for optimal health</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="font-semibold text-primary-black mb-2">Renew Mental Peace</h3>
                <p className="text-primary-sage text-sm">Quiet spaces for reflection, meditation, and inner clarity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Circle Section */}
      <section id="join" className="py-20 bg-primary-mist">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-8">
                💎 Founding Circle Privileges
              </h2>
              <p className="text-xl text-primary-sage max-w-4xl mx-auto">
                If you're part of the first 100, you get exclusive benefits that recognize your early commitment to building something extraordinary.
              </p>
            </div>

          {/* Founding Circle Privileges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-primary-green to-primary-clay text-primary-white rounded-3xl p-8 text-center">
              <Crown className="mx-auto mb-4" size={48} />
              <h3 className="font-bold text-xl mb-3">Priority Plot Allocation</h3>
              <p className="opacity-90 leading-relaxed">First choice on the best-located plots within the 30-acre community — prime positions with optimal views and accessibility.</p>
            </div>
            
            <div className="bg-primary-white border-2 border-primary-green rounded-3xl p-8 text-center shadow-lg">
              <Star className="mx-auto mb-4 text-primary-green" size={48} />
              <h3 className="font-bold text-xl mb-3 text-primary-black">Referral Benefits</h3>
              <p className="text-primary-sage leading-relaxed">Get <span className="font-bold text-primary-green">5% off your service charge</span> for every qualifying member you successfully refer to the community.</p>
            </div>
            
            <div className="bg-gradient-to-br from-primary-clay to-primary-green text-primary-white rounded-3xl p-8 text-center">
              <Users className="mx-auto mb-4" size={48} />
              <h3 className="font-bold text-xl mb-3">Charter Council</h3>
              <p className="opacity-90 leading-relaxed">Be part of the <span className="font-bold">Health & Wellness Charter Council</span> in the first year — help shape community guidelines and values.</p>
            </div>
          </div>

          {/* Invitation Process */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left column - Process */}
            <div>
              <div className="bg-primary-mist rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-primary-black mb-6">
                  📩 Apply to Join
                </h3>
                <p className="text-lg text-primary-sage mb-8">
                  This is an <span className="font-semibold text-primary-green">invite-only opportunity</span>. 
                  No public marketing. No resale circus. Just <span className="font-semibold text-primary-clay">100 mindful owners</span> who share this purpose.
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
                  href="mailto:connect@kennecoestates.com" 
                  className="text-primary-green font-semibold hover:text-primary-clay transition-colors duration-200"
                >
                  connect@kennecoestates.com
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
    </>
  )
}