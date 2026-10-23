"use client";

import React from "react";
import Link from "next/link";
import { businessConfig, navRoutes } from "@/data/business";
import { ActionButtons } from "@/components/ui/ActionButtons";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  const currentYear = 2026;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        {/* Brand Information */}
        <div className={styles.brandCol}>
          <div className={styles.brandName}>{businessConfig.name}</div>
          <p className={styles.brandDesc}>
            Professional hair styling, skin treatments, and bridal services in Rajouri Garden, New Delhi.
          </p>
          <ActionButtons layout="horizontal" />
        </div>

        {/* Navigation Quick Links */}
        <div>
          <h3 className={styles.colTitle}>Navigation</h3>
          <ul className={styles.navList}>
            {navRoutes.map((route) => (
              <li key={route.href}>
                <Link href={route.href} className={styles.navLink}>
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Location & Public Info */}
        <div className={styles.contactCol}>
          <h3 className={styles.colTitle}>Salon Details</h3>
          <div className={styles.contactItem}>
            <strong>Location:</strong>
            <span>{businessConfig.address.formattedAddress}</span>
          </div>
          <div className={styles.contactItem}>
            <strong>Hours:</strong>
            <span>{businessConfig.openingHours.display}</span>
          </div>
          <div className={styles.contactItem}>
            <strong>Contact:</strong>
            <span>{businessConfig.phone}</span>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottomBar}`}>
        <p>
          &copy; {currentYear} {businessConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
