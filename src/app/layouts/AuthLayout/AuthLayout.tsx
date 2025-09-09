import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.scss';
import { Footer } from '@/widgets/Footer';

export function AuthLayout() {
   return (
      <div className={styles['auth-layout']}>
         <main>
            <Outlet />
         </main>
         <Footer />
      </div>
   );
}
