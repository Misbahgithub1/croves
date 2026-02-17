import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styles from './LanguageSelector.module.scss';
import './LanguageSelector.rtl.scss';
import enTranslations from '../../locales/en.json';
import arTranslations from '../../locales/ar.json';

export type LanguageCode = 'en' | 'ar';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  flag: string; // flag image path
}

interface LanguageSelectorProps {
  currentLanguage: LanguageCode;
  languages?: LanguageOption[]; 
  onChange: (code: LanguageCode) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  languages = [], // default to empty array
  onChange,
}) => {
  const isRTL = currentLanguage === 'ar';

  const translations = {
    en: enTranslations,
    ar: arTranslations,
  } as const;

  const t = translations[currentLanguage] || translations.en;

  // Safe: always an array
  const activeLanguage = languages.find(
    (lang) => lang.code === currentLanguage
  );

  return (
    <div
      className={`dropdown ${styles.languageDropdown} ${
        isRTL ? 'language-selector-rtl' : ''
      }`}
    >
      <button
        className={`btn ${styles.languageButton}`}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
      
        <FontAwesomeIcon icon={faAngleDown} className={styles.arrow} />

        {activeLanguage ? (
          <>
            <img
              src={activeLanguage.flag}
              alt={activeLanguage.label}
              className={styles.flag}
            />
            <span>
              {activeLanguage.code === 'en'
                ? t.languageSelector.english
                : t.languageSelector.arabic}
            </span>
          </>
        ) : (
          <span>{t.languageSelector.placeholder}</span>
        )}
      </button>

      {languages.length > 0 && (
        <ul className={`dropdown-menu dropdown-menu-end ${styles.menu}`}>
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                className={`dropdown-item ${styles.menuItem}`}
                onClick={() => onChange(lang.code)}
              >
                <img
                  src={lang.flag}
                  alt={lang.label}
                  className={styles.flag}
                />
                <span>
                  {lang.code === 'en'
                    ? t.languageSelector.english
                    : t.languageSelector.arabic}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
