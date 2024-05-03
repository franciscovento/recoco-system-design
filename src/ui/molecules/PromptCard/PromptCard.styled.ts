import styled from 'styled-components'
import { PromptCardProps } from './PromptCard.types'
import { theme } from '../../../theme'

export const PromptCard = styled.div<PromptCardProps>`
  width: 100%;
  border-radius:  ${theme.borderRadius.lg};
  
`