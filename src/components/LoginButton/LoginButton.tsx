import React from 'react';
import styles from './LoginButton.module.scss';

interface LoginButtonProps {
  onClick?: () => void;
  className?: string; // optional extra class for customization
  text?: string;      // button text
}

const LoginButton: React.FC<LoginButtonProps> = ({
  onClick,
  className = '',
  text = 'Log in',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.loginButton} ${className}`}
    >
      {text}
    </button>
  );
};

export default LoginButton;
