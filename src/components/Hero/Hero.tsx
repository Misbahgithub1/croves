import React from 'react';
import Carousel from '../Carousel';
import styles from './Hero.module.scss';
import heroImg1 from '../../assets/images/hero1.png';
import Button from '../Button/Button';

interface HeroSlide {
  subTitle: string;
  title: string;
  description: string;
  ctaText: string;
}

const textSlides: HeroSlide[] = [
  {
    subTitle: 'KHAWAJA YANNI',
    title: 'The new\nera of luxury',
    description:
      'Lorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum.',
    ctaText: 'Book reservation now',
  },
  {
    subTitle: 'EXCLUSIVE EXPERIENCES',
    title: 'Unforgettable \n moments',
    description:
      'Discover tailored services designed for those who appreciate\n the finer things in life.',
    ctaText: 'Explore experiences',
  },
  {
    subTitle: 'REFINED ELEGANCE',
    title: 'Where style\nmeets substance',
    description:
      'Every detail is considered.Every moment is intentional.\nThis is elevated living.',
    ctaText: 'Discover more',
  },
  {
    subTitle: 'BESPOKE HOSPITALITY',
    title: 'Your journey\nreimagined',
    description:
      'From arrival to departure, experience service \nthat anticipates your every need. that anticipates your every need. that anticipates \nyour every need. that anticipates your every need.',
    ctaText: 'Begin your stay',
  },
];



const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroBackground} aria-hidden="true">
        <img src={heroImg1} alt="" />
      </div>
      <div className={styles.darkOverlay} />
      <div className={styles.caption}>
        <div className={`container ${styles.captionInner}`}>
          <Carousel
            interval={0}
            fadeDuration={400}
            ariaLabel="Hero"
         
            slideClassName={styles.slideContent}
          >
            {textSlides.map((slide, index) => (
              <React.Fragment key={index}>
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
              </React.Fragment>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Hero;
