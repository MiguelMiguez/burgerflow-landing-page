import type { ReactNode, CSSProperties } from "react";
import { Container } from "../Container";
import styles from "./Section.module.css";

type SectionTheme = "light" | "dark" | "brand" | "cream";
type SectionSpacing = "sm" | "md" | "lg" | "xl";

interface SectionProps {
  children: ReactNode;
  theme?: SectionTheme;
  spacing?: SectionSpacing;
  className?: string;
  style?: CSSProperties;
  id?: string;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  withContainer?: boolean;
}

export function Section({
  children,
  theme = "light",
  spacing = "lg",
  className = "",
  style,
  id,
  containerSize = "lg",
  withContainer = true,
}: SectionProps) {
  const classNames = [
    styles.section,
    styles[theme],
    styles[`spacing-${spacing}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classNames} style={style} id={id}>
      {withContainer ? (
        <Container size={containerSize}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
