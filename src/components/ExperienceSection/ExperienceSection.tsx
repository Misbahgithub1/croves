import { Container, Row, Col } from 'react-bootstrap';
import styles from './ExperienceSection.module.scss';
import Button from '../Button/Button';

import MasonryCarousel, { type MasonryCarouselItem } from '../MasonryCarousel';

const SLIDER_ITEMS: MasonryCarouselItem[] = [
    { title: 'Resturants', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=533&fit=crop', size: 'portrait' },
    { title: 'Experiences', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=533&fit=crop', size: 'landscape' },
    { title: 'Picnic Market', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', size: 'square' },
    { title: 'Events', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop', size: 'landscape' },
    { title: 'Experiences', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=533&fit=crop', size: 'landscape' },
    { title: 'Resturants', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=533&fit=crop', size: 'portrait' },
   
  ];
export default function ExperienceSection() {
  return (
    <section className={styles.section}>
      <Container>
        <Row className="align-items-center">
          {/* Left Column - 4 units */}
          <Col md={3} className={styles.leftCol}>
            <h2 className={styles.heading}>Curate your experience as you like</h2>
            <Button text="Book Tickets" showArrow />
          </Col>

          {/* Right Column - 8 units */}
          <Col md={9} className={styles.rightCol}>
          
           
            <MasonryCarousel
          items={SLIDER_ITEMS}
          interval={4500}
          ariaLabel="Attractions carousel"
        />
           
          </Col>
        </Row>
      </Container>
    </section>
  );
}
