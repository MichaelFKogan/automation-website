import React, { useState } from 'react';
import styles from './iconcard.module.css';
import Icon from '@/app/ui/Icon';

export default function IconCard({ icon }) {
  const [message, setMessage] = useState(false);
  const copyHTMLContent = () => {
    const htmlTag = `<Icon icon="${icon}" />`;
    navigator.clipboard
      .writeText(htmlTag)
      .then(() => {
        setMessage(true);
        setTimeout(() => {
          setMessage(false);
        }, 1500); // Delay of 2000 milliseconds (2 seconds)
      })
      .catch(error => {
        console.error('Failed to copy HTML tag:', error);
      });
  };
  return (
    <div className={`card card-body ${styles.iconCard}`}>
      {message && (
        <div className={`text-heading bg-white bg-opacity-90 ${styles.copied}`}>
          Copied
        </div>
      )}
      <em
        className={`ni ni-copy ${styles.copyIcon}`}
        onClick={() => copyHTMLContent(icon)}
      ></em>
      <div className="text-heading">
        <Icon icon={icon} />
      </div>
      <p>{icon}</p>
    </div>
  );
}
