import React from 'react';
import styles from './Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  showArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, showArrow = false, ...rest }) => {
  return (
    <button className={styles.customButton} {...rest}>
      {text} {showArrow && <FontAwesomeIcon icon={faArrowRight} className={styles.arrow} />}
    </button>
  );
};

export default Button;
