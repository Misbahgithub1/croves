import { Container, Row, Col } from 'react-bootstrap';
import styles from './MapSection.module.scss';
import Button from '../Button/Button';


export default function MapSection() {
    return (
        <section className={styles.section}>
            <Container>
                <Row className="align-items-center gy-4 gy-md-0 gx-md-5">
                    {/* Left Column - 4 units */}
                    <Col md={6}>
                    <div className={styles.mapWrapper}>
              <iframe
                title="Interactive Groves Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.123456!2d90.123456!3d23.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabcdef123456!2sGroves!5e0!3m2!1sen!2s!4v1671234567890"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
                    </Col>

                    {/* Right Column - 8 units */}
                    <Col md={6}>
                        <p className={styles.subTitle}>EXPERIENCE THE GROVES</p>
                        <h2 className={styles.heading}>Find your place</h2>
                        <p className={styles.description}>
                            Our interactive map will show you the way to the <br/> shops and restaurants that you want to see.
                        </p>
                        <Button text="Open the Map" showArrow />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
