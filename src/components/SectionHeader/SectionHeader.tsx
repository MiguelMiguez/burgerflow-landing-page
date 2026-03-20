import type { ReactNode, CSSProperties } from "react";
import { Stack } from "../Stack";
import { Typography } from "../Typography";
import { Badge } from "../Badge";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  overline?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  badge?: ReactNode;
  className?: string;
  style?: CSSProperties;
  maxWidth?: string;
}

export function SectionHeader({
  overline,
  title,
  description,
  align = "center",
  theme = "light",
  badge,
  className = "",
  style,
  maxWidth = "720px",
}: SectionHeaderProps) {
  const textColor = theme === "dark" ? "inverse" : "primary";
  const descColor = theme === "dark" ? "inverse" : "secondary";

  return (
    <Stack
      direction="vertical"
      gap="lg"
      align={align === "center" ? "center" : "start"}
      className={`${styles.header} ${styles[align]} ${className}`}
      style={{ ...style, maxWidth: align === "center" ? maxWidth : undefined }}
    >
      {(overline || badge) && (
        <div className={styles.top}>
          {badge}
          {overline && !badge && <Badge variant="brand">{overline}</Badge>}
        </div>
      )}

      <Typography
        variant="h2"
        align={align}
        color={textColor}
        className={styles.title}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          variant="body-lg"
          align={align}
          color={descColor}
          className={styles.description}
          maxWidth={maxWidth}
        >
          {description}
        </Typography>
      )}
    </Stack>
  );
}
