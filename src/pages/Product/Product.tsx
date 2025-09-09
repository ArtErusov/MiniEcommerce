import type { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import styles from './Product.module.scss';
import { Button } from '@/shared/ui/Button';

export const Product: FC = () => {
   const data = useLoaderData();

   return (
      <div className={styles['product']}>
         <img alt={data[0].text} src={data[0].src[0]} className={styles['product__img']} />
         <div className={styles['product__content']}>
            <h2 className={styles['product__title']}>{data[0].text}</h2>
            <p className={styles['product__price']}>{data[0].price} ₽</p>
            <p className={styles['product__text']}>
               В своём стремлении повысить качество жизни, они забывают, что высококачественный
               прототип будущего проекта играет определяющее значение для новых принципов
               формирования материально-технической и кадровой базы. А ещё акционеры крупнейших
               компаний могут быть объединены в целые кластеры себе подобных!
            </p>
            <div className={styles['product__actions']}>
               <Button className={styles['product__button']}>в корзину</Button>
               <div className={styles['product__favorite']}>и</div>
            </div>
         </div>
      </div>
   );
};
