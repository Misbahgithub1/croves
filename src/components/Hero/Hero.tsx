import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './Hero.module.scss';
import heroImg1 from '../../assets/images/hero1.png';
import Button from '../Button/Button';

const Hero: React.FC = () => {
  const carouselImages = [heroImg1, heroImg1, heroImg1];

  return (
    <section className={styles.hero} id="home">
      <Carousel 
        controls={false} 
        indicators={true} 
        fade 
        interval={5000} 
        className={styles.carousel}
      >
        {carouselImages.map((img, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={img}
              alt={`Hero slide ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className={styles.darkOverlay}></div>
      <div className={styles.caption}>
        <p className={styles.subTitle}>KHAWAJA YANNI</p>
        <h1>The new <br /> era of luxury</h1>
        <p className={styles.description}>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum.</p>
      <Button text="Book reservation now" showArrow={true} />
      </div>
    </section>
  );
};

export default Hero;
