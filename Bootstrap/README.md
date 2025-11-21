# Bootstrap Project

A comprehensive project demonstrating Bootstrap 4 framework capabilities with custom styling and responsive design patterns.

## 📋 Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Features](#features)
- [Custom Styling](#custom-styling)
- [Bootstrap Components Used](#bootstrap-components-used)
- [Responsive Breakpoints](#responsive-breakpoints)
- [Usage](#usage)
- [Browser Support](#browser-support)
- [Author](#author)

## 📖 Description

This project is a hands-on exploration of Bootstrap 4's features, showcasing:
- Responsive grid systems
- Component customization
- Modal interactions
- Tab navigation
- Accordion menus
- Custom color theming

All pages are built using **Bootstrap classes only** (no custom CSS except for `6-index.html`), emphasizing the framework's utility-first approach.

## 🛠 Technologies

- **Bootstrap 4.4.1** - CSS framework
- **jQuery 3.4.1** - JavaScript library (for Bootstrap components)
- **HTML5** - Markup
- **CSS3** - Custom styling (file 6 only)

## 📁 Project Structure

```
Bootstrap/
├── 0-index.html          # Basic Bootstrap setup
├── 1-index.html          # Grid system & containers
├── 2-index.html          # Card components
├── 3-index.html          # Cards + Modal with form
├── 4-index.html          # Tabs + Accordion navigation
├── 5-index.html          # Responsive visibility utilities
├── 6-index.html          # Custom styled components
├── 6-styles.css          # Custom CSS overrides
└── README.md             # This file
```

## ✨ Features

### 0-index.html
- Bootstrap CDN integration
- Basic HTML structure
- Responsive viewport meta tag

### 1-index.html
- **Container types**: `.container`, `.container-fluid`
- **Grid layouts**: 12-column responsive grid
- **Offsets**: `.offset-md-2` for spacing
- **Background utilities**: `.bg-primary`, `.bg-success`, `.bg-danger`

### 2-index.html
- **Card components**: Header, body, footer structure
- **Images**: `.card-img-top` for responsive images
- **Typography**: `.card-title`, `.card-text`
- **Buttons**: `.btn`, `.btn-danger`

### 3-index.html
- **Responsive cards**: Stack on mobile (<576px), row on desktop
- **Modal dialog**: Centered vertically and horizontally
- **Form groups**: Horizontal layout with labels
- **Data attributes**: `data-toggle="modal"`, `data-target="#id"`

**Modal Features**:
- Username/Password input fields
- Form validation structure
- Close button with `&times;` entity
- Bootstrap JS for toggle behavior

### 4-index.html
- **Navigation tabs**: Switch between Introduction/Discography
- **Tab content**: `.tab-pane` with `.show.active` states
- **Accordion**: Collapsible album list
- **State management**: `.collapsed` class for toggle effects

**Interactive Elements**:
- Click tabs to switch content
- Click album titles to expand/collapse descriptions
- Only one section visible at a time

### 5-index.html
- **Responsive containers**: `.container-fluid` + `.container-md`
- **Visibility utilities**: `.d-none`, `.d-md-block`
- **Flexbox layout**: `.d-flex`, `.justify-content-between`
- **Borders & shadows**: `.border-*`, `.shadow`

### 6-index.html
- **Custom CSS integration**: Links `6-styles.css`
- **Brand color theming**: Red color palette
- **Component overrides**: Buttons, links, cards
- **All previous features** with custom styling

## 🎨 Custom Styling (6-styles.css)

### Color Palette

| Element | Normal | Hover/Focus/Active |
|---------|--------|-------------------|
| Primary | `#E0003C` | `#BC1340` |
| Muted Text | `#8C8C8C` | - |

### Component Overrides

#### Buttons

```css
/* Primary button */
.btn-primary {
    background-color: #E0003C;
    /* Hover: #BC1340 */
}

/* Outline button */
.btn-outline-primary {
    color: #E0003C;
    border-color: #E0003C;
    /* Hover: background #BC1340 */
}
```

#### Links

```css
a {
    color: #E0003C;
    /* All states maintain same color */
}
```

#### Cards

```css
.card {
    border-radius: 1rem;
    border-color: #E0003C;
}

.card-header, .card-footer {
    background-color: #BC1340;
    border-color: #E0003C;
}
```

#### Text Utilities

```css
.text-muted {
    color: #8C8C8C;
}
```

## 🧩 Bootstrap Components Used

### Layout Components
- `.container` - Fixed-width container (max-width at 992px)
- `.container-fluid` - Full-width container
- `.container-lg` - Responsive container (992px breakpoint)
- `.row` - Flex row wrapper for columns
- `.col-*` - Grid columns (e.g., `.col-12`, `.col-sm-4`)

### Content Components
- `.card` - Content container
  - `.card-header` - Top section
  - `.card-body` - Main content
  - `.card-footer` - Bottom section
  - `.card-img-top` - Responsive image
  - `.card-title` - Heading
  - `.card-text` - Paragraph

### Interactive Components
- `.modal` - Dialog overlay
  - `.modal-dialog` - Dialog container
  - `.modal-dialog-centered` - Vertical centering
  - `.modal-content` - Content wrapper
  - `.modal-header` - Header with title/close
  - `.modal-body` - Main content area
- `.nav` - Navigation wrapper
  - `.nav-tabs` - Tab style navigation
  - `.nav-item` - Individual tab
  - `.nav-link` - Tab link
- `.collapse` - Collapsible content
- `.btn` - Button base class
  - `.btn-primary` - Primary button
  - `.btn-danger` - Danger button
  - `.btn-outline-primary` - Outlined button

### Form Components
- `.form-group` - Form field wrapper
- `.form-control` - Input styling
- `.col-form-label` - Label alignment in grid

## 📱 Responsive Breakpoints

| Breakpoint | Size | Usage |
|------------|------|-------|
| **xs** | <576px | Mobile (default) |
| **sm** | ≥576px | Small tablets |
| **md** | ≥768px | Tablets |
| **lg** | ≥992px | Desktops |
| **xl** | ≥1200px | Large desktops |

### Responsive Patterns Used

```html
<!-- Stack on mobile, 3 columns on tablet+ -->
<div class="col-12 col-sm-4">...</div>

<!-- Hide on mobile, show on tablet+ -->
<h1 class="d-none d-md-block">Big title</h1>

<!-- Full width on mobile, constrained on desktop -->
<div class="container-fluid container-md">...</div>

<!-- Different offsets per breakpoint -->
<div class="col-md-2 offset-md-2">...</div>
```

## 🚀 Usage

### 1. Clone or Download

```bash
git clone <repository-url>
cd Bootstrap
```

### 2. Open in Browser

Simply open any `.html` file in a modern web browser:

```bash
# Linux/Mac
open 0-index.html

# Windows
start 0-index.html
```

### 3. Explore Components

- **0-index.html**: Start here to see basic setup
- **1-5-index.html**: Pure Bootstrap (no custom CSS)
- **6-index.html**: Custom styled version

### 4. Development

No build process required! Edit HTML files directly and refresh browser.

For custom styling:
1. Edit `6-styles.css`
2. Refresh `6-index.html`

## 🎯 Key Learning Concepts

### Grid System
- **12-column layout**: Divide page into 12 equal parts
- **Responsive columns**: Different sizes per breakpoint
- **Gutters**: Spacing between columns (removed with `.no-gutters`)
- **Offsets**: Push columns to the right (`.offset-*`)

### Utility Classes
- **Spacing**: `.p-*` (padding), `.m-*` (margin)
- **Display**: `.d-*`, `.d-{breakpoint}-{value}`
- **Flexbox**: `.d-flex`, `.justify-content-*`, `.align-items-*`
- **Colors**: `.bg-*`, `.text-*`, `.border-*`
- **Sizing**: `.w-*`, `.h-*`

### Component Patterns
- **Cards**: Container for grouped content
- **Modals**: Overlay dialogs for focused interactions
- **Tabs**: Switch between content sections
- **Collapse**: Show/hide content with animation
- **Forms**: Structured input layouts

### Data Attributes
- `data-toggle="modal"` - Trigger modal
- `data-target="#id"` - Specify target element
- `data-dismiss="modal"` - Close modal
- `data-toggle="tab"` - Switch tabs
- `data-toggle="collapse"` - Toggle collapse

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (with polyfills)

## 📝 Best Practices Demonstrated

1. **Mobile-First Design**: Start with mobile layout, enhance for larger screens
2. **Semantic HTML**: Use appropriate tags (`<button>`, `<form>`, `<nav>`)
3. **Accessibility**: ARIA labels, roles, keyboard navigation
4. **Performance**: CDN-hosted libraries, minimal custom CSS
5. **Maintainability**: Bootstrap classes over custom styles

## 🐛 Common Issues & Solutions

### Modal doesn't open
- ✅ Ensure jQuery is loaded **before** Bootstrap JS
- ✅ Check `data-target` matches modal `id`
- ✅ Verify modal has `.modal` class

### Cards stack on desktop
- ✅ Use `.col-sm-*` instead of `.col-xs-*` (xs doesn't exist in Bootstrap 4)
- ✅ Ensure parent has `.row` class

### Custom colors don't apply
- ✅ Add `!important` to override Bootstrap defaults
- ✅ Link CSS file **after** Bootstrap CSS

### Offset doesn't work
- ✅ Use `.offset-md-*` not `.col-md-offset-*` (Bootstrap 3 syntax)
- ✅ Ensure element has corresponding `.col-*` class

## 👨‍💻 Author

**Holberton School - Web Front-End Curriculum**

Project completed as part of the Bootstrap module.

## 📄 License

This project is part of the Holberton School curriculum.
Educational use only.

---

**Note**: This project emphasizes Bootstrap's utility-first approach. Only `6-index.html` uses custom CSS to demonstrate theming capabilities. All other files use Bootstrap classes exclusively.