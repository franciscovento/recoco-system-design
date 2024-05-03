import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Typography } from './Typography';
import { type TypographyProps } from './Typography.types';

describe('Breadcrumb', () => {
  let defaultProps: TypographyProps;

  beforeEach(() => {
    defaultProps = {
      children: 'Hello World',
    };
  });
  it('Typography Should render', () => {
    render(<Typography {...defaultProps} />);
  });
});
