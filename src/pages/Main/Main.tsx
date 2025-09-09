import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './Main.module.scss';
import type { Product } from '@/entities/product/model/types';
import { ProductCard } from '@/entities/product/ui/ProductCard';
import { ProductCardSkeleton } from '@/entities/product/ui/ProductCardSkeleton';
import { Pagination } from '@/shared/ui/Pagination';

export const Main = () => {
   const [data, setData] = useState<Product[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [currentPage, setCurrentPage] = useState<number>(1);

   const totalPages: number = 4;

   useEffect(() => {
      setLoading(true);

      const fetchData = async () => {
         try {
            const response = await axios.get<Product[]>(
               `https://65523e2c5c69a7790329c0eb.mockapi.io/Orange`,
               {
                  params: {
                     page: currentPage,
                     limit: 5,
                  },
               },
            );
            setData(response.data);
         } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
            setData([]);
         } finally {
            setLoading(false);
         }
      };

      fetchData();
   }, [currentPage]);

   return (
      <>
         <ul className={styles['main__card']}>
            {loading
               ? Array.from({ length: 5 }).map((_, index) => <ProductCardSkeleton key={index} />)
               : data.map((item) => <ProductCard item={item} />)}
         </ul>
         <Pagination
            className={styles['main__pagination']}
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
         />
      </>
   );
};
