import styles from './Footer.module.scss';
import { Button } from '@/shared/ui/Button/button';

export function Footer() {
   return (
      <footer className={styles['footer']}>
         <p className={styles['footer__text']}>Тестовый проект</p>
         <Button target="_blank" variant="link" href="https://github.com/ArtErusov">
            GitHub
         </Button>
      </footer>
   );
}
