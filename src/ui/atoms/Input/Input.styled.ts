import styled from 'styled-components';
import { InputProps } from './Input.types';

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 30px;
  flex-shrink: 0;
  border-radius: 10px;
  outline: none;
  color: #9e9e9e; 
  border: 1.5px solid #e8e8ec;
  &::placeholder {
    font-size: 14px;
    font-style: italic;
    font-style: italic;
    font-weight: 400;
    color: #9e9e9e; 
  }
  font-size: 14px;
  font-weight: 400;
  padding: 6px 12px;
`;
