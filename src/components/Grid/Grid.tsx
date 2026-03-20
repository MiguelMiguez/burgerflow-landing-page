import type { ReactNode, CSSProperties } from "react";
import styles from "./Grid.module.css";

interface GridProps {
  children: ReactNode;
  columns?: number | { sm?: number; md?: number; lg?: number; xl?: number };
  gap?: "none" | "sm" | "md" | "lg" | "xl";
  alignItems?: "start" | "center" | "end" | "stretch";
  className?: string;
  style?: CSSProperties;
}

export function Grid({
  children,
  columns = 3,
  gap = "lg",
  alignItems = "stretch",
  className = "",
  style,
}: GridProps) {
  const columnClass =
    typeof columns === "number"
      ? styles[`cols-${columns}`]
      : Object.entries(columns)
          .map(([breakpoint, cols]) => styles[`${breakpoint}-cols-${cols}`])
          .join(" ");

  const classNames = [
    styles.grid,
    columnClass,
    styles[`gap-${gap}`],
    styles[`align-${alignItems}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
}
