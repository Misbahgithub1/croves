import { Container, Row, Col } from 'react-bootstrap';
import styles from './ExperienceSection.module.scss';
import Button from '../Button/Button';
import MasonryCarousel, { type MasonryCarouselItem } from '../MasonryCarousel';
import type { LanguageCode } from '../LanguageSelector/LanguageSelector';
import enTranslations from '../../locales/en.json';
import arTranslations from '../../locales/ar.json';

interface ExperienceSectionProps {
  language: LanguageCode;
}

const translations = {
  en: enTranslations,
  ar: arTranslations,
} as const;

export default function ExperienceSection({ language }: ExperienceSectionProps) {
  const t = translations[language] || translations.en;

  const SLIDER_ITEMS: MasonryCarouselItem[] = [
    { title: t.experienceSection.sliderTitles[0], image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=533&fit=crop', size: 'portrait' },
    { title: t.experienceSection.sliderTitles[1], image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=533&fit=crop', size: 'landscape' },
    { title: t.experienceSection.sliderTitles[2], image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', size: 'square' },
    { title: t.experienceSection.sliderTitles[3], image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop', size: 'landscape' },
    { title: t.experienceSection.sliderTitles[4], image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=533&fit=crop', size: 'landscape' },
    { title: t.experienceSection.sliderTitles[5], image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=533&fit=crop', size: 'portrait' },
  ];
  return (
    <section className={styles.section}>
      <Container>
        <Row className="align-items-center">
          {/* Left Column - 4 units */}
          <Col md={3} className={styles.leftCol}>
            <h2 className={styles.heading}>{t.experienceSection.heading}</h2>
            <Button
              text={t.experienceSection.button}
              showArrow
              isRtl={language === 'ar'}
            />
          </Col>

          {/* Right Column - 8 units */}
          <Col md={9} className={styles.rightCol}>
          
           
            <MasonryCarousel
          items={SLIDER_ITEMS}
          interval={4500}
          ariaLabel="Attractions carousel"
        />
           
          </Col>
        </Row>
      </Container>
    </section>
  );
}
