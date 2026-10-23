import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { businessConfig } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ActionButtons } from "@/components/ui/ActionButtons";
import {
  Scissors,
  Sparkles,
  ShieldCheck,
  Heart,
  Award,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Atelier Philosophy & Craft | Glow Unisex Salon",
  description:
    "Discover the story, styling philosophy, and hygiene standards of Glow Unisex Salon in Rajouri Garden, New Delhi. Unhurried consultations and European cutting architecture.",
};

const pillars = [
  {
    icon: Scissors,
    title: "Structural Scissor Architecture",
    description:
      "We reject rushed, template cuts. Every haircut begins with a dry consultation assessing bone structure, growth whorls, and hair density to engineer shapes that move effortlessly and grow out seamlessly.",
  },
  {
    icon: Sparkles,
    title: "Bespoke Pigment Alchemy",
    description:
      "Color is never out-of-the-box. Our master colorists analyze skin undertones to custom-mix hand-painted balayage, honey caramel highlights, and ammonia-free glosses that eliminate brassiness.",
  },
  {
    icon: ShieldCheck,
    title: "Hospital-Grade Hygiene",
    description:
      "Your health is non-negotiable. We strictly employ medical-grade autoclaved stainless steel instruments, sealed single-use biodegradable capes, and rigorous workstation sanitization between each guest.",
  },
  {
    icon: Heart,
    title: "Sensory Sanctuary Culture",
    description:
      "A peaceful oasis in Rajouri Garden. Soft acoustic buffering, calming warm lighting, and unhurried consultations ensure you unwind completely while our artisans dedicate their focus solely to you.",
  },
];

const teamSpecialists = [
  {
    role: "Creative Director & Hair Architect",
    experience: "10+ Years Craft Experience",
    bio: "Specializes in precision dry-cutting, bespoke face-framing layers, and architectural bobs tailored to individual head geometry.",
    signature: "Precision Geometry & Weightless Layering",
  },
  {
    role: "Master Colorist & Balayage Specialist",
    experience: "Certified L'Oréal & Schwarzkopf Professional",
    bio: "Expert in seamless freehand French balayage, dimensional brunette melts, and restorative post-bleach bond therapies.",
    signature: "Sun-Kissed Dimensional Balayage",
  },
  {
    role: "Haute Bridal & Derma Artist",
    experience: "Certified Airbrush & Dermal Aesthetician",
    bio: "Dedicated to 18-hour sweatproof HD bridal makeup, de-pigmentation peels, and therapeutic pre-wedding skin preparation.",
    signature: "Weightless 4K Glass-Skin Finish",
  },
];

const brandPartners = [
  "OLAPLEX®",
  "L'ORÉAL PROFESSIONNEL",
  "CASMARA® PARIS",
  "SCHWARZKOPF PROFESSIONAL",
  "RICA® WAX ITALY",
];

export default function AboutPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
      {/* 1. Page Hero Banner (Deep Chocolate #3E000C & Sand #FFECD1) */}
      <section
        style={{
          position: "relative",
          paddingBlock: "5rem 4.5rem",
          backgroundColor: "#3E000C",
          color: "#FFECD1",
          backgroundImage:
            "radial-gradient(ellipse at 70% 30%, rgba(255, 236, 209, 0.16) 0%, #250007 80%)",
          borderBottom: "1px solid rgba(255, 236, 209, 0.14)",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "860px", marginInline: "auto", textAlign: "center" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#3E000C",
                backgroundColor: "#FFECD1",
                padding: "0.38rem 1rem",
                borderRadius: "9999px",
                marginBottom: "1.25rem",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Sparkles size={13} color="#3E000C" />
              <span>ATELIER PHILOSOPHY • RAJOURI GARDEN</span>
            </span>

            <h1
              style={{
                color: "#FFECD1",
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.025em",
                fontFamily: "var(--font-serif)",
              }}
            >
              The Art of Considered Beauty
            </h1>

            <p
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
                color: "rgba(255, 236, 209, 0.88)",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Founded with a singular commitment: to deliver unhurried consultations, European cutting architecture, and restorative dermatological treatments in a serene West Delhi sanctuary.
            </p>
          </div>
        </div>
      </section>

      {/* 2. The Atelier Story: Countering the Rushed Assembly Line */}
      <section
        style={{
          backgroundColor: "#FFF6E8",
          paddingBlock: "6rem 5.5rem",
          borderBottom: "1px solid rgba(62, 0, 12, 0.12)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* Left: Sanctuary Photo Frame */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                className="arch-frame"
                style={{
                  maxWidth: "400px",
                  width: "100%",
                  border: "1px solid rgba(62, 0, 12, 0.25)",
                  background:
                    "radial-gradient(circle at 50% 20%, rgba(255, 236, 209, 0.4), transparent 70%)",
                }}
              >
                <div className="arch-frame-inner" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src="/images/salon-interior.jpg"
                    alt="Glow Unisex Salon Boutique Interior in Rajouri Garden"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "-14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#3E000C",
                    color: "#FFECD1",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    padding: "0.45rem 1.15rem",
                    borderRadius: "9999px",
                    whiteSpace: "nowrap",
                    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  ✦ Sanctuary in Rajouri Garden ✦
                </div>
              </div>
            </div>

            {/* Right: The Narrative Prose */}
            <div>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "#3E000C",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                OUR HERITAGE &amp; INTENTION
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 3.6vw, 2.75rem)",
                  color: "#3E000C",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Where Craftsmanship Meets Deep Personal Care
              </h2>

              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  color: "rgba(62, 0, 12, 0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                Glow Unisex Salon was established to offer a deliberate alternative to the hurried, transactional atmosphere typical of commercial salons. We believe a visit to the salon is not a chore—it is an intimate ritual of self-renewal, confidence, and trust.
              </p>

              <p
                style={{
                  fontSize: "0.98rem",
                  lineHeight: 1.7,
                  color: "rgba(62, 0, 12, 0.72)",
                  marginBottom: "2rem",
                }}
              >
                Every service in our Rajouri Garden atelier begins with a real conversation. We inspect hair texture and scalp vitality, evaluate skin undertones, and listen attentively to your lifestyle needs before formulating our approach. You will never be rushed through a conveyor belt of chairs.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1.5rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid rgba(62, 0, 12, 0.12)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.75rem",
                      fontWeight: 700,
                      color: "#3E000C",
                    }}
                  >
                    100%
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "rgba(62, 0, 12, 0.7)" }}>
                    Bespoke Formulations
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.75rem",
                      fontWeight: 700,
                      color: "#3E000C",
                    }}
                  >
                    Zero
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "rgba(62, 0, 12, 0.7)" }}>
                    Ammonia or Harsh Sulfates
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Four Core Pillars of The Glow Standard */}
      <section style={{ backgroundColor: "#FFFBF5", paddingBlock: "5.5rem" }}>
        <div className="container">
          <SectionHeading
            eyebrow="The Glow Standard"
            title="The Principles That Guide Every Appointment"
            subtitle="Meticulous standards governing our consultations, cutting geometry, and clinical hygiene."
            align="center"
            theme="light"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem",
              marginTop: "3.5rem",
            }}
          >
            {pillars.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  style={{
                    backgroundColor: "#FFFFFF",
                    padding: "2.25rem 1.85rem",
                    borderRadius: "18px",
                    border: "1px solid rgba(62, 0, 12, 0.1)",
                    boxShadow: "0 8px 24px rgba(62, 0, 12, 0.04)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      backgroundColor: "#FFECD1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <IconComponent size={24} color="#3E000C" />
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#3E000C",
                      marginBottom: "0.75rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      color: "rgba(62, 0, 12, 0.75)",
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3.5 Botanical Artistry & Sunflower Inspiration */}
      <section
        style={{
          backgroundColor: "#FFF6E8",
          paddingBlock: "5.5rem",
          borderTop: "1px solid rgba(62, 0, 12, 0.12)",
          borderBottom: "1px solid rgba(62, 0, 12, 0.12)",
        }}
      >
        <div className="container" style={{ maxWidth: "1060px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "3.5rem",
              alignItems: "center",
            }}
          >
            {/* Left: Artistic Sunflower Mosaic Frame */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  position: "relative",
                  maxWidth: "430px",
                  width: "100%",
                  borderRadius: "24px",
                  padding: "12px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(62, 0, 12, 0.12)",
                  boxShadow: "0 18px 45px rgba(62, 0, 12, 0.08)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "735/601",
                    borderRadius: "16px",
                    overflow: "hidden",
                    backgroundColor: "#FFFDF9",
                  }}
                >
                  <Image
                    src="/images/sunflower-art.jpg"
                    alt="Golden Sunflower Botanical Mosaic Art"
                    fill
                    sizes="(max-width: 768px) 100vw, 430px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#3E000C",
                    color: "#FFECD1",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    padding: "0.45rem 1.15rem",
                    borderRadius: "9999px",
                    whiteSpace: "nowrap",
                    boxShadow: "0 6px 18px rgba(62, 0, 12, 0.25)",
                    border: "1px solid rgba(255, 236, 209, 0.3)",
                  }}
                >
                  ✦ Botanical Vitality ✦
                </div>
              </div>
            </div>

            {/* Right: The Narrative Prose */}
            <div>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "#3E000C",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                BOTANICAL SPIRIT &amp; WARM RADIANCE
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.95rem, 3.4vw, 2.6rem)",
                  color: "#3E000C",
                  fontWeight: 700,
                  lineHeight: 1.22,
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Rooted in Warmth, Natural Light &amp; Artistry
              </h2>

              <p
                style={{
                  fontSize: "1.02rem",
                  lineHeight: 1.7,
                  color: "rgba(62, 0, 12, 0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                Just as sunflowers turn toward warm sunlight, our salon philosophy centers on revealing your inherent, natural luminescence. We treat every styling and derma appointment as personal craftsmanship—drawing from rich golden tones, organic nourishing extracts, and gentle European formulations.
              </p>

              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.65,
                  color: "rgba(62, 0, 12, 0.72)",
                  margin: 0,
                }}
              >
                From Casmara algae-peel infusions to golden body polishes and bond-fortifying toners, we bring warmth, vitality, and refined care to every visit at our Rajouri Garden sanctuary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Craft Collective / Senior Stylists Spotlight */}
      <section
        style={{
          backgroundColor: "#3E000C",
          color: "#FFECD1",
          paddingBlock: "5.5rem",
          borderTop: "1px solid rgba(255, 236, 209, 0.12)",
          borderBottom: "1px solid rgba(255, 236, 209, 0.12)",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "760px", marginInline: "auto", marginBottom: "3.5rem" }}>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#FFECD1",
                opacity: 0.85,
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              OUR SENIOR ARTISANS
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 3.6vw, 2.75rem)",
                color: "#FFECD1",
                fontWeight: 700,
                margin: "0 0 0.75rem 0",
              }}
            >
              The Craft Collective
            </h2>
            <p style={{ color: "rgba(255, 236, 209, 0.75)", fontSize: "1rem", lineHeight: 1.6, margin: 0 }}>
              Experienced stylists, master colorists, and certified dermal artists united by a passion for refined personal aesthetics.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {teamSpecialists.map((stylist) => (
              <div
                key={stylist.role}
                style={{
                  backgroundColor: "#2B0008",
                  border: "1px solid rgba(255, 236, 209, 0.15)",
                  borderRadius: "18px",
                  padding: "2.25rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "#3E000C",
                      backgroundColor: "#FFECD1",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "9999px",
                      display: "inline-block",
                      marginBottom: "1rem",
                    }}
                  >
                    {stylist.experience}
                  </span>

                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.3rem",
                      color: "#FFECD1",
                      fontWeight: 700,
                      marginBottom: "0.75rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {stylist.role}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "rgba(255, 236, 209, 0.75)",
                      lineHeight: 1.65,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {stylist.bio}
                  </p>
                </div>

                <div
                  style={{
                    borderTop: "1px solid rgba(255, 236, 209, 0.12)",
                    paddingTop: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "rgba(255, 236, 209, 0.6)",
                      display: "block",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Signature Focus:
                  </span>
                  <strong style={{ fontSize: "0.9rem", color: "#FFECD1" }}>
                    {stylist.signature}
                  </strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Brand Partnerships Seal (Sand Light #FFFBF5) */}
      <section
        style={{
          backgroundColor: "#FFFBF5",
          paddingBlock: "3.5rem",
          borderBottom: "1px solid rgba(62, 0, 12, 0.1)",
          textAlign: "center",
        }}
      >
        <div className="container">
          <span
            style={{
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "rgba(62, 0, 12, 0.6)",
              display: "block",
              marginBottom: "1.25rem",
              fontWeight: 700,
            }}
          >
            AUTHORIZED FORMULATION &amp; COLOR PARTNERS
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(1.5rem, 4vw, 3.5rem)",
              flexWrap: "wrap",
            }}
          >
            {brandPartners.map((brand) => (
              <span
                key={brand}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.1rem",
                  letterSpacing: "0.08em",
                  color: "#3E000C",
                  fontWeight: 700,
                  opacity: 0.85,
                }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact & Visit Invitation Strip (Deep Chocolate #3E000C) */}
      <section
        style={{
          backgroundColor: "#3E000C",
          color: "#FFECD1",
          paddingBlock: "5rem",
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
              letterSpacing: "0.18em",
              color: "#FFECD1",
              opacity: 0.85,
              marginBottom: "1rem",
            }}
          >
            Visit Our Sanctuary &bull; {businessConfig.address.locality}
          </span>

          <h2
            style={{
              color: "#FFECD1",
              fontSize: "clamp(2rem, 3.8vw, 2.9rem)",
              fontFamily: "var(--font-serif)",
              fontWeight: 700,
              marginBottom: "1.15rem",
              lineHeight: 1.2,
            }}
          >
            Experience the Glow Difference
          </h2>

          <p
            style={{
              fontSize: "1.08rem",
              color: "rgba(255, 236, 209, 0.82)",
              marginBottom: "2.5rem",
              lineHeight: 1.65,
            }}
          >
            Connect directly with our hair, skin, and bridal specialists on WhatsApp or call to reserve your personalized consultation.
          </p>

          <ActionButtons />
        </div>
      </section>
    </div>
  );
}
