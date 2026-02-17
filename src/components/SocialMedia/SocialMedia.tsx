import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTiktok, faInstagram, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import styles from './SocialMedia.module.scss';

interface SocialMediaProps {
  fontSize?: string; // Accept font size as prop, e.g., "24px", "1.5rem"
}

const SocialMedia: React.FC<SocialMediaProps> = ({ fontSize = '1.25rem' }) => {
  return (
    <div className={styles.SocialMedia}>
      <a href="#" aria-label="TikTok">
        <FontAwesomeIcon icon={faTiktok} style={{ fontSize }} />
      </a>
      <a href="#" aria-label="Instagram" className={styles.filledIcon}>
        <FontAwesomeIcon icon={faInstagram} style={{ fontSize }} />
      </a>
      <a href="#" aria-label="X">
        <FontAwesomeIcon icon={faTwitter} style={{ fontSize }} />
      </a>
      <a href="#" aria-label="Snapchat" className={styles.filledIcon}>
        <FontAwesomeIcon icon={faSnapchat} style={{ fontSize }} />
      </a>
    </div>
  );
};

export default SocialMedia;
