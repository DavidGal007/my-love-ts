import React, { FC } from 'react'

export interface ButtonProps {
    color: string;
    children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({children, color, ...props}) => {
  return (
    <button {...props}>
        {children}
    </button>
  )
}

export default Button