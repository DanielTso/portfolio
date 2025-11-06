# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **static portfolio website** for Daniel Tso, a Construction Project Manager with 33 years of experience. The site is built with vanilla HTML5, CSS3, and JavaScript (no build process, no frameworks) and deployed to GitHub Pages.

**Key Project Characteristics:**
- Single-page application with smooth scrolling between sections
- Mobile-first responsive design
- Fully static (no backend, no database)
- Owner has basic HTML/CSS knowledge - keep modifications simple and well-commented

## Development Commands

### Local Development
```bash
# No build process required - simply open in browser
open index.html
# or
firefox index.html
# or
google-chrome index.html
```

### Testing
```bash
# No automated tests - manual testing required
# Test on multiple browsers and screen sizes manually
```

### Deployment
```bash
# Commit and push to GitHub - automatic deployment via GitHub Pages
git add .
git commit -m "Update content"
git push origin main

# Site auto-deploys to GitHub Pages from main branch
```

## Architecture Overview

### File Structure
- **index.html** - Single HTML file containing ALL page content (hero, about, experience, skills, projects, education, contact, footer)
- **css/variables.css** - CSS custom properties (colors, spacing, typography scales)
- **css/reset.css** - Browser normalization and base styles
- **css/styles.css** - All component styles (1300+ lines, organized by section)
- **js/main.js** - Interactive functionality (navigation, scroll effects, animations)
- **assets/documents/** - Resume PDF and other downloadable files
- **assets/images/** - Photos and graphics (currently using icon placeholders)

### Design System
**Color Palette** (from variables.css):
- Primary: `#1a5490` (Deep Blue - trust, professionalism)
- Secondary: `#2c3e50` (Dark Gray-Blue - strength)
- Accent: `#e67e22` (Construction Orange - energy, action)

**Typography**:
- Headings: 'Montserrat' (Google Fonts)
- Body: 'Open Sans' (Google Fonts)
- Responsive scale from 0.75rem to 3rem

**Breakpoints**:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

### Key JavaScript Features (js/main.js)
- **Mobile menu toggle** - Hamburger menu for mobile navigation
- **Smooth scrolling** - Animated scroll between sections on anchor clicks
- **Active section highlighting** - Updates nav link state based on scroll position
- **Scroll-to-top button** - Appears after scrolling 500px down
- **Intersection Observer animations** - Fade-in effects for cards and sections
- **Focus trap** - Accessibility enhancement for mobile menu keyboard navigation

### Critical Content References

**Years of Experience**: The site mentions "33 years" throughout (hero, about, footer). This is a key metric that may need updating annually.

**Contact Information**:
- Email: danieltso@mail.com
- Phone: (480) 228-0765
- Location: Tempe, Arizona

**Resume Download**: `/assets/documents/Daniel_Tso_Resume.pdf` - ensure this file exists and is up-to-date

## Common Development Tasks

### Updating Work Experience
1. Edit `index.html` in the `<section id="experience">` area
2. Add new `.timeline-item` div with class structure matching existing entries
3. Include: job title, company, dates, location, responsibilities (as `<ul>` list)
4. Add relevant tags using `.tag` spans

### Updating Skills
1. Locate `<section id="skills">` in `index.html`
2. Skills are organized in `.skill-category` divs by category
3. Each skill is an `<li>` with FontAwesome check icon + text
4. Current categories: Project Management, Technical Coordination, Field Leadership, Safety & Compliance, Industry Expertise, Technical Skills, **AI Integration & Emerging Tech** (NEW - 2025)

### Adding New Projects
1. Find `<section id="projects">` in `index.html`
2. Duplicate a `.project-card` div structure
3. Update: project title, client, year, description, highlights (3-5 bullet points), tags
4. Icon placeholder: `<i class="fas fa-[icon-name]"></i>` (from FontAwesome)
5. Consider adding actual project image to replace icon placeholder

### Changing Colors
1. Edit `css/variables.css` `:root` custom properties
2. Key variables: `--primary-color`, `--secondary-color`, `--accent-color`
3. All components use these variables - changes cascade automatically

### Modifying Navigation
1. Navigation links in `index.html` under `<nav class="navbar">`
2. Must match section IDs: `href="#about"` → `<section id="about">`
3. Mobile menu handled by `js/main.js` - toggles `.active` class

## Key Differentiators (Updated 2025)

### "What I Bring to Your Team" Section
Located in the About section after the stat cards, this highlights Daniel's unique value propositions:
- Complete project lifecycle perspective (Trades → Design → Field → Management)
- Crisis management & turnaround experience
- **Modern technology integration including AI** (NEW)
- Proven leadership at scale (110+ personnel, $60M+ projects)
- Continuous learning mindset with AI training

**Location**: `index.html` - `.what-i-bring` class within `<section id="about">`
**Styling**: `css/styles.css` - "What I Bring Section" styles starting around line 533

### AI Integration Focus (NEW - 2025)
Daniel is actively integrating AI into construction workflows. This is a **major differentiator** and should be prominently featured:

**AI Skills & Applications:**
- AI-powered email and proposal writing
- Automated RFI generation and management
- AI document summarization and analysis
- Agent AI development and deployment
- Prompt engineering for construction workflows

**Training Completed:**
- AI Engineering & Integration
- AI Agent Development
- Prompt Engineering Certification

**Where it appears:**
- About section: "What I Bring" list item
- Skills section: "AI Integration & Emerging Tech" category (7th skill category)
- Education section: First 3 items in Certifications & Training
- Resume (resume.html): Professional Summary, Skills, and Certifications

## Important Constraints

### NO Build Process
- Do not introduce webpack, npm scripts, or build tools
- All CSS/JS should work directly in browser
- Owner needs to edit files directly without compilation

### Accessibility Requirements
- Maintain WCAG 2.1 Level AA compliance
- All interactive elements need keyboard support
- Color contrast ratios: minimum 4.5:1 for text
- ARIA labels on icon-only buttons

### Performance Targets
- Page load time: < 2 seconds on 3G
- Lighthouse scores: 90+ (Performance, Accessibility, Best Practices)
- Optimize images before adding (compress, use appropriate formats)

### Content Sensitivity
- Do not mention specific confidential project details
- Company names and dates are already approved for public display
- Professional references section includes real phone numbers - handle with care

## Git Workflow

### Branch Strategy
- **`main` branch** = Production - Every commit to `main` automatically deploys to GitHub Pages
- **No feature branches required** for this simple static site - commit directly to `main`
- If working on major changes, optionally create a feature branch and merge via PR

### Making Changes
```bash
# 1. Make your edits to HTML/CSS/JS files
# 2. Test locally by opening index.html in browser
# 3. Commit changes
git add .
git commit -m "Descriptive message about changes"

# 4. Push to main (triggers auto-deployment)
git push origin main
```

### Session Notes
- Development decisions and changes are tracked in `.claude/session-notes/`
- Session notes are committed to git for historical reference
- They do not affect the live website - purely for development documentation

## GitHub Pages Deployment

The site deploys automatically from the `main` branch to GitHub Pages. No special configuration needed.

**Deployment checklist**:
1. Test all changes locally by opening `index.html` in browser
2. Verify responsive design (Chrome DevTools device emulation)
3. Check all internal links (`href="#section-id"`)
4. Ensure external links have `target="_blank" rel="noopener noreferrer"`
5. Commit and push to `main` branch
6. Wait 1-2 minutes for GitHub Pages to rebuild
7. Visit live site to verify changes deployed correctly

**Important**: Since every push to `main` goes live immediately, always test thoroughly before pushing!

## Browser Compatibility

Target browsers:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Testing notes**:
- Smooth scroll behavior may not work in older browsers (graceful degradation)
- Intersection Observer has good modern browser support
- CSS Grid and Flexbox are safe to use (IE11 not supported)

## Troubleshooting

### Images Not Displaying
- Check file paths are relative: `assets/images/filename.ext`
- Verify images exist in repository
- Check for typos in file names (case-sensitive on Linux/Mac)

### Smooth Scrolling Not Working
- Verify section IDs match navigation hrefs exactly
- Check that `js/main.js` is loaded (console errors?)
- Ensure nav height calculation accounts for fixed navbar

### Mobile Menu Not Opening
- Check that `mobileMenuToggle` and `navMenu` IDs exist in HTML
- Verify JavaScript loaded without errors (open browser console)
- Ensure CSS classes `.active` are defined in `css/styles.css`

### Resume Download Not Working
- Verify PDF exists at `assets/documents/Daniel_Tso_Resume.pdf`
- Check file is committed to git repository
- Ensure download attribute is on anchor: `<a href="path" download>`

## Future Enhancement Ideas

From the planning documents (PRD.md, IMPLEMENTATION_PLAN.md):
- Custom domain setup
- Google Analytics integration
- Contact form with backend (Formspree, Netlify Forms)
- Testimonials section
- Blog for industry insights
- Dark mode toggle
- Print stylesheet for resume section
