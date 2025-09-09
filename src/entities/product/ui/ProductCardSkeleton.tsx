import styles from './ProductCard.module.scss';

export const ProductCardSkeleton = () => {
   return (
      <li className={`${styles.card} ${styles['card--skeleton']}`}>
         <div className={styles['card__image-skeleton']} />
         <div className={styles['card__info']}>
            <div className={styles['card__price-skeleton']} />
            <div className={styles['card__view-skeleton']} />
         </div>
         <div className={styles['card__title-skeleton']} />
         <div className={styles['card__actions']}>
            <div className={styles['card__button-skeleton']} />
            <div className={styles['card__favorite-skeleton']} />
         </div>
      </li>
   );
};
