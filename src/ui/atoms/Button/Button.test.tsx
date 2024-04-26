import { fireEvent, screen, render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Button } from './Button';
import { type ButtonProps } from './Button.types';

describe('Button', () => {
  let defaultProps: ButtonProps;

  beforeEach(() => {
    defaultProps = {
      children: 'My Button',
      onClick: vi.fn(),
      rounded: false,
      variant: 'outlined',
      color: 'primary',
      size: 'md',
    };
  });
  it('Should render the button', () => {
    render(<Button {...defaultProps} />);
    const element = screen.getByText('My Button');
    expect(element).toBeDefined();
  });

  it('should throw an event click', () => {
    render(<Button {...defaultProps} />);
    const element = screen.getByText('My Button');
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});
