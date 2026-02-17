import React, { useEffect, useRef } from "react";
import styles from "./MobileSidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../SocialMedia/SocialMedia";
import logoImg from "../../assets/images/logo.png";
import LanguageSelector, { type LanguageCode, type LanguageOption } from "../LanguageSelector/LanguageSelector";
import LoginButton from "../LoginButton/LoginButton";
import enTranslations from "../../locales/en.json";
import arTranslations from "../../locales/ar.json";

type NavKey = "dine" | "visit" | "events" | "map" | "story" | "contact";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { key: NavKey; label: string; href: string }[];
  activeItem: NavKey;
  onNavClick: (key: NavKey) => void;
  language: LanguageCode;
  languages: LanguageOption[];
  onLanguageChange: (code: LanguageCode) => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  isOpen,
  onClose,
  navItems,
  activeItem,
  onNavClick,
  language,
  languages,
  onLanguageChange,
}) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const translations = {
    en: enTranslations,
    ar: arTranslations,
  } as const;

  const t = translations[language] || translations.en;

  // Focus the close button when sidebar opens
  useEffect(() => {
    if (isOpen) {
      closeBtnRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close sidebar on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}
        aria-hidden={!isOpen}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}
        aria-label="Mobile menu"
        aria-modal="true"
        aria-expanded={isOpen}
      >
        <div className={styles.sidebarHeader}>
          <a href="/" className={styles.sidebarLogo} aria-label="Home">
            <img src={logoImg} alt="" />
          </a>
          <button
            ref={closeBtnRef}
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close menu"
          >
            <FontAwesomeIcon icon={faTimes} aria-hidden />
          </button>
        </div>

        <ul className={styles.sidebarNav}>
          {navItems.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                className={`${activeItem === item.key ? styles.active : ""}`}
                onClick={() => onNavClick(item.key)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.sidebarActions}>
          <LanguageSelector
            currentLanguage={language}
            languages={languages}
            onChange={onLanguageChange}
          />
         <LoginButton text={t.loginButton.text} />
          <SocialMedia fontSize="1.25rem" className={styles.footerIcons} />
        </div>
      </aside>
    </> 
  );
};

export default MobileSidebar;
