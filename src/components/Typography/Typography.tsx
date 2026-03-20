import type { ReactNode, CSSProperties, ElementType } from "react";
import styles from "./Typography.module.css";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body"
  | "body-lg"
  | "body-sm"
  | "caption"
  | "overline";

type TypographyAlign = "left" | "center" | "right";
type TypographyWeight = "regular" | "medium" | "semibold" | "bold";

interface TypographyProps {
  children: ReactNode;
  variant?: TypographyVariant;
  as?: ElementType;
  align?: TypographyAlign;
  weight?: TypographyWeight;
  color?: "primary" | "secondary" | "muted" | "inverse" | "brand" | "inherit";
  className?: string;
  style?: CSSProperties;
  maxWidth?: string;
}

const defaultTags: Record<TypographyVariant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  "body-lg": "p",
  "body-sm": "p",
  caption: "span",
  overline: "span",
};

export function Typography({
  children,
  variant = "body",
  as,
  align = "left",
  weight,
  color = "primary",
  className = "",
  style,
  maxWidth,
}: TypographyProps) {
  const Component = as || defaultTags[variant];

  const classNames = [
    styles.typography,
    styles[variant.replace("-", "")],
    styles[`align-${align}`],
    weight ? styles[weight] : "",
    styles[`color-${color}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const combinedStyle: CSSProperties = {
    ...style,
    ...(maxWidth ? { maxWidth } : {}),
  };

  return (
    <Component className={classNames} style={combinedStyle}>
      {children}
    </Component>
  );
}
