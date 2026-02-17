import { Container } from 'react-bootstrap';
import Button from '../Button/Button';
import MasonryCarousel, { type MasonryCarouselItem } from '../MasonryCarousel';
import styles from './AttractionsSection.module.scss';
import type { LanguageCode } from '../LanguageSelector/LanguageSelector';
import enTranslations from '../../locales/en.json';
import arTranslations from '../../locales/ar.json';

interface AttractionsSectionProps {
  language: LanguageCode;
}

const translations = {
  en: enTranslations,
  ar: arTranslations,
} as const;

export default function AttractionsSection({ language }: AttractionsSectionProps) {
  const t = translations[language] || translations.en;

  const SLIDER_ITEMS: MasonryCarouselItem[] = [
    { title: t.attractionsSection.sliderTitles[0], image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=533&fit=crop', size: 'portrait' },
    { title: t.attractionsSection.sliderTitles[1], image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=533&fit=crop', size: 'portrait' },
    { title: t.attractionsSection.sliderTitles[2], image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', size: 'landscape' },
    { title: t.attractionsSection.sliderTitles[3], image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop', size: 'landscape' },
    { title: t.attractionsSection.sliderTitles[4], image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop', size: 'square' },
  ];
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            {t.attractionsSection.heading.split('\n').map((line: string, index: number) => (
              <span key={index}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
          <Button
            text={t.attractionsSection.button}
            showArrow
            isRtl={language === 'ar'}
          />
        </div>

        <MasonryCarousel
          items={SLIDER_ITEMS}
          interval={4500}
          ariaLabel="Attractions carousel"
        />
      </Container>
    </section>
  );
}
