import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';

// Пропсы для <button>
export type ButtonAsButton =  ButtonHTMLAttributes<HTMLButtonElement>;

// Пропсы для <a>
export type ButtonAsAnchor =  AnchorHTMLAttributes<HTMLAnchorElement>;

// Итоговый тип
export type ButtonProps = ButtonAsButton | ButtonAsAnchor;
