import clsx from 'clsx';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import type { NavLinkItem } from './Header.types';

export function Header() {
   const navLinks: NavLinkItem[] = [
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
               <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                     clsx(styles.header__link, { [styles['header__link_active']]: isActive })
                  }
               >
                  {link.label}
               </NavLink>
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

         <Link to={'/auth'} className={clsx(styles['header__auth'], styles['header__link'])}>
            Войти
         </Link>
      </header>
   );
}
