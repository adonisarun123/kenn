import { Shield, Users, TrendingUp, Vote, Building, Trees, Ban } from 'lucide-react'

export default function Unique() {
  return (
    <section id="unique" className="py-20 bg-primary-mist">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-8">
              🧬 What Makes It Unique
            </h2>
            <p className="text-xl text-primary-sage max-w-4xl mx-auto">
              Not just another real estate development. A revolutionary approach to community land ownership with transparent governance and shared values.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-primary-white rounded-3xl p-8 shadow-lg">
              <Shield className="text-primary-green mb-4" size={48} />
              <h3 className="text-xl font-bold text-primary-black mb-3">Land Trust Model</h3>
              <p className="text-primary-sage">Not a real estate project — it's a private land trust model with collective ownership and governance.</p>
            </div>
            
            <div className="bg-primary-white rounded-3xl p-8 shadow-lg">
              <TrendingUp className="text-primary-clay mb-4" size={48} />
              <h3 className="text-xl font-bold text-primary-black mb-3">Transparent Pricing</h3>
              <p className="text-primary-sage">10% flat service charge — no agents, no commissions, no hidden markups. Complete transparency.</p>
            </div>
            
            <div className="bg-primary-white rounded-3xl p-8 shadow-lg">
              <Vote className="text-primary-green mb-4" size={48} />
              <h3 className="text-xl font-bold text-primary-black mb-3">Democratic Governance</h3>
              <p className="text-primary-sage">0.5% voting rights per plot owner in all community decisions. Your voice matters.</p>
            </div>
            
            <div className="bg-primary-white rounded-3xl p-8 shadow-lg">
              <Building className="text-primary-clay mb-4" size={48} />
              <h3 className="text-xl font-bold text-primary-black mb-3">Uniform Guidelines</h3>
              <p className="text-primary-sage">Structured guidelines for architecture, borewells, plantation & cleanliness to maintain community standards.</p>
            </div>
            
            <div className="bg-primary-white rounded-3xl p-8 shadow-lg">
              <Trees className="text-primary-green mb-4" size={48} />
              <h3 className="text-xl font-bold text-primary-black mb-3">Wellness Infrastructure</h3>
              <p className="text-primary-sage">Shared open air gyms, walking trails, kitchen gardens — designed for health-conscious living.</p>
            </div>
            
            <div className="bg-primary-white rounded-3xl p-8 shadow-lg">
              <Ban className="text-primary-clay mb-4" size={48} />
              <h3 className="text-xl font-bold text-primary-black mb-3">Protected Community</h3>
              <p className="text-primary-sage">Strict no-commercialization & no-resale-for-5-years policy to preserve community integrity.</p>
            </div>
          </div>

          {/* Main Value Proposition */}
          <div className="bg-primary-green rounded-3xl p-8 md:p-12 text-primary-white text-center shadow-lg">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              More Than Ownership — It's Governance
            </h3>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-4xl mx-auto">
              Unlike traditional real estate where you buy and hope for the best, Kenn EcoEstates gives you 
              <span className="font-bold"> direct influence</span> over community decisions, 
              <span className="font-bold"> transparent financials</span>, and 
              <span className="font-bold"> guaranteed protection</span> from commercialization.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}