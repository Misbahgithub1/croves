import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import TopBar from '../TopBar/TopBar';

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
   <>

   <TopBar/>
    <nav
      className={`navbar navbar-expand-lg ${styles.navbar}`}
    >
      <div className="container">
       
   
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className={`navbar-nav ${styles.navList}`}>
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
    
        </div>
      </div>
    </nav>
   </>
  );
};

export default Navbar;

