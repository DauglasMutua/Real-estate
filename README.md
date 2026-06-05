# Prestige Properties - Real Estate Landing Page

A professional, luxury-focused real estate landing page with a fully responsive design, smooth animations, and modern interactive features. Built with pure HTML5, CSS3, and vanilla JavaScript—no external dependencies required.

## 📁 Project Structure

```
real-estate-project/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styling for the website
├── js/
│   └── script.js          # Interactive functionality
├── images/                # Folder for images, icons, and media
│   └── (add your images here)
└── README.md              # This file
```

## 🚀 How to Use

1. **Open the website:**
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance

2. **Using a Local Server (Recommended):**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if installed)
   npx http-server
   ```
   Then visit `http://localhost:8000` in your browser

## 📂 File Breakdown

### `index.html`
- Main HTML structure
- Contains all sections: Hero, Services, Testimonials, Contact, Footer
- References external CSS and JavaScript files
- All semantic and properly organized

### `css/styles.css`
- Complete styling for all sections
- CSS variables for easy color customization
- Mobile-responsive design with media queries
- Smooth animations and transitions
- Organized with clear comments for each section

### `js/script.js`
- Mobile navigation toggle functionality
- Form submission handling
- Smooth scroll interactions
- Lightweight and easy to extend

### `images/` Folder
- Ready for your media files
- Suggested additions:
  - Hero background images
  - Property showcase images
  - Team member photos
  - Logo/branding assets

## 🎨 Customization

### Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --primary: #d4a574;      /* Gold accent */
    --dark: #1a1a1a;         /* Dark background */
    --light: #f8f6f3;        /* Light background */
    --gray: #6b6b6b;         /* Text gray */
    --white: #ffffff;        /* White */
}
```

### Adding Images
1. Place images in the `images/` folder
2. Reference them in HTML with: `<img src="images/your-image.jpg" alt="Description">`

### WhatsApp Integration
In `index.html`, find the WhatsApp button and replace:
```html
href="https://wa.me/1234567890?text=..."
```
With your actual WhatsApp number (include country code, no + symbol)

### Contact Form
Currently uses basic validation. For actual email functionality, integrate with a backend service like:
- Formspree
- EmailJS
- SendGrid
- Your own backend API

## 📱 Responsive Design & Device Support

The website is fully responsive with breakpoints at:
- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px  
- **Mobile:** 480px - 767px
- **Small Mobile:** Below 480px

All content remains properly constrained and never cuts off on any screen size.

## ✨ Features

- ✅ **Smooth Page Loading** - Fade-in animation with opacity transition on page load
- ✅ **Fully Responsive Design** - Optimized for mobile (480px), tablet (768px), and desktop with no content cutoff
- ✅ **Hero Section** - Compelling CTA buttons with smooth scroll interactions
- ✅ **Service Cards** - 6 expandable service cards with "Read More/Less" dropdown functionality
- ✅ **Offer Ticker Banner** - Animated ticker displaying exclusive offers
- ✅ **Testimonials Grid** - 6 client testimonials with rating display
- ✅ **Contact Form** - Form validation and submission handling with WhatsApp integration button
- ✅ **Mobile Navigation** - Responsive hamburger menu toggle for small screens
- ✅ **Professional Aesthetics** - Refined typography, subtle shadows, smooth hover effects
- ✅ **Accessibility** - Semantic HTML5 structure with proper ARIA support
- ✅ **Clean Code** - No inline event handlers or inline styles; proper event delegation
- ✅ **Fast Loading** - Zero external dependencies; optimized for performance

## 🎯 Recent Enhancements

### Responsive Mobile Experience
- Fixed layout constraints to prevent horizontal scrolling on mobile devices
- Implemented `overflow-x: hidden` globally and `min-width: 0` on flex/grid children
- Tested across all device sizes for seamless display

### Interactive Service Cards
- Service cards feature expandable "Read More/Less" dropdowns
- Smooth max-height and opacity transitions for expand/collapse animation
- Arrow indicator rotates to show expanded/collapsed state

### Professional Design Polish
- Enhanced typography with modern system font stack
- Refined shadow effects for depth and elevation
- Improved button hover states with subtle transforms
- Better form input focus states with colored glow effects
- Increased padding and spacing for better visual hierarchy

### Code Quality Improvements
- Removed all inline event handlers (onclick, onerror)
- Converted to proper JavaScript event delegation
- Eliminated inline styles in favor of CSS classes
- Wrapped all DOM manipulations in DOMContentLoaded
- Clean separation of concerns (HTML, CSS, JavaScript)

## 🔧 Adding More Sections

To add new sections, follow this template:

```html
<section class="new-section" id="section-id">
    <div class="section-title">
        <h2>Section Title</h2>
        <p>Subtitle or description</p>
    </div>
    <!-- Your content here -->
</section>
```

Then add CSS styling to `css/styles.css`.

## 📝 SEO Tips

1. Update `<title>` in `index.html`
2. Add meta description: `<meta name="description" content="...">`
3. Add Open Graph tags for social sharing
4. Use semantic HTML5 elements
5. Optimize images for web

## 🌐 Deployment

### Using GitHub Pages
1. Create a GitHub repository
2. Push all files to the `main` branch
3. Go to Settings → Pages
4. Set source to `main` branch
5. Your site is live at `https://yourusername.github.io/repo-name`

### Using Other Hosting
- Netlify
- Vercel
- Firebase Hosting
- Traditional web hosting (FTP upload)

## 📞 Support

For questions or to customize:
1. Check the comments in the CSS and JavaScript files
2. Refer to this README
3. Modify the files as needed - this is your project!

---

**Happy building! 🏠✨**
