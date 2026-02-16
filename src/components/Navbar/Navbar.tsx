import React, { useState } from 'react';
import styles from './Navbar.module.scss';

type NavKey =
  | 'home'
  | 'services'
  | 'about'
  | 'pricing'
  | 'blog'
  | 'contact';

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<NavKey>('home');

  const navItems: { key: NavKey; label: string; href: string }[] = [
    { key: 'home', label: 'Home', href: '#home' },
    { key: 'services', label: 'Services', href: '#services' },
    { key: 'about', label: 'About', href: '#about' },
    { key: 'pricing', label: 'Pricing', href: '#pricing' },
    { key: 'blog', label: 'Blog', href: '#blog' },
    { key: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-white ${styles.navbar}`}
    >
      <div className="container">
        <a className={`navbar-brand ${styles.brand}`} href="#home">
          <span className={styles.brandAccent} />
          <span className={styles.brandText}>BrandName</span>
        </a>
        <button
          className={`navbar-toggler ${styles.toggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className={`navbar-nav ms-auto ${styles.navList}`}>
            {navItems.map((item) => (
              <li className="nav-item" key={item.key}>
                <a
                  href={item.href}
                  className={`nav-link ${styles.navLink} ${
                    activeItem === item.key ? styles.navLinkActive : ''
                  }`}
                  aria-current={activeItem === item.key ? 'page' : undefined}
                  onClick={() => setActiveItem(item.key)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.navCtaWrapper}>
            <a href="#contact" className={styles.navCtaButton}>
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

