import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.scss';
import logoImg from '../../assets/images/logo.png';
import googleImg from '../../assets/images/google.png';
import appImg from '../../assets/images/app.png';
import SocialMedia from '../SocialMedia/SocialMedia';

import visaImg from '../../assets/images/visa.png';
import mastercardImg from '../../assets/images/mastercard.png';
import americanImg from '../../assets/images/american.png';
import type { LanguageCode } from '../LanguageSelector/LanguageSelector';
import enTranslations from '../../locales/en.json';
import arTranslations from '../../locales/ar.json';

interface FooterProps {
  language: LanguageCode;
}

const translations = {
  en: enTranslations,
  ar: arTranslations,
} as const;

const Footer: React.FC<FooterProps> = ({ language }) => {
    const t = translations[language] || translations.en;

    return (
        <footer className={styles.footer}>
            <Container>
                <Row className="mb-4 d-md-none">
                    <Col xs={12}>
                        <div className={styles.LinksRow}>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img
                                    src={logoImg}
                                    alt={t.footer.logoAlt}
                                    className={styles.appLogo}
                                />
                            </a>
                        </div>
                    </Col>
                </Row>

                {/* ================= First Row ================= */}
                <Row className="mb-4">
                    <Col xs={12} md={9}>
                        <h1 className={styles.heading}>
                            {t.footer.ctaHeading.split('\n').map((line: string, index: number) => (
                                <span key={index}>
                                    {index > 0 && <br />}
                                    {line}
                                </span>
                            ))}
                        </h1>
                    </Col>

                    <Col xs={12} md={3}>
                        <h5 className={styles.subHeading}>
                            {t.footer.downloadHeading}
                        </h5>

                        <ul className={styles.downloadList}>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src={googleImg} alt={t.footer.downloadGoogleAlt} />
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src={appImg} alt={t.footer.downloadAppleAlt} />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>


                {/* ================= Second Row ================= */}
                <Row className="mb-4">
                    <Col xs={12} md={3}>
                        <h6 className={styles.subHeading}>{t.footer.locationHeading}</h6>
                        <ul className={styles.links}>
                            {t.footer.locationLinks.map((item: string, index: number) => (
                                <li key={index}><a href="#">{item}</a></li>
                            ))}
                        </ul>
                    </Col>

                    <Col xs={12} md={3}>
                        <h6 className={styles.subHeading}>{t.footer.hoursHeading}</h6>
                        <ul className={styles.links}>
                            {t.footer.hoursLinks.map((item: string, index: number) => (
                                <li key={index}><a href="#">{item}</a></li>
                            ))}
                        </ul>
                    </Col>

                    <Col xs={12} md={6}>
                        <h6 className={styles.subHeading}>{t.footer.guestServiceHeading}</h6>
                        <ul className={styles.links}>
                            {t.footer.guestServiceLinks.map((item: string, index: number) => (
                                <li key={index}><a href="#">{item}</a></li>
                            ))}
                        </ul>
                    </Col>
                </Row>


                {/* ================= Third Row ================= */}
                <Row className="pt-4 align-items-center">
                    <Col xs={12} md={9} className="d-none d-md-block">
                        <div className={styles.LinksRow}>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img
                                    src={logoImg}
                                    alt={t.footer.logoAlt}
                                    className={styles.appLogo}
                                />
                            </a>
                        </div>
                    </Col>

                    <Col xs={12} md={3}>
                        <div className={styles.LinksRow}>
                            <SocialMedia
                                fontSize="1.5rem"
                                className={styles.footerIcons}
                            />
                        </div>
                    </Col>
                </Row>


                {/* ================= Fourth Row ================= */}
                <Row className="pt-4 align-items-center">
                    <Col xs={12} md={9}>
                        <div className={styles.copyrightRow}>
                            <a href="#">{t.footer.terms}</a>
                            <a href="#">{t.footer.privacy}</a>
                            <span>{t.footer.copyright}</span>
                        </div>
                    </Col>

                    <Col xs={12} md={3}>
                        <div className={styles.paymentWrapper}>
                            <ul className={styles.paymentList}>
                                <li>
                                    <img src={visaImg} alt="Visa" />
                                </li>
                                <li>
                                    <img src={mastercardImg} alt="Mastercard" />
                                </li>
                                <li>
                                    <img src={americanImg} alt="American Express" />
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>

            </Container>
        </footer>
    );
};

export default Footer;

