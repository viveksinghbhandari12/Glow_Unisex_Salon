import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  children,
  icon,
  className = "",
  ...rest
}) => {
  const variantClass = styles[variant] || styles.primary;
  const sizeClass = styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`] || styles.sizeMd;
  const combinedClasses = `${styles.button} ${variantClass} ${sizeClass} ${className}`.trim();

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon && <span className={styles.icon}>{icon}</span>}
          <span>{children}</span>
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...rest}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
