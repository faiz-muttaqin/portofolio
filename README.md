# Portfolio Landing Page

A modern, responsive portfolio website built with Bootstrap 5, jQuery, and JSON data integration. Features light/dark mode toggle and project search functionality.

## Features

- 🌙 **Light/Dark Mode Toggle** - Seamless theme switching with localStorage persistence
- 🔍 **Project Search** - Real-time search through projects by title, technology, or category
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎨 **Modern Design** - Clean, professional UI matching the provided design samples
- 📊 **JSON Data Driven** - Easy content management through separate JSON files
- ⚡ **Fast Loading** - Optimized performance with CDN resources
- 🎯 **Smooth Animations** - Elegant scroll effects and hover interactions

## Technologies Used

- **Frontend**: HTML5, CSS3, Bootstrap 5, jQuery
- **Data**: JSON files for easy content management
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Inter)
- **Server**: Node.js (for local development)

## Project Structure

```
portofolio/
├── index.html              # Main HTML file
├── assets/
│   ├── style.css          # Custom CSS with dark/light mode support
│   └── script.js          # JavaScript functionality with jQuery
├── data/
│   ├── skills.json        # Skills & Technologies data
│   ├── projects.json      # Featured Projects data
│   └── contact.json       # Contact information
├── server.js              # Node.js development server
└── README.md              # Project documentation
```

## Data Structure

### Skills (data/skills.json)
```json
{
  "frontend": {
    "title": "Frontend",
    "skills": [
      { "name": "React", "level": "Advanced" },
      ...
    ]
  },
  ...
}
```

### Projects (data/projects.json)
```json
[
  {
    "id": 1,
    "title": "Project Title",
    "subtitle": "Project Subtitle",
    "description": "Detailed description...",
    "technologies": ["React", "Node.js"],
    "impact": "Measurable results...",
    "category": "Category Name",
    "demoUrl": "#",
    "codeUrl": "#",
    "imageUrl": "image-url"
  }
]
```

### Contact (data/contact.json)
```json
{
  "contact": {
    "title": "Get In Touch",
    "subtitle": "Contact description...",
    "email": "email@example.com",
    "linkedin": "linkedin-url",
    "message": "Send Message"
  },
  "socialLinks": [...]
}
```

## Getting Started

### Option 1: Using Node.js Server (Recommended)
1. Clone the repository
2. Navigate to the project directory
3. Run: `node server.js`
4. Open: `http://localhost:3000`

### Option 2: Using Python Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open: `http://localhost:8000`

### Option 3: Using VS Code Live Server
1. Install Live Server extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Customization

### Updating Content
1. **Skills**: Edit `data/skills.json` to modify skills and technologies
2. **Projects**: Edit `data/projects.json` to add/modify projects
3. **Contact**: Edit `data/contact.json` to update contact information

### Styling
- Modify `assets/style.css` for custom styling
- Update CSS variables in `:root` for color scheme changes
- Dark mode styles are defined in `[data-bs-theme="dark"]` selectors

### Functionality
- Core functionality is in `assets/script.js`
- Uses jQuery for DOM manipulation and AJAX calls
- Modular functions for easy maintenance and extension

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Bootstrap 5 and jQuery loaded from CDN
- Optimized images and animations
- Lazy loading for better performance
- Minimal JavaScript bundle

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For questions or support, please open an issue on GitHub or contact [muttaqinfaiz@gmail.com].
A Website of Portofolio Faiz Muttaqin