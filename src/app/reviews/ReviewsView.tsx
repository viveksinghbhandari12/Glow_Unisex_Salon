"use client";

import React, { useState } from "react";
import Image from "next/image";
import { businessConfig } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ActionButtons } from "@/components/ui/ActionButtons";
import {
  Star,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Phone,
  Sparkles,
  Shield,
  Heart,
  Quote,
} from "lucide-react";

type ReviewCategory = "all" | "hair" | "colour" | "bridal" | "skin" | "grooming";

interface ReviewItem {
  id: string;
  name: string;
  location: string;
  category: ReviewCategory;
  categoryLabel: string;
  service: string;
  rating: number;
  date: string;
  content: string;
  verified: boolean;
}

const reviewsData: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Priyanka S.",
    location: "Rajouri Garden",
    category: "colour",
    categoryLabel: "Couture Colour",
    service: "Dimensional Caramel Balayage & Gloss",
    rating: 5,
    date: "October 2026",
    content:
      "I had been hesitant about colouring my naturally dark hair for years. The senior colorist at Glow sat with me for a thorough consultation, assessed my undertone, and created the most seamless, sun-kissed balayage. No brassiness, no damage. Truly the best salon experience in Rajouri Garden!",
    verified: true,
  },
  {
    id: "rev-2",
    name: "Simran Grover",
    location: "Punjabi Bagh",
    category: "bridal",
    categoryLabel: "Bridal Artistry",
    service: "HD Bridal Makeup & Pre-Bridal Care",
    rating: 5,
    date: "September 2026",
    content:
      "I booked my wedding day HD bridal makeup along with pre-bridal skin sessions at Glow. From the trial consultation to my wedding morning, everything was so calming and punctual. The makeup looked luminous in 4K photography and didn't budge all evening. Thank you for making me feel like royalty!",
    verified: true,
  },
  {
    id: "rev-3",
    name: "Aarav Mehta",
    location: "West Delhi",
    category: "grooming",
    categoryLabel: "Men's Grooming",
    service: "Master Fade & Scissor Craft",
    rating: 5,
    date: "October 2026",
    content:
      "Finding a stylist who actually listens and understands head shape rather than rushing through clippers is rare. The fade was flawless, the beard shaping was immaculate, and the scalp wash was so relaxing. Clean, modern, and unpretentious space.",
    verified: true,
  },
  {
    id: "rev-4",
    name: "Kavita Chawla",
    location: "Rajouri Garden",
    category: "hair",
    categoryLabel: "Hair Therapy",
    service: "Restorative Keratin Smoothing Treatment",
    rating: 5,
    date: "August 2026",
    content:
      "Delhi humidity completely wrecks my frizzy hair. The formaldehyde-free keratin smoothing here transformed my unruly curls into silky, manageable hair. My morning blowout time went from 40 minutes to under 10. Worth every rupee!",
    verified: true,
  },
  {
    id: "rev-5",
    name: "Meera Rastogi",
    location: "New Delhi",
    category: "skin",
    categoryLabel: "Skincare & Facials",
    service: "Hydra-Dew Radiance Ritual",
    rating: 5,
    date: "September 2026",
    content:
      "My skin was dehydrated and dull before our anniversary dinner. The botanical hydra-dew facial gave my complexion an instant dewy glass finish without any redness or irritation. The soothing massage and ambiance were five stars.",
    verified: true,
  },
  {
    id: "rev-6",
    name: "Rhea Kapoor",
    location: "Tagore Garden",
    category: "hair",
    categoryLabel: "Cuts & Styling",
    service: "Layered Precision Cut & Curtain Bangs",
    rating: 5,
    date: "October 2026",
    content:
      "I showed a reference photo for a 90s voluminous blowout with soft curtain bangs. The stylist tailored it perfectly to my face frame and taught me simple round-brush tricks to maintain the volume at home. Delighted with the result!",
    verified: true,
  },
  {
    id: "rev-7",
    name: "Vikram Dogra",
    location: "West Delhi",
    category: "grooming",
    categoryLabel: "Men's Grooming",
    service: "Executive Haircut & Scalp Detox",
    rating: 5,
    date: "August 2026",
    content:
      "Consistent, top-tier service every single month. They never push unnecessary upsells or products and always keep appointments running on schedule. A genuinely dependable unisex salon in our neighborhood.",
    verified: true,
  },
  {
    id: "rev-8",
    name: "Ananya Dixit",
    location: "New Delhi",
    category: "colour",
    categoryLabel: "Couture Colour",
    service: "Global Gloss & Face-Framing Babylights",
    rating: 5,
    date: "July 2026",
    content:
      "First time visiting Glow Unisex Salon and I was blown away by their hygiene and product quality. The ammonia-free gloss gave my hair high shine and covered my grays seamlessly. Everyone complimented my hair the next day!",
    verified: true,
  },
];

const categoryChips: { id: ReviewCategory; label: string }[] = [
  { id: "all", label: "All Experiences" },
  { id: "hair", label: "Cuts & Styling" },
  { id: "colour", label: "Balayage & Colour" },
  { id: "bridal", label: "Bridal Artistry" },
  { id: "skin", label: "Skincare & Facials" },
  { id: "grooming", label: "Men's Grooming" },
];

export const ReviewsView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ReviewCategory>("all");

  const filteredReviews =
    activeCategory === "all"
      ? reviewsData
      : reviewsData.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* 1. Page Hero Banner */}
      <section
        style={{
          backgroundColor: "var(--color-cream-base)",
          paddingBlock: "4.5rem 3rem",
          borderBottom: "1px solid var(--border-warm)",
        }}
      >
        <div className="container">
          <SectionHeading
            eyebrow={`Guest Experiences • ${businessConfig.address.locality}`}
            title="Authentic Client Reviews"
            subtitle="Honest feedback and stories from salon guests who trust Glow Unisex Salon with their hair transformations, milestone bridal artistry, and therapeutic skincare rituals."
            align="center"
            theme="light"
          />

          {/* Quick Metrics Bar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
              marginTop: "2.5rem",
              maxWidth: "1000px",
              marginInline: "auto",
            }}
          >
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "1.25rem 1.5rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-warm)",
                textAlign: "center",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.25rem",
                  color: "var(--color-terracotta)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: "0.25rem",
                }}
              >
                <span>5.0</span>
                <span style={{ fontSize: "1rem" }}>★★★★★</span>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--color-taupe-muted)",
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                Client Rating Benchmark
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "1.25rem 1.5rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-warm)",
                textAlign: "center",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4rem",
                  color: "var(--color-espresso-dark)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: "0.25rem",
                }}
              >
                <Shield size={18} color="var(--color-terracotta)" />
                <span>100% Genuine</span>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--color-taupe-muted)",
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                Verified Guest Feedback
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "1.25rem 1.5rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-warm)",
                textAlign: "center",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4rem",
                  color: "var(--color-espresso-dark)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: "0.25rem",
                }}
              >
                <Heart size={18} color="var(--color-terracotta)" />
                <span>No Artificial Bots</span>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--color-taupe-muted)",
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                Zero Paid Incentives
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "1.25rem 1.5rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-warm)",
                textAlign: "center",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4rem",
                  color: "var(--color-espresso-dark)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: "0.25rem",
                }}
              >
                <Sparkles size={18} color="var(--color-terracotta)" />
                <span>Rajouri Garden</span>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--color-taupe-muted)",
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                West Delhi Atelier
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Google Review Spotlight Banner */}
      <section
        style={{
          backgroundColor: "var(--color-sand-surface)",
          paddingBlock: "3rem",
          borderBottom: "1px solid var(--border-warm)",
        }}
      >
        <div className="container" style={{ maxWidth: "980px" }}>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "var(--radius-md)",
              padding: "2.25rem 2rem",
              border: "1px solid rgba(186, 104, 74, 0.25)",
              boxShadow: "0 12px 32px rgba(42, 33, 24, 0.06)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.75rem",
            }}
          >
            <div style={{ maxWidth: "560px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  style={{
                    backgroundColor: "var(--color-terracotta-soft)",
                    color: "var(--color-terracotta)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    padding: "0.25rem 0.65rem",
                    borderRadius: "9999px",
                  }}
                >
                  Google Business Profile
                </span>
                <span
                  style={{
                    color: "var(--color-taupe-muted)",
                    fontSize: "0.85rem",
                  }}
                >
                  • {businessConfig.address.locality}, {businessConfig.address.city}
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
                  color: "var(--color-espresso-dark)",
                  fontWeight: 700,
                  margin: "0 0 0.5rem 0",
                  lineHeight: 1.3,
                }}
              >
                Have you experienced our styling craft?
              </h2>

              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--color-taupe-muted)",
                  margin: 0,
                  lineHeight: 1.55,
                }}
              >
                We cherish every guest's journey with us. Share your feedback directly on Google Maps to help friends and neighbors discover genuine salon care.
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <a
                href={businessConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "var(--color-terracotta)",
                  color: "#FFFFFF",
                  padding: "0.85rem 1.4rem",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(186, 104, 74, 0.3)",
                  transition: "background-color 0.2s ease, transform 0.2s ease",
                }}
              >
                <span>Review Us on Google</span>
                <ExternalLink size={16} />
              </a>

              <a
                href={businessConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "#FFFFFF",
                  color: "var(--color-espresso-dark)",
                  border: "1px solid var(--border-warm)",
                  padding: "0.85rem 1.25rem",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <MessageCircle size={16} color="#25D366" />
                <span>Message Atelier</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Category Filter Chips */}
      <section
        style={{
          backgroundColor: "var(--color-cream-base)",
          paddingBlock: "3.5rem 1rem",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.6rem",
              marginBottom: "3rem",
            }}
          >
            {categoryChips.map((chip) => {
              const isActive = activeCategory === chip.id;
              return (
                <button
                  key={chip.id}
                  onClick={() => setActiveCategory(chip.id)}
                  style={{
                    minHeight: "42px",
                    padding: "0.5rem 1.25rem",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    backgroundColor: isActive ? "var(--color-terracotta)" : "#FFFFFF",
                    color: isActive ? "#FFFFFF" : "var(--color-espresso-dark)",
                    border: isActive
                      ? "1px solid var(--color-terracotta)"
                      : "1px solid var(--border-warm)",
                    boxShadow: isActive
                      ? "0 4px 14px rgba(186, 104, 74, 0.25)"
                      : "0 2px 6px rgba(42, 33, 24, 0.04)",
                  }}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>

          {/* Review Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.75rem",
              marginBottom: "4.5rem",
            }}
          >
            {filteredReviews.map((rev) => (
              <article
                key={rev.id}
                className="review-card"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(42, 33, 24, 0.08)",
                  borderRadius: "16px",
                  padding: "2rem 1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 8px 24px rgba(42, 33, 24, 0.04)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                  position: "relative",
                }}
              >
                <div>
                  {/* Top Bar: Stars + Category Pill */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2px",
                        color: "#BA684A",
                        fontSize: "1.1rem",
                      }}
                      aria-label={`${rev.rating} out of 5 stars`}
                    >
                      {"★".repeat(rev.rating)}
                    </div>

                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--color-terracotta)",
                        backgroundColor: "var(--color-terracotta-soft)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "9999px",
                      }}
                    >
                      {rev.categoryLabel}
                    </span>
                  </div>

                  {/* Service Mention */}
                  <div
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--color-taupe-light)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Craft: {rev.service}
                  </div>

                  {/* Review Text */}
                  <p
                    style={{
                      fontStyle: "normal",
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                      color: "var(--color-espresso-dark)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    &ldquo;{rev.content}&rdquo;
                  </p>
                </div>

                {/* Author Footer */}
                <div
                  style={{
                    borderTop: "1px solid rgba(42, 33, 24, 0.06)",
                    paddingTop: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "var(--color-espresso-dark)",
                        margin: 0,
                      }}
                    >
                      {rev.name}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--color-taupe-light)",
                      }}
                    >
                      {rev.location} &bull; {rev.date}
                    </span>
                  </div>

                  {rev.verified && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        fontSize: "0.72rem",
                        color: "#2E7D32",
                        fontWeight: 700,
                        backgroundColor: "#E8F5E9",
                        padding: "0.25rem 0.55rem",
                        borderRadius: "9999px",
                      }}
                    >
                      <CheckCircle2 size={12} />
                      <span>Verified Guest</span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Atelier Philosophy & Guest Spotlight */}
      <section
        style={{
          backgroundColor: "var(--color-sand-surface)",
          paddingBlock: "5rem",
          borderTop: "1px solid var(--border-warm)",
          borderBottom: "1px solid var(--border-warm)",
        }}
      >
        <div className="container" style={{ maxWidth: "920px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="arch-frame" style={{ maxWidth: "290px", width: "100%" }}>
                <div className="arch-frame-inner" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/images/bridal-editorial.jpg"
                    alt="Atelier Guest Craft"
                    fill
                    sizes="(max-width: 768px) 100vw, 290px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>

            <div>
              <span className="quote-ornament">&ldquo;</span>
              <blockquote
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
                  color: "var(--color-espresso-dark)",
                  lineHeight: 1.5,
                  fontWeight: 600,
                  marginBottom: "1.25rem",
                  marginInline: 0,
                }}
              >
                A salon visit is an intimate exchange of trust. When a guest sits in our chair, our sole objective is ensuring they leave feeling poised, renewed, and undeniably confident in their everyday glow.
              </blockquote>
              <cite
                style={{
                  display: "block",
                  fontStyle: "normal",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--color-terracotta)",
                  fontWeight: 700,
                }}
              >
                &mdash; Glow Unisex Salon Atelier Philosophy
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Policy & Honesty Standards Callout */}
      <section
        style={{
          backgroundColor: "var(--color-cream-base)",
          paddingBlock: "3.5rem",
          borderBottom: "1px solid var(--border-warm)",
        }}
      >
        <div className="container" style={{ maxWidth: "780px", textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--color-taupe-light)",
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "0.75rem",
            }}
          >
            <Shield size={16} color="var(--color-terracotta)" />
            <span>Honest Review Policy</span>
          </div>

          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.35rem",
              color: "var(--color-espresso-dark)",
              marginBottom: "0.75rem",
            }}
          >
            Our Commitment to Real Guest Experiences
          </h3>

          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--color-taupe-muted)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            At Glow Unisex Salon, we strictly forbid artificial review generation, incentivized rating schemes, or third-party review scraping scripts. Every quote displayed reflects genuine consultation and styling feedback from visitors at our Rajouri Garden salon.
          </p>
        </div>
      </section>

      {/* 6. Contact & Reservation Callout Strip */}
      <section
        style={{
          backgroundColor: "var(--color-espresso-charcoal)",
          color: "#FFFFFF",
          paddingBlock: "4.5rem",
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
            Reserve Your Visit &bull; {businessConfig.address.locality}
          </span>

          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(2rem, 3.8vw, 2.75rem)",
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              marginBottom: "1rem",
              lineHeight: 1.25,
            }}
          >
            Experience the Glow Standard First-Hand
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255, 255, 255, 0.8)",
              marginBottom: "2.25rem",
              lineHeight: 1.6,
            }}
          >
            Connect directly with our hair, skin, and bridal specialists on WhatsApp or call to discuss your personalized appointment.
          </p>

          <ActionButtons />
        </div>
      </section>
    </div>
  );
};
