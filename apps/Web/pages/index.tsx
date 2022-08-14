import React from 'react';
import styles from '../styles/Home.module.css';
import { Button } from "ui";

export default function Web() {
  return (
    <div className={styles.container}>
      <h1 className="text-2xl">Web</h1>
      <Button
        label="Button on Web"
        className="bg-purple-500 px-8 py-3 text-white"
      />
    </div>
  );
}
