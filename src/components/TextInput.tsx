import React, { FC } from 'react'

export interface ButtonProps {
    color: string;
    textField: string;
    type: string;
    children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({children, color, textField, type, ...props}) => {
  return (
    <React.Fragment>
        <input {...props} />
    </React.Fragment>
  )
}

export default Button