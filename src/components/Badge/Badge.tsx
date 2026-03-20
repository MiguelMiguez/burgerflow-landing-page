import type { ReactNode, CSSProperties } from "react";
import styles from "./Badge.module.css";

type BadgeVariant = "brand" | "success" | "warning" | "neutral" | "outline";
type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function Badge({
  children,
  variant = "brand",
  size = "md",
  icon,
  className = "",
  style,
}: BadgeProps) {
  const classNames = [
    styles.badge,
    styles[variant],
    styles[size],
    icon ? styles.hasIcon : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classNames} style={style}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </span>
  );
}
