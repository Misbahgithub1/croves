import { useRef, useState, useEffect, useCallback } from 'react';
import styles from './MasonryCarousel.module.scss';

export type ImageSize = 'portrait' | 'landscape' | 'square';

export interface MasonryCarouselItem {
  title: string;
  image: string;
  size: ImageSize;
}

export interface MasonryCarouselProps {

  items: MasonryCarouselItem[];

  interval?: number;

  showIndicators?: boolean;

  ariaLabel?: string;

  className?: string;
  
}

const DEFAULT_INTERVAL = 4500;

export default function MasonryCarousel({
  items,
  interval = DEFAULT_INTERVAL,
  showIndicators = false,
  ariaLabel = 'Carousel',
  className = '',
}: MasonryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const total = items.length;

  const goToSlide = useCallback((index: number) => {
    if (total === 0) return;
    const next = (index % total + total) % total;
    setActiveIndex(next);
  }, [total]);

  useEffect(() => {
    if (interval <= 0 || total <= 1) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, interval);
    return () => clearInterval(id);
  }, [interval, total]);

  useEffect(() => {
    const track = trackRef.current;
    const card = cardRefs.current[activeIndex];
    if (!track || !card) return;
    const trackRect = track.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const scrollLeft =
      track.scrollLeft +
      (cardRect.left - trackRect.left) -
      trackRect.width / 2 +
      cardRect.width / 2;
    track.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  }, [activeIndex]);

  if (items.length === 0) return null;

  return (
    <div className={`${styles.wrapper} ${className}`.trim()}>
      <div
        ref={trackRef}
        className={styles.track}
        role="region"
        aria-label={ariaLabel}
        aria-roledescription="carousel"
      >
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
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

      {showIndicators && total > 1 && (
        <div className={styles.indicators} role="tablist" aria-label="Carousel slides">
          {items.map((_, index) => (
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
  );
}
