/* Mel Schlewitz Portfolio - Main Stylesheet */

/* ================================== */
/* CSS Variables - Preferred Colors */
/* ================================== */
:root {
  /* Color Palette */
  --emerald-green: #00A878;
  --bright-cyan: #00BFFF;
  --burgundy: #6B1F5C;
  --navy: #003D5C;
  --charcoal: #2C2C2C;
  --light-gray: #F5F5F5;
  --medium-gray: #888888;
  --white: #FFFFFF;

  /* Typography */
  --font-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --font-heading: 'Arial', 'Helvetica Neue', sans-serif;

  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 3rem;
  --spacing-xl: 4rem;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.15);

  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
}

/* ================================== */
/* Reset and Base Styles */
/* ================================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-primary);
  color: var(--charcoal);
  line-height: 1.6;
  background-color: var(--white);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: var(--spacing-sm);
}

h1 { font-size: 3rem; }
h2 { font-size: 2.5rem; }
h3 { font-size: 2rem; }
h4 { font-size: 1.5rem; }
h5 { font-size: 1.25rem; }
h6 { font-size: 1rem; }

p {
  margin-bottom: var(--spacing-sm);
}

a {
  color: var(--bright-cyan);
  text-decoration: none;
  transition: var(--transition-normal);
}

a:hover {
  color: var(--emerald-green);
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* ================================== */
/* Header and Navigation */
/* ================================== */
.header {
  background-color: var(--white);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: var(--spacing-sm) 0;
  transition: box-shadow var(--transition-normal);
}

.header.scrolled {
  box-shadow: var(--shadow-md);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--navy);
  font-family: var(--font-heading);
}

.nav {
  display: flex;
  gap: var(--spacing-md);
}

.nav-link {
  color: var(--charcoal);
  font-weight: 500;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  transition: var(--transition-fast);
}

.nav-link:hover,
.nav-link.active {
  background-color: var(--light-gray);
  color: var(--emerald-green);
}

.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--navy);
}

/* ================================== */
/* Hero Section */
/* ================================== */
.hero {
  background: linear-gradient(135deg, var(--navy) 0%, var(--burgundy) 100%);
  color: var(--white);
  padding: var(--spacing-xl) var(--spacing-md);
  text-align: center;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: var(--spacing-md);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-tagline {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-lg);
  opacity: 0.95;
}

.hero-cta {
  display: flex;
  gap: var(--spacing-sm);
  justify-content: center;
  flex-wrap: wrap;
}

/* ================================== */
/* Buttons */
/* ================================== */
.btn {
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: var(--transition-normal);
  border: none;
  font-size: 1rem;
}

.btn-primary {
  background-color: var(--emerald-green);
  color: var(--white);
}

.btn-primary:hover {
  background-color: #008f66;
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background-color: transparent;
  color: var(--white);
  border: 2px solid var(--white);
}

.btn-secondary:hover {
  background-color: var(--white);
  color: var(--navy);
  transform: translateY(-2px);
}

/* ================================== */
/* Container and Sections */
/* ================================== */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.section {
  padding: var(--spacing-xl) 0;
}

.section-title {
  text-align: center;
  margin-bottom: var(--spacing-lg);
  color: var(--navy);
}

.section-subtitle {
  text-align: center;
  color: var(--medium-gray);
  font-size: 1.2rem;
  margin-bottom: var(--spacing-lg);
}

/* ================================== */
/* Stats Section */
/* ================================== */
.stats-section {
  background-color: var(--light-gray);
  padding: var(--spacing-lg) 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
  text-align: center;
}

.stat-card {
  padding: var(--spacing-md);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--emerald-green);
  display: block;
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  color: var(--navy);
  font-weight: 600;
  font-size: 1.1rem;
}

/* ================================== */
/* Cards */
/* ================================== */
.card {
  background-color: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-md);
  transition: var(--transition-normal);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
  color: var(--emerald-green);
}

.card-title {
  color: var(--navy);
  margin-bottom: var(--spacing-sm);
}

.card-description {
  color: var(--medium-gray);
  flex-grow: 1;
}

.card-link {
  color: var(--bright-cyan);
  font-weight: 600;
  margin-top: var(--spacing-sm);
  display: inline-block;
}

/* ================================== */
/* Grid Layouts */
/* ================================== */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-md);
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-md);
}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
}

/* ================================== */
/* Value Proposition */
/* ================================== */
.value-prop {
  background-color: var(--white);
  padding: var(--spacing-xl) 0;
}

.value-prop-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.value-prop-text {
  font-size: 1.2rem;
  color: var(--charcoal);
  line-height: 1.8;
}

/* ================================== */
/* Credentials */
/* ================================== */
.credentials {
  background-color: var(--light-gray);
}

.credentials-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-md);
}

.credential-badge {
  background-color: var(--white);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  font-weight: 600;
  color: var(--navy);
}

/* ================================== */
/* CTA Section */
/* ================================== */
.cta-section {
  background: linear-gradient(135deg, var(--emerald-green) 0%, var(--bright-cyan) 100%);
  color: var(--white);
  padding: var(--spacing-xl) 0;
  text-align: center;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
}

.cta-text {
  font-size: 1.2rem;
  margin-bottom: var(--spacing-lg);
  opacity: 0.95;
}

/* ================================== */
/* Footer */
/* ================================== */
.footer {
  background-color: var(--navy);
  color: var(--white);
  padding: var(--spacing-lg) 0 var(--spacing-md);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  text-align: center;
}

.footer-contact {
  margin-bottom: var(--spacing-md);
}

.footer-email {
  color: var(--bright-cyan);
  font-size: 1.2rem;
  font-weight: 600;
}

.footer-social {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.social-link {
  color: var(--white);
  font-size: 1.5rem;
  transition: var(--transition-fast);
}

.social-link:hover {
  color: var(--emerald-green);
  transform: translateY(-2px);
}

.footer-copyright {
  color: var(--medium-gray);
  font-size: 0.9rem;
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* ================================== */
/* Responsive Design */
/* ================================== */
@media (max-width: 768px) {
  h1 { font-size: 2rem; }
  h2 { font-size: 1.75rem; }
  h3 { font-size: 1.5rem; }

  .hero h1 {
    font-size: 2.5rem;
  }

  .hero-tagline {
    font-size: 1.2rem;
  }

  .nav {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--white);
    box-shadow: var(--shadow-md);
    padding: var(--spacing-sm);
  }

  .nav.active {
    display: flex;
  }

  .mobile-menu-toggle {
    display: block;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: 1fr;
  }

  .section {
    padding: var(--spacing-md) 0;
  }

  .hero {
    padding: var(--spacing-lg) var(--spacing-sm);
    min-height: 60vh;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .hero-cta {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}

/* ================================== */
/* Hero Enhancements */
/* ================================== */
.hero-eyebrow {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: var(--spacing-sm);
  opacity: 0.9;
  font-weight: 500;
}

.text-gradient {
  background: linear-gradient(135deg, var(--emerald-green) 0%, var(--bright-cyan) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ================================== */
/* Value Pillars */
/* ================================== */
.value-pillars {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
}

.pillar {
  text-align: center;
  padding: var(--spacing-md);
}

.pillar-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: var(--spacing-sm);
}

.pillar h4 {
  color: var(--navy);
  margin-bottom: var(--spacing-xs);
}

.pillar p {
  color: var(--medium-gray);
  font-size: 0.95rem;
  margin-bottom: 0;
}

/* ================================== */
/* Project Cards */
/* ================================== */
.project-card {
  position: relative;
}

.project-tag {
  display: inline-block;
  background: linear-gradient(135deg, var(--emerald-green), var(--bright-cyan));
  color: var(--white);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: var(--spacing-sm);
}

.project-metrics {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: var(--spacing-sm);
  border-top: 1px solid var(--light-gray);
}

.metric {
  font-size: 0.85rem;
  color: var(--medium-gray);
}

.metric strong {
  color: var(--emerald-green);
}

.section-cta {
  text-align: center;
  margin-top: var(--spacing-lg);
}

/* ================================== */
/* Skills Section */
/* ================================== */
.skills-section {
  background-color: var(--white);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
}

.skill-category {
  background-color: var(--light-gray);
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  transition: var(--transition-normal);
}

.skill-category:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.skill-category-title {
  color: var(--navy);
  font-size: 1.1rem;
  margin-bottom: var(--spacing-sm);
  padding-bottom: var(--spacing-xs);
  border-bottom: 2px solid var(--emerald-green);
}

.skill-list {
  list-style: none;
}

.skill-list li {
  padding: 0.4rem 0;
  color: var(--charcoal);
  font-size: 0.95rem;
  position: relative;
  padding-left: 1rem;
}

.skill-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background-color: var(--emerald-green);
  border-radius: 50%;
}

/* ================================== */
/* Credentials Enhanced */
/* ================================== */
.credential-badge {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.credential-icon {
  font-size: 1.5rem;
}

.credential-text {
  font-weight: 600;
  color: var(--navy);
}

/* ================================== */
/* CTA Buttons */
/* ================================== */
.cta-buttons {
  display: flex;
  gap: var(--spacing-sm);
  justify-content: center;
  flex-wrap: wrap;
}

.btn-white {
  background-color: var(--white);
  color: var(--navy);
}

.btn-white:hover {
  background-color: var(--light-gray);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-outline-white {
  background-color: transparent;
  color: var(--white);
  border: 2px solid var(--white);
}

.btn-outline-white:hover {
  background-color: var(--white);
  color: var(--navy);
  transform: translateY(-2px);
}

/* ================================== */
/* Footer Enhanced */
/* ================================== */
.footer-brand {
  margin-bottom: var(--spacing-md);
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--white);
  display: block;
}

.footer-tagline {
  color: var(--medium-gray);
  margin-top: var(--spacing-xs);
  margin-bottom: 0;
}

.footer-location {
  color: var(--medium-gray);
  margin-top: var(--spacing-xs);
  margin-bottom: 0;
}

.social-link svg {
  transition: var(--transition-fast);
}

.social-link:hover svg {
  transform: translateY(-2px);
}

/* ================================== */
/* Animations */
/* ================================== */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger animation for grid items */
.stats-grid .animate-on-scroll:nth-child(1) { transition-delay: 0s; }
.stats-grid .animate-on-scroll:nth-child(2) { transition-delay: 0.1s; }
.stats-grid .animate-on-scroll:nth-child(3) { transition-delay: 0.2s; }
.stats-grid .animate-on-scroll:nth-child(4) { transition-delay: 0.3s; }

.grid-3 .animate-on-scroll:nth-child(1) { transition-delay: 0s; }
.grid-3 .animate-on-scroll:nth-child(2) { transition-delay: 0.15s; }
.grid-3 .animate-on-scroll:nth-child(3) { transition-delay: 0.3s; }

.skills-grid .animate-on-scroll:nth-child(1) { transition-delay: 0s; }
.skills-grid .animate-on-scroll:nth-child(2) { transition-delay: 0.1s; }
.skills-grid .animate-on-scroll:nth-child(3) { transition-delay: 0.2s; }
.skills-grid .animate-on-scroll:nth-child(4) { transition-delay: 0.3s; }

.credentials-list .animate-on-scroll:nth-child(1) { transition-delay: 0s; }
.credentials-list .animate-on-scroll:nth-child(2) { transition-delay: 0.1s; }
.credentials-list .animate-on-scroll:nth-child(3) { transition-delay: 0.2s; }
.credentials-list .animate-on-scroll:nth-child(4) { transition-delay: 0.3s; }

/* ================================== */
/* Featured Projects Section */
/* ================================== */
.featured-projects {
  background-color: var(--light-gray);
}

/* ================================== */
/* Page Headers (for inner pages) */
/* ================================== */
.page-header {
  background: linear-gradient(135deg, var(--navy) 0%, var(--burgundy) 100%);
  color: var(--white);
  padding: var(--spacing-xl) var(--spacing-md);
  text-align: center;
}

.page-header h1 {
  margin-bottom: var(--spacing-sm);
}

.page-header p {
  opacity: 0.9;
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
}

/* ================================== */
/* Case Study Cards */
/* ================================== */
.case-study-card {
  background-color: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: var(--transition-normal);
}

.case-study-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.case-study-content {
  padding: var(--spacing-md);
}

.case-study-tag {
  display: inline-block;
  background: linear-gradient(135deg, var(--emerald-green), var(--bright-cyan));
  color: var(--white);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: var(--spacing-sm);
}

.case-study-title {
  color: var(--navy);
  margin-bottom: var(--spacing-sm);
}

.case-study-summary {
  color: var(--medium-gray);
  margin-bottom: var(--spacing-md);
}

.case-study-metrics {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
  padding-top: var(--spacing-sm);
  border-top: 1px solid var(--light-gray);
}

.case-study-metric {
  text-align: center;
}

.case-study-metric-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--emerald-green);
}

.case-study-metric-label {
  font-size: 0.8rem;
  color: var(--medium-gray);
}

/* ================================== */
/* About Page Styles */
/* ================================== */
.about-intro {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-lg);
  align-items: start;
}

.about-image-placeholder {
  background: linear-gradient(135deg, var(--navy) 0%, var(--burgundy) 100%);
  border-radius: var(--radius-lg);
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 4rem;
}

.about-text h2 {
  color: var(--navy);
  margin-bottom: var(--spacing-md);
}

.about-text p {
  color: var(--charcoal);
  line-height: 1.8;
}

.timeline {
  position: relative;
  padding-left: var(--spacing-lg);
}

.timeline::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, var(--emerald-green), var(--bright-cyan));
  border-radius: 3px;
}

.timeline-item {
  position: relative;
  padding-bottom: var(--spacing-lg);
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: calc(-1 * var(--spacing-lg) - 6px);
  top: 0;
  width: 15px;
  height: 15px;
  background-color: var(--emerald-green);
  border-radius: 50%;
  border: 3px solid var(--white);
  box-shadow: var(--shadow-sm);
}

.timeline-date {
  color: var(--emerald-green);
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
}

.timeline-title {
  color: var(--navy);
  margin-bottom: var(--spacing-xs);
}

.timeline-company {
  color: var(--medium-gray);
  font-style: italic;
  margin-bottom: var(--spacing-sm);
}

.timeline-description {
  color: var(--charcoal);
}

/* ================================== */
/* Contact Page Styles */
/* ================================== */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
}

.contact-info-card {
  background-color: var(--light-gray);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
}

.contact-info-card h2 {
  color: var(--navy);
  margin-bottom: var(--spacing-md);
}

.contact-method {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  padding: var(--spacing-sm);
  background-color: var(--white);
  border-radius: var(--radius-md);
  transition: var(--transition-normal);
}

.contact-method:hover {
  transform: translateX(5px);
  box-shadow: var(--shadow-sm);
}

.contact-method-icon {
  font-size: 1.5rem;
  color: var(--emerald-green);
}

.contact-method-text {
  color: var(--charcoal);
}

.contact-method-text a {
  color: var(--navy);
  font-weight: 600;
}

.contact-form-card {
  background-color: var(--white);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.contact-form-card h2 {
  color: var(--navy);
  margin-bottom: var(--spacing-md);
}

.form-group {
  margin-bottom: var(--spacing-md);
}

.form-group label {
  display: block;
  color: var(--navy);
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: var(--spacing-sm);
  border: 2px solid var(--light-gray);
  border-radius: var(--radius-md);
  font-family: var(--font-primary);
  font-size: 1rem;
  transition: var(--transition-fast);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--emerald-green);
}

.form-group textarea {
  min-height: 150px;
  resize: vertical;
}

/* ================================== */
/* Responsive Additions */
/* ================================== */
@media (max-width: 768px) {
  .about-intro {
    grid-template-columns: 1fr;
  }

  .about-image-placeholder {
    max-width: 200px;
    margin: 0 auto;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .value-pillars {
    grid-template-columns: 1fr;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .cta-buttons .btn {
    width: 100%;
  }
}

/* ================================== */
/* Case Study Styles */
/* ================================== */
.case-study {
  padding: var(--spacing-lg) 0;
}

.case-study-header {
  margin-bottom: var(--spacing-lg);
}

.case-study-header h2 {
  color: var(--navy);
  font-size: 2rem;
  margin-top: var(--spacing-sm);
}

.case-study-body {
  max-width: 900px;
}

.case-study-section {
  margin-bottom: var(--spacing-lg);
}

.case-study-section h3 {
  color: var(--navy);
  font-size: 1.3rem;
  margin-bottom: var(--spacing-sm);
  padding-bottom: var(--spacing-xs);
  border-bottom: 2px solid var(--emerald-green);
  display: inline-block;
}

.case-study-section p {
  color: var(--charcoal);
  line-height: 1.8;
}

.approach-list {
  list-style: none;
  padding: 0;
}

.approach-list li {
  padding: var(--spacing-sm) 0;
  padding-left: var(--spacing-md);
  position: relative;
  color: var(--charcoal);
  line-height: 1.7;
}

.approach-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 1.2rem;
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, var(--emerald-green), var(--bright-cyan));
  border-radius: 50%;
}

.approach-list li strong {
  color: var(--navy);
}

/* Results Grid */
.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.result-card {
  background: linear-gradient(135deg, var(--navy) 0%, var(--burgundy) 100%);
  color: var(--white);
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  text-align: center;
  transition: var(--transition-normal);
}

.result-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

.result-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--spacing-xs);
}

.result-label {
  font-size: 0.9rem;
  opacity: 0.9;
}

/* Skills Tags */
.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.skill-tag {
  background-color: var(--light-gray);
  color: var(--navy);
  padding: 0.4rem 0.8rem;
  border-radius: var(--radius-md);
  font-size: 0.85rem;
  font-weight: 500;
  transition: var(--transition-fast);
}

.skill-tag:hover {
  background-color: var(--emerald-green);
  color: var(--white);
}

/* Case Study Divider */
.case-study-divider {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--medium-gray), transparent);
  margin: var(--spacing-lg) 0;
}

/* ================================== */
/* Case Study Preview Images */
/* ================================== */
.case-study-preview {
  margin-bottom: var(--spacing-lg);
}

.preview-link {
  display: block;
  text-decoration: none;
  max-width: 600px;
}

.preview-image {
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: var(--transition-normal);
  box-shadow: var(--shadow-md);
}

.preview-link:hover .preview-image {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.preview-placeholder-text {
  color: var(--white);
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  padding: var(--spacing-md);
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.preview-play-icon {
  position: absolute;
  font-size: 3rem;
  color: var(--white);
  opacity: 0.9;
  text-shadow: 0 2px 8px rgba(0,0,0,0.4);
  transition: var(--transition-fast);
}

.preview-link:hover .preview-play-icon {
  transform: scale(1.1);
  opacity: 1;
}

.preview-caption {
  display: block;
  margin-top: var(--spacing-sm);
  color: var(--emerald-green);
  font-weight: 600;
  font-size: 0.95rem;
}

.preview-link:hover .preview-caption {
  text-decoration: underline;
}

/* Case Study Links */
.case-study-links {
  margin-top: var(--spacing-lg);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--light-gray);
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

@media (max-width: 480px) {
  .case-study-links {
    flex-direction: column;
  }

  .case-study-links .btn {
    width: 100%;
    text-align: center;
  }

  .preview-placeholder-text {
    font-size: 1.2rem;
  }
}

/* ================================== */
/* Process Section (for About page) */
/* ================================== */
.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
}

.process-step {
  background-color: var(--white);
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  text-align: center;
  transition: var(--transition-normal);
  position: relative;
}

.process-step:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.process-number {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, var(--emerald-green), var(--bright-cyan));
  color: var(--white);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
}

.process-step h4 {
  color: var(--navy);
  margin-top: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
}

.process-step p {
  color: var(--medium-gray);
  font-size: 0.95rem;
  margin-bottom: 0;
}

/* ================================== */
/* Quick Facts */
/* ================================== */
.quick-facts {
  background-color: var(--light-gray);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  margin-top: var(--spacing-lg);
}

.quick-facts h3 {
  color: var(--navy);
  margin-bottom: var(--spacing-md);
  text-align: center;
}

.facts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
}

.fact-item {
  text-align: center;
}

.fact-icon {
  font-size: 2rem;
  margin-bottom: var(--spacing-xs);
  display: block;
}

.fact-text {
  color: var(--charcoal);
  font-weight: 500;
}

/* ================================== */
/* Responsive Case Studies */
/* ================================== */
@media (max-width: 768px) {
  .case-study-header h2 {
    font-size: 1.5rem;
  }

  .results-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .result-number {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .results-grid {
    grid-template-columns: 1fr;
  }
}

/* ================================== */
/* Additional Contact Page Styles */
/* ================================== */
.contact-methods {
  margin: var(--spacing-lg) 0;
}

.availability-note {
  background: linear-gradient(135deg, var(--emerald-green), var(--bright-cyan));
  color: var(--white);
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  margin-top: var(--spacing-md);
}

.availability-note h3 {
  margin-bottom: var(--spacing-xs);
  font-size: 1.1rem;
}

.availability-note p {
  margin-bottom: 0;
  opacity: 0.95;
  font-size: 0.95rem;
}

.btn-full {
  width: 100%;
}

/* Form focus states */
.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--emerald-green);
  box-shadow: 0 0 0 3px rgba(0, 168, 120, 0.1);
}

/* Form placeholder styling */
.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--medium-gray);
  opacity: 0.7;
}

/* ================================== */
/* Number Counter Animation */
/* ================================== */
.stat-number {
  display: inline-block;
}

/* ================================== */
/* Page Transition */
/* ================================== */
body {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* ================================== */
/* Print Styles */
/* ================================== */
@media print {
  .header,
  .footer,
  .cta-section,
  .mobile-menu-toggle {
    display: none;
  }

  .hero {
    min-height: auto;
    padding: var(--spacing-md);
  }

  body {
    font-size: 12pt;
  }

  a {
    text-decoration: underline;
  }

  .card,
  .case-study {
    break-inside: avoid;
  }
}
