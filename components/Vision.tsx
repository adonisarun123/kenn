export default function Vision() {
  return (
    <section id="vision" className="py-20 bg-primary-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-8">
            🌱 Our Vision
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-primary-mist rounded-3xl p-8 md:p-12 mb-8">
              <p className="text-xl md:text-2xl text-primary-black font-semibold mb-6 leading-relaxed">
                Kenn EcoEstates is <span className="text-primary-clay font-bold">not a real estate company</span>, 
                <span className="text-primary-clay font-bold"> not a brokerage</span>, and 
                <span className="text-primary-clay font-bold"> not a profit-driven initiative</span>.
              </p>
              
              <p className="text-lg md:text-xl text-primary-sage leading-relaxed mb-6">
                We are building a <span className="text-primary-green font-semibold">like-minded community</span> of 
                100 individuals and families who desire a <span className="text-primary-green font-semibold">peaceful second home</span>, 
                <span className="text-primary-green font-semibold"> weekend retreat</span>, or 
                <span className="text-primary-green font-semibold"> wellness-centered farmhouse</span> — all while 
                living in harmony with nature, clean air, healthy food, and conscious living.
              </p>
              
              <p className="text-xl md:text-2xl text-primary-black font-bold italic">
                This is <span className="text-primary-green">your invitation to co-create</span>, not just invest.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="font-semibold text-primary-black mb-2">Nature First</h3>
              <p className="text-primary-sage text-sm">Living in harmony with the environment</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-semibold text-primary-black mb-2">Community</h3>
              <p className="text-primary-sage text-sm">Building meaningful relationships</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="font-semibold text-primary-black mb-2">Wellness</h3>
              <p className="text-primary-sage text-sm">Focus on mental and physical health</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="font-semibold text-primary-black mb-2">Sustainability</h3>
              <p className="text-primary-sage text-sm">Responsible and conscious living</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}