/// <reference types="react" />
export type TypographyAs = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TypographyVariant = "paragraph" | "small" | "title" | "subtitle";
export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    as?: TypographyAs;
    variant?: TypographyVariant;
    children: React.ReactNode;
    color?: string;
    fontSize?: string | number;
}
