"use client";

import React from "react";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { businessConfig } from "@/data/business";
import styles from "./MobileBottomBar.module.css";

export const MobileBottomBar: React.FC = () => {
  return (
    <aside className={styles.bottomBar} aria-label="Mobile Quick Booking and Navigation">
      <div className={styles.container}>
        {/* 1. Quick Call */}
        <a
          href={businessConfig.phoneCallHref}
          className={styles.actionBtn}
          aria-label="Call Glow Unisex Salon"
        >
          <div className={styles.iconCircle}>
            <Phone size={18} />
          </div>
          <span className={styles.btnLabel}>Call</span>
        </a>

        {/* 2. Spotlight WhatsApp Booking (Center Primary) */}
        <a
          href={businessConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappBtn}
          aria-label="Chat and Book on WhatsApp"
        >
          <MessageCircle size={20} />
          <span className={styles.whatsappLabel}>Book on WhatsApp</span>
        </a>

        {/* 3. Direct Google Maps */}
        <a
          href={businessConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.actionBtn}
          aria-label="Open Directions in Google Maps"
        >
          <div className={styles.iconCircle}>
            <MapPin size={18} />
          </div>
          <span className={styles.btnLabel}>Map</span>
        </a>
      </div>
    </aside>
  );
};
