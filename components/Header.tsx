'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-white/95 backdrop-blur-sm border-b border-primary-mist">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/kenn-logo.png"
              alt="Kenn EcoEstates"
              width={120}
              height={40}
              className="w-auto h-8 lg:h-10"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#vision"
              className="text-primary-sage hover:text-primary-green transition-colors duration-200 font-medium"
            >
              Vision
            </a>
            <a
              href="#unique"
              className="text-primary-sage hover:text-primary-green transition-colors duration-200 font-medium"
            >
              Unique
            </a>
            <a
              href="#community"
              className="text-primary-sage hover:text-primary-green transition-colors duration-200 font-medium"
            >
              Community
            </a>
            <a
              href="#included"
              className="text-primary-sage hover:text-primary-green transition-colors duration-200 font-medium"
            >
              What's Included
            </a>
            <a
              href="/apply"
              className="bg-primary-green text-primary-white px-6 py-2 rounded-full hover:bg-primary-clay transition-colors duration-200 font-medium"
            >
              Apply
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary-sage hover:text-primary-green transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="px-2 pt-2 pb-3 space-y-1 bg-primary-white border-t border-primary-mist">
              <a
                href="#vision"
                className="block px-3 py-2 text-primary-sage hover:text-primary-green transition-colors duration-200 font-medium"
                onClick={toggleMenu}
              >
                Vision
              </a>
              <a
                href="#unique"
                className="block px-3 py-2 text-primary-sage hover:text-primary-green transition-colors duration-200 font-medium"
                onClick={toggleMenu}
              >
                Unique
              </a>
              <a
                href="#community"
                className="block px-3 py-2 text-primary-sage hover:text-primary-green transition-colors duration-200 font-medium"
                onClick={toggleMenu}
              >
                Community
              </a>
              <a
                href="#included"
                className="block px-3 py-2 text-primary-sage hover:text-primary-green transition-colors duration-200 font-medium"
                onClick={toggleMenu}
              >
                What's Included
              </a>
              <a
                href="/apply"
                className="block mx-3 mt-4 mb-2 bg-primary-green text-primary-white px-6 py-2 rounded-full hover:bg-primary-clay transition-colors duration-200 font-medium text-center"
                onClick={toggleMenu}
              >
                Apply
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}