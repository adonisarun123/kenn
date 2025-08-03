import { CheckCircle } from 'lucide-react'

export default function Guidelines() {
  const guidelines = [
    {
      icon: "🧘",
      title: "Wellness & Personal Retreat Only",
      description: "Use the land for wellness & personal retreat only — not for commercial resorts."
    },
    {
      icon: "🏠",
      title: "5-Year Commitment",
      description: "No resale for at least 5 years unless approved by the community core group."
    },
    {
      icon: "🏗️",
      title: "Uniform Architecture",
      description: "Uniform architectural language to blend with the natural terrain."
    },
    {
      icon: "💧",
      title: "Water Conservation",
      description: "No borewells without group consensus — we focus on water conservation."
    },
    {
      icon: "🌳",
      title: "Native Plantation",
      description: "Mandatory plantation of native flora per plot."
    },
    {
      icon: "♻️",
      title: "Zero Plastic Zones",
      description: "Zero plastic zones — sustainable waste disposal only."
    },
    {
      icon: "🎯",
      title: "Annual Events",
      description: "Annual wellness events & clean-up drives."
    },
    {
      icon: "💰",
      title: "Shared Maintenance",
      description: "All maintenance costs will be equally shared."
    },
    {
      icon: "👥",
      title: "Curated Community",
      description: "Only curated referrals allowed for new joiners."
    },
    {
      icon: "🤫",
      title: "Respect & Silence",
      description: "Respect nature, neighbors, and the silence."
    }
  ]

  return (
    <section id="guidelines" className="py-20 bg-primary-mist">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-black mb-8">
              📏 Community Rules & Guidelines
            </h2>
            <p className="text-xl text-primary-sage max-w-3xl mx-auto">
              To maintain the soul of this initiative, each member agrees to these principles that preserve our community's values and natural environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {guidelines.map((guideline, index) => (
              <div key={index} className="bg-primary-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-mist rounded-full p-3 flex-shrink-0">
                    <span className="text-2xl">{guideline.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary-black mb-2 text-lg">
                      {guideline.title}
                    </h3>
                    <p className="text-primary-sage leading-relaxed">
                      {guideline.description}
                    </p>
                  </div>
                  <CheckCircle className="text-primary-green flex-shrink-0 mt-1" size={20} />
                </div>
              </div>
            ))}
          </div>

          {/* What You Get Section */}
          <div className="bg-gradient-to-br from-primary-green to-primary-clay rounded-3xl p-8 md:p-12 text-primary-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              🧬 What You Get
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📜</span>
                </div>
                <h4 className="font-bold text-xl mb-2">Registered Share</h4>
                <p className="opacity-90">A registered share in the community-owned land</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
                <h4 className="font-bold text-xl mb-2">Private Ecosystem</h4>
                <p className="opacity-90">Access to a private ecosystem of conscious individuals</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🏡</span>
                </div>
                <h4 className="font-bold text-xl mb-2">Build Your Retreat</h4>
                <p className="opacity-90">Build a minimal farmhouse, off-grid if desired</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-bold text-xl mb-2">Wellness Retreats</h4>
                <p className="opacity-90">Periodic wellness retreats and farming activities</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
                <h4 className="font-bold text-xl mb-2">Sustainability Projects</h4>
                <p className="opacity-90">Participate in meaningful sustainability initiatives</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <h4 className="font-bold text-xl mb-2">Value Appreciation</h4>
                <p className="opacity-90">Real value appreciation without dilution of values</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}