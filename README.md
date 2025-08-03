# Kenn EcoEstates Website

A beautiful, modern, responsive Next.js website for Kenn EcoEstates - a private, purpose-driven community of 100 wellness seekers.

## Features

- ✨ **Modern Design**: Clean, intuitive interface with smooth animations
- 📱 **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- 🎨 **Custom Color Scheme**: Earth-inspired colors reflecting the eco-friendly mission
- 🧘 **Wellness-Focused Content**: Comprehensive sections covering community vision, guidelines, and benefits
- 📧 **Contact Form**: Interactive form for membership requests
- ⚡ **Fast Performance**: Built with Next.js for optimal speed and SEO

## Technology Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Images**: Next.js Image optimization

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd kenn-ecoestates
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
kenn-ecoestates/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Vision.tsx         # Vision section
│   ├── Land.tsx           # Land details section
│   ├── Community.tsx      # Community information
│   ├── Guidelines.tsx     # Rules and guidelines
│   ├── Join.tsx           # Membership form
│   └── Footer.tsx         # Footer
├── public/                # Static assets
│   └── kenn-logo.png      # Company logo
└── package.json           # Dependencies and scripts
```

## Customization

### Colors

The website uses a custom color palette defined in `tailwind.config.js`:

- **Primary White**: #FFFFFF
- **Primary Black**: #222222 
- **Primary Green**: #4CAF50
- **Primary Clay**: #A0522D
- **Primary Mist**: #E6F2EA
- **Primary Sage**: #666666

### Content

To update content, edit the respective component files in the `components/` directory:

- **Hero Section**: Edit `components/Hero.tsx`
- **Vision Statement**: Edit `components/Vision.tsx`
- **Land Information**: Edit `components/Land.tsx`
- **Community Details**: Edit `components/Community.tsx`
- **Guidelines**: Edit `components/Guidelines.tsx`
- **Membership Form**: Edit `components/Join.tsx`

### Logo

Replace `public/kenn-logo.png` with your updated logo. The current logo is automatically optimized for both light and dark sections.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Run `npm run build`
2. Deploy the `out/` folder to Netlify

### Other Platforms

1. Run `npm run build`
2. Deploy the generated `out/` folder to your hosting platform

## Form Handling

The contact form in the Join section currently shows an alert on submission. To connect it to a backend:

1. **Update the form handler** in `components/Join.tsx`
2. **Add your backend endpoint** or service (Formspree, Netlify Forms, etc.)
3. **Configure email notifications** as needed

Example with Formspree:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    
    if (response.ok) {
      alert('Thank you for your interest! We will contact you soon.')
      setFormData({ name: '', email: '', phone: '', location: '', interests: '', intent: '' })
    }
  } catch (error) {
    alert('There was an error submitting your form. Please try again.')
  }
}
```

## SEO Optimization

The website includes:

- **Meta tags** for search engines and social media
- **Semantic HTML** structure
- **Alt tags** for images
- **Proper heading hierarchy**
- **Fast loading** with Next.js optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For questions or support, contact: connect@kennecoestates.in

---

**Built with ❤️ for conscious living and sustainable communities.**