import { Container, Row, Col } from 'react-bootstrap';
import styles from './MapSection.module.scss';
import Button from '../Button/Button';
import type { LanguageCode } from '../LanguageSelector/LanguageSelector';
import enTranslations from '../../locales/en.json';
import arTranslations from '../../locales/ar.json';

interface MapSectionProps {
  language: LanguageCode;
}

const translations = {
  en: enTranslations,
  ar: arTranslations,
} as const;

export default function MapSection({ language }: MapSectionProps) {
  const t = translations[language] || translations.en;

  return (
    <section className={styles.section}>
      <Container>
        <Row className="align-items-center gy-4 gy-md-0 gx-md-5">
          {/* Left Column - 4 units */}
          <Col md={6}>
            <div className={styles.mapWrapper}>
              <iframe
                title={t.mapSection.mapTitle}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.123456!2d90.123456!3d23.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabcdef123456!2sGroves!5e0!3m2!1sen!2s!4v1671234567890"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>

          {/* Right Column - 8 units */}
          <Col md={6}>
            <p className={styles.subTitle}>{t.mapSection.subTitle}</p>
            <h2 className={styles.heading}>{t.mapSection.heading}</h2>
            <p className={styles.description}>
              {t.mapSection.description.split('\n').map((line: string, index: number) => (
                <span key={index}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
            <Button
              text={t.mapSection.button}
              showArrow
              isRtl={language === 'ar'}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
