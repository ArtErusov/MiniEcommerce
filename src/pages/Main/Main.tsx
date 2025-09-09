import { useEffect, useState } from 'react';
import styles from './Main.module.scss';
import { Button } from '@/shared/ui/Button';

interface OrangeItem {
   id: number;
   customId: string;
   src: string[];
   price: number;
   rating: number;
   review: number;
   platforms: string[];
   manufacturer: string;
   text: string;
   dataSearch: string;
}

export const Main = () => {
   const [data, setData] = useState<OrangeItem[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      fetch('https://65523e2c5c69a7790329c0eb.mockapi.io/Orange')
         .then((response) => {
            if (!response.ok) {
               throw new Error('Ошибка сети');
            }
            return response.json();
         })
         .then((data: OrangeItem[]) => {
            setData(data);
            setLoading(false);
         })
         .catch((err: Error) => {
            setError(err.message);
            setLoading(false);
         });
   }, []);

   return (
      <>
         <ul className={styles['main__card']}>
            {loading
               ? Array.from({ length: 5 }).map((_, index) => (
                    <li key={index} className={`${styles.card} ${styles['card--skeleton']}`}>
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
                 ))
               : data.slice(0, 5).map((item) => (
                    <li className={styles['card']} key={item.id}>
                       <img src={item.src[0]} alt={item.text} className={styles['card__image']} />
                       <div className={styles['card__info']}>
                          <p className={styles['card__price']}>{item.price} ₽</p>
                          <div className={styles['card__view']}>просмотр</div>
                       </div>
                       <p className={styles['card__title']}>{item.text}</p>
                       <div className={styles['card__actions']}>
                          <Button className={styles['card__button']}>в корзину</Button>
                          <div className={styles['card__favorite']}>и</div>
                       </div>
                    </li>
                 ))}
         </ul>
      </>
   );
};
