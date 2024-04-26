import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { Badge } from './Badge';
import { type BadgeProps } from './Badge.types';

describe('Badge', () => {
  let defaultProps: BadgeProps;

  beforeEach(() => {
    defaultProps = {
      children: 'Badge',
    };
  });
  it('Should render Badge', () => {
    render(<Badge {...defaultProps} />);
    const badge = screen.getByText('Badge');
    expect(badge).toBeDefined();
  });
});
