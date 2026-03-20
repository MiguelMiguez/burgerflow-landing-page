import type { ReactNode, CSSProperties } from "react";
import styles from "./Card.module.css";

type CardVariant = "elevated" | "outlined" | "filled" | "glass";
type CardPadding = "none" | "sm" | "md" | "lg" | "xl";

interface CardProps {
  children?: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  image?: string;
  imageAlt?: string;
  imagePosition?: "top" | "left" | "right" | "background";
  title?: string;
  subtitle?: string;
  description?: string;
  icon?: ReactNode;
  footer?: ReactNode;
  onClick?: () => void;
  hoverable?: boolean;
  className?: string;
  style?: CSSProperties;
  aspectRatio?: string;
}

export function Card({
  children,
  variant = "elevated",
  padding = "lg",
  image,
  imageAlt = "",
  imagePosition = "top",
  title,
  subtitle,
  description,
  icon,
  footer,
  onClick,
  hoverable = false,
  className = "",
  style,
  aspectRatio,
}: CardProps) {
  const isClickable = Boolean(onClick);
  const isHoverable = hoverable || isClickable;

  const classNames = [
    styles.card,
    styles[variant],
    styles[`padding-${padding}`],
    imagePosition === "left" || imagePosition === "right"
      ? styles.horizontal
      : "",
    imagePosition === "background" ? styles.backgroundImage : "",
    isHoverable ? styles.hoverable : "",
    isClickable ? styles.clickable : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const cardStyle: CSSProperties = {
    ...style,
    ...(aspectRatio ? { aspectRatio } : {}),
    ...(imagePosition === "background" && image
      ? {
          backgroundImage: `linear-gradient(to bottom, rgba(26, 26, 46, 0.3), rgba(26, 26, 46, 0.8)), url(${image})`,
        }
      : {}),
  };

  const hasHeader = icon || title || subtitle;

  return (
    <article
      className={classNames}
      style={cardStyle}
      onClick={onClick}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
    >
      {image && imagePosition === "left" && (
        <div className={styles.imageWrapper}>
          <img
            src={image}
            alt={imageAlt}
            className={styles.image}
            loading="lazy"
          />
        </div>
      )}

      {image && imagePosition === "top" && (
        <div className={styles.imageWrapper}>
          <img
            src={image}
            alt={imageAlt}
            className={styles.image}
            loading="lazy"
          />
        </div>
      )}

      <div className={styles.content}>
        {hasHeader && (
          <div className={styles.header}>
            {icon && <div className={styles.icon}>{icon}</div>}
            <div className={styles.headerText}>
              {title && <h3 className={styles.title}>{title}</h3>}
              {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
            </div>
          </div>
        )}

        {description && <p className={styles.description}>{description}</p>}
        {children}

        {footer && <div className={styles.footer}>{footer}</div>}
      </div>

      {image && imagePosition === "right" && (
        <div className={styles.imageWrapper}>
          <img
            src={image}
            alt={imageAlt}
            className={styles.image}
            loading="lazy"
          />
        </div>
      )}
    </article>
  );
}
