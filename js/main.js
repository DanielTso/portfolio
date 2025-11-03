/**
 * Portfolio Website - Main JavaScript
 * Daniel Tso - Construction Project Manager
 */

// ==================== DOM ELEMENTS ====================
const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollToTopBtn = document.getElementById('scrollToTop');

// ==================== MOBILE MENU TOGGLE ====================
if (mobileMenuToggle && navMenu) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');

    // Prevent body scroll when mobile menu is open
    if (navMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Close mobile menu when clicking a nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
      mobileMenuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// ==================== SMOOTH SCROLLING ====================
// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      const navHeight = navbar ? navbar.offsetHeight : 70;
      const targetPosition = target.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ==================== NAVBAR SCROLL EFFECT ====================
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  // Add shadow to navbar on scroll
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

// ==================== ACTIVE SECTION HIGHLIGHTING ====================
// Highlight active section in navigation
const sections = document.querySelectorAll('section[id]');

function highlightActiveSection() {
  const scrollY = window.pageYOffset;
  const navHeight = navbar ? navbar.offsetHeight : 70;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - navHeight - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    }
  });
}

// Throttle function for performance
function throttle(func, wait) {
  let waiting = false;
  return function() {
    if (!waiting) {
      func.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, wait);
    }
  };
}

window.addEventListener('scroll', throttle(highlightActiveSection, 100));
// Initial call
highlightActiveSection();

// ==================== SCROLL TO TOP BUTTON ====================
if (scrollToTopBtn) {
  // Show/hide scroll to top button
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });

  // Scroll to top when clicking the button
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ==================== SCROLL ANIMATIONS ====================
// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  // Add fade-in animation to cards and sections
  const animatedElements = document.querySelectorAll(
    '.project-card, .skill-category, .stat-card, .timeline-item, .education-item, .reference-item'
  );

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
});

// ==================== FORM VALIDATION (if contact form is added) ====================
// This is a placeholder for future contact form functionality
function validateForm(formElement) {
  const inputs = formElement.querySelectorAll('input[required], textarea[required]');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });

  return isValid;
}

// ==================== UTILITY FUNCTIONS ====================

// Get current year for copyright
function updateCopyrightYear() {
  const yearElement = document.querySelector('.footer-copyright');
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = `© ${currentYear} Daniel Tso. All rights reserved.`;
  }
}

// Call on page load
updateCopyrightYear();

// Prevent default behavior for external links (open in new tab)
document.querySelectorAll('a[href^="http"]').forEach(link => {
  if (!link.href.includes(window.location.hostname)) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
});

// ==================== PERFORMANCE OPTIMIZATIONS ====================

// Preload critical resources
window.addEventListener('load', () => {
  // Mark page as loaded
  document.body.classList.add('loaded');

  // Log performance metrics (for development)
  if (window.performance && window.performance.timing) {
    const loadTime = window.performance.timing.domContentLoadedEventEnd -
                     window.performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
  }
});

// ==================== ACCESSIBILITY ENHANCEMENTS ====================

// Trap focus within mobile menu when open
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    }

    // Close menu on Escape
    if (e.key === 'Escape') {
      mobileMenuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
      mobileMenuToggle.focus();
    }
  });
}

if (navMenu) {
  trapFocus(navMenu);
}

// ==================== LAZY LOADING IMAGES ====================
// Lazy load images when they come into view
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ==================== PRINT STYLES ====================
// Optimize page for printing
window.addEventListener('beforeprint', () => {
  // Close mobile menu if open
  if (navMenu && navMenu.classList.contains('active')) {
    mobileMenuToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ==================== CONSOLE MESSAGE ====================
console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║  Daniel Tso - Construction Project Manager               ║
║  Portfolio Website v1.0                                   ║
║                                                           ║
║  33 Years of Construction Excellence                      ║
║  Field Leadership + Modern Tech Coordination              ║
║                                                           ║
║  Contact: danieltso@mail.com | (480) 228-0765            ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`);
