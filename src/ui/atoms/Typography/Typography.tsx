import * as React from 'react';

import * as Styled from './Typography.styled';
import type { TypographyProps } from './Typography.types';

export const Typography: React.FC<TypographyProps> = (
  props: TypographyProps
) => {
  const {
    as = 'p',
    variant = 'paragraph',
    children,
    fontSize,
    ...rest
  } = props;
  return (
    <Styled.Typography as={as} variant={variant} fontSize={fontSize} {...rest}>
      {children}
    </Styled.Typography>
  );
};
