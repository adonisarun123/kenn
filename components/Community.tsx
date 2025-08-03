import { Heart, Shield, TrendingUp, Users } from 'lucide-react'

export default function Community() {
  return (
    <section id="community" className="py-20 bg-primary-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-8">
              🧘‍♀️ Who Is This For?
            </h2>
            <p className="text-xl text-primary-sage max-w-3xl mx-auto">
              We're looking for like-minded individuals who share our values of mindful living, community, and sustainability.
            </p>
          </div>

          {/* Target Audience */}
          <div className="bg-primary-mist rounded-3xl p-8 md:p-12 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-black mb-8 text-center">
              If you are someone who...
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-green rounded-full p-2 mt-1">
                  <span className="text-white text-xl">🧘</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-black mb-2">
                    Practices mindful living
                  </h4>
                  <p className="text-primary-sage">
                    Yoga, meditation, or other mindfulness practices are part of your lifestyle
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-green rounded-full p-2 mt-1">
                  <span className="text-white text-xl">🌿</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-black mb-2">
                    Seeks cleaner, simpler living
                  </h4>
                  <p className="text-primary-sage">
                    Desires a retreat from city life to a community-driven environment
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-green rounded-full p-2 mt-1">
                  <span className="text-white text-xl">🤝</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-black mb-2">
                    Values transparency & trust
                  </h4>
                  <p className="text-primary-sage">
                    Believes in collective ownership and transparent processes
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-green rounded-full p-2 mt-1">
                  <span className="text-white text-xl">💚</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-black mb-2">
                    Prioritizes values over profits
                  </h4>
                  <p className="text-primary-sage">
                    People over profits, trees over traffic, stillness over stress
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-xl font-semibold text-primary-clay italic">
                ...then this community is made for you.
              </p>
            </div>
          </div>

          {/* How We're Different */}
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-black mb-12 text-center">
              💡 How Are We Different?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-primary-green to-primary-clay text-primary-white rounded-3xl p-8 text-center">
                <Shield className="mx-auto mb-4" size={48} />
                <h4 className="text-xl font-bold mb-3">Not Selling Land</h4>
                <p className="opacity-90">We're creating a community, not a real estate transaction.</p>
              </div>
              
              <div className="bg-primary-white border-2 border-primary-green rounded-3xl p-8 text-center">
                <Heart className="mx-auto mb-4 text-primary-green" size={48} />
                <h4 className="text-xl font-bold text-primary-black mb-3">Transparent Operations</h4>
                <p className="text-primary-sage">All transactions auditable, no hidden agenda.</p>
              </div>
              
              <div className="bg-gradient-to-br from-primary-clay to-primary-green text-primary-white rounded-3xl p-8 text-center">
                <TrendingUp className="mx-auto mb-4" size={48} />
                <h4 className="text-xl font-bold mb-3">At-Cost Development</h4>
                <p className="opacity-90">Only 10% operational fee, no agent commissions.</p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-primary-mist rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-black mb-8 text-center">
              We Believe In
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h4 className="font-semibold text-primary-black mb-2">Ethical Land Sharing</h4>
                <p className="text-primary-sage text-sm">Responsible stewardship of natural resources</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">♻️</div>
                <h4 className="font-semibold text-primary-black mb-2">Self-Sustainable Models</h4>
                <p className="text-primary-sage text-sm">Building systems that support themselves</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h4 className="font-semibold text-primary-black mb-2">Healthy Ecosystems</h4>
                <p className="text-primary-sage text-sm">Both human and ecological well-being</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}