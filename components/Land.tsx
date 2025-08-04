import { Heart, Dumbbell, Leaf, TreePine, Users } from 'lucide-react'

export default function WhoShouldJoin() {
  return (
    <section id="community" className="py-20 bg-primary-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-8">
              👥 Who Should Join
            </h2>
            <p className="text-xl text-primary-sage max-w-4xl mx-auto">
              We are inviting <span className="font-bold text-primary-green">100 carefully selected individuals or families</span> who share our vision of health-conscious, purposeful living.
            </p>
          </div>

          {/* Target Criteria */}
          <div className="bg-primary-mist rounded-3xl p-8 md:p-12 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-black mb-8 text-center">
              We're Looking For People Who:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-green rounded-full p-3 mt-1 flex-shrink-0">
                  <Heart className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary-black mb-2 text-lg">
                    Prioritize Health, Fitness, and Clean Food
                  </h4>
                  <p className="text-primary-sage leading-relaxed">
                    You understand that true wealth is health, and you're committed to maintaining physical and mental well-being through conscious lifestyle choices.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-clay rounded-full p-3 mt-1 flex-shrink-0">
                  <Dumbbell className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary-black mb-2 text-lg">
                    Enjoy Nature Walks & Functional Movement
                  </h4>
                  <p className="text-primary-sage leading-relaxed">
                    You find joy in outdoor activities, natural movement, and staying active in harmony with nature rather than confined gym spaces.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-green rounded-full p-3 mt-1 flex-shrink-0">
                  <Leaf className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary-black mb-2 text-lg">
                    Want a Calmer, Cleaner Environment
                  </h4>
                  <p className="text-primary-sage leading-relaxed">
                    You're seeking a peaceful space to unplug, recharge, and escape from urban chaos without losing touch with progress.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-clay rounded-full p-3 mt-1 flex-shrink-0">
                  <TreePine className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary-black mb-2 text-lg">
                    Enjoy Organic Farming & Sustainability
                  </h4>
                  <p className="text-primary-sage leading-relaxed">
                    You appreciate growing your own food, sustainable practices, and contributing to environmental conservation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-green rounded-full p-3 mt-1 flex-shrink-0">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary-black mb-2 text-lg">
                    Respect Shared Values & Community-First Thinking
                  </h4>
                  <p className="text-primary-sage leading-relaxed">
                    You understand that individual success is enhanced by collective well-being and community support.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-clay rounded-full p-3 mt-1 flex-shrink-0">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary-black mb-2 text-lg">
                    Can Commit to Long-Term, Purpose-Led Ecosystem
                  </h4>
                  <p className="text-primary-sage leading-relaxed">
                    You're not just looking for a transaction, but to be part of building something meaningful for the future.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-primary-green to-primary-clay rounded-3xl p-8 md:p-12 text-primary-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Reclaim Your Time, Body, and Mental Peace?
            </h3>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-4xl mx-auto mb-8">
              Join a community of <span className="font-bold">achievers who prioritize life over luxury</span> — where wellness finds land, and purpose meets progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#included"
                className="bg-primary-white text-primary-green px-8 py-4 rounded-full hover:bg-primary-mist transition-all duration-300 font-semibold"
              >
                See What's Included
              </a>
              <a
                href="#join"
                className="border-2 border-primary-white text-primary-white px-8 py-4 rounded-full hover:bg-primary-white hover:text-primary-green transition-all duration-300 font-semibold"
              >
                Apply to Join
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}