import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './Hero.module.scss';
import heroImg1 from '../../assets/images/hero1.png';
import Button from '../Button/Button';

interface HeroSlide {
  subTitle: string;
  title: string;
  description: string;
  ctaText: string;
}

const INTERVAL_MS = 5000;
const FADE_DURATION_MS = 400;

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const transitionRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const textSlides: HeroSlide[] = [
    {
      subTitle: 'KHAWAJA YANNI',
      title: 'The new \n era of luxury',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
      ctaText: 'Book reservation now',
    },
    {
      subTitle: 'EXCLUSIVE EXPERIENCES',
      title: 'unforgettable moments',
      description: 'Discover tailored services designed for those who appreciate the finer things in life.',
      ctaText: 'Explore experiences',
    },
    {
      subTitle: 'REFINED ELEGANCE',
      title: 'Where style \n meets substance',
      description: 'Every detail is considered. Every moment is intentional. This is elevated living.',
      ctaText: 'Discover more',
    },
    {
      subTitle: 'BESPOKE HOSPITALITY',
      title: 'Your journey \n reimagined',
      description: 'From arrival to departure, experience service that anticipates your every need.',
      ctaText: 'Begin your stay',
    },
  ];

  const totalSlides = textSlides.length;

  const goToSlide = useCallback((nextIndex: number) => {
    if (nextIndex === activeIndex) return;
    if (transitionRef.current) clearTimeout(transitionRef.current);
    setIsFading(true);
    transitionRef.current = window.setTimeout(() => {
      transitionRef.current = null;
      setActiveIndex(nextIndex);
      setIsFading(false);
    }, FADE_DURATION_MS);
  }, [activeIndex]);

  useEffect(() => () => {
    if (transitionRef.current) clearTimeout(transitionRef.current);
  }, []);

  const goToNext = useCallback(() => {
    goToSlide((activeIndex + 1) % totalSlides);
  }, [activeIndex, totalSlides, goToSlide]);

  useEffect(() => {
    const id = setInterval(() => {
      goToNext();
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [goToNext]);

  const slide = textSlides[activeIndex];

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroBackground} aria-hidden="true">
        <img src={heroImg1} alt="" />
      </div>
      <div className={styles.darkOverlay} />
      <div className={styles.caption}>
        <div className={`container ${styles.captionInner}`}>
          <div className={styles.textCarousel}>
            <div
              className={`${styles.slideContent} ${isFading ? styles.fadeOut : styles.fadeIn}`}
            >
              <p className={styles.subTitle}>{slide.subTitle}</p>
              <h1>
                {slide.title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
              </h1>
              <p className={styles.description}>{slide.description}</p>
              <Button text={slide.ctaText} showArrow={true} />
            </div>
            <div className={styles.indicators} role="tablist" aria-label="Hero slides">
              {textSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Slide ${index + 1}`}
                  className={`${styles.indicator} ${index === activeIndex ? styles.indicatorActive : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
