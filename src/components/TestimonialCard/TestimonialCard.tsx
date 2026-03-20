import type { CSSProperties } from "react";
import { Typography } from "../Typography";
import styles from "./TestimonialCard.module.css";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
  rating?: number;
  className?: string;
  style?: CSSProperties;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  rating = 5,
  className = "",
  style,
}: TestimonialCardProps) {
  return (
    <article className={`${styles.card} ${className}`} style={style}>
      <div className={styles.quoteIcon}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {rating > 0 && (
        <div className={styles.rating}>
          {Array.from({ length: rating }, (_, i) => (
            <svg
              key={i}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
      )}

      <Typography variant="body-lg" color="primary" className={styles.quote}>
        "{quote}"
      </Typography>

      <div className={styles.author}>
        {avatar ? (
          <img src={avatar} alt={author} className={styles.avatar} />
        ) : (
          <div className={styles.avatarPlaceholder}>{author.charAt(0)}</div>
        )}
        <div className={styles.authorInfo}>
          <Typography variant="body" weight="semibold" color="primary">
            {author}
          </Typography>
          <Typography variant="body-sm" color="muted">
            {role}
            {company && `, ${company}`}
          </Typography>
        </div>
      </div>
    </article>
  );
}
