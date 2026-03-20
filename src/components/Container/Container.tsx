import type { ReactNode, CSSProperties, ElementType } from "react";
import styles from "./Container.module.css";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

export interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
}

export function Container({
  children,
  size = "lg",
  className = "",
  style,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={`${styles.container} ${styles[size]} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
}

export default Container;
