import styled, { CSSObject } from 'styled-components'
import { TypographyProps, TypographyVariant } from './Typography.types'
import { theme } from '../../../theme';
import { checkFontSize } from '../../../utils/checkFontSize';


export const getParagraphStyles = (variant: TypographyVariant) => {
  type TypographyStyles = {
    [key in TypographyVariant]: CSSObject;
  };

  const styles: TypographyStyles = {
    paragraph: {
      fontSize: theme.fontSize.paragraph,
      color: theme.colors['text-color'],
      fontWeight: 300,
    },
    small: {
      fontSize: theme.fontSize.small,
      color: theme.colors.black,
      fontWeight: 300,
    },
    subtitle: {
      fontSize: theme.fontSize.subtitle,
      color: theme.colors.black,
      fontWeight: 500,
    },
    title: {
      fontSize: theme.fontSize.title,
      color: theme.colors.black,
      fontWeight: 700,
    }
  }
  return styles[variant]
}

export const Typography = styled.p<TypographyProps>`
  ${(props) => {
    const object = getParagraphStyles(props.variant || 'paragraph');
    return {...object}
  }}
  ${(props) => props.color && `color: ${props.color}`} 
  ${(props) => props.fontSize && `font-size: ${checkFontSize(props.fontSize)}`}
`