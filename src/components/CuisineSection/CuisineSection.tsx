import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './CuisineSection.module.scss';
import type { LanguageCode } from '../LanguageSelector/LanguageSelector';
import enTranslations from '../../locales/en.json';
import arTranslations from '../../locales/ar.json';

export interface CuisineCardItem {
  name: string;
  subText: string;
  image: string;
  href?: string;
}

interface CuisineSectionProps {
  language: LanguageCode;
}

const translations = {
  en: enTranslations,
  ar: arTranslations,
} as const;

export default function CuisineSection({ language }: CuisineSectionProps) {
  const t = translations[language] || translations.en;

  const CARDS: CuisineCardItem[] = [
    {
      name: t.cuisineSection.cards[0].name,
      subText: t.cuisineSection.cards[0].subText,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    },
    {
      name: t.cuisineSection.cards[1].name,
      subText: t.cuisineSection.cards[1].subText,
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop',
    },
    {
      name: t.cuisineSection.cards[2].name,
      subText: t.cuisineSection.cards[2].subText,
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop',
    },
    {
      name: t.cuisineSection.cards[3].name,
      subText: t.cuisineSection.cards[3].subText,
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop',
    },
  ];
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.heading}>{t.cuisineSection.heading}</h2>
          <p className={styles.description}>{t.cuisineSection.description}</p>
        </div>

        <Row className="g-4">
          {CARDS.map((card, index) => (
            <Col key={index} xs={12} md={6}>
              <article className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={card.image} alt={card.name} loading="lazy" />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardName}>{card.name}</h3>
                  <div className={styles.cardFooter}>
                    <span className={styles.badge}>{card.subText}</span>
                    <button
                      type="button"
                      className={styles.arrowButton}
                      aria-label={`${t.cuisineSection.viewAriaPrefix} ${card.name}`}
                    >
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
