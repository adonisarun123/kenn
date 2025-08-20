'use client'

import { Shield, Lock, Eye, Database, Users, FileText, AlertCircle, Mail, Phone, MapPin } from 'lucide-react'

interface PolicySection {
  id: string
  title: string
  icon: React.ReactNode
  content: React.ReactNode
}

const policySections: PolicySection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    icon: <Shield className="text-primary-green" size={24} />,
    content: (
      <div className="space-y-4">
        <p>
          At Kenn EcoEstates ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal data when you visit our website, use our services, or engage with our wellness-focused land community.
        </p>
        <p>
          This policy applies to all personal information collected by Kenn EcoEstates in connection with our services, including but not limited to land ownership, community membership, wellness programs, and related real estate services.
        </p>
        <p>
          By using our services or providing your personal information to us, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.
        </p>
      </div>
    )
  },
  {
    id: 'information-collection',
    title: 'Information We Collect',
    icon: <Database className="text-primary-clay" size={24} />,
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="text-xl font-semibold text-primary-black mb-3">Personal Information</h4>
          <p className="mb-3">We may collect the following types of personal information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
            <li><strong>Identity Information:</strong> Government-issued ID numbers, PAN card, passport details</li>
            <li><strong>Financial Information:</strong> Income details, bank account information, credit history, investment capacity</li>
            <li><strong>Property Information:</strong> Property preferences, ownership history, investment goals</li>
            <li><strong>Emergency Contacts:</strong> Family member or friend contact details</li>
            <li><strong>Health & Wellness:</strong> Dietary preferences, fitness goals, wellness interests (optional)</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-semibold text-primary-black mb-3">Technical Information</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address, browser type, operating system</li>
            <li>Website usage data, pages visited, time spent on site</li>
            <li>Device information and mobile app usage data</li>
            <li>Cookies and tracking technologies data</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-primary-black mb-3">Information from Third Parties</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Credit bureau reports and financial verification services</li>
            <li>Property records and government databases</li>
            <li>Background check services (where legally permitted)</li>
            <li>Social media platforms (only with your consent)</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'information-use',
    title: 'How We Use Your Information',
    icon: <Eye className="text-primary-green" size={24} />,
    content: (
      <div className="space-y-4">
        <p>We use your personal information for the following purposes:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-primary-black mb-3">Service Delivery</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Process land ownership applications</li>
              <li>Conduct background checks and financial verification</li>
              <li>Facilitate property transactions and legal documentation</li>
              <li>Provide community membership services</li>
              <li>Deliver wellness programs and amenities</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-primary-black mb-3">Communication</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Respond to inquiries and provide customer support</li>
              <li>Send important updates about your property or membership</li>
              <li>Share community news and events</li>
              <li>Provide marketing communications (with consent)</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-primary-black mb-3">Legal & Compliance</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Comply with legal obligations and regulations</li>
              <li>Conduct due diligence and risk assessments</li>
              <li>Prevent fraud and ensure security</li>
              <li>Resolve disputes and enforce agreements</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-primary-black mb-3">Improvement</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Analyze website usage and improve user experience</li>
              <li>Develop new services and features</li>
              <li>Conduct research and analytics</li>
              <li>Personalize your experience</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'information-sharing',
    title: 'Information Sharing and Disclosure',
    icon: <Users className="text-primary-clay" size={24} />,
    content: (
      <div className="space-y-6">
        <p>We may share your personal information in the following circumstances:</p>
        
        <div>
          <h4 className="text-xl font-semibold text-primary-black mb-3">Service Providers</h4>
          <p>We may share information with trusted third-party service providers who assist us in:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Legal services and documentation</li>
            <li>Financial services and banking</li>
            <li>Background check and verification services</li>
            <li>IT services and data hosting</li>
            <li>Marketing and communication services</li>
            <li>Property management and maintenance</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-primary-black mb-3">Legal Requirements</h4>
          <p>We may disclose your information when required by law or to:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Comply with legal processes, court orders, or government requests</li>
            <li>Enforce our terms of service or other agreements</li>
            <li>Protect the rights, property, or safety of Kenn EcoEstates, our users, or the public</li>
            <li>Prevent or investigate fraud, security breaches, or illegal activities</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-primary-black mb-3">Business Transfers</h4>
          <p>In the event of a merger, acquisition, or sale of assets, your personal information may be transferred to the new entity, subject to the same privacy protections.</p>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-primary-black mb-3">Consent</h4>
          <p>We may share your information for other purposes with your explicit consent.</p>
        </div>
      </div>
    )
  },
  {
    id: 'data-security',
    title: 'Data Security',
    icon: <Lock className="text-primary-green" size={24} />,
    content: (
      <div className="space-y-4">
        <p>
          We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
        </p>
        
        <div>
          <h4 className="text-lg font-semibold text-primary-black mb-3">Security Measures Include:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Encryption:</strong> Data transmission using SSL/TLS encryption</li>
            <li><strong>Access Controls:</strong> Limited access to personal information on a need-to-know basis</li>
            <li><strong>Secure Storage:</strong> Data stored in secure, encrypted databases</li>
            <li><strong>Regular Audits:</strong> Regular security assessments and vulnerability testing</li>
            <li><strong>Employee Training:</strong> Staff training on data protection and privacy practices</li>
            <li><strong>Physical Security:</strong> Secure facilities with restricted access</li>
          </ul>
        </div>

        <div className="bg-primary-mist/20 p-4 rounded-lg">
          <div className="flex items-start">
            <AlertCircle className="text-primary-clay mr-3 mt-1" size={20} />
            <div>
              <h4 className="font-semibold text-primary-black mb-2">Important Security Notice</h4>
              <p className="text-sm">
                While we implement robust security measures, no system is 100% secure. We encourage you to take steps to protect your personal information, including using strong passwords and not sharing sensitive information over unsecured communications.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'your-rights',
    title: 'Your Privacy Rights',
    icon: <FileText className="text-primary-clay" size={24} />,
    content: (
      <div className="space-y-6">
        <p>You have the following rights regarding your personal information:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-primary-black mb-3">Access Rights</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Request access to your personal information</li>
              <li>Receive a copy of the data we hold about you</li>
              <li>Understand how your data is being used</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-primary-black mb-3">Correction Rights</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Request correction of inaccurate information</li>
              <li>Update your personal details</li>
              <li>Complete incomplete information</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-primary-black mb-3">Deletion Rights</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent for data processing</li>
              <li>Object to certain uses of your data</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-primary-black mb-3">Portability Rights</h4>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Request a copy of your data in a portable format</li>
              <li>Transfer your data to another service provider</li>
              <li>Receive data in a commonly used format</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary-green/10 p-4 rounded-lg">
          <h4 className="font-semibold text-primary-black mb-2">How to Exercise Your Rights</h4>
          <p className="text-sm">
            To exercise any of these rights, please contact us using the information provided in the "Contact Us" section. We will respond to your request within 30 days and may require identity verification.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-primary-black mb-3">Limitations</h4>
          <p className="text-sm">
            Please note that certain rights may be limited by legal requirements, legitimate business interests, or contractual obligations. For example, we may need to retain certain information for legal compliance or to fulfill our contractual obligations related to your property ownership.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'cookies',
    title: 'Cookies and Tracking Technologies',
    icon: <Database className="text-primary-green" size={24} />,
    content: (
      <div className="space-y-4">
        <p>
          We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences.
        </p>
        
        <div>
          <h4 className="text-lg font-semibold text-primary-black mb-3">Types of Cookies We Use:</h4>
          <div className="space-y-3">
            <div>
              <strong>Essential Cookies:</strong> Required for basic website functionality and security. These cannot be disabled.
            </div>
            <div>
              <strong>Performance Cookies:</strong> Help us understand how visitors interact with our website to improve performance.
            </div>
            <div>
              <strong>Functional Cookies:</strong> Remember your preferences and settings to enhance your experience.
            </div>
            <div>
              <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track marketing campaign effectiveness.
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-primary-black mb-3">Managing Cookies</h4>
          <p>
            You can control cookies through your browser settings. However, disabling certain cookies may limit website functionality. For more information about managing cookies, visit your browser's help section.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'data-retention',
    title: 'Data Retention',
    icon: <FileText className="text-primary-green" size={24} />,
    content: (
      <div className="space-y-4">
        <p>
          We retain your personal information only as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.
        </p>
        
        <div>
          <h4 className="text-lg font-semibold text-primary-black mb-3">Retention Periods:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Property Ownership Records:</strong> Retained permanently for legal and regulatory compliance</li>
            <li><strong>Financial Information:</strong> Retained for 7 years or as required by law</li>
            <li><strong>Marketing Information:</strong> Retained until you withdraw consent or for 2 years of inactivity</li>
            <li><strong>Website Usage Data:</strong> Typically retained for 12-24 months</li>
            <li><strong>Communication Records:</strong> Retained for 3-5 years for customer service purposes</li>
          </ul>
        </div>

        <p>
          When we no longer need your personal information, we will securely delete or anonymize it in accordance with our data retention policies and applicable laws.
        </p>
      </div>
    )
  },
  {
    id: 'international-transfers',
    title: 'International Data Transfers',
    icon: <MapPin className="text-primary-clay" size={24} />,
    content: (
      <div className="space-y-4">
        <p>
          Your personal information may be transferred to and processed in countries other than India, including countries that may have different data protection laws.
        </p>
        
        <p>
          When we transfer your information internationally, we ensure appropriate safeguards are in place, such as:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Entering into standard contractual clauses with service providers</li>
          <li>Ensuring the receiving country has adequate data protection laws</li>
          <li>Implementing additional security measures as required</li>
          <li>Obtaining your explicit consent where necessary</li>
        </ul>
      </div>
    )
  },
  {
    id: 'children-privacy',
    title: "Children's Privacy",
    icon: <Shield className="text-primary-green" size={24} />,
    content: (
      <div className="space-y-4">
        <p>
          Our services are not intended for children under the age of 18. We do not knowingly collect personal information from children under 18 years of age.
        </p>
        
        <p>
          If we become aware that we have collected personal information from a child under 18, we will take steps to promptly delete such information from our records.
        </p>
        
        <p>
          If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately using the contact information below.
        </p>
      </div>
    )
  },
  {
    id: 'policy-changes',
    title: 'Changes to This Privacy Policy',
    icon: <AlertCircle className="text-primary-clay" size={24} />,
    content: (
      <div className="space-y-4">
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or business operations.
        </p>
        
        <p>
          When we make significant changes to this policy, we will:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Notify you by email (if you have provided your email address)</li>
          <li>Post a prominent notice on our website</li>
          <li>Update the "Last Updated" date at the top of this policy</li>
          <li>Obtain your consent for material changes that affect your rights</li>
        </ul>
        
        <p>
          We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
        </p>
      </div>
    )
  }
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-primary-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-green to-primary-clay text-primary-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Shield className="text-primary-white" size={80} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl opacity-90 mb-6">
            Your privacy and data protection are our top priorities
          </p>
          <div className="bg-primary-white/10 rounded-lg p-4 inline-block">
            <p className="text-sm opacity-80">
              Last Updated: {new Date().toLocaleDateString('en-IN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-primary-mist/30 py-8 px-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {policySections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-4 py-2 bg-primary-white text-primary-sage rounded-full text-sm font-medium hover:bg-primary-green hover:text-primary-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-16">
          {policySections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-32"
            >
              <div className="bg-primary-white rounded-2xl p-8 shadow-lg border border-primary-mist">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-mist rounded-xl flex items-center justify-center mr-4">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-black">
                      {section.title}
                    </h2>
                    <div className="text-sm text-primary-sage font-medium mt-1">
                      Section {index + 1} of {policySections.length}
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none text-primary-sage leading-relaxed">
                  {section.content}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 bg-gradient-to-br from-primary-green/10 to-primary-clay/10 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary-black mb-4">Contact Us</h2>
            <p className="text-lg text-primary-sage">
              Have questions about this Privacy Policy or your personal information?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary-green" size={24} />
              </div>
              <h3 className="font-semibold text-primary-black mb-2">Email Us</h3>
              <p className="text-primary-sage">privacy@kennecoestates.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-clay/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary-clay" size={24} />
              </div>
              <h3 className="font-semibold text-primary-black mb-2">Call Us</h3>
              <p className="text-primary-sage">+91 80 1234 5678</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary-green" size={24} />
              </div>
              <h3 className="font-semibold text-primary-black mb-2">Visit Us</h3>
              <p className="text-primary-sage">Bangalore, Karnataka, India</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-primary-sage">
              For privacy-related inquiries, please allow up to 30 days for a response. We are committed to addressing your concerns promptly and thoroughly.
            </p>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-12 bg-primary-mist/20 rounded-xl p-6">
          <div className="flex items-start">
            <AlertCircle className="text-primary-clay mr-3 mt-1 flex-shrink-0" size={20} />
            <div>
              <h3 className="font-semibold text-primary-black mb-2">Legal Disclaimer</h3>
              <p className="text-sm text-primary-sage">
                This Privacy Policy is governed by Indian data protection laws, including the Information Technology Act, 2000, and any applicable state laws. 
                For any disputes related to privacy matters, the courts of Bangalore, Karnataka shall have exclusive jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
