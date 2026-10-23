"use client";

import React, { useState } from "react";
import Image from "next/image";
import { businessConfig } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ActionButtons } from "@/components/ui/ActionButtons";
import { Sparkles, MessageCircle, Phone, X, ZoomIn, ArrowRight } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "cuts" | "colour" | "bridal" | "skin" | "ambiance";
  categoryLabel: string;
  image: string;
  description: string;
  stylistNote?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "item-1",
    title: "Signature Volume Blowout & Face Framing",
    category: "cuts",
    categoryLabel: "Cuts & Styling",
    image: "/images/hero-editorial.jpg",
    description: "Multi-layered precision haircut styled with a bouncy, high-gloss editorial blowout finish.",
    stylistNote: "Flattering for round and oval face shapes; adds natural movement without losing length.",
  },
  {
    id: "item-2",
    title: "Dimensional Honey & Caramel Balayage",
    category: "colour",
    categoryLabel: "Couture Colour",
    image: "/images/hair-detail.jpg",
    description: "Seamless freehand painted highlights transitioning softly from espresso roots to warm honey ribbons.",
    stylistNote: "Low maintenance grow-out with 12-week gloss refresh regimen.",
  },
  {
    id: "item-3",
    title: "Precision Shear Architecture & Detailing",
    category: "cuts",
    categoryLabel: "Cuts & Styling",
    image: "/images/hair-cutting.jpg",
    description: "Dry and wet shear detailing ensuring seamless weight removal and crisp curtain fringe framing.",
    stylistNote: "Customized according to natural hair density and crown parting.",
  },
  {
    id: "item-4",
    title: "Haute HD Bridal Glow Transformation",
    category: "bridal",
    categoryLabel: "Bridal Artistry",
    image: "/images/bridal-editorial.jpg",
    description: "Photography-calibrated HD bridal makeup, champagne dewy highlighting, and romantic occasion updo.",
    stylistNote: "18-hour transfer-resistant setting designed for camera flash and long rituals.",
  },
  {
    id: "item-5",
    title: "Hydra-Dew Botanical Infusion Therapy",
    category: "skin",
    categoryLabel: "Skin & Facials",
    image: "/images/facial-spa.jpg",
    description: "Deep pore suction, ultrasound oxygenation, and cooling algae mask for immediate glass-skin luminosity.",
    stylistNote: "Recommended 48 hours prior to milestone celebrations for zero redness and peak radiance.",
  },
  {
    id: "item-6",
    title: "The Rajouri Garden Atelier Sanctuary",
    category: "ambiance",
    categoryLabel: "Salon Sanctuary",
    image: "/images/salon-interior.jpg",
    description: "Backlit arched bronze mirrors, terracotta warm walls, and private styling chairs designed for calm luxury.",
    stylistNote: "An unhurried sensory environment designed for deep relaxation.",
  },
];

const filterCategories = [
  { id: "all", label: "All Works" },
  { id: "cuts", label: "Cuts & Styling" },
  { id: "colour", label: "Couture Colour" },
  { id: "bridal", label: "Bridal Artistry" },
  { id: "skin", label: "Skin & Facials" },
  { id: "ambiance", label: "Salon Sanctuary" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
      {/* 1. Hero Header */}
      <section
        style={{
          position: "relative",
          paddingBlock: "4.5rem 3.5rem",
          backgroundColor: "var(--color-espresso-charcoal)",
          color: "#FFFFFF",
          backgroundImage:
            "radial-gradient(ellipse at 50% 20%, rgba(186, 104, 74, 0.22) 0%, rgba(30, 23, 18, 0.98) 75%)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ marginBottom: "1rem" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--color-terracotta)",
                backgroundColor: "rgba(186, 104, 74, 0.15)",
                border: "1px solid rgba(186, 104, 74, 0.35)",
                padding: "0.35rem 0.95rem",
                borderRadius: "var(--radius-full)",
              }}
            >
              <Sparkles size={12} />
              <span>✦ ATELIER PORTFOLIO &bull; RAJOURI GARDEN ✦</span>
            </span>
          </div>

          <h1
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(2.25rem, 4.5vw + 0.5rem, 3.75rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
              fontFamily: "var(--font-serif)",
            }}
          >
            The Visual Craft Gallery
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
              color: "rgba(255, 255, 255, 0.82)",
              maxWidth: "640px",
              marginInline: "auto",
              marginBottom: "2rem",
              lineHeight: 1.6,
            }}
          >
            An editorial look into our hair transformations, bespoke balayage, radiant bridal vanity, and calm salon
            ambiance in Rajouri Garden.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <Button
              href={businessConfig.whatsappHref}
              isExternal
              variant="primary"
              size="md"
              icon={<MessageCircle size={16} />}
            >
              Book an Appointment
            </Button>
            <Button
              href={businessConfig.phoneCallHref}
              isExternal
              variant="outline"
              size="md"
              icon={<Phone size={16} />}
              style={{
                color: "#FFFFFF",
                borderColor: "rgba(255, 255, 255, 0.4)",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              }}
            >
              Call Salon
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filter Chips Bar */}
      <section
        style={{
          backgroundColor: "var(--color-sand-feature)",
          borderBottom: "1px solid var(--border-warm)",
          paddingBlock: "1.25rem",
          position: "sticky",
          top: "72px",
          zIndex: 40,
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.6rem",
              flexWrap: "wrap",
            }}
          >
            {filterCategories.map((category) => {
              const isActive = activeFilter === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  style={{
                    minHeight: "44px",
                    padding: "0 1.25rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.85rem",
                    fontWeight: isActive ? 700 : 500,
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    backgroundColor: isActive ? "var(--color-terracotta)" : "#FFFFFF",
                    color: isActive ? "#FFFFFF" : "var(--color-espresso-dark)",
                    border: isActive ? "1px solid var(--color-terracotta)" : "1px solid var(--border-warm)",
                    boxShadow: isActive ? "0 4px 12px rgba(186, 104, 74, 0.25)" : "none",
                  }}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Gallery Grid (Structured with Reference Card Layout) */}
      <section style={{ backgroundColor: "var(--color-cream-base)", paddingBlock: "4.5rem" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "2.25rem",
            }}
          >
            {filteredItems.map((item) => (
              <article
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "18px",
                  overflow: "hidden",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(42, 33, 24, 0.08)",
                  boxShadow: "0 16px 40px -12px rgba(42, 33, 24, 0.1)",
                  cursor: "pointer",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 24px 50px -10px rgba(42, 33, 24, 0.18)";
                  e.currentTarget.style.borderColor = "rgba(186, 104, 74, 0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 16px 40px -12px rgba(42, 33, 24, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(42, 33, 24, 0.08)";
                }}
              >
                {/* Top Text Block with Centered Pill */}
                <div
                  style={{
                    padding: "1.5rem 1.25rem 1rem",
                    textAlign: "center",
                    background: "linear-gradient(180deg, #FDFBF8 0%, #F5ECE5 100%)",
                    borderBottom: "1px solid rgba(42, 33, 24, 0.05)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minHeight: "115px",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.85rem",
                      lineHeight: 1.5,
                      color: "var(--color-taupe-muted)",
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                  <div
                    style={{
                      width: "24px",
                      height: "2px",
                      backgroundColor: "var(--color-terracotta)",
                      borderRadius: "2px",
                      marginTop: "0.75rem",
                      opacity: 0.85,
                    }}
                  />
                </div>

                {/* Middle Photographic View */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "4 / 3.6",
                    overflow: "hidden",
                    backgroundColor: "var(--color-espresso-charcoal)",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      backgroundColor: "rgba(0, 0, 0, 0.55)",
                      color: "#FFFFFF",
                      borderRadius: "var(--radius-full)",
                      width: "36px",
                      height: "36px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    <ZoomIn size={16} />
                  </div>
                </div>

                {/* Bottom White Bar */}
                <div
                  style={{
                    padding: "1.1rem 1.4rem",
                    backgroundColor: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTop: "1px solid rgba(42, 33, 24, 0.06)",
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: "var(--color-terracotta)",
                        marginBottom: "0.15rem",
                      }}
                    >
                      {item.categoryLabel}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        color: "var(--color-espresso-dark)",
                        margin: 0,
                        lineHeight: 1.25,
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <span
                    style={{
                      color: "var(--color-taupe-light)",
                      fontSize: "1.25rem",
                      letterSpacing: "2px",
                    }}
                  >
                    •••
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Lightbox Modal */}
      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveModalItem(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(20, 14, 10, 0.88)",
            backdropFilter: "blur(8px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              maxWidth: "680px",
              width: "100%",
              overflow: "hidden",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.4)",
              position: "relative",
            }}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              aria-label="Close Preview"
              style={{
                position: "absolute",
                top: "14px",
                right: "14px",
                backgroundColor: "rgba(0, 0, 0, 0.65)",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "var(--radius-full)",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
                backdropFilter: "blur(4px)",
              }}
            >
              <X size={20} />
            </button>

            {/* Modal Image */}
            <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 11" }}>
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.title}
                fill
                sizes="680px"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Modal Content Details */}
            <div style={{ padding: "1.75rem" }}>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--color-terracotta)",
                  marginBottom: "0.4rem",
                }}
              >
                {activeModalItem.categoryLabel} &bull; Rajouri Garden
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.65rem",
                  fontWeight: 700,
                  color: "var(--color-espresso-dark)",
                  marginBottom: "0.6rem",
                }}
              >
                {activeModalItem.title}
              </h2>

              <p style={{ fontSize: "0.95rem", color: "var(--color-taupe-muted)", lineHeight: 1.6, marginBottom: "1rem" }}>
                {activeModalItem.description}
              </p>

              {activeModalItem.stylistNote && (
                <div
                  style={{
                    backgroundColor: "var(--color-sand-surface)",
                    borderLeft: "3px solid var(--color-terracotta)",
                    padding: "0.75rem 1rem",
                    borderRadius: "0 var(--radius-sm) var(--radius-sm) 0",
                    fontSize: "0.85rem",
                    color: "var(--color-espresso-dark)",
                    marginBottom: "1.5rem",
                  }}
                >
                  <strong>Stylist Insight: </strong> {activeModalItem.stylistNote}
                </div>
              )}

              <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <Button
                  href={businessConfig.whatsappHref}
                  isExternal
                  variant="primary"
                  size="md"
                  icon={<MessageCircle size={16} />}
                >
                  Enquire About This Look
                </Button>
                <Button
                  href={businessConfig.phoneCallHref}
                  isExternal
                  variant="outline"
                  size="md"
                  icon={<Phone size={16} />}
                >
                  Call Salon
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Consultation Reservation Banner */}
      <section
        style={{
          backgroundColor: "var(--color-espresso-charcoal)",
          color: "#FFFFFF",
          paddingBlock: "4.5rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "760px" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--color-terracotta)",
              marginBottom: "1rem",
            }}
          >
            Inspired by our craft?
          </span>

          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(2rem, 3.8vw, 2.85rem)",
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Book Your Custom Transformation Today
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255, 255, 255, 0.8)",
              marginBottom: "2.25rem",
              lineHeight: 1.6,
            }}
          >
            Bring your reference photos or discuss your desired haircut, colour, or bridal look with our senior stylists.
          </p>

          <ActionButtons />
        </div>
      </section>
    </div>
  );
}
