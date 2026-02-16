import React from 'react';
import styles from './Hero.module.scss';
import heroImg1 from '../../assets/images/hero1.png';

import { Carousel, Button } from 'react-bootstrap';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="home">
      <Carousel controls={false} indicators={true} fade interval={5000} className={styles.carousel}>
        {[heroImg1, heroImg1, heroImg1].map((img, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={img}
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption className={styles.caption}>
              <h1>Discover Amazing Experiences</h1>
              <p>Explore our services and get inspired by our creative solutions.</p>
              <Button variant="primary" size="lg">
                Get Started
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Hero;
