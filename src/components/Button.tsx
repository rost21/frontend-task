import { FC } from 'react'

import './style.css';

interface Props {
  title: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean
}

export const Button: FC<Props> = ({ title, ...rest }) => {
  return (
    <button
      {...rest}
      className={`modal-button sm:w-44 w-full border rounded-lg ${rest.className || ''}`}
    >
      {title}
    </button>
  )
};