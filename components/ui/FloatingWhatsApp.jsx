"use client";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styles from './FloatingWhatsApp.module.css';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the icon after 1 second
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const phoneNumber = "+917328857979"; // Replace with your WhatsApp number
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    isVisible && (
      <div className={styles.floatingIcon} onClick={handleClick}>
        <FontAwesomeIcon icon={faWhatsapp} size="3x"color="#FFFFFF"/>
      </div>
    )
  );
};

export default FloatingWhatsApp;
