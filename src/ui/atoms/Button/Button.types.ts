import React from "react";

export type ButtonVariantProps = "outlined" | "filled" | "text";
export type ButtonSizeProps = "sm" | "md" | "lg";
export type ButtonColorProps = "primary" | "secondary" | "danger";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariantProps;
  size?: ButtonSizeProps;
  color?: ButtonColorProps;
  textColor?: string;
  rounded: boolean;
  onClick?: () => void;
}