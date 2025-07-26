# Prashant Sah - Portfolio Website

A responsive, modern portfolio website showcasing my skills in Data Science, Full Stack Development, and Python Programming.

## 🌟 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Dark/Light Mode** - Toggle between themes with localStorage persistence
- **Smooth Animations** - AOS (Animate On Scroll) library for engaging interactions
- **Contact Form** - Functional contact form with EmailJS integration
- **Downloadable Resume** - One-click resume download functionality
- **Modern UI** - Built with Tailwind CSS for a clean, professional look

## 🚀 Live Demo

[View Live Portfolio](https://prashantsah2061.github.io/portfolio)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with Tailwind CSS
- **JavaScript (ES6+)** - Interactive functionality
- **Tailwind CSS** - Utility-first CSS framework
- **AOS.js** - Animate On Scroll library
- **EmailJS** - Contact form functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Poppins)

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
├── .gitignore          # Git ignore rules
└── assets/             # Images and other assets
    ├── my pic.jpeg     # Profile image
    └── about_me.png    # About section image
```

## 🎯 Sections

1. **Hero Section** - Introduction and call-to-action
2. **About Me** - Background and current focus
3. **Skills** - Technical skills with animated cards
4. **Projects** - Portfolio projects with links
5. **Experience** - Work experience and achievements
6. **Education** - Academic background
7. **Contact** - Contact form and social links
8. **Footer** - Copyright and theme toggle

## 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/prashantsah2061/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser, or
   - Use Live Server extension in VS Code for development

3. **Customize**
   - Update personal information in `index.html`
   - Modify styles in `styles.css`
   - Add functionality in `script.js`

## 📧 Contact Form Setup

The contact form uses EmailJS for functionality. To set up your own:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Update the configuration in `script.js`:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
   ```

## 🎨 Customization

### Colors
The website uses a customizable color palette. Update the Tailwind classes in `index.html` to change colors.

### Content
- Update personal information in the HTML sections
- Replace images in the `assets/` folder
- Modify the resume content in `script.js`

### Styling
- Custom CSS in `styles.css`
- Tailwind classes in `index.html`
- Animation settings in the AOS attributes

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

Dark mode is implemented with:
- Toggle button in the navigation
- localStorage persistence
- Smooth transitions
- Custom dark theme colors

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Contact

- **Email**: prashantsah2061@gmail.com
- **LinkedIn**: [linkedin.com/in/prashantsah](https://linkedin.com/in/prashantsah)
- **GitHub**: [github.com/prashantsah2061](https://github.com/prashantsah2061)

---

⭐ **Star this repository if you found it helpful!** 