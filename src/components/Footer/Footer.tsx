import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.scss';
import logoImg from '../../assets/images/logo.png';
// import SocialMedia from '../SocialMedia/SocialMedia';
import googleImg from '../../assets/images/google.png';
import appImg from '../../assets/images/app.png';
import SocialMedia from '../SocialMedia/SocialMedia';
const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                {/* First Row - 2 Columns */}
                <Row className="mb-4">
                    <Col md={8}>
                        <h1 className={styles.heading}>Join us for an <br /> unforgettable experience</h1>

                    </Col>
                    <Col md={4}>
                        <h5 className={styles.subHeading}>DOWNLOAD THE GROVES APP</h5>
                        <ul className={styles.downloadList}>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src={googleImg} alt="Google Play Store" />
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src={appImg} alt="Apple App Store" />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                {/* Second Row - 3 Columns */}
                <Row className="mb-4">
                    <Col md={4}>
                        <h6 className={styles.subHeading}>LOCATION</h6>
                        <ul className={styles.links}>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h6 className={styles.subHeading}>WORKING HOURS</h6>
                        <ul className={styles.links}>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h6 className={styles.subHeading}>GUEST SERVICE CALL</h6>
                        <ul className={styles.links}>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </Col>

                </Row>

                {/* Third Row - 2 Columns */}
                <Row className="pt-3">
                    <Col md={8}>
                        <div className={styles.LinksRow}>

                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src={logoImg} alt="Apple App Store" className={styles.appLogo} />
                            </a>

                            <div className={styles.footerBottomRow}>


                                <a href="#">Terms & Conditions</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">&copy; 2023 The Groves for Entertainment</a>
                            </div>



                        </div>
                    </Col>



                    <Col md={4}>
                        <div className={styles.LinksRow}>

                        <SocialMedia fontSize="1.5rem" />



                        </div>
                    </Col>
                </Row>





            </Container>
        </footer>
    );
};

export default Footer;


