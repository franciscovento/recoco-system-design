import styled from 'styled-components'
import { theme } from '../../../theme'
import { BadgeProps } from './Badge.types';

export const Badge = styled.span<BadgeProps>`
  width: 47px;
  height: 47px;
  font-family: "Inter", sans-serif;
  flex-shrink: 0;
  border-radius: 7.12px;
  font-size: 24px;
  font-weight: 600;
  background-color:  ${( props) => props.backgroundColor || theme.colors.primary };
  color: ${(props) => props.textColor || theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease-in;
  &:hover {
    opacity: 0.8;
  }
`