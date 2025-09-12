import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useState, type FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import { useLoginMutation } from '@/app/providers/store/authApi';
import type { AppDispatch } from '@/app/providers/store/store';
import { userActions } from '@/app/providers/store/user.slice';
import { Button } from '@/shared/ui/Button';

export type LoginForm = {
   email: {
      value: string;
   };
   password: {
      value: string;
   };
};

export const Login = () => {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [login] = useLoginMutation();

   const navigate = useNavigate();
   const dispatch = useDispatch<AppDispatch>();
   const [error, setError] = useState<string | null>(null);

   const handleCopy = async (text: string) => {
      try {
         await navigator.clipboard.writeText(text);
      } catch (err) {
         console.error('Ошибка копирования', err);
      }
   };

   const submit = async (e: FormEvent) => {
      e.preventDefault();
      setError(null);
      const target = e.target as typeof e.target & LoginForm;
      const email = target.email.value;
      const password = target.password.value;

      try {
         // unwrap() выбросит ошибку в случае не-2xx ответа
         const data = await login({ email, password }).unwrap();
         console.log('login response', data);
         dispatch(userActions.addJwt(data.access_token));
         navigate('/');
      } catch (err) {
         // Разбор ошибки: RTK Query возвращает FetchBaseQueryError или SerializedError
         const fetchErr = err as FetchBaseQueryError;
         if (fetchErr && (fetchErr as any).status) {
            // если сервер возвращает объект { messege: '...' } (обрати внимание на spelling 'messege')
            const maybeData = (fetchErr as any).data;
            if (maybeData && typeof maybeData === 'object') {
               setError((maybeData as any).messege ?? JSON.stringify(maybeData));
            } else {
               setError(String((fetchErr as any).status));
            }
         } else {
            const ser = err as SerializedError;
            setError(ser?.message ?? 'Unknown error');
         }
      }
   };

   return (
      <>
         <div className={styles['auth']}>
            <div onClick={() => navigate('/')} className={styles['auth__back']}>
               на главную
            </div>
            <div className={styles['auth__content']}>
               <h2 className={styles['auth__title']}>Вход</h2>
               {error && <div className={styles['auth__error']}>{error}</div>}
               <div className={styles['auth__switch']}>
                  <p className={styles['auth__text']}>Нет аккаунта?</p>
                  <Link to="reg" className={styles['auth__link']}>
                     Регистрация
                  </Link>
               </div>
               <form onSubmit={submit} className={styles['auth__form']}>
                  <input
                     id="email"
                     type="text"
                     placeholder="Логин"
                     className={styles['auth__input']}
                  />

                  <input
                     id="password"
                     type="password"
                     placeholder="Пароль"
                     className={styles['auth__input']}
                  />

                  <Button className={styles['auth__btn']}>Вход</Button>
               </form>
               <div className={styles['auth__test-data']}>
                  <p className={styles['auth__subtitle']}>Логин и пароль для теста</p>
                  <p className={styles['auth__info']} onClick={() => handleCopy('a@gmail.com')}>
                     Логин: <span className={styles['auth__copy']}>a@gmail.com</span>
                  </p>
                  <p className={styles['auth__info']} onClick={() => handleCopy('123')}>
                     Пароль: <span className={styles['auth__copy']}>123</span>
                  </p>
                  <p className={styles['auth__subtitle-footer']}>Копируется при нажатии</p>
               </div>
            </div>
         </div>
         <div className={styles['auth__separator']} />
      </>
   );
};
