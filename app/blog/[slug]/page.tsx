'use client'

import { ArrowLeft, Calendar, Share2, Facebook, Twitter, Linkedin, Copy, ChevronRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'

// This would come from your CMS or API in a real implementation
const blogPost = {
  title: "The Vision Behind Kenn EcoEstates: Building India's First Ultra-Premium Wellness Community",
  excerpt: "Discover how we're revolutionizing community living through our unique land trust model, democratic governance, and wellness-focused infrastructure.",
  category: "Wellness Living",
  author: "Kenn Team",
  date: "2024-03-15",
  readTime: "8 min read",
  image: "/blog/vision-wellness.jpg",
  content: `
    <p class="text-xl text-primary-sage leading-relaxed mb-8">
      In the heart of Karnataka, just 150 km from Bangalore's bustling tech corridors, a revolutionary vision is taking shape. Kenn EcoEstates isn't just another real estate project—it's a paradigm shift in how we think about premium living, wellness, and community.
    </p>

    <h2 class="text-3xl font-bold text-primary-black mb-6">The Genesis of Our Vision</h2>
    
    <p class="text-lg text-primary-sage leading-relaxed mb-6">
      While elite club memberships in Bangalore demand upwards of ₹60 Lakhs merely for access to like-minded peers, we asked ourselves: What if we could create something more meaningful? Something that offers not just connection, but true ownership, influence, and a legacy of wellness?
    </p>

    <p class="text-lg text-primary-sage leading-relaxed mb-8">
      Enter Kenn EcoEstates—a 30+-acre wellness paradise designed for 100 carefully selected families who share our passion for health-conscious living and community building.
    </p>

    <h2 class="text-3xl font-bold text-primary-black mb-6">The Three Pillars of Kenn EcoEstates</h2>

    <div class="bg-primary-mist rounded-3xl p-8 mb-8">
      <h3 class="text-2xl font-bold text-primary-black mb-4">1. Democratic Land Trust Model</h3>
      <p class="text-lg text-primary-sage leading-relaxed">
        Unlike traditional real estate ownership, our private land trust structure ensures that every plot owner receives 0.5% voting rights in community decisions. This democratic approach means that your voice matters in shaping the community's future.
      </p>
    </div>

    <div class="bg-primary-mist rounded-3xl p-8 mb-8">
      <h3 class="text-2xl font-bold text-primary-black mb-4">2. Wellness-First Infrastructure</h3>
      <p class="text-lg text-primary-sage leading-relaxed">
        From open-air gyms and walking trails to organic kitchen gardens and curated wellness programs, every amenity is designed to nurture holistic health—physical, mental, and spiritual.
      </p>
    </div>

    <div class="bg-primary-mist rounded-3xl p-8 mb-12">
      <h3 class="text-2xl font-bold text-primary-black mb-4">3. Transparent Governance</h3>
      <p class="text-lg text-primary-sage leading-relaxed">
        With a flat 10% service charge and completely transparent books, we've eliminated the hidden costs and complexities typically associated with premium property ownership.
      </p>
    </div>

    <h2 class="text-3xl font-bold text-primary-black mb-6">Building More Than Land Value</h2>
    
    <p class="text-lg text-primary-sage leading-relaxed mb-6">
      At Kenn EcoEstates, we're not just selling 10,000 sq ft plots—we're creating a legacy of wellness and purposeful living. Our community is designed for urban professionals who understand that true luxury isn't just about exclusive addresses, but about living in harmony with nature and like-minded individuals.
    </p>

    <div class="bg-gradient-to-r from-primary-green to-primary-clay rounded-3xl p-8 text-primary-white mb-12">
      <h3 class="text-2xl font-bold mb-4">Looking Ahead</h3>
      <p class="text-lg leading-relaxed">
        As we move forward with this pioneering project, our commitment remains unwavering: to create India's most exclusive wellness community where health-conscious achievers can thrive together.
      </p>
    </div>

    <p class="text-lg text-primary-sage leading-relaxed">
      Join us in this revolutionary journey. Your wellness retreat awaits at Kenn EcoEstates.
    </p>
  `
}

// Related posts would also come from your CMS/API
const relatedPosts = [
  {
    title: "Why 100 Health-Conscious Families Are Choosing Community Over Luxury Apartments",
    excerpt: "While elite club memberships cost upwards of ₹60 Lakhs just for access, Kenn EcoEstates offers more than connection — it provides ownership and influence.",
    category: "Community",
    date: "2024-03-10",
    slug: "why-choose-community-living"
  },
  {
    title: "The Science Behind Our Wellness Infrastructure Design",
    excerpt: "From open-air gyms to meditation trails, discover the research and thought process behind every wellness amenity at Kenn EcoEstates.",
    category: "Wellness Living",
    date: "2024-02-25",
    slug: "wellness-infrastructure-design"
  }
]

export default function BlogPost() {
  const [copySuccess, setCopySuccess] = useState(false)

  const handleShare = async (platform: string) => {
    const url = window.location.href
    const title = blogPost.title

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank')
        break
      case 'copy':
        try {
          await navigator.clipboard.writeText(url)
          setCopySuccess(true)
          setTimeout(() => setCopySuccess(false), 2000)
        } catch (err) {
          console.error('Failed to copy URL:', err)
        }
        break
    }
  }

  return (
    <div className="min-h-screen bg-primary-white">
      <Header />
      
      {/* Article Header */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-green/10 via-primary-white to-primary-clay/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blog */}
            <Link
              href="/blog"
              className="inline-flex items-center text-primary-sage hover:text-primary-green transition-colors mb-8"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Link>

            {/* Category */}
            <div className="mb-6">
              <span className="px-4 py-2 bg-primary-green text-primary-white rounded-full text-sm">
                {blogPost.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-black mb-6">
              {blogPost.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-primary-sage mb-8">
              <div className="flex items-center">
                <Calendar size={20} className="mr-2" />
                {blogPost.date}
              </div>
              <div>{blogPost.readTime}</div>
              <div>By {blogPost.author}</div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4">
              <span className="text-primary-sage">Share:</span>
              <button
                onClick={() => handleShare('facebook')}
                className="p-2 rounded-full bg-primary-mist hover:bg-primary-green hover:text-primary-white transition-all"
              >
                <Facebook size={20} />
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="p-2 rounded-full bg-primary-mist hover:bg-primary-green hover:text-primary-white transition-all"
              >
                <Twitter size={20} />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="p-2 rounded-full bg-primary-mist hover:bg-primary-green hover:text-primary-white transition-all"
              >
                <Linkedin size={20} />
              </button>
              <button
                onClick={() => handleShare('copy')}
                className="p-2 rounded-full bg-primary-mist hover:bg-primary-green hover:text-primary-white transition-all relative"
              >
                <Copy size={20} />
                {copySuccess && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary-black text-primary-white text-xs px-2 py-1 rounded">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="aspect-[16/9] bg-primary-mist rounded-3xl mb-12">
              {/* Image would be here */}
            </div>

            {/* Content */}
            <article 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-gradient-to-br from-primary-white via-primary-mist/20 to-primary-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-black mb-8">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((post, index) => (
                <Link
                  key={index}
                  href={`/blog/${post.slug}`}
                  className="group bg-primary-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-mist hover:border-primary-green/30"
                >
                  <div className="flex items-center gap-4 text-sm text-primary-sage mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary-mist">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary-black mb-3 group-hover:text-primary-green transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-primary-sage mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-primary-green font-medium group-hover:text-primary-clay transition-colors">
                    Read Article
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-green to-primary-clay text-primary-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Wellness Community?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Secure your place in India's most exclusive wellness-focused land community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/how-it-works"
                className="px-8 py-4 bg-primary-white text-primary-green rounded-full font-semibold hover:bg-primary-mist transition-all duration-300"
              >
                Learn More
              </Link>
              <Link
                href="/apply"
                className="px-8 py-4 border-2 border-primary-white text-primary-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
