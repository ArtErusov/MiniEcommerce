import { useDispatch } from 'react-redux';
import styles from './Footer.module.scss';
import type { AppDispath } from '@/app/providers/store/store';
import { userActions } from '@/app/providers/store/user.slice';
import { Button } from '@/shared/ui/Button';

export function Footer() {
   const dispatch = useDispatch<AppDispath>();
   const logout = () => {
      dispatch(userActions.logout());
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
