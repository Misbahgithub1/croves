import React from 'react';
import styles from './Hero.module.scss';
import heroImg from '../../assets/images/hero.png';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="home">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <div className={styles.content}>
              <span className={styles.eyebrow}>Premium digital experience</span>
              <h1 className={styles.title}>
                Elevate your brand with a modern web presence
              </h1>
              <p className={styles.subtitle}>
                Build trust, drive engagement, and convert visitors into loyal
                customers with a crafted interface that performs beautifully on
                every device.
              </p>
              <div className={styles.actions}>
                <a href="#contact" className={styles.primaryCta}>
                  Book a consultation
                </a>
                <a href="#services" className={styles.secondaryCta}>
                  View services
                </a>
              </div>
              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaNumber}>120+</span>
                  <span className={styles.metaLabel}>Completed projects</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaNumber}>5.0</span>
                  <span className={styles.metaLabel}>Client rating</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              id="heroCarousel"
              className={`carousel slide ${styles.carousel}`}
              data-bs-ride="carousel"
            >
              <div className={`carousel-indicators ${styles.indicators}`}>
                <button
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                />
              </div>
              <div className={`carousel-inner ${styles.carouselInner}`}>
                <div className={`carousel-item active ${styles.carouselItem}`}>
                  <div className={styles.card}>
                    <div className={styles.cardTag}>Analytics</div>
                    <h3 className={styles.cardTitle}>
                      Real-time performance insights
                    </h3>
                    <p className={styles.cardText}>
                      Monitor traffic, engagement, and conversions to refine
                      your strategy.
                    </p>
                    <div className={styles.cardMetricRow}>
                      <div className={styles.cardMetric}>
                        <span className={styles.cardMetricLabel}>
                          Conversion rate
                        </span>
                        <span className={styles.cardMetricValue}>+32%</span>
                      </div>
                      <div className={styles.cardMetric}>
                        <span className={styles.cardMetricLabel}>
                          Bounce rate
                        </span>
                        <span className={styles.cardMetricValue}>−18%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`carousel-item ${styles.carouselItem}`}>
                  <div className={styles.card}>
                    <div className={styles.cardTag}>Experience</div>
                    <h3 className={styles.cardTitle}>
                      Crafted for every screen size
                    </h3>
                    <p className={styles.cardText}>
                      Adaptive layouts and refined typography deliver a premium
                      feel on mobile and desktop.
                    </p>
                    <div className={styles.cardMetricRow}>
                      <div className={styles.cardMetric}>
                        <span className={styles.cardMetricLabel}>
                          Mobile visits
                        </span>
                        <span className={styles.cardMetricValue}>72%</span>
                      </div>
                      <div className={styles.cardMetric}>
                        <span className={styles.cardMetricLabel}>
                          Time on page
                        </span>
                        <span className={styles.cardMetricValue}>+25%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`carousel-item ${styles.carouselItem}`}>
                  <div className={styles.card}>
                    <div className={styles.cardTag}>Support</div>
                    <h3 className={styles.cardTitle}>
                      Ongoing partnership and care
                    </h3>
                    <p className={styles.cardText}>
                      From launch to optimization, stay supported with proactive
                      improvements.
                    </p>
                    <div className={styles.cardMetricRow}>
                      <div className={styles.cardMetric}>
                        <span className={styles.cardMetricLabel}>
                          Response time
                        </span>
                        <span className={styles.cardMetricValue}>1h</span>
                      </div>
                      <div className={styles.cardMetric}>
                        <span className={styles.cardMetricLabel}>
                          Retention
                        </span>
                        <span className={styles.cardMetricValue}>93%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className={`carousel-control-prev ${styles.carouselControl}`}
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className={`carousel-control-next ${styles.carouselControl}`}
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row d-lg-none mt-4">
          <div className="col-12">
            <div className={styles.heroImageWrapper}>
              <img src={heroImg} alt="Hero visual" className={styles.heroImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

