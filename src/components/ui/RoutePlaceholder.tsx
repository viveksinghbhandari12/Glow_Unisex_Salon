import React from "react";
import { ActionButtons } from "@/components/ui/ActionButtons";
import styles from "./RoutePlaceholder.module.css";

export interface RoutePlaceholderProps {
  title: string;
  routePath: string;
  description: string;
  pendingItems?: string[];
}

export const RoutePlaceholder: React.FC<RoutePlaceholderProps> = ({
  title,
  routePath,
  description,
  pendingItems = [],
}) => {
  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.card}>
        <span className={styles.badge}>Phase 0 Foundation</span>
        <h1 className={styles.title}>{title}</h1>
        <div>
          <span className={styles.routeBadge}>{routePath}</span>
        </div>
        <p className={styles.description}>{description}</p>

        {pendingItems.length > 0 && (
          <div className={styles.confirmationBox}>
            <div className={styles.confirmationTitle}>
              Details Pending Confirmation for Later Phases:
            </div>
            <ul style={{ paddingLeft: "1.25rem", margin: 0 }}>
              {pendingItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.actionsWrapper}>
          <ActionButtons layout="horizontal" />
        </div>
      </div>
    </section>
  );
};
