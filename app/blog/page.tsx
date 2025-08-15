'use client'

import { useState } from 'react'
import { Search, Tag, Calendar, ArrowRight, ChevronRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

// Blog categories with their colors
const categories = [
  { name: 'Wellness Living', color: 'bg-primary-green', slug: 'wellness-living' },
  { name: 'Community', color: 'bg-primary-clay', slug: 'community' },
  { name: 'Investment', color: 'bg-blue-500', slug: 'investment' },
  { name: 'Sustainable Living', color: 'bg-emerald-500', slug: 'sustainable-living' },
  { name: 'Lifestyle', color: 'bg-amber-500', slug: 'lifestyle' },
]

// Featured blog posts
const featuredPosts = [
  {
    id: 1,
    title: "The Vision Behind Kenn EcoEstates: Building India's First Ultra-Premium Wellness Community",
    excerpt: "Discover how we're revolutionizing community living through our unique land trust model, democratic governance, and wellness-focused infrastructure.",
    category: "Wellness Living",
    author: "Kenn Team",
    date: "2024-03-15",
    readTime: "8 min read",
    image: "/blog/vision-wellness.jpg",
    slug: "vision-behind-kenn-ecoestates"
  },
  {
    id: 2,
    title: "Why 100 Health-Conscious Families Are Choosing Community Over Luxury Apartments",
    excerpt: "While elite club memberships cost upwards of ₹60 Lakhs just for access, Kenn EcoEstates offers more than connection — it provides ownership and influence.",
    category: "Community",
    author: "Kenn Team",
    date: "2024-03-10",
    readTime: "6 min read",
    image: "/blog/community-choice.jpg",
    slug: "why-choose-community-living"
  },
  {
    id: 3,
    title: "Beyond ROI: The True Value of Premium Land Ownership in Wellness Communities",
    excerpt: "Explore how our 30+-acre wellness paradise delivers both tangible and intangible returns through thoughtful design and community synergy.",
    category: "Investment",
    author: "Kenn Team",
    date: "2024-03-05",
    readTime: "7 min read",
    image: "/blog/investment-value.jpg",
    slug: "beyond-roi-wellness-communities"
  }
]

// Regular blog posts
const blogPosts = [
  {
    id: 4,
    title: "10 Signs You're Ready for Wellness Community Living",
    excerpt: "Are you feeling the call of a more balanced, health-conscious lifestyle? Here are ten signs that indicate you're ready to make the transition to wellness community living.",
    category: "Lifestyle",
    author: "Kenn Team",
    date: "2024-03-01",
    readTime: "5 min read",
    image: "/blog/wellness-signs.jpg",
    slug: "signs-ready-for-wellness-community"
  },
  {
    id: 5,
    title: "The Science Behind Our Wellness Infrastructure Design",
    excerpt: "From open-air gyms to meditation trails, discover the research and thought process behind every wellness amenity at Kenn EcoEstates.",
    category: "Wellness Living",
    author: "Kenn Team",
    date: "2024-02-25",
    readTime: "9 min read",
    image: "/blog/wellness-design.jpg",
    slug: "wellness-infrastructure-design"
  },
  {
    id: 6,
    title: "Democratic Governance in Practice: How Our Community Makes Decisions",
    excerpt: "With 0.5% voting rights per plot owner, learn how our transparent governance model empowers residents to shape their community's future.",
    category: "Community",
    author: "Kenn Team",
    date: "2024-02-20",
    readTime: "6 min read",
    image: "/blog/governance.jpg",
    slug: "democratic-governance-practice"
  }
]

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  return (
    <div className="min-h-screen bg-primary-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-green/10 via-primary-white to-primary-clay/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-black mb-6">
              Insights & Stories
            </h1>
            <p className="text-xl text-primary-sage mb-12">
              Explore the future of wellness living through our collection of insights, stories, and expert perspectives.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full px-6 py-4 bg-white rounded-full shadow-lg border border-primary-mist focus:outline-none focus:ring-2 focus:ring-primary-green text-primary-black placeholder-primary-sage"
              />
              <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-primary-sage" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === ''
                  ? 'bg-primary-black text-primary-white'
                  : 'bg-primary-mist text-primary-black hover:bg-primary-sage hover:text-primary-white'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.name
                    ? category.color + ' text-primary-white'
                    : 'bg-primary-mist text-primary-black hover:bg-primary-sage hover:text-primary-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 bg-gradient-to-br from-primary-white via-primary-mist/20 to-primary-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-black mb-12">Featured Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-primary-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-[16/9] bg-primary-mist relative">
                  {/* Image would be here */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-primary-green text-primary-white text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-primary-sage mb-4">
                    <span className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary-black mb-3 group-hover:text-primary-green transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-primary-sage mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-primary-green font-medium group-hover:text-primary-clay transition-colors">
                    Read More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-black mb-12">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-primary-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-mist hover:border-primary-green/30"
              >
                <div className="flex items-center gap-4 text-sm text-primary-sage mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary-mist">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-primary-black mb-3 group-hover:text-primary-green transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-primary-sage mb-6">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-primary-sage">
                    <Calendar size={16} className="mr-2" />
                    {post.date}
                  </div>
                  <div className="flex items-center text-primary-green font-medium group-hover:text-primary-clay transition-colors">
                    Read Article
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary-green to-primary-clay text-primary-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Wellness Living Insights
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join our newsletter to receive the latest articles, stories, and updates about wellness community living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="px-8 py-4 bg-primary-white text-primary-green rounded-full font-semibold hover:bg-primary-mist transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
