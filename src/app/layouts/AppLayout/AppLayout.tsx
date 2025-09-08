import { Outlet } from 'react-router-dom';
import styles from './AppLayout.module.scss';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

export function AppLayout() {
   return (
      <div className={styles['app-layout']}>
         <Header />
         <main>
            <Outlet />
         </main>
         <Footer />
      </div>
   );
}
