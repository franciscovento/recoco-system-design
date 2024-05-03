import styled from 'styled-components'
import { ButtonColorProps, ButtonProps, ButtonSizeProps } from './Button.types'
import { theme } from '../../../theme'


const getButtonColor = (color: ButtonColorProps) => {
  switch (color) {
    case 'primary':
      return theme.colors.primary
    case 'secondary':
      return theme.colors.secondary  
    case 'danger':
      return theme.colors.danger  
    default:
      return theme.colors.primary
  }
}

const getButtonSize = (size: ButtonSizeProps) => {
  const sizes = {
    sm: {
      width: '142px',
      height: '30px',
      "font-size": "12px",
      "border-radius": "15px"
    },
    md: {
      width: '165px',
      height: '40px',
      "font-size": "16px",
      "border-radius": "20px"
    },
    lg: {
      width: '273px',
      height: '60px',
      "font-size": "20px",
      "border-radius": "30px"
    }
  }
  return sizes[size]
}




export const Button = styled.button<ButtonProps>`
  max-width: 100%;
  background-color: ${ (props) => props.variant === 'outlined' || props.variant === "text" ? 'transparent' : getButtonColor(props.color || 'primary') };
  border: ${ (props) => props.variant === 'outlined' ? `1px solid ${getButtonColor(props.color || 'primary')}` : '1px solid transparent' };
  color: ${ (props) => props.variant === 'filled' ? theme.colors.white : getButtonColor(props.color || 'primary') };
  ${ (props) => props.textColor ? `color: ${props.textColor}` : '' };
  display: inline-block;
  width: ${ (props) => getButtonSize(props.size || "md").width};
  height: ${ (props) => getButtonSize(props.size || "md").height};
  min-width: max-content;
  font-size: ${ (props) => getButtonSize(props.size || "md")['font-size']};
  border-radius: ${ (props) => props.rounded ? getButtonSize(props.size || "md")['border-radius']: '0px' };
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
    opacity: 0.8;
  }
`