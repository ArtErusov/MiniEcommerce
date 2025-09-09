import type { FC } from 'react';
import type { Product } from '../model/types';
import styles from './ProductCard.module.scss';
import { Button } from '@/shared/ui/Button';

interface ProductCardProps {
   item: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ item }) => {
   return (
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
   );
};
