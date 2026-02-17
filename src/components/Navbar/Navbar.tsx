import React, { useState, useEffect, useCallback } from "react";
import styles from "./Navbar.module.scss";
import TopBar from "./TopBar";

import type { LanguageCode, LanguageOption } from "../LanguageSelector/LanguageSelector";
import enFlag from "../../assets/images/en.png";
import arFlag from "../../assets/images/ar.png";
import MobileSidebar from "./MobileSidebar";
import enTranslations from "../../locales/en.json";
import arTranslations from "../../locales/ar.json";

type NavKey = "dine" | "visit" | "events" | "map" | "story" | "contact";

const languages: LanguageOption[] = [
  { code: "en", label: "English", flag: enFlag },
  { code: "ar", label: "العربية", flag: arFlag },
];

const translations = {
  en: enTranslations,
  ar: arTranslations,
} as const;

interface NavbarProps {
  language: LanguageCode;
  onLanguageChange: (code: LanguageCode) => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, onLanguageChange }) => {
  const [activeItem, setActiveItem] = useState<NavKey>("dine");
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const t = translations[language] || translations.en;

  const navItems: { key: NavKey; label: string; href: string }[] = [
    { key: "dine", label: t.navbar.navItems.dine, href: "#dine" },
    { key: "visit", label: t.navbar.navItems.visit, href: "#visit" },
    { key: "events", label: t.navbar.navItems.events, href: "#events" },
    { key: "map", label: t.navbar.navItems.map, href: "#map" },
    { key: "story", label: t.navbar.navItems.story, href: "#story" },
    { key: "contact", label: t.navbar.navItems.contact, href: "#contact" },
  ];

  return (
    <>
      <div className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <TopBar
          onMenuClick={openSidebar}
          menuExpanded={sidebarOpen}
          language={language}
          onLanguageChange={onLanguageChange}
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
          onLanguageChange={onLanguageChange}
      />
    </>
  );
};

export default Navbar;
