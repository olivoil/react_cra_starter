import * as React from 'react';
import { Button as MaterialButton } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';

export type Variant = 'contained' | 'text' | 'outlined';
export type Color = 'inherit' | 'primary' | 'secondary' | 'default';

const Button: React.SFC<ButtonProps> = (props: ButtonProps) => (
  <MaterialButton
    {...props}
    color={props.color || 'primary'}
    variant={props.variant || 'contained'}
  >
    {props.children}
  </MaterialButton>
);

export default Button;
