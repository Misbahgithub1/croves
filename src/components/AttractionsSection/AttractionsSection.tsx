import { useRef, useState, useEffect, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import Button from '../Button/Button';
import styles from './AttractionsSection.module.scss';

export type ImageSize = 'portrait' | 'landscape' | 'square';

export interface AttractionItem {
  title: string;
  image: string;
  size: ImageSize;
}

const SLIDER_ITEMS: AttractionItem[] = [
  { title: 'Little Krazy', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=533&fit=crop', size: 'portrait' },
  { title: 'Hawanim Groves City', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=533&fit=crop', size: 'portrait' },
  { title: 'Picnic Market', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', size: 'landscape' },
  { title: 'Lucawa', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop', size: 'landscape' },
  { title: 'The Grove', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop', size: 'square' },
];

const AUTO_ADVANCE_MS = 4500;

export default function AttractionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const total = SLIDER_ITEMS.length;

  const goToSlide = useCallback((index: number) => {
    const next = (index % total + total) % total;
    setActiveIndex(next);
  }, [total]);

  // Auto-advance (stable interval)
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [total]);

  // Scroll active card into view (centered when possible)
  useEffect(() => {
    const track = trackRef.current;
    const card = cardRefs.current[activeIndex];
    if (!track || !card) return;
    const trackRect = track.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const scrollLeft = track.scrollLeft + (cardRect.left - trackRect.left) - (trackRect.width / 2) + (cardRect.width / 2);
    track.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  }, [activeIndex]);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Book General Access ticket and enjoy the attractions for free
          </h2>
          <Button text="Book General Access Ticket" showArrow />
        </div>

        <div className={styles.carouselWrapper}>
          <div
            ref={trackRef}
            className={styles.track}
            role="region"
            aria-label="Attractions carousel"
            aria-roledescription="carousel"
          >
            {SLIDER_ITEMS.map((item, index) => (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`${styles.card} ${index === activeIndex ? styles.cardActive : ''}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${item.title}, slide ${index + 1} of ${total}`}
              >
                <div className={`${styles.cardImage} ${styles[item.size]}`}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <p className={styles.cardTitle}>{item.title}</p>
              </div>
            ))}
          </div>

          {total > 1 && (
            <div className={styles.indicators} role="tablist" aria-label="Carousel slides">
              {SLIDER_ITEMS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
