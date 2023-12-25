import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from "./menuPosts.module.css"

const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && ( <div className={styles.imageContainer}>
          <Image src="/cover-1.jpg" alt="" fill className={styles.image} />
        </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.trips}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Alaaeldin</span>
            <span className={styles.date}> - 10.3.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && ( <div className={styles.imageContainer}>
          <Image src="/cover.jpg" alt="" fill className={styles.image} />
        </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.hotdeals}`}>
            Hot Deals
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Alaaeldin</span>
            <span className={styles.date}> - 10.3.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && ( <div className={styles.imageContainer}>
          <Image src="/cover-3.jpg" alt="" fill className={styles.image} />
        </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Alaaeldin</span>
            <span className={styles.date}> - 10.3.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (<div className={styles.imageContainer}>
          <Image src="/cover-5.jpg" alt="" fill className={styles.image} />
        </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.clinks}`}>Clinks</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Alaaeldin</span>
            <span className={styles.date}> - 10.3.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MenuPosts
