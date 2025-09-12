import { useSearchParams } from 'react-router-dom';
import styles from './Main.module.scss';
import { ProductCard } from '@/entities/product/ui/ProductCard';
import { ProductCardSkeleton } from '@/entities/product/ui/ProductCardSkeleton';
import { useGetProductsQuery } from '@/shared/api/productApi';
import { Pagination } from '@/shared/ui/Pagination';

export const Main = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const currentPage = Number(searchParams.get('page')) || 1;

   const { data, isLoading, isError } = useGetProductsQuery({
      page: currentPage,
      limit: 5,
   });

   const handlePageChange = (page: number) => {
      if (page === 1) {
         searchParams.delete('page');
         setSearchParams(searchParams);
      } else {
         setSearchParams({ page: String(page) });
      }
   };

   const totalPages: number = 4;

   return (
      <>
         <ul className={styles['main__card']}>
            {isLoading
               ? Array.from({ length: 5 }).map((_, index) => <ProductCardSkeleton key={index} />)
               : data?.map((item) => <ProductCard key={item.id} item={item} />)}
            {isError && <p>Ошибка при загрузке данных</p>}
         </ul>
         <Pagination
            className={styles['main__pagination']}
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={handlePageChange}
         />
      </>
   );
};
