import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./ServiceCard.module.css";

export interface ServiceCardProps {
  title: string;
  description: string;
  category?: string;
  priceNote?: string;
  image?: string;
  href?: string;
  theme?: "dark" | "light";
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  category,
  priceNote,
  image = "/images/hair-cutting.jpg",
  href,
  theme = "light",
  className = "",
}) => {
  const isDark = theme === "dark";

  const cardContent = (
    <article
      className={`${styles.card} ${
        isDark ? styles.cardDark : styles.cardLight
      } ${className}`.trim()}
    >
      {/* 1. Top Text Area (Centered paragraph with animated horizontal separator pill) */}
      <div className={styles.topSection}>
        <p className={styles.description}>{description}</p>
        <div className={styles.separatorPill} />
      </div>

      {/* 2. Middle Visual Photography Area with Smooth Zoom & Sheen */}
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className={styles.image}
        />
      </div>

      {/* 3. Bottom White Bar with Micro-Interactions */}
      <div className={styles.bottomBar}>
        <div className={styles.titleArea}>
          {category && <span className={styles.categoryTag}>{category}</span>}
          <h3 className={styles.title}>{title}</h3>
        </div>

        <div className={styles.actionArea}>
          <span className={styles.dotsIcon}>•••</span>
          <ArrowUpRight size={16} className={styles.actionArrow} />
        </div>
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none", display: "block" }}>
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};
