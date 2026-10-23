import React from "react";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { businessConfig } from "@/data/business";
import styles from "./ActionButtons.module.css";

export interface ActionButtonsProps {
  layout?: "horizontal" | "vertical" | "compact";
  theme?: "dark" | "light";
  showWhatsApp?: boolean;
  showCall?: boolean;
  showMap?: boolean;
  className?: string;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  layout = "horizontal",
  theme = "dark",
  showWhatsApp = true,
  showCall = true,
  showMap = true,
  className = "",
}) => {
  const themeClass = theme === "light" ? styles.themeLight : styles.themeDark;
  const containerClass = `${styles.container} ${styles[layout] || ""} ${themeClass} ${className}`.trim();

  return (
    <div className={containerClass} role="group" aria-label="Quick Actions">
      {showWhatsApp && (
        <a
          href={businessConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.actionButton} ${styles.whatsapp}`}
          aria-label="Contact via WhatsApp"
        >
          <span className={styles.icon}>
            <MessageCircle size={18} />
          </span>
          <span>WhatsApp</span>
        </a>
      )}

      {showCall && (
        <a
          href={businessConfig.phoneCallHref}
          className={`${styles.actionButton} ${styles.call}`}
          aria-label="Call salon"
        >
          <span className={styles.icon}>
            <Phone size={18} />
          </span>
          <span>Call</span>
        </a>
      )}

      {showMap && (
        <a
          href={businessConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.actionButton} ${styles.map}`}
          aria-label="View on Google Maps"
        >
          <span className={styles.icon}>
            <MapPin size={18} />
          </span>
          <span>Map</span>
        </a>
      )}
    </div>
  );
};
