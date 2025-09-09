import styles from './Footer.module.scss';
import { Button } from '@/shared/ui/Button';

export function Footer() {
   const logout = () => {
      localStorage.removeItem('jwt');
   };
   return (
      <footer className={styles['footer']}>
         <p className={styles['footer__title']}>Тестовый проект</p>
         <div onClick={() => logout()}>Выход(временно)</div>
         <Button target="_blank" variant="link" href="https://github.com/ArtErusov">
            GitHub
         </Button>
      </footer>
   );
}
