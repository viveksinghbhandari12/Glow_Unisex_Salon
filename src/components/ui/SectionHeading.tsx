import React from "react";
import styles from "./SectionHeading.module.css";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "dark" | "light";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "dark",
  className = "",
}) => {
  const isDark = theme === "dark";

  return (
    <div className={`${styles.wrapper} ${styles[align]} ${className}`.trim()}>
      {eyebrow && (
        <span
          className={`${styles.eyebrow} ${
            isDark ? styles.eyebrowDark : styles.eyebrowLight
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`${styles.title} ${
          isDark ? styles.titleDark : styles.titleLight
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`${styles.subtitle} ${
            isDark ? styles.subtitleDark : styles.subtitleLight
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
