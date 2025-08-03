import { MapPin, Trees, Users, Wind } from 'lucide-react'

export default function Land() {
  return (
    <section id="land" className="py-20 bg-primary-mist">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-8">
              📍 The Land
            </h2>
            <p className="text-xl text-primary-sage max-w-3xl mx-auto">
              Discover our pristine 30-acre sanctuary, carefully selected for its natural beauty and proximity to Bangalore.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Features */}
            <div className="space-y-8">
              <div className="bg-primary-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-green/10 rounded-full p-3">
                    <Trees className="text-primary-green" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-black mb-3">
                      30 Acres of Pure, Green Serenity
                    </h3>
                    <p className="text-primary-sage leading-relaxed">
                      Expansive green spaces designed to maintain the natural ecosystem while providing 
                      ample room for each community member's personal retreat space.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-clay/10 rounded-full p-3">
                    <MapPin className="text-primary-clay" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-black mb-3">
                      Within 150 km of Bangalore
                    </h3>
                    <p className="text-primary-sage leading-relaxed">
                      Conveniently located for weekend getaways and extended retreats, 
                      yet far enough to escape the city's hustle and pollution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-green/10 rounded-full p-3">
                    <Wind className="text-primary-green" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-black mb-3">
                      Pollution-Free Environment
                    </h3>
                    <p className="text-primary-sage leading-relaxed">
                      Clean air, natural water sources, and access to organic living in a 
                      peaceful environment away from urban pollution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-clay/10 rounded-full p-3">
                    <Users className="text-primary-clay" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-black mb-3">
                      Only 100 Curated Members
                    </h3>
                    <p className="text-primary-sage leading-relaxed">
                      No crowding, no chaos. A carefully curated community that ensures 
                      quality relationships and peaceful coexistence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Visual representation */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-green to-primary-clay rounded-3xl p-12 text-center text-primary-white">
                <div className="text-6xl mb-6">🌄</div>
                <h3 className="text-3xl font-bold mb-4">Your Sanctuary Awaits</h3>
                <p className="text-lg opacity-90 mb-8">
                  Imagine waking up to fresh mountain air, the sound of birds, 
                  and the serenity of nature at your doorstep.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-primary-white/20 rounded-2xl p-4">
                    <div className="text-3xl font-bold">30</div>
                    <div className="text-sm opacity-90">Acres</div>
                  </div>
                  <div className="bg-primary-white/20 rounded-2xl p-4">
                    <div className="text-3xl font-bold">100</div>
                    <div className="text-sm opacity-90">Members</div>
                  </div>
                  <div className="bg-primary-white/20 rounded-2xl p-4">
                    <div className="text-3xl font-bold">&lt;150</div>
                    <div className="text-sm opacity-90">KM from BLR</div>
                  </div>
                  <div className="bg-primary-white/20 rounded-2xl p-4">
                    <div className="text-3xl font-bold">∞</div>
                    <div className="text-sm opacity-90">Peace</div>
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