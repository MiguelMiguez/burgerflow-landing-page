import type { CSSProperties } from "react";
import { Typography } from "../Typography";
import { Badge } from "../Badge";
import { Stack } from "../Stack";
import styles from "./ScreenshotShowcase.module.css";

interface ScreenshotShowcaseProps {
  image?: string;
  imageAlt?: string;
  title: string;
  description?: string;
  badge?: string;
  imagePosition?: "left" | "right";
  className?: string;
  style?: CSSProperties;
  placeholder?: boolean;
}

export function ScreenshotShowcase({
  image,
  imageAlt = "",
  title,
  description,
  badge,
  imagePosition = "left",
  className = "",
  style,
  placeholder = true,
}: ScreenshotShowcaseProps) {
  const classNames = [
    styles.showcase,
    styles[`image-${imagePosition}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} style={style}>
      <div className={styles.imageContainer}>
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            className={styles.image}
            loading="lazy"
          />
        ) : placeholder ? (
          <div className={styles.placeholder}>
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <span>Screenshot Preview</span>
          </div>
        ) : null}
        <div className={styles.browserFrame}>
          <div className={styles.browserDot} />
          <div className={styles.browserDot} />
          <div className={styles.browserDot} />
        </div>
      </div>

      <Stack direction="vertical" gap="md" className={styles.content}>
        {badge && <Badge variant="brand">{badge}</Badge>}
        <Typography variant="h3" color="primary">
          {title}
        </Typography>
        {description && (
          <Typography variant="body-lg" color="secondary">
            {description}
          </Typography>
        )}
      </Stack>
    </div>
  );
}
