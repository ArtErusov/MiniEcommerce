import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';

export const BUTTON_VARIANTS = ['primary', 'link'] as const;
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];

export interface BaseButtonProps {
   variant?: ButtonVariant;
}

// Пропсы для <button>
export type ButtonAsButton = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

// Пропсы для <a>
export type ButtonAsAnchor = BaseButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

// Итоговый тип
export type ButtonProps = ButtonAsButton | ButtonAsAnchor;
