import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './Carousel.module.scss';

export interface CarouselProps {
  
  children: React.ReactNode;
 
  interval?: number;
  
  fadeDuration?: number;
  
  ariaLabel?: string;
 
  className?: string;

  slideClassName?: string;
}

const DEFAULT_INTERVAL = 5000;
const DEFAULT_FADE_DURATION = 400;

const Carousel: React.FC<CarouselProps> = ({
  children,
  interval = DEFAULT_INTERVAL,
  fadeDuration = DEFAULT_FADE_DURATION,
  ariaLabel = 'Carousel',
  className = '',
  slideClassName = '',
}) => {
  const slides = React.Children.toArray(children).filter(Boolean);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const transitionRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalSlides = slides.length;
  const currentSlide = totalSlides > 0 ? slides[activeIndex] : null;

  const goToSlide = useCallback(
    (nextIndex: number) => {
      if (totalSlides === 0 || nextIndex === activeIndex) return;
      const index = ((nextIndex % totalSlides) + totalSlides) % totalSlides;
      if (transitionRef.current) clearTimeout(transitionRef.current);
      setIsFading(true);
      transitionRef.current = window.setTimeout(() => {
        transitionRef.current = null;
        setActiveIndex(index);
        setIsFading(false);
      }, fadeDuration);
    },
    [activeIndex, totalSlides, fadeDuration]
  );

  const goToNext = useCallback(() => {
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  useEffect(() => {
    if (transitionRef.current) clearTimeout(transitionRef.current);
  }, []);

  useEffect(() => {
    if (interval <= 0 || totalSlides <= 1) return;
    const id = setInterval(goToNext, interval);
    return () => clearInterval(id);
  }, [interval, totalSlides, goToNext]);

  if (totalSlides === 0) return null;

  return (
    <div
      className={`${styles.root} ${className}`.trim()}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div
        className={`${styles.slidePane} ${isFading ? styles.fadeOut : styles.fadeIn} ${slideClassName}`.trim()}
        aria-live="polite"
        aria-atomic="true"
      >
        {currentSlide}
      </div>
      {totalSlides > 1 && (
        <div
          className={styles.indicators}
          role="tablist"
          aria-label={`${ariaLabel} slides`}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`${ariaLabel} slide ${index + 1}`}
              className={`${styles.indicator} ${index === activeIndex ? styles.indicatorActive : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
