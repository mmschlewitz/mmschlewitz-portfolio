// ================================
// Mobile Menu Toggle
// ================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const nav = document.getElementById('nav');

if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuToggle.setAttribute('aria-expanded',
            nav.classList.contains('active') ? 'true' : 'false'
        );
    });

    // Close mobile menu when clicking on a link
    const navItems = nav.querySelectorAll('.nav-link');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header-content')) {
            nav.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// ================================
// Smooth Scrolling for Anchor Links
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        // Handle # only (scroll to top)
        if (targetId === '#') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            const header = document.querySelector('.header');
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// Sticky Header Shadow on Scroll
// ================================
const header = document.querySelector('.header');

function handleStickyHeader() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Throttle scroll event for better performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(() => {
        handleStickyHeader();
    });
});

// Initialize on page load
handleStickyHeader();

// ================================
// Scroll Animations (Intersection Observer)
// ================================
const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            scrollObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

animateOnScrollElements.forEach(el => {
    scrollObserver.observe(el);
});

// ================================
// Contact Form Handler
// ================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        // For now, simulate sending (replace with actual form service)
        try {
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            console.log('Form submitted:', data);

            // Show success message
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.backgroundColor = '#00A878';

            // Reset form after delay
            setTimeout(() => {
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.backgroundColor = '';
            }, 2000);

        } catch (error) {
            console.error('Form submission error:', error);
            submitBtn.textContent = 'Error - Try Again';
            submitBtn.style.backgroundColor = '#dc3545';

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.backgroundColor = '';
            }, 2000);
        }
    });
}

// ================================
// Animated Number Counter
// ================================
function animateValue(element, start, end, duration, suffix = '') {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.textContent = current + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            element.textContent = end + suffix;
        }
    };
    window.requestAnimationFrame(step);
}

// Observe stat numbers for counter animation
const statNumbers = document.querySelectorAll('.stat-number');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const text = el.textContent.trim();

            // Parse the number and suffix
            const match = text.match(/^([\d.]+)(.*)$/);
            if (match) {
                const num = parseFloat(match[1]);
                const suffix = match[2];

                if (!isNaN(num)) {
                    animateValue(el, 0, num, 1500, suffix);
                }
            }

            counterObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(el => {
    counterObserver.observe(el);
});

// ================================
// Handle Window Resize
// ================================
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768 && nav) {
            nav.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    }, 250);
});

// ================================
// Page Load Enhancements
// ================================
window.addEventListener('load', () => {
    // Add loaded class to body for any CSS transitions
    document.body.classList.add('loaded');

    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    });
});

// ================================
// Keyboard Navigation Enhancement
// ================================
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape' && nav && nav.classList.contains('active')) {
        nav.classList.remove('active');
        if (mobileMenuToggle) {
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            mobileMenuToggle.focus();
        }
    }
});
