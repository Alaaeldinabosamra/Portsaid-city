import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Ladies and gentlemen!</b> Discover the most wonderful city nestled on
        the Mediterranean coast.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/portsaid.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            welcome to the enchanting city nestled on the Mediterranean coast.
            This vibrant metropolis flourishes as a pivotal port, embracing
            global trade, and is adorned with captivating landmarks, including
            the iconic Suez Canal Authority Building. Explore the wonders of
            this coastal gem!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Featured
