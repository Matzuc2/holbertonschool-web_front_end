# Responsive Design

This project focuses on implementing responsive web design techniques to create websites that adapt seamlessly across different devices and screen sizes.

## Table of Contents

- [Description](#description)
- [Learning Objectives](#learning-objectives)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Features Implemented](#features-implemented)
- [Setup and Usage](#setup-and-usage)
- [Responsive Breakpoints](#responsive-breakpoints)
- [Media Queries](#media-queries)
- [Mobile Navigation](#mobile-navigation)
- [Image Optimization](#image-optimization)
- [Author](#author)

## Description

This project demonstrates the implementation of responsive design principles using HTML5 and CSS3. The website adapts to various screen sizes including desktop, tablet, and mobile devices, ensuring optimal user experience across all platforms.

## Learning Objectives

- Understand the principles of responsive web design
- Implement flexible layouts using CSS Grid and Flexbox
- Create responsive images with srcset and sizes attributes
- Design mobile-first navigation with hamburger menus
- Use CSS media queries effectively
- Optimize images for different screen resolutions
- Implement CSS variables for consistent theming

## Technologies Used

- HTML5
- CSS3
- Responsive Images (srcset/sizes)
- CSS Grid and Flexbox
- CSS Media Queries
- CSS Variables (Custom Properties)

## Project Structure

```
responsive_design/
├── 01-index.html          # Base HTML structure
├── 01-styles.css          # Base CSS styles
├── 02-index.html          # Responsive images implementation
├── 02-styles.css          # Updated styles with responsive features
├── 03-index.html          # Enhanced responsive layout
├── 03-styles.css          # Media queries and mobile optimizations
├── 04-index.html          # Mobile navigation structure
├── 04-styles.css          # Hamburger menu styles
├── 05-index.html          # Interactive mobile menu
├── 05-styles.css          # Menu toggle functionality
├── 06-index.html          # Complete responsive design
├── 06-styles.css          # Final responsive styles
├── 10-index.html          # Article page layout
├── 10-styles.css          # Article-specific responsive styles
└── images/                # Image assets and responsive variants
```

## Features Implemented

### Responsive Layout
- Flexible container with max-width constraints
- CSS Grid and Flexbox for adaptive layouts
- Mobile-first responsive design approach

### Responsive Images
- Implemented srcset for multiple image resolutions
- Optimized images for different screen densities
- Proper alt attributes for accessibility

### Mobile Navigation
- Hamburger menu for mobile devices
- Pure CSS implementation without JavaScript
- Smooth animations and transitions
- Checkbox-based toggle mechanism

### Media Queries
- Breakpoints at 767px, 480px for optimal mobile experience
- Tablet-specific optimizations
- Desktop enhancements

## Setup and Usage

1. Clone the repository:
```bash
git clone https://github.com/username/holbertonschool-web_front_end.git
```

2. Navigate to the responsive design directory:
```bash
cd holbertonschool-web_front_end/responsive_design
```

3. Open any HTML file in a web browser:
```bash
open 06-index.html
```

4. Test responsiveness by resizing the browser window or using developer tools device emulation.

## Responsive Breakpoints

The project uses the following breakpoints:

- **Mobile**: Up to 767px
- **Tablet**: 768px to 1023px  
- **Desktop**: 1024px and above

### Key Breakpoint Features:

**Mobile (≤ 767px):**
- Hamburger navigation menu
- Single column layout
- Optimized touch targets
- Compressed spacing

**Tablet (768px - 1023px):**
- Two-column layouts where appropriate
- Adjusted typography scaling
- Touch-friendly interface elements

**Desktop (≥ 1024px):**
- Full horizontal navigation
- Multi-column layouts
- Hover effects and interactions

## Media Queries

### Mobile-First Approach
```css
/* Base styles for mobile */
.container {
  max-width: 960px;
  margin: 0 auto;
}

/* Tablet styles */
@media (min-width: 768px) {
  .section-body {
    padding: 4rem 2rem;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .navbar-menu {
    display: flex;
  }
}
```

## Mobile Navigation

### HTML Structure
```html
<input type="checkbox" class="menu-btn" id="menu-btn">
<label for="menu-btn" class="menu-icon">
  <span class="navicon"></span>
</label>
<nav class="navbar-menu">
  <!-- Navigation items -->
</nav>
```

### CSS Implementation
- Pure CSS hamburger menu
- Checkbox-based state management
- Smooth transitions and animations
- Responsive hamburger-to-X transformation

## Image Optimization

### Responsive Images Implementation
```html
<img
  sizes="(max-width: 3000px) 40vw, 1200px"
  srcset="
    images/pic-about-01_c_scale,w_380.jpg 380w,
    images/pic-about-01_c_scale,w_922.jpg 922w,
    images/pic-about-01_c_scale,w_1200.jpg 1200w"
  src="images/pic-about-01_c_scale,w_1200.jpg"
  alt="About us image">
```

### Benefits:
- Faster loading times on mobile devices
- Reduced bandwidth usage
- Sharp images on high-DPI displays
- Improved Core Web Vitals scores

## Author

This project is part of the Holberton School Web Front-End curriculum, focusing on modern responsive design techniques and best practices.