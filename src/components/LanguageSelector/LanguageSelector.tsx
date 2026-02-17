import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styles from './LanguageSelector.module.scss';

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
  // Safe: always an array
  const activeLanguage = languages.find(
    (lang) => lang.code === currentLanguage
  );

  return (
    <div className={`dropdown ${styles.languageDropdown}`}>
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
            <span>{activeLanguage.label}</span>
          </>
        ) : (
          <span>Select Language</span> // fallback text
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
                <span>{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
