# Accessibility — README

Project: holbertonschool-web_front_end/accessibility

## Overview
Practical examples and exercises that demonstrate accessible front‑end patterns: semantic HTML, keyboard navigation, proper ARIA use, color contrast, and assistive technology compatibility.

## Goals
- Build accessible UI components and pages.
- Teach testing and debugging with accessibility tools.
- Apply progressive enhancement and inclusive design.

## Contents
- examples/ — self-contained example pages
- tests/ — automated accessibility checks
- docs/ — guidelines and reference materials

## Key Practices
- Use semantic HTML elements (header, nav, main, footer, button, form controls).
- Ensure keyboard operability and visible focus indicators.
- Provide meaningful alt text and labels.
- Use ARIA only when native semantics are insufficient.
- Maintain sufficient color contrast (WCAG AA/AAA where required).
- Implement skip links and landmark roles for easy navigation.
- Avoid using color as the only means of conveying information.

## Testing and Tools
Recommended tools:
- axe DevTools / axe-core
- Lighthouse (Chrome)
- pa11y
- NVDA (Windows), VoiceOver (macOS/iOS), TalkBack (Android)
- Color contrast checkers (WebAIM Contrast Checker)

Example commands (assuming Node tooling):
- npm run test:accessibility — run automated checks
- npm run serve — start a local dev server for manual testing

## How to use
1. Open examples/ in a browser or run the local server.
2. Test keyboard navigation and screen reader announcements.
3. Run automated checks and fix reported issues.
4. Validate contrast and label correctness.

## Contribution
- Follow semantic-first approach in pull requests.
- Add tests for new examples and document accessibility considerations.
- Cite test results and assistive technology behavior when submitting fixes.

## References
- WCAG 2.1 (W3C)
- ARIA Authoring Practices
- WebAIM resources

License: Check repository root for licensing information.