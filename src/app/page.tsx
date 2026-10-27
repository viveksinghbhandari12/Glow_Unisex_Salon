import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { businessConfig } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ActionButtons } from "@/components/ui/ActionButtons";
import { ServiceCard } from "@/components/ui/ServiceCard";
import {
  MessageCircle,
  Scissors,
  Heart,
  Star,
  Calendar,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Glow Unisex Salon | Chocolate & Sand Editorial Hair, Skin & Bridal Atelier",
  description:
    "Glow Unisex Salon in Rajouri Garden, New Delhi. Bespoke hair cutting, balayage, couture bridal artistry, and clinical skincare in a warm luxury sanctuary.",
};

const signatureGallery = [
  {
    title: "Couture Balayage & Colour",
    category: "Hair Artistry",
    image: "/images/hair-detail.jpg",
    href: "/hair",
    description: "Hand-painted dimension & glossy toners",
  },
  {
    title: "The Rajouri Garden Sanctuary",
    category: "Salon Atmosphere",
    image: "/images/salon-interior.jpg",
    href: "/about",
    description: "Arched bronze mirrors & calming aesthetic",
  },
  {
    title: "Haute Bridal Transformation",
    category: "Skin & Bridal",
    image: "/images/bridal-editorial.jpg",
    href: "/skin-bridal",
    description: "18-hour sweatproof HD & airbrush finish",
  },
];

const brandPartners = [
  "OLAPLEX®",
  "L'ORÉAL PROFESSIONNEL",
  "CASMARA® PARIS",
  "SCHWARZKOPF PROFESSIONAL",
  "RICA® WAX ITALY",
];

export default function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
      {/* 1. Editorial Magazine Hero Section (Deep Chocolate #3E000C & Sand #FFECD1) */}
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "3.5rem",
              alignItems: "center",
            }}
          >
            {/* Left: Headline & Editorial Prose */}
            <div>
              <div
                style={{
                  marginBottom: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "#3E000C",
                    backgroundColor: "#FFECD1",
                    padding: "0.38rem 1rem",
                    borderRadius: "9999px",
                    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <Sparkles size={13} color="#3E000C" />
                  <span>ATELIER GLOW • RAJOURI GARDEN</span>
                </span>
              </div>

              <h1
                style={{
                  color: "#FFECD1",
                  fontSize: "clamp(2.6rem, 5.2vw + 0.5rem, 4.4rem)",
                  fontWeight: 700,
                  lineHeight: 1.08,
                  marginBottom: "1.35rem",
                  letterSpacing: "-0.025em",
                  fontFamily: "var(--font-serif)",
                }}
              >
                Your Next Great Hair Day, in Rajouri Garden.
              </h1>

              <p
                style={{
                  fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
                  color: "rgba(255, 236, 209, 0.88)",
                  marginBottom: "2.5rem",
                  lineHeight: 1.65,
                  maxWidth: "540px",
                }}
              >
                Expert styling, personalized care, and a warm welcome — every single visit.
                Precision hair craft, couture balayage, and milestone bridal excellence designed
                specifically for you.
              </p>

              {/* Dual Action CTAs */}
              <div
                className="hero-cta-group"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  flexWrap: "wrap",
                  marginBottom: "3rem",
                }}
              >
                <a
                  href={businessConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    backgroundColor: "#FFECD1",
                    color: "#3E000C",
                    padding: "0.85rem 1.75rem",
                    borderRadius: "var(--radius-sm)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    textDecoration: "none",
                    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.25)",
                    transition: "transform 0.2s ease, background-color 0.2s ease",
                  }}
                >
                  <MessageCircle size={18} color="#3E000C" />
                  <span>Reserve Appointment</span>
                </a>

                <a
                  href={businessConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    backgroundColor: "transparent",
                    color: "#FFECD1",
                    border: "1px solid rgba(255, 236, 209, 0.4)",
                    padding: "0.85rem 1.5rem",
                    borderRadius: "var(--radius-sm)",
                    fontWeight: 600,
                    fontSize: "1rem",
                    textDecoration: "none",
                  }}
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Metrics Strip */}
              <div
                className="hero-metrics-strip"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2.5rem",
                  paddingTop: "2rem",
                  borderTop: "1px solid rgba(255, 236, 209, 0.15)",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.85rem",
                      fontWeight: 700,
                      color: "#FFECD1",
                    }}
                  >
                    5.0 ★
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "rgba(255, 236, 209, 0.72)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Client Rating
                  </div>
                </div>

                <div
                  style={{
                    width: "1px",
                    height: "36px",
                    backgroundColor: "rgba(255, 236, 209, 0.2)",
                  }}
                />

                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.85rem",
                      fontWeight: 700,
                      color: "#FFECD1",
                    }}
                  >
                    8+ Yrs
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "rgba(255, 236, 209, 0.72)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    In Rajouri Garden
                  </div>
                </div>

                <div
                  style={{
                    width: "1px",
                    height: "36px",
                    backgroundColor: "rgba(255, 236, 209, 0.2)",
                  }}
                />

                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.85rem",
                      fontWeight: 700,
                      color: "#FFECD1",
                    }}
                  >
                    1,200+
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "rgba(255, 236, 209, 0.72)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Happy Guests
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Arched Portrait Photo Frame in Chocolate & Sand */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                className="arch-frame"
                style={{
                  maxWidth: "380px",
                  width: "100%",
                  border: "1px solid rgba(255, 236, 209, 0.35)",
                  background:
                    "radial-gradient(circle at 50% 20%, rgba(255, 236, 209, 0.2), transparent 70%)",
                }}
              >
                <div className="arch-frame-inner" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/images/hero-editorial.jpg"
                    alt="Editorial Model Hair & Skincare Styling at Glow Unisex Salon"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 380px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "-14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#FFECD1",
                    color: "#3E000C",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    padding: "0.45rem 1.15rem",
                    borderRadius: "9999px",
                    whiteSpace: "nowrap",
                    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  ✦ Atelier Excellence ✦
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Value Proposition Strip (Sand Feature Bar #FFECD1) */}
      <section
        style={{
          backgroundColor: "#FFECD1",
          color: "#3E000C",
          borderBottom: "1px solid rgba(62, 0, 12, 0.12)",
          paddingBlock: "2.75rem",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "2.25rem",
              alignItems: "flex-start",
            }}
          >
            <div>
              <div style={{ marginBottom: "0.6rem" }}>
                <Scissors size={24} color="#3E000C" />
              </div>
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontFamily: "var(--font-serif)",
                  color: "#3E000C",
                  marginBottom: "0.3rem",
                  fontWeight: 700,
                }}
              >
                Expert Stylists
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "rgba(62, 0, 12, 0.8)",
                  margin: 0,
                  lineHeight: 1.55,
                }}
              >
                Trained artisans who listen, analyze facial geometry, and deliver bespoke results.
              </p>
            </div>

            <div>
              <div style={{ marginBottom: "0.6rem" }}>
                <Heart size={24} color="#3E000C" />
              </div>
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontFamily: "var(--font-serif)",
                  color: "#3E000C",
                  marginBottom: "0.3rem",
                  fontWeight: 700,
                }}
              >
                Personalized Care
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "rgba(62, 0, 12, 0.8)",
                  margin: 0,
                  lineHeight: 1.55,
                }}
              >
                Every formulation tailored to your scalp health, skin tone, and personal aesthetic.
              </p>
            </div>

            <div>
              <div style={{ marginBottom: "0.6rem" }}>
                <Star size={24} color="#3E000C" />
              </div>
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontFamily: "var(--font-serif)",
                  color: "#3E000C",
                  marginBottom: "0.3rem",
                  fontWeight: 700,
                }}
              >
                Premium Formulations
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "rgba(62, 0, 12, 0.8)",
                  margin: 0,
                  lineHeight: 1.55,
                }}
              >
                Only salon-grade, dermatologically certified botanicals used with sterile hygiene.
              </p>
            </div>

            <div>
              <div style={{ marginBottom: "0.6rem" }}>
                <Calendar size={24} color="#3E000C" />
              </div>
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontFamily: "var(--font-serif)",
                  color: "#3E000C",
                  marginBottom: "0.3rem",
                  fontWeight: 700,
                }}
              >
                Effortless Direct Booking
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "rgba(62, 0, 12, 0.8)",
                  margin: 0,
                  lineHeight: 1.55,
                }}
              >
                Connect directly with our Rajouri Garden reception on WhatsApp or phone call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Atelier Craft Gallery (Deep Chocolate #3E000C) */}
      <section
        style={{
          backgroundColor: "#3E000C",
          color: "#FFECD1",
          paddingBlock: "5.5rem",
          borderBottom: "1px solid rgba(255, 236, 209, 0.12)",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#FFECD1",
                opacity: 0.8,
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              VISUAL REPERTORY • ATELIER CRAFT
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 3.8vw, 2.85rem)",
                color: "#FFECD1",
                fontWeight: 700,
                margin: 0,
              }}
            >
              Crafted in Our Rajouri Garden Sanctuary
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {signatureGallery.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                style={{
                  display: "block",
                  backgroundColor: "#2B0008",
                  border: "1px solid rgba(255, 236, 209, 0.15)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  textDecoration: "none",
                  transition: "transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
                  boxShadow: "0 14px 34px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "4/3",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "1.75rem 1.5rem", textAlign: "center" }}>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: "#FFECD1",
                      opacity: 0.85,
                      display: "block",
                      marginBottom: "0.4rem",
                      fontWeight: 700,
                    }}
                  >
                    {item.category}
                  </span>
                  <h3
                    style={{
                      color: "#FFECD1",
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.28rem",
                      fontWeight: 700,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255, 236, 209, 0.72)",
                      fontSize: "0.88rem",
                      margin: 0,
                      lineHeight: 1.55,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Brand Partners / Derma Seal Row (Sand Light #FFFBF5) */}
      <section
        style={{
          backgroundColor: "#FFFBF5",
          paddingBlock: "2.75rem",
          borderBottom: "1px solid rgba(62, 0, 12, 0.1)",
          textAlign: "center",
        }}
      >
        <div className="container">
          <span
            style={{
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              color: "rgba(62, 0, 12, 0.6)",
              display: "block",
              marginBottom: "1.25rem",
              fontWeight: 700,
            }}
          >
            TRUSTED DERMATOLOGICAL &amp; STYLING FORMULATIONS
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(1.5rem, 4.5vw, 3.8rem)",
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

      {/* 5. SIGNATURE SALON CRAFTS WITH DETAILED EDITORIAL TEXT & ANIMATED CARDS */}
      <section
        style={{
          backgroundColor: "#FFF6E8",
          paddingBlock: "6rem 5.5rem",
          borderBottom: "1px solid rgba(62, 0, 12, 0.12)",
        }}
      >
        <div className="container">
          {/* Editorial Long-Form Intro Header */}
          <div style={{ maxWidth: "860px", marginInline: "auto", textAlign: "center", marginBottom: "4rem" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#3E000C",
                backgroundColor: "#FFECD1",
                padding: "0.35rem 1rem",
                borderRadius: "9999px",
                marginBottom: "1.25rem",
                border: "1px solid rgba(62, 0, 12, 0.15)",
              }}
            >
              HAUTE COIFFURE &amp; SENSORY DERMA
            </span>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.15rem, 4vw, 3.25rem)",
                color: "#3E000C",
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              Considered Craftsmanship &amp; Salon Architecture
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "rgba(62, 0, 12, 0.82)",
                maxWidth: "680px",
                marginInline: "auto",
                marginBlock: "0",
              }}
            >
              Bespoke consultations, European cutting architecture, and clean formulations tailored to your natural bone structure and personal aesthetic.
            </p>
          </div>

          {/* 3-Tier Service Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.25rem",
              marginBottom: "3rem",
            }}
          >
            {/* Card 1: Precision Cuts & Blowouts */}
            <ServiceCard
              category="Hair Styling & Architecture"
              title="Precision Cuts & Sculpted Blowouts"
              description="Bespoke wet-to-dry micro-sectioning tailored to your bone structure, delivering fluid movement and lasting shape."
              image="/images/hair-cutting.jpg"
              priceNote="[Pricing on Consultation]"
              href="/hair"
              theme="light"
            />

            {/* Card 2: Couture Balayage & Colour */}
            <ServiceCard
              category="Couture Colour & Toning"
              title="Hand-Painted Balayage & French Gloss"
              description="Seamless hand-painted highlights and bond-fortifying gloss glazes customized to harmonize with your natural skin undertones."
              image="/images/hair-detail.jpg"
              priceNote="[Pricing on Consultation]"
              href="/hair"
              theme="light"
            />

            {/* Card 3: HD Bridal Artistry */}
            <ServiceCard
              category="Haute Bridal & Derma Care"
              title="HD Couture Bridal & Dermal Renewal"
              description="Dermal hydra-infusion and featherlight 18-hour sweatproof airbrush pigments designed for high-definition photography."
              image="/images/facial-spa.jpg"
              priceNote="[Pricing on Consultation]"
              href="/skin-bridal"
              theme="light"
            />
          </div>

          {/* Reassuring Atelier Footnote */}
          <div
            style={{
              maxWidth: "760px",
              marginInline: "auto",
              padding: "1.5rem 2rem",
              backgroundColor: "#FFFFFF",
              borderRadius: "14px",
              border: "1px solid rgba(62, 0, 12, 0.1)",
              textAlign: "center",
              boxShadow: "0 8px 24px rgba(62, 0, 12, 0.05)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#3E000C",
                fontWeight: 700,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "0.35rem",
              }}
            >
              <CheckCircle2 size={16} color="#3E000C" />
              <span>Personalized Consultations Included</span>
            </div>
            <p
              style={{
                fontSize: "0.92rem",
                color: "rgba(62, 0, 12, 0.75)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Every appointment in our Rajouri Garden sanctuary begins with an unhurried consultation to assess your hair and skin goals.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Editorial Quote & Atelier Philosophy (Sand #FFECD1 Surface) */}
      <section
        style={{
          backgroundColor: "#FFECD1",
          paddingBlock: "5.5rem",
          borderTop: "1px solid rgba(62, 0, 12, 0.12)",
          borderBottom: "1px solid rgba(62, 0, 12, 0.12)",
        }}
      >
        <div className="container" style={{ maxWidth: "880px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  position: "relative",
                  maxWidth: "310px",
                  width: "100%",
                  borderRadius: "22px",
                  padding: "10px",
                  backgroundColor: "#2B0008",
                  border: "1.5px solid rgba(62, 0, 12, 0.25)",
                  boxShadow: "0 20px 48px rgba(62, 0, 12, 0.18)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "576/1024",
                    borderRadius: "14px",
                    overflow: "hidden",
                    backgroundColor: "#160004",
                  }}
                >
                  <Image
                    src="/images/newspaper-collage.jpg"
                    alt="Editorial Newsprint Collage & Atelier Aesthetic"
                    fill
                    sizes="(max-width: 768px) 100vw, 310px"
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
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    padding: "0.4rem 1.15rem",
                    borderRadius: "9999px",
                    whiteSpace: "nowrap",
                    border: "1px solid rgba(255, 236, 209, 0.35)",
                    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  ✦ EDITORIAL GAZETTE ✦
                </div>
              </div>
            </div>

            <div>
              <span className="quote-ornament" style={{ color: "rgba(62, 0, 12, 0.25)" }}>
                &ldquo;
              </span>
              <blockquote
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.35rem, 2.3vw, 1.75rem)",
                  color: "#3E000C",
                  lineHeight: 1.45,
                  fontWeight: 600,
                  marginBottom: "1.25rem",
                  marginInline: 0,
                }}
              >
                Design is not just what it looks like and feels like. In our atelier, it is about how
                confident, empowered, and effortlessly beautiful you feel each day.
              </blockquote>
              <cite
                style={{
                  display: "block",
                  fontStyle: "normal",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "#3E000C",
                  fontWeight: 700,
                }}
              >
                &mdash; Glow Unisex Salon Atelier Philosophy
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Client Reviews Strip (Sand Light #FFFBF5) */}
      <section style={{ backgroundColor: "#FFFBF5", paddingBlock: "5.5rem" }}>
        <div className="container">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
            subtitle="Authentic client reviews from visitors in Rajouri Garden and New Delhi."
            align="center"
            theme="light"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.75rem",
              marginTop: "3rem",
            }}
          >
            <div
              className="review-card"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(62, 0, 12, 0.1)",
                borderRadius: "16px",
                padding: "2.25rem 2rem",
                boxShadow: "0 8px 24px rgba(62, 0, 12, 0.04)",
              }}
            >
              <div style={{ color: "#3E000C", fontSize: "1.15rem", marginBottom: "0.75rem" }}>
                ★★★★★
              </div>
              <p
                style={{
                  fontStyle: "italic",
                  color: "#3E000C",
                  marginBottom: "1rem",
                  lineHeight: 1.6,
                }}
              >
                &ldquo;Got my balayage and haircut done here. The attention to detail and color
                formulation was exceptional. Completely exceeded my expectations!&rdquo;
              </p>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#3E000C" }}>
                [Client Review • Rajouri Garden]
              </span>
            </div>

            <div
              className="review-card"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(62, 0, 12, 0.1)",
                borderRadius: "16px",
                padding: "2.25rem 2rem",
                boxShadow: "0 8px 24px rgba(62, 0, 12, 0.04)",
              }}
            >
              <div style={{ color: "#3E000C", fontSize: "1.15rem", marginBottom: "0.75rem" }}>
                ★★★★★
              </div>
              <p
                style={{
                  fontStyle: "italic",
                  color: "#3E000C",
                  marginBottom: "1rem",
                  lineHeight: 1.6,
                }}
              >
                &ldquo;The pre-bridal skincare sessions and wedding day HD makeup were flawless. The
                team was so punctual and made me feel completely relaxed.&rdquo;
              </p>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#3E000C" }}>
                [Bridal Client • New Delhi]
              </span>
            </div>

            <div
              className="review-card"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(62, 0, 12, 0.1)",
                borderRadius: "16px",
                padding: "2.25rem 2rem",
                boxShadow: "0 8px 24px rgba(62, 0, 12, 0.04)",
              }}
            >
              <div style={{ color: "#3E000C", fontSize: "1.15rem", marginBottom: "0.75rem" }}>
                ★★★★★
              </div>
              <p
                style={{
                  fontStyle: "italic",
                  color: "#3E000C",
                  marginBottom: "1rem",
                  lineHeight: 1.6,
                }}
              >
                &ldquo;A clean, upscale unisex salon with experienced staff. The Keratin treatment
                made my frizzy hair so manageable. Highly recommend!&rdquo;
              </p>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#3E000C" }}>
                [Regular Client • West Delhi]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact & Reservation Callout Strip (Deep Chocolate #3E000C) */}
      <section
        style={{
          backgroundColor: "#3E000C",
          color: "#FFECD1",
          paddingBlock: "5rem",
          borderTop: "1px solid rgba(255, 236, 209, 0.12)",
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
            Visit Our Rajouri Garden Sanctuary
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
            Ready for your next salon experience?
          </h2>

          <p
            style={{
              fontSize: "1.08rem",
              color: "rgba(255, 236, 209, 0.82)",
              marginBottom: "2.5rem",
              lineHeight: 1.65,
            }}
          >
            Connect directly with our hair, skin, and bridal specialists on WhatsApp or call to reserve your visit.
          </p>

          <ActionButtons />
        </div>
      </section>
    </div>
  );
}
