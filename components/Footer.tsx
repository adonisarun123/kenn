import Image from 'next/image'
import { Mail, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-black text-primary-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Mission */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <Image
                  src="/kenn-logo.png"
                  alt="Kenn EcoEstates"
                  width={150}
                  height={50}
                  className="w-auto h-12 bg-primary-white rounded-lg px-3 py-2"
                />
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                A curated, ultra-premium wellness community co-created by health-conscious achievers. 
                30 Acres • 100 Families • 1 Purpose.
              </p>
              <p className="text-primary-green font-semibold text-lg italic">
                Where Wellness Finds Land
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#vision" className="text-gray-300 hover:text-primary-green transition-colors duration-200">
                    The Vision
                  </a>
                </li>
                <li>
                  <a href="#unique" className="text-gray-300 hover:text-primary-green transition-colors duration-200">
                    What Makes It Unique
                  </a>
                </li>
                <li>
                  <a href="#community" className="text-gray-300 hover:text-primary-green transition-colors duration-200">
                    Who Should Join
                  </a>
                </li>
                <li>
                  <a href="#included" className="text-gray-300 hover:text-primary-green transition-colors duration-200">
                    What's Included
                  </a>
                </li>
                <li>
                  <a href="#mission" className="text-gray-300 hover:text-primary-green transition-colors duration-200">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#join" className="text-gray-300 hover:text-primary-green transition-colors duration-200">
                    Apply to Join
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="text-primary-green mt-1" size={20} />
                  <div>
                    <p className="text-gray-300 text-sm">Email us:</p>
                    <a 
                      href="mailto:connect@kennecoestates.com" 
                      className="text-primary-green hover:text-primary-clay transition-colors duration-200"
                    >
                      connect@kennecoestates.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="text-primary-green mt-1" size={20} />
                  <div>
                    <p className="text-gray-300 text-sm">Location:</p>
                    <p className="text-white">Within 150km of Bangalore</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="border-t border-gray-700 my-12"></div>
          
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-gray-400">© 2024 Kenn EcoEstates. Made with</span>
              <Heart className="text-red-500" size={16} />
              <span className="text-gray-400">for conscious living.</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-primary-green font-semibold">🐘 Powered by Purpose</span>
              <span className="text-primary-clay font-semibold">🌿 Built for People</span>
            </div>
          </div>
          
          {/* Final Message */}
          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 italic">
              "Let's build something timeless, together."
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}