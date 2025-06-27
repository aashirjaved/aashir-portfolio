# Aashir Javed - Personal Portfolio

A modern, responsive portfolio website showcasing my work, skills, and professional journey as a software engineer.

## 🚀 Features

- **Responsive Design**: Fully optimized for all devices from mobile to desktop
- **Modern UI/UX**: Clean, minimalist design with animations and transitions
- **SEO Optimized**: Structured data, metadata, and optimized for search engines
- **Performance**: Fast loading and optimized code
- **Analytics**: Google Analytics integration for tracking visitor metrics
- **Accessibility**: Designed with a11y in mind
- **Dark/Light Mode**: Theme switcher with system preference detection

## 📱 Mobile Responsiveness

This portfolio has been designed to be fully responsive across all device sizes. Here's how it works:

### Core Components

1. **useIsMobile Hook**
   - Custom hook in `/hooks/use-mobile.tsx` that detects if the viewport is mobile-sized
   - Uses media queries to detect viewport width below 768px

2. **Responsive Sidebar**
   - Desktop: Fixed sidebar with full navigation
   - Mobile: Collapsible hamburger menu with slide-in navigation
   - Uses a mobile header that's fixed to the top of the screen

3. **FloatingTags Component**
   - Only visible on the home page
   - Reduced number of tags on mobile (shows only 1/3 of the tags)
   - Smaller scale and adjusted positioning on mobile screens

### Responsive Pages

1. **Home Page**
   - Adjusted text sizes, spacing, and layout for mobile
   - Optimized hero section for smaller screens

2. **About Page**
   - Responsive grid layouts for skills and achievements
   - Adapted text sizes and component spacing

3. **Experience Page**
   - Responsive timeline with adjusted spacing and positioning
   - Stacked layouts for company details on mobile
   - Responsive metrics grid (single column on mobile, three columns on desktop)
   - Smaller typography and technology tags on mobile screens
   - Adapted footer layout for mobile devices

4. **Projects Page**
   - Responsive featured project cards with stacked layouts on mobile
   - Adjusted metrics grid from 3 columns to 1 column on mobile
   - Reduced number of visible technology tags on mobile
   - Single column layout for additional projects on mobile
   - Reduced text sizes and optimized spacing for mobile screens

5. **Writing Page**
   - Responsive article cards with stacked layouts on mobile
   - Optimized metadata display for narrow screens
   - Single column layout for all articles on mobile
   - Adjusted tag sizes and spacing for better mobile display
   - Smaller CTA button on mobile

6. **Contact Page**
   - Stacked contact method cards on mobile
   - Responsive availability section with adjusted status indicators
   - Single column layout for location and timezone information
   - Stacked CTA buttons on mobile
   - Adjusted text sizes for better readability on small screens

### Responsive Techniques

1. **Conditional Classes**
   - Tailwind classes applied conditionally based on `isMobile` state
   - Example: `className={`${isMobile ? 'text-base' : 'text-lg'}`}`

2. **Responsive Layouts**
   - Different padding and margins on mobile
   - Stacked layouts on mobile (column) vs. row layouts on desktop
   - Example: `flex ${isMobile ? 'flex-col' : 'flex-row'}`

3. **Responsive Typography**
   - Smaller text sizes on mobile
   - Reduced heading sizes
   - Example: `${isMobile ? 'text-3xl' : 'text-5xl'}`

4. **Responsive Grids**
   - Tailwind's responsive grid classes
   - Example: `grid md:grid-cols-2 lg:grid-cols-3 gap-6`

5. **Content Prioritization**
   - Reduced content density on mobile
   - Focused visual elements
   - Simplified UI for small screens

## 🧩 Components

- **Sidebar**: Main navigation component
- **FloatingTags**: Animated skill tags in the background
- **Newsletter**: Email subscription component
- **MobileNavigation**: Responsive navigation for small screens
- **StructuredData**: JSON-LD schema components for SEO

## 📈 Analytics

The portfolio uses Google Analytics to track visitor metrics:

- **Page views**: Track which pages are most popular
- **Session duration**: How long visitors stay
- **Referral sources**: Where traffic comes from
- **User demographics**: Information about visitors
- **Event tracking**: Track specific user interactions

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/aashirjaved/portfolio.git
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Build for production**
   ```bash
   pnpm build
   ```

## 📁 Project Structure

```
├── app/                  # Next.js app router pages
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── experience/       # Experience page
│   ├── projects/         # Projects page
│   ├── resume/           # Resume and open source
│   ├── writing/          # Blog and content
│   ├── layout.tsx        # Root layout with metadata
├── components/           # Reusable components
│   ├── analytics.tsx     # Google Analytics integration
│   ├── floating-tags.tsx # Animated background tags
│   ├── mobile-navigation.tsx # Mobile menu component
│   ├── newsletter.tsx    # Newsletter subscription component
│   ├── sidebar.tsx       # Main navigation component
│   ├── structured-data.tsx # JSON-LD structured data
│   ├── ui/               # UI components from shadcn
├── data/                 # Data files
│   ├── blog-data.ts      # Blog posts and content calendar
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── sitemap.xml       # XML sitemap for SEO
│   ├── robots.txt        # Robots file for SEO
│   ├── site.webmanifest  # PWA manifest file
```

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: CSS animations and transitions
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Fonts**: Inter (Google Fonts)
- **Analytics**: Google Analytics
- **Deployment**: [Vercel](https://vercel.com/)

## 🔍 SEO Features

- **Metadata**: Dynamic metadata for all pages
- **Structured Data**: JSON-LD for rich search results
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Configured for optimal crawling
- **Open Graph**: Tags for social media sharing
- **Twitter Cards**: Twitter-specific metadata
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Animation**: CSS transitions and transforms
- **Deployment**: [Your deployment platform]

## Development

1. Clone the repository
2. Install dependencies: `npm install` or `pnpm install`
3. Run the development server: `npm run dev` or `pnpm dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## License

[Your license information]
