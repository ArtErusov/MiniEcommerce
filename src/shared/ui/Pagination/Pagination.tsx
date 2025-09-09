import clsx from 'clsx';
import type { FC } from 'react';
import styles from './Pagination.module.scss';
import type { PaginationProps } from './Pagination.types';

export const Pagination: FC<PaginationProps> = ({
   totalPages,
   currentPage,
   setCurrentPage,
   className,
}) => {
   const handlePreviousСlick = () => {
      if (currentPage !== 1) {
         setCurrentPage(currentPage - 1);
      }
   };

   const handleNextСlick = () => {
      if (currentPage !== totalPages) {
         setCurrentPage(currentPage + 1);
      }
   };

   return (
      <ul className={clsx(styles['pagination'], className)}>
         <li
            onClick={() => handlePreviousСlick()}
            className={clsx(styles['pagination__item'], {
               [styles['pagination__item--passive']]: currentPage === 1,
            })}
         >{`<`}</li>
         {Array(totalPages)
            .fill(null)
            .map((_, index) => (
               <li
                  className={clsx(styles['pagination__item'], {
                     [styles['pagination__item--active']]: currentPage === index + 1,
                  })}
                  onClick={() => setCurrentPage(index + 1)}
                  key={index}
               >
                  {index + 1}
               </li>
            ))}
         <li
            onClick={handleNextСlick}
            className={clsx(styles['pagination__item'], {
               [styles['pagination__item--passive']]: currentPage === totalPages,
            })}
         >{`>`}</li>
      </ul>
   );
};
