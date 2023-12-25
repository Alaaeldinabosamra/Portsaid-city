import React from 'react'
import Link from 'next/link';
import styles from './menuCategories.module.css'

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=hotdeals"
        className={`${styles.categoryItem} ${styles.hotdeals}`}
      >
        Hot deals
      </Link>
      <Link
        href="/blog?cat=cafe"
        className={`${styles.categoryItem} ${styles.cafe}`}
      >
        cafe's
      </Link>
      <Link
        href="/blog?cat=resturants"
        className={`${styles.categoryItem} ${styles.resturants}`}
      >
        Resturants
      </Link>
      <Link
        href="/blog?cat=medical-facilities"
        className={`${styles.categoryItem} ${styles.medical}`}
      >
        Medical facilities
      </Link>
      <Link
        href="/blog?cat=hotels"
        className={`${styles.categoryItem} ${styles.hotels}`}
      >
        Hotels
      </Link>
      <Link
        href="/blog?cat=trips"
        className={`${styles.categoryItem} ${styles.trips}`}
      >
        Trips
      </Link>
      <Link
        href="/blog?cat=work-space"
        className={`${styles.categoryItem} ${styles.workspace}`}
      >
        Work Space
      </Link>
      <Link
        href="/blog?cat=real-estates"
        className={`${styles.categoryItem} ${styles.realestate}`}
      >
        Real estates
      </Link>
    </div>
  );
}

export default MenuCategories
