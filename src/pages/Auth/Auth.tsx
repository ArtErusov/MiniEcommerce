import { Link } from 'react-router-dom';
import styles from './Auth.module.scss';
import { Button } from '@/shared/ui/Button';

export const Auth = () => {
   const handleCopy = async (text: string) => {
      try {
         await navigator.clipboard.writeText(text);
      } catch (err) {
         console.error('Ошибка копирования', err);
      }
   };
   return (
      <>
         <div className={styles['auth']}>
            <div className={styles['auth__content']}>
               <h2 className={styles['auth__title']}>Вход</h2>
               <div className={styles['auth__switch']}>
                  <p className={styles['auth__text']}>Нет аккаунта?</p>
                  <Link to="reg" className={styles['auth__link']}>
                     Регистрация
                  </Link>
               </div>
               <form className={styles['auth__form']}>
                  <input type="text" placeholder="Логин" className={styles['auth__input']} />

                  <input type="password" placeholder="Пароль" className={styles['auth__input']} />

                  <Button className={styles['auth__btn']}>Вход</Button>
               </form>
               <div className={styles['auth__test-data']}>
                  <p className={styles['auth__subtitle']}>Логин и пароль для теста</p>
                  <p className={styles['auth__info']} onClick={() => handleCopy('test')}>
                     Логин: <span className={styles['auth__copy']}>test</span>
                  </p>
                  <p className={styles['auth__info']} onClick={() => handleCopy('1234')}>
                     Пароль: <span className={styles['auth__copy']}>1234</span>
                  </p>
               </div>
            </div>
         </div>
         <div className={styles['auth__separator']} />
      </>
   );
};
