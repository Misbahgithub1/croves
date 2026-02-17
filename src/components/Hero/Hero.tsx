import React from 'react';
import Carousel from '../Carousel';
import styles from './Hero.module.scss';
import heroImg1 from '../../assets/images/hero1.png';
import Button from '../Button/Button';
import type { LanguageCode } from '../LanguageSelector/LanguageSelector';
import enTranslations from '../../locales/en.json';
import arTranslations from '../../locales/ar.json';

interface HeroSlide {
  subTitle: string;
  title: string;
  description: string;
  ctaText: string;
}

interface HeroProps {
  language: LanguageCode;
}

const translations = {
  en: enTranslations,
  ar: arTranslations,
} as const;

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language] || translations.en;
  const textSlides = t.hero.slides as HeroSlide[];
  return (
    <section
      className={`${styles.hero} ${language === 'ar' ? styles.heroRtl : ''}`}
      id="home"
    >
      <div className={styles.heroBackground} aria-hidden="true">
        <img src={heroImg1} alt="" />
      </div>
      <div className={styles.darkOverlay} />
      <div className={styles.caption}>
        <div className={`container ${styles.captionInner}`}>
          <Carousel
            interval={5000}
            fadeDuration={400}
            ariaLabel="Hero"
            isRtl={language === 'ar'}
            slideClassName={styles.slideContent}
          >
            {textSlides.map((slide, index) => (
              <React.Fragment key={index}>
                <p className={styles.subTitle}>{slide.subTitle}</p>
                <h1 className={styles.heading}>
                  {slide.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <br />}
                      {line}
                    </React.Fragment>
                  ))}
                </h1>
                <p className={styles.description}>{slide.description}</p>
                <Button
                  text={slide.ctaText}
                  showArrow={true}
                  isRtl={language === 'ar'}
                />
              </React.Fragment>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Hero;
