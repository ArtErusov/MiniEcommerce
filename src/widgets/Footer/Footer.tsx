import styles from './Footer.module.scss';
import { Button } from '@/shared/ui/Button';

export function Footer() {
   return (
      <footer className={styles['footer']}>
         <p className={styles['footer__title']}>Тестовый проект</p>
         <Button target="_blank" variant="link" href="https://github.com/ArtErusov">
            GitHub
         </Button>
      </footer>
   );
}
