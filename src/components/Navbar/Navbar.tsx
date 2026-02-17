import React, { useState, useEffect, useCallback } from "react";
import styles from "./Navbar.module.scss";
import TopBar from "./TopBar";

import type { LanguageCode, LanguageOption } from "../LanguageSelector/LanguageSelector";
import enFlag from "../../assets/images/en.png";
import arFlag from "../../assets/images/ar.png";
import MobileSidebar from "./MobileSidebar";

type NavKey = "dine" | "visit" | "events" | "map" | "story" | "contact";

const navItems: { key: NavKey; label: string; href: string }[] = [
  { key: "dine", label: "Dine With Us", href: "#dine" },
  { key: "visit", label: "Plan Your Visit", href: "#visit" },
  { key: "events", label: "Events", href: "#events" },
  { key: "map", label: "View Groves Map", href: "#map" },
  { key: "story", label: "Our Story", href: "#story" },
  { key: "contact", label: "Contact Us", href: "#contact" },
];

const languages: LanguageOption[] = [
  { code: "en", label: "English", flag: enFlag },
  { code: "ar", label: "العربية", flag: arFlag },
];

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<NavKey>("dine");
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [language, setLanguage] = useState<LanguageCode>("en");

  const closeSidebar = useCallback(() => setSidebarOpen(false), []);
  const openSidebar = useCallback(() => setSidebarOpen(true), []);


const handleNavClick = useCallback((key: NavKey) => {
  if (navItems.some(item => item.key === key)) {
    setActiveItem(key);
    setSidebarOpen(false);
  }
}, []);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <TopBar
          onMenuClick={openSidebar}
          menuExpanded={sidebarOpen}
          language={language}
          onLanguageChange={(code: LanguageCode) => setLanguage(code)}
        />
        {/* Desktop menu */}
        <div className={`${styles.customBorder} d-none d-lg-block`}>
          <nav className={`${styles.navSection} container`} aria-label="Main navigation">
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className={activeItem === item.key ? styles.navLinkActive : ""}
                    onClick={() => handleNavClick(item.key)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      
      <MobileSidebar
        isOpen={sidebarOpen}
        onClose={closeSidebar}
        navItems={navItems}
        activeItem={activeItem}
        onNavClick={handleNavClick}
        language={language}
        languages={languages}
        onLanguageChange={setLanguage}
      />
    </>
  );
};

export default Navbar;
