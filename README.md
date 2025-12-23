# Faiz Muttaqin - Portfolio Website

> **Live Site**: [faizmuttaqin.com](https://faizmuttaqin.com)

A modern, professional portfolio website showcasing backend development, DevOps expertise, and full-stack projects. Built with Bootstrap 5, jQuery, and JSON data integration featuring colorful brand icons and seamless light/dark mode.

## 🎯 About

Portfolio of **Faiz Muttaqin**, Software Engineer at PT Smartweb Indonesia specializing in:
- **Backend Development**: Go (Gin, GORM), PHP, REST APIs
- **Real-time Systems**: MQTT/WebSocket infrastructure (500K+ concurrent connections)
- **DevOps & Infrastructure**: Linux server administration, Docker, CI/CD
- **Frontend Development**: React.js, TypeScript, Bootstrap, TailwindCSS
- **IoT & Enterprise Systems**: EDC terminal management (5K+ devices), payment systems

## ✨ Features

- 🎨 **Brand Icon Integration** - Recognizable technology logos (React, Go, Docker, MySQL, etc.) with official brand colors
- 🌙 **Light/Dark Mode Toggle** - Beautiful theme switching with animated sun/moon toggle and localStorage persistence
- 🔍 **Real-time Project Search** - Live filtering by title, technology, or category with keyboard shortcuts (ESC to clear)
- 📱 **Fully Responsive** - Mobile-first design optimized for all devices and screen sizes
- 🚀 **JSON-Driven Content** - Easy updates through separate data files for skills, projects, and experience
- ⚡ **Performance Optimized** - Fast loading with CDN resources and optimized animations
- ♿ **Accessible** - ARIA labels, semantic HTML, and keyboard navigation support
- 🎯 **SEO Ready** - Meta tags, Open Graph, and Twitter Card integration

## 🛠️ Technologies Used

### Frontend Stack
- **Framework**: Bootstrap 5.3.2 (responsive grid, components)
- **JavaScript**: jQuery 3.7.1 (DOM manipulation, AJAX)
- **Icons**: Font Awesome 6.4.0 + Devicon CDN (brand logos)
- **Fonts**: Google Fonts - Inter (modern, professional typography)
- **CSS**: Custom styles with CSS variables and smooth animations

### Data Management
- **Format**: JSON files for structured content
- **Loading**: AJAX/Fetch API for dynamic data
- **Storage**: LocalStorage for theme persistence

### Development
- **Version Control**: Git/GitHub
- **Deployment**: GitHub Pages (custom domain)
- **DNS**: Cloudflare (SSL, CDN, optimization)

## 📁 Project Structure

```
portofolio/
├── index.html                 # Main HTML with SEO meta tags
├── assets/
│   ├── style.css             # Custom CSS with light/dark mode
│   ├── script.js             # jQuery functionality & animations
│   └── img/
│       ├── favicon.ico       # Site favicon
│       ├── favicon-32x32.png
│       ├── favicon-16x16.png
│       ├── apple-touch-icon.png
│       └── og-preview.jpg    # Open Graph preview image
├── data/
│   ├── skills.json           # Technologies with icons & colors
│   ├── projects.json         # 12 featured projects
│   ├── experience.json       # Work history (PT Smartweb, etc.)
│   └── contact.json          # Contact info & social links
├── site.webmanifest          # PWA manifest
└── README.md                 # This file
```

## 📊 Data Structure

### Skills (data/skills.json)
```json
{
  "frontend": {
    "title": "Frontend Development",
    "icon": "fab fa-react",
    "color": "#61DAFB",
    "skills": [
      { 
        "name": "React.js", 
        "level": "Advanced",
        "icon": "fab fa-react",
        "color": "#61DAFB"
      }
    ]
  }
}
```

### Projects (data/projects.json)
```json
[
  {
    "id": 1,
    "title": "Shadcn Admin Go Starter Dashboard",
    "subtitle": "Production-ready Full-Stack Admin Dashboard",
    "description": "Go (Gin + GORM) + React + Shadcn UI...",
    "technologies": ["Go", "Gin", "React", "TypeScript"],
    "impact": "60% dev time reduction, ⭐ 2 GitHub stars",
    "category": "Full Stack Development",
    "demoUrl": "",
    "codeUrl": "https://github.com/faiz-muttaqin/shadcn-go-starter",
    "imageUrl": "placeholder-url"
  }
]
```

### Experience (data/experience.json)
```json
{
  "experiences": [
    {
      "id": 1,
      "position": "Software Engineer / Backend Developer / DevOps Engineer",
      "company": "PT Smartweb Indonesia Kreasi",
      "period": "Oct 2022 - Present",
      "achievements": [
        "Engineered MQTT/WebSocket infrastructure handling 500K+ connections",
        "Built Paxstorelite platform managing 5K+ EDC devices"
      ],
      "technologies": ["Go", "MQTT", "WebSocket", "PHP", "MySQL"]
    }
  ]
}
```

## 🚀 Getting Started

### Quick Start (GitHub Pages)
Visit the live site at **[faizmuttaqin.com](https://faizmuttaqin.com)**

### Local Development

#### Option 1: VS Code Live Server (Recommended)
1. Install **Live Server** extension in VS Code
2. Right-click `index.html`
3. Select **"Open with Live Server"**
4. Opens at `http://localhost:5500`

#### Option 2: Python HTTP Server
```bash
# Python 3
cd portofolio
python -m http.server 8000

# Then open: http://localhost:8000
```

#### Option 3: Node.js HTTP Server
```bash
# Install http-server globally
npm install -g http-server

# Run in project directory
cd portofolio
http-server -p 3000

# Then open: http://localhost:3000
```

## 🎨 Customization Guide

### Update Personal Information
1. **Skills**: Edit `data/skills.json`
   - Add/remove technologies
   - Update icon URLs from [Devicons](https://devicon.dev/) or [Font Awesome](https://fontawesome.com/)
   - Change brand colors (use official brand guidelines)

2. **Projects**: Edit `data/projects.json`
   - Add your GitHub projects
   - Update demo URLs and live links
   - Change project categories and impacts

3. **Experience**: Edit `data/experience.json`
   - Update work history
   - Add achievements with metrics
   - List technologies used

4. **Contact**: Edit `data/contact.json`
   - Update email and social links
   - Modify LinkedIn/GitHub URLs

### Customize Styling
**Color Scheme** (`assets/style.css`):
```css
:root {
  --primary-color: #4A90E2;
  --gradient-primary: linear-gradient(135deg, #87CEEB 0%, #4A90E2 50%, #2E86AB 100%);
  /* Modify these for your brand colors */
}
```

**Hero Section** (`index.html` line 115-145):
- Update name, title, subtitle
- Change background gradient
- Modify CTA button text

**SEO Meta Tags** (`index.html` line 5-19):
- Update title and description
- Change Open Graph image URL
- Modify Twitter Card details

## 🌐 Deployment

### Current Setup
- **Hosting**: GitHub Pages
- **Domain**: faizmuttaqin.com (custom domain)
- **DNS**: Cloudflare (free SSL, CDN, DDoS protection)
- **SSL**: Automatic HTTPS via GitHub Pages + Cloudflare

### Deploy Your Own
1. Fork this repository
2. Enable GitHub Pages in Settings → Pages
3. Select branch: `main`, folder: `/portofolio` (or root)
4. Optional: Add custom domain in Settings → Pages → Custom domain
5. Configure DNS records (CNAME or A records) pointing to GitHub Pages

### Cloudflare DNS Setup (Optional)
```
Type: CNAME
Name: @
Target: yourusername.github.io
Proxy: Enabled (orange cloud)
```

## 📈 Performance Features

- ✅ **95+ Lighthouse Score** - Optimized for performance
- ✅ **CDN Resources** - Bootstrap, jQuery, Font Awesome from CDN
- ✅ **Lazy Loading** - Deferred content loading for speed
- ✅ **Minimal JavaScript** - Efficient jQuery with no bloat
- ✅ **Responsive Images** - Adaptive sizing for mobile
- ✅ **Caching** - LocalStorage for theme preference

## 🔧 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| Mobile Safari | ✅ iOS 12+ |
| Chrome Mobile | ✅ Latest |

## 📝 Key Sections

### 1. Hero Section
- Dynamic gradient background
- Animated entrance effects
- CTA buttons for projects and contact

### 2. About Section
- 3+ years experience highlight
- 500K+ concurrent connections achievement
- 5K+ EDC devices managed metric

### 3. Skills Section
- 6 technology categories with brand icons
- Color-coded skill tags
- Expertise levels (Expert/Advanced/Intermediate)

### 4. Projects Section
- 12 featured projects with live demos
- Real-time search functionality
- Technology tags and impact metrics
- GitHub repository links

### 5. Experience Timeline
- PT Smartweb Indonesia (3+ years)
- Key achievements with measurable results
- Technology stack per role

### 6. Contact Section
- Email, LinkedIn, GitHub links
- Professional contact form styling

## 🎯 Featured Projects Showcase

1. **Shadcn Admin Go Starter** - Go + React dashboard (⭐2 stars)
2. **IoT Device Platform** - 500K+ MQTT/WebSocket connections
3. **Paxstorelite** - EDC management for 5K+ devices
4. **Server Monitoring** - Real-time health checks
5. **Auto Backup via SSH** - rsync automation tool
6. **Portfolio Website** - This site! (95+ Lighthouse score)
7. **Nomo Forum App** - React forum platform
8. **AI Merchant Automation** - LLM-powered onboarding
9. **Personal Notes App** - i18n React application
10. **Weather App** - TypeScript with 7-day forecast
11. **Technotify Landing** - Modern React + TailwindCSS
12. **Go Video Conference** - WebRTC platform

## 📧 Contact & Links

- **Website**: [faizmuttaqin.com](https://faizmuttaqin.com)
- **Email**: muttaqinfaiz@gmail.com
- **LinkedIn**: [linkedin.com/in/faizmuttaqin](https://linkedin.com/in/faizmuttaqin)
- **GitHub**: [github.com/faiz-muttaqin](https://github.com/faiz-muttaqin)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💡 Credits & Acknowledgments

- **Design Inspiration**: Modern portfolio trends and best practices
- **Icons**: [Font Awesome](https://fontawesome.com/), [Devicons](https://devicon.dev/)
- **Framework**: [Bootstrap 5](https://getbootstrap.com/)
- **Fonts**: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)

---

**Built with ❤️ by Faiz Muttaqin** | Last Updated: December 2025