export default function Vision() {
  return (
    <section id="vision" className="py-20 bg-primary-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-8">
            💡 The Vision
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-primary-mist rounded-3xl p-8 md:p-12 mb-8">
              <p className="text-lg md:text-xl text-primary-sage leading-relaxed mb-6">
                While elite club memberships cost upwards of 
                <span className="text-primary-clay font-bold"> ₹60 Lakhs</span> just for access to like-minded peers, 
                <span className="text-primary-green font-bold"> Kenn EcoEstates</span> gives you more than connection — 
                it offers you <span className="text-primary-clay font-semibold">ownership</span> and 
                <span className="text-primary-clay font-semibold"> influence</span>.
              </p>
              
              <p className="text-xl md:text-2xl text-primary-black font-semibold mb-6 leading-relaxed">
                A peaceful sanctuary designed for:
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3 text-left">
                  <span className="text-primary-green text-xl mt-1">•</span>
                  <p className="text-lg text-primary-sage">Urban professionals seeking a second home in nature</p>
                </div>
                <div className="flex items-start space-x-3 text-left">
                  <span className="text-primary-green text-xl mt-1">•</span>
                  <p className="text-lg text-primary-sage">Families passionate about clean living and holistic health</p>
                </div>
                <div className="flex items-start space-x-3 text-left">
                  <span className="text-primary-green text-xl mt-1">•</span>
                  <p className="text-lg text-primary-sage">Individuals tired of the city's chaos, looking for calm and clarity</p>
                </div>
              </div>
              
              <div className="bg-primary-white rounded-2xl p-6 border-l-4 border-primary-green">
                <p className="text-lg md:text-xl text-primary-black font-bold italic leading-relaxed">
                  <span className="text-primary-green">10,000 sq ft land ownership</span> within a 30-acre, health-first community
                </p>
                <p className="text-primary-sage mt-2">
                  Located within <span className="font-semibold">150 km of Bangalore</span>, yet far from pollution, noise, and clutter.
                </p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏃‍♂️</div>
              <h3 className="font-semibold text-primary-black mb-2">Urban Professionals</h3>
              <p className="text-primary-sage text-sm">Successful achievers seeking balance</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="font-semibold text-primary-black mb-2">Clean Living</h3>
              <p className="text-primary-sage text-sm">Organic, pollution-free environment</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="font-semibold text-primary-black mb-2">Holistic Health</h3>
              <p className="text-primary-sage text-sm">Mind, body, and spirit wellness</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold text-primary-black mb-2">Purpose-Driven</h3>
              <p className="text-primary-sage text-sm">Meaningful community connections</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}