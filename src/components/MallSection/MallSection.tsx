import { Container } from 'react-bootstrap';
import styles from './MallSection.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import type { LanguageCode } from '../LanguageSelector/LanguageSelector';
import enTranslations from '../../locales/en.json';
import arTranslations from '../../locales/ar.json';

interface MallSectionProps {
  language: LanguageCode;
}

const translations = {
  en: enTranslations,
  ar: arTranslations,
} as const;

export default function MallSection({ language }: MallSectionProps) {
  const t = translations[language] || translations.en;

  return (
    <section className={styles.section}>
      <Container className="text-center">
        <h2 className={styles.heading}>{t.mallSection.heading}</h2>
        <p className={styles.intro}>{t.mallSection.intro}</p>

        <div className={styles.videoWrapper}>
          <a
            href="https://www.youtube.com/watch?v=jcxFQM6Pglk"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.videoLink}
          >
          </a>
          <div className={styles.videoEmbed}>
            <iframe
              src="https://www.youtube.com/embed/jcxFQM6Pglk"
              title="Mall video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Card */}
        <div className={`${styles.cardWrapper} d-flex justify-content-center mt-4`}>
          <a href="#" className={`card ${styles.card}`}>
            <div className="card-body">
              <p className={styles.price}>{t.mallSection.price}</p>
              <h2 className={styles.cardTitle}>{t.mallSection.cardTitle}</h2>
              <p className={`card-desc ${styles.cardDesc}`}>
                {t.mallSection.cardDescription}
              </p>
            </div>

            <div className={styles.arrow}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
}
