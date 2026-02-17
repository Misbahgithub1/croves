import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './TopBar.module.scss';
import logoImg from '../../assets/images/logo.png';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

import type {
  LanguageCode,
  LanguageOption,
} from '../LanguageSelector/LanguageSelector';

import enFlag from '../../assets/images/en.png';
import arFlag from '../../assets/images/en.png';
import SocialMedia from '../SocialMedia/SocialMedia';
import LoginButton from '../LoginButton/LoginButton';

const languages: LanguageOption[] = [
  { code: 'en', label: 'English', flag: enFlag },
  { code: 'ar', label: 'العربية', flag: arFlag },
];

interface TopBarProps {
  onMenuClick?: () => void;
  menuExpanded?: boolean;
  language?: LanguageCode;
  onLanguageChange?: (code: LanguageCode) => void;
}

const TopBar: React.FC<TopBarProps> = ({
  onMenuClick,
  menuExpanded = false,
  language: controlledLanguage,
  onLanguageChange,
}) => {
  const [internalLanguage, setInternalLanguage] = useState<LanguageCode>('en');
  const language = onLanguageChange ? (controlledLanguage ?? internalLanguage) : internalLanguage;
  const setLanguage = onLanguageChange ?? setInternalLanguage;

  return (
    <div className={styles.topBar}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-lg-4 d-flex align-items-center">
            <a href="/" className={styles.brand} aria-label="Home">
              <img src={logoImg} alt="" className={styles.logo} />
            </a>
          </div>
          <div className="col-6 col-lg-8 d-flex justify-content-end align-items-center">
            <div className={`d-none d-lg-flex align-items-center gap-3 ${styles.desktopActions}`}>
              <SocialMedia fontSize="1.2rem" />
               <LoginButton/>
              <LanguageSelector
                currentLanguage={language}
                languages={languages}
                onChange={setLanguage}
              />
            </div>
            <button
              type="button"
              className={`${styles.hamburger} d-lg-none`}
              onClick={onMenuClick}
              aria-label={menuExpanded ? "Close menu" : "Open menu"}
              aria-expanded={menuExpanded}
            >
              <FontAwesomeIcon icon={faBars} aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;