export interface PaginationProps {
   currentPage: number;
   setCurrentPage: (page: number) => void;
   totalPages: number;
   className?: string;
}
