import type { FC } from 'react';
import styles from './Pagination.module.scss';
import clsx from 'clsx';

interface PaginationProps {
   page: number;
   setPage: (page: number) => void;
   elementsOnPage: number;
}

export const Pagination: FC<PaginationProps> = ({ elementsOnPage, page, setPage }) => {
   const handlerPreviousСlick = () => {
      if (page !== 1) {
         setPage(page - 1);
      }
   };

   const handlerNextСlick = () => {
      if (page !== elementsOnPage) {
         setPage(page + 1);
      }
   };

   return (
      <ul className={styles.pagination}>
         <li
            onClick={() => handlerPreviousСlick()}
            className={clsx(styles['pagination__item'], {
               [styles['pagination__item--passive']]: page === 1,
            })}
         >{`<`}</li>
         {Array(elementsOnPage)
            .fill(null)
            .map((_, index) => (
               <li
                  className={clsx(styles['pagination__item'], {
                     [styles['pagination__item--active']]: page === index + 1,
                  })}
                  onClick={() => setPage(index + 1)}
                  key={index}
               >
                  {index + 1}
               </li>
            ))}
         <li
            onClick={() => handlerNextСlick()}
            className={clsx(styles['pagination__item'], {
               [styles['pagination__item--passive']]: page === elementsOnPage,
            })}
         >{`>`}</li>
      </ul>
   );
};
