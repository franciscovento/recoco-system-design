import * as React from 'react';

import * as Styled from './Badge.styled';
import { BadgeProps } from './Badge.types';

export const Badge: React.FC<BadgeProps> = (props: BadgeProps) => {
  const { backgroundColor, children, ...rest } = props;
  return (
    <Styled.Badge backgroundColor={backgroundColor} {...rest}>
      {children}
    </Styled.Badge>
  );
};
