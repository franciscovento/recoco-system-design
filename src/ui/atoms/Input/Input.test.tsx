import { render } from '@testing-library/react';
import { beforeEach, describe, it } from 'vitest';

import { Input } from './Input';
import { type InputProps } from './Input.types';

describe(Input, () => {
  let defaultProps: InputProps;

  beforeEach(() => {
    defaultProps = {};
  });
  it('Input Should render', () => {
    render(<Input {...defaultProps} />);
  });
});
