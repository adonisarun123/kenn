import { CheckCircle, Users, Vote, Trees, Heart, UserPlus, Calendar } from 'lucide-react'

export default function WhatsIncluded() {
  const benefits = [
    {
      icon: <CheckCircle className="text-primary-green" size={40} />,
      title: "10,000 sq ft Land Parcel",
      description: "Complete ownership of your individual land parcel within the 30+-acre community — build your dream wellness retreat."
    },
    {
      icon: <Vote className="text-primary-clay" size={40} />,
      title: "0.5% Voting Rights",
      description: "Real influence in community decisions through your voting rights in the community trust — your voice matters."
    },
    {
      icon: <Trees className="text-primary-green" size={40} />,
      title: "Wellness Infrastructure Access",
      description: "Shared open air gyms, walking trails, kitchen gardens, and eco-infrastructure designed for holistic health."
    },
    {
      icon: <Heart className="text-primary-clay" size={40} />,
      title: "Lifetime Association",
      description: "Permanent membership in an exclusive, closed community of like-minded health-conscious achievers."
    },
    {
      icon: <UserPlus className="text-primary-green" size={40} />,
      title: "Referral Network Benefits",
      description: "Eligibility to refer qualified members and expand the network with attractive referral incentives."
    },
    {
      icon: <Calendar className="text-primary-clay" size={40} />,
      title: "Curated Wellness Programs",
      description: "Access to monthly workshops, seasonal retreats, and expert-led wellness sessions designed exclusively for community members."
    }
  ]

  return (
    <section id="included" className="py-20 bg-primary-mist">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-8">
              📋 What's Included
            </h2>
            <p className="text-xl text-primary-sage max-w-4xl mx-auto">
              As a member of Kenn EcoEstates, you receive comprehensive ownership rights, governance participation, and access to premium wellness infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-primary-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="mb-6 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-primary-black mb-4 text-xl">
                  {benefit.title}
                </h3>
                <p className="text-primary-sage leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed Benefits */}
          <div className="bg-primary-green rounded-3xl p-8 md:p-12 text-primary-white shadow-lg">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Your Complete Ownership Package
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Land Ownership Rights</h4>
                    <p className="opacity-90">Full legal ownership of your 10,000 sq ft parcel with clear title and documentation.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Community Governance</h4>
                    <p className="opacity-90">Active participation in all major decisions affecting the community's future and development.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Wellness Facilities</h4>
                    <p className="opacity-90">24/7 access to premium outdoor fitness areas, meditation spaces, and organic farming plots.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Network Benefits</h4>
                    <p className="opacity-90">Connections with 99 other carefully curated health-conscious professionals and entrepreneurs.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Future Growth</h4>
                    <p className="opacity-90">Opportunity to participate in community expansion and development initiatives.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Legacy Investment</h4>
                    <p className="opacity-90">Build a lasting legacy for your family in a community that prioritizes values over profits.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}