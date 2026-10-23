"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { businessConfig, navRoutes } from "@/data/business";
import { Button } from "@/components/ui/Button";
import styles from "./Navbar.module.css";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        {/* Brand Wordmark / Initial */}
        <Link href="/" className={styles.brand} onClick={closeMenu} aria-label="Glow Unisex Salon Home">
          <div className={styles.logoBadge} aria-hidden="true">
            GUS
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandName}>{businessConfig.name}</span>
            <span className={styles.brandSub}>Rajouri Garden</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          {navRoutes.map((route) => {
            const isActive = pathname === route.href;
            return (
              <Link
                key={route.href}
                href={route.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {route.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className={styles.actions}>
          <Button
            href={businessConfig.whatsappHref}
            isExternal
            variant="primary"
            size="sm"
            icon={<MessageCircle size={16} />}
          >
            WhatsApp
          </Button>

          <button
            type="button"
            className={styles.mobileMenuBtn}
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav className={styles.mobileMenu} aria-label="Mobile Navigation">
          {navRoutes.map((route) => {
            const isActive = pathname === route.href;
            return (
              <Link
                key={route.href}
                href={route.href}
                onClick={closeMenu}
                className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {route.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
};
