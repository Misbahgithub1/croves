import React, { useState } from 'react';
import styles from './TopBar.module.scss';
import logoImg from '../../assets/images/logo.png';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTiktok, faInstagram, faSnapchat } from '@fortawesome/free-brands-svg-icons';

import type {
  LanguageCode,
  LanguageOption,
} from '../LanguageSelector/LanguageSelector';

import enFlag from '../../assets/images/en.png';
import arFlag from '../../assets/images/en.png';

const TopBar: React.FC = () => {
  const [language, setLanguage] = useState<LanguageCode>('en');

  const languages: LanguageOption[] = [
    { code: 'en', label: 'English', flag: enFlag },
    { code: 'ar', label: 'العربية', flag: arFlag },
  ];

  return (
    <div className={styles.topBar}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-md-4 d-flex align-items-center">
            <a href="/" className={styles.brand}>
              <img src={logoImg} alt="Logo" className={styles.logo} />
            </a>
          </div>
          <div className="col-6 col-md-8 d-flex justify-content-end">
            <div className="d-flex align-items-center gap-3">
            <div className={styles.socialGroup}>
              <a href="#" aria-label="TikTok">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a href="#" aria-label="Instagram" className={styles.filledIcon}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" aria-label="X">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" aria-label="Snapchat" className={styles.filledIcon}>
                <FontAwesomeIcon icon={faSnapchat} />
              </a>
            </div>

            <button type="button" className={styles.loginButton}>
              Log in
            </button>

            <LanguageSelector
              currentLanguage={language}
              languages={languages}
              onChange={setLanguage}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;