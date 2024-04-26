import * as React from 'react';

import * as Styled from './Button.styled';
import type { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    children,
    rounded,
    color,
    onClick,
    size,
    variant = 'filled',
    ...rest
  } = props;
  return (
    <Styled.Button
      color={color}
      onClick={onClick}
      variant={variant}
      size={size}
      rounded={rounded}
      {...rest}
    >
      {children}
    </Styled.Button>
  );
};
