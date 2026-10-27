"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Download,
  Sparkles,
  QrCode,
  RotateCw,
  LayoutGrid,
  Phone,
  MessageCircle,
  Layers,
  Printer,
  ShieldCheck,
  Check,
} from "lucide-react";
import { businessConfig } from "@/data/business";
import styles from "./VisitingCardShowcase.module.css";

export const VisitingCardShowcase: React.FC = () => {
  const [viewMode, setViewMode] = useState<"dual" | "flip">("dual");
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={styles.showcaseContainer}>
      {/* 1. View Mode Switcher */}
      <div className={styles.modeSwitcherWrap}>
        <div className={styles.modeSwitcher} role="tablist" aria-label="Visiting Card Display Mode">
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === "dual"}
            className={`${styles.modeBtn} ${viewMode === "dual" ? styles.modeBtnActive : ""}`}
            onClick={() => setViewMode("dual")}
          >
            <LayoutGrid size={15} />
            <span>Dual Presentation</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === "flip"}
            className={`${styles.modeBtn} ${viewMode === "flip" ? styles.modeBtnActive : ""}`}
            onClick={() => setViewMode("flip")}
          >
            <RotateCw size={15} />
            <span>3D Interactive Flip</span>
          </button>
        </div>
      </div>

      {/* 2A. Dual Side-by-Side Presentation */}
      {viewMode === "dual" ? (
        <div className={styles.dualCardsGrid}>
          {/* Front Face Card */}
          <div className={styles.cardItemWrapper}>
            <div className={styles.cardMetaHeader}>
              <span className={styles.cardBadge}>
                <Sparkles size={13} style={{ color: "#B8863D" }} />
                <span>Front Facing</span>
              </span>
              <span className={styles.cardSubTag}>Gold-Sand Inlay on Couture Chocolate</span>
            </div>

            <div className={styles.cardOuterFrame}>
              <div className={styles.cardInnerCanvas}>
                <Image
                  src="/images/visiting-card-front.svg"
                  alt="Glow Unisex Salon Visiting Card Front"
                  width={900}
                  height={500}
                  unoptimized
                  className={styles.cardImage}
                  priority
                />
              </div>
            </div>

            <div className={styles.cardFooterActions}>
              <a
                href={businessConfig.phoneCallHref}
                className={styles.secondaryActionBtn}
              >
                <Phone size={13} />
                <span>Call Concierge</span>
              </a>
              <a
                href="/images/visiting-card-front.svg"
                download="Glow-Unisex-Salon-Visiting-Card-Front.svg"
                className={styles.downloadBtn}
              >
                <Download size={14} />
                <span>Download Front SVG</span>
              </a>
            </div>
          </div>

          {/* Back Face Card */}
          <div className={styles.cardItemWrapper}>
            <div className={styles.cardMetaHeader}>
              <span className={styles.cardBadge}>
                <QrCode size={13} style={{ color: "#B8863D" }} />
                <span>Back Facing</span>
              </span>
              <span className={styles.cardSubTag}>Direct WhatsApp QR &amp; Coordinates</span>
            </div>

            <div className={styles.cardOuterFrame}>
              <div className={styles.cardInnerCanvas}>
                <Image
                  src="/images/visiting-card-back.svg"
                  alt="Glow Unisex Salon Visiting Card Back"
                  width={900}
                  height={500}
                  unoptimized
                  className={styles.cardImage}
                  priority
                />
              </div>
            </div>

            <div className={styles.cardFooterActions}>
              <a
                href={businessConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryActionBtn}
              >
                <MessageCircle size={13} />
                <span>WhatsApp Concierge</span>
              </a>
              <a
                href="/images/visiting-card-back.svg"
                download="Glow-Unisex-Salon-Visiting-Card-Back.svg"
                className={styles.downloadBtn}
              >
                <Download size={14} />
                <span>Download Back SVG</span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        /* 2B. 3D Interactive Flip Card Stage */
        <div className={styles.flipStageContainer}>
          <div className={styles.flipHintBadge}>
            <RotateCw size={13} />
            <span>Click card or button below to flip ({isFlipped ? "Showing Back" : "Showing Front"})</span>
          </div>

          <div
            className={styles.flipCardPerspective}
            onClick={() => setIsFlipped((prev) => !prev)}
            role="button"
            tabIndex={0}
            aria-label="Flip visiting card"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsFlipped((prev) => !prev);
              }
            }}
          >
            <div
              className={`${styles.flipCardInner} ${
                isFlipped ? styles.flipCardInnerFlipped : ""
              }`}
            >
              {/* Front Face */}
              <div className={styles.flipFaceFront}>
                <div className={styles.cardOuterFrame}>
                  <div className={styles.cardInnerCanvas}>
                    <Image
                      src="/images/visiting-card-front.svg"
                      alt="Glow Unisex Salon Visiting Card Front"
                      width={900}
                      height={500}
                      unoptimized
                      className={styles.cardImage}
                    />
                  </div>
                </div>
              </div>

              {/* Back Face */}
              <div className={styles.flipFaceBack}>
                <div className={styles.cardOuterFrame}>
                  <div className={styles.cardInnerCanvas}>
                    <Image
                      src="/images/visiting-card-back.svg"
                      alt="Glow Unisex Salon Visiting Card Back"
                      width={900}
                      height={500}
                      unoptimized
                      className={styles.cardImage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Flip Controls & Direct Downloads */}
          <div className={styles.flipControlsRow}>
            <button
              type="button"
              className={styles.flipToggleBtn}
              onClick={() => setIsFlipped((prev) => !prev)}
            >
              <RotateCw size={15} />
              <span>{isFlipped ? "Flip to Front Side" : "Flip to Back Coordinates"}</span>
            </button>

            <a
              href={isFlipped ? "/images/visiting-card-back.svg" : "/images/visiting-card-front.svg"}
              download={
                isFlipped
                  ? "Glow-Unisex-Salon-Visiting-Card-Back.svg"
                  : "Glow-Unisex-Salon-Visiting-Card-Front.svg"
              }
              className={styles.downloadBtn}
            >
              <Download size={14} />
              <span>Download {isFlipped ? "Back" : "Front"} SVG</span>
            </a>
          </div>
        </div>
      )}

      {/* 3. Luxury Print Collateral Specifications Ribbon */}
      <div className={styles.specsRibbon}>
        <div className={styles.specItem}>
          <Layers size={18} className={styles.specIcon} />
          <div className={styles.specContent}>
            <span className={styles.specTitle}>Standard Ratio</span>
            <span className={styles.specDetail}>90 × 50 mm (1.8:1) Precision Print Proportions</span>
          </div>
        </div>

        <div className={styles.specItem}>
          <Printer size={18} className={styles.specIcon} />
          <div className={styles.specContent}>
            <span className={styles.specTitle}>Tactile Finish</span>
            <span className={styles.specDetail}>400 GSM Silk Matte Cotton with Gold Foil Inlay</span>
          </div>
        </div>

        <div className={styles.specItem}>
          <QrCode size={18} className={styles.specIcon} />
          <div className={styles.specContent}>
            <span className={styles.specTitle}>Smart Concierge</span>
            <span className={styles.specDetail}>High-Density Instant WhatsApp Reception QR</span>
          </div>
        </div>

        <div className={styles.specItem}>
          <ShieldCheck size={18} className={styles.specIcon} />
          <div className={styles.specContent}>
            <span className={styles.specTitle}>Vector Master</span>
            <span className={styles.specDetail}>Resolution-Independent Scalable SVG Collateral</span>
          </div>
        </div>
      </div>
    </div>
  );
};
