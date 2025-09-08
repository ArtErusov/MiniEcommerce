import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import type { NavLink } from './Header.types';

export function Header() {
   const navLinks: NavLink[] = [
      { path: '/', label: 'Каталог' },
      { path: '/cart', label: 'Корзина' },
      { path: '/favorites', label: 'Избранное' },
   ];

   const [searchValue, setSearchValue] = useState('');

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Поиск:', searchValue);
   };
   return (
      <header className={styles['header']}>
         <nav className={styles['header__nav']}>
            {navLinks.map((link) => (
               <Link key={link.path} to={link.path} className={styles['header__link']}>
                  {link.label}
               </Link>
            ))}
         </nav>
         <form className={styles['header__search']} onSubmit={handleSubmit}>
            <input
               className={styles['header__input']}
               type="text"
               value={searchValue}
               onChange={handleChange}
               placeholder="Поиск товара"
            />
            <button className={styles['header__input-button']}>g</button>
         </form>

         <p className={clsx(styles['header__auth'], styles['header__link'])}>Войти</p>
      </header>
   );
}
