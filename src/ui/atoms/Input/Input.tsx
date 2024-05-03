import * as React from 'react';

import * as Styled from './Input.styled';
import type { InputProps } from './Input.types';

export const Input: React.FC<InputProps> = (props: InputProps) => {
  return <Styled.Input {...props} />;
};
