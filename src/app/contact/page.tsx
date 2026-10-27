import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { businessConfig } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ActionButtons } from "@/components/ui/ActionButtons";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Navigation,
  Car,
  Train,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Download,
  Compass,
  Calendar,
  Share2,
} from "lucide-react";
import { VisitingCardShowcase } from "@/components/ui/VisitingCardShowcase";
import styles from "./Contact.module.css";

export const metadata: Metadata = {
  title: "Contact & Location | Atelier in Rajouri Garden | Glow Unisex Salon",
  description:
    "Visit Glow Unisex Salon at Rajouri Garden, New Delhi. Direct WhatsApp concierge, telephone appointments, operating hours, and Google Maps directions.",
};

const contactCards = [
  {
    id: "address",
    badge: "✦ FLAGSHIP SANCTUARY • RAJOURI GARDEN ✦",
    title: "Rajouri Garden Atelier",
    description:
      "Nestled in the prime salon district of West Delhi. Experience calm arched mirrors, acoustic buffering, and private consultation booths.",
    highlight: businessConfig.address.formattedAddress,
    image: "/images/salon-interior.jpg",
    actionLabel: "Start Google Navigation",
    actionHref: businessConfig.googleMapsUrl,
    isExternal: true,
    icon: MapPin,
  },
  {
    id: "hours",
    badge: "✦ SEVEN DAYS A WEEK ✦",
    title: "Operating Schedule",
    description:
      "Open Monday through Sunday for bespoke appointments, bridal trials, French balayage, and restorative skin therapies.",
    highlight: businessConfig.openingHours.display + " (Mon – Sun)",
    image: "/images/hair-cutting.jpg",
    actionLabel: "Reserve via WhatsApp",
    actionHref: businessConfig.whatsappHref,
    isExternal: true,
    icon: Clock,
  },
  {
    id: "concierge",
    badge: "✦ DIRECT CONCIERGE ✦",
    title: "Immediate Coordination",
    description:
      "Zero automated bot queues. Connect directly with our front desk receptionist for scheduling, hair advice, and location help.",
    highlight: `Tel: ${businessConfig.phone} • WA: ${businessConfig.whatsapp}`,
    image: "/images/bridal-editorial.jpg",
    actionLabel: "Call Reception Directly",
    actionHref: businessConfig.phoneCallHref,
    isExternal: false,
    icon: Phone,
  },
];

export default function ContactPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
      {/* 1. Page Hero Banner (Deep Chocolate #3E000C & Sand #FFECD1) */}
      <section className={styles.heroSection}>
        <div className="container">
          <div style={{ maxWidth: "860px", marginInline: "auto", textAlign: "center" }}>
            <span className={styles.heroBadge}>
              <Sparkles size={14} color="#3E000C" />
              <span>SANCTUARY LOCATION • RAJOURI GARDEN</span>
            </span>

            <h1 className={styles.heroTitle}>
              Visit Our Rajouri Garden Sanctuary
            </h1>

            <p className={styles.heroSubtitle}>
              We welcome you to experience thoughtful hair architecture, bespoke balayage, and clinical skincare in our tranquil West Delhi atelier. Connect directly via WhatsApp or telephone.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Elevated Editorial Contact Cards Grid */}
      <section className={styles.cardsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionPretitle}>COORDINATES &amp; VISITATION</span>
            <h2 className={styles.sectionHeading}>Three Direct Ways to Connect</h2>
            <p className={styles.sectionSubtext}>
              Personal attention from your very first touchpoint. We uphold unhurried, direct coordination over impersonal booking forms.
            </p>
          </div>

          <div className={styles.cardsGrid}>
            {contactCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <article key={card.id} className={styles.editorialContactCard}>
                  {/* Top Zone: Sand Canvas with Icon & Typography */}
                  <div className={styles.cardTop}>
                    <div className={styles.iconCircle}>
                      <IconComponent size={22} color="#3E000C" />
                    </div>
                    <span className={styles.categoryPill}>{card.badge}</span>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDescription}>{card.description}</p>
                    <div className={styles.cardHighlight}>{card.highlight}</div>
                    <div className={styles.cardPill} />
                  </div>

                  {/* Middle Zone: Photography with Zoom & Sheen */}
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className={styles.cardImage}
                    />
                  </div>

                  {/* Bottom Zone: Clean Action Strip */}
                  <div className={styles.cardBottom}>
                    <a
                      href={card.actionHref}
                      target={card.isExternal ? "_blank" : undefined}
                      rel={card.isExternal ? "noopener noreferrer" : undefined}
                      className={styles.actionBtn}
                    >
                      <span>{card.actionLabel}</span>
                      <ArrowUpRight size={17} className={styles.actionArrow} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. The Grand "Let's Connect" Master Contact Card (matching reference editorial styling) */}
      <section className={styles.masterConnectSection}>
        <div className="container" style={{ maxWidth: "1120px" }}>
          <div className={styles.masterCard}>
            <div className={styles.masterGrid}>
              {/* Left Column: Arched Salon Portrait with Cursive Script */}
              <div className={styles.archedFrameWrapper}>
                <div className={styles.archedPortrait}>
                  <Image
                    src="/images/hero-editorial.jpg"
                    alt="Atelier Stylist & Director at Glow Unisex Salon"
                    fill
                    sizes="240px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <span className={styles.scriptOverlay}>Let&apos;s Connect</span>
              </div>

              {/* Center Column: Direct Concierge Pills */}
              <div className={styles.masterCenterContent}>
                <span className={styles.masterPretitle}>✦ ATELIER CONCIERGE DIRECT ✦</span>
                <h3 className={styles.masterTitle}>Let&apos;s Create Something Extraordinary</h3>
                
                <div className={styles.masterContactPills}>
                  {/* Phone */}
                  <a href={businessConfig.phoneCallHref} className={styles.contactPillItem}>
                    <div className={styles.pillIconBox}>
                      <Phone size={18} color="#FFECD1" />
                    </div>
                    <div className={styles.pillTextGroup}>
                      <span className={styles.pillLabel}>DIRECT TELEPHONE</span>
                      <span className={styles.pillValue}>{businessConfig.phone}</span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a href={businessConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className={styles.contactPillItem}>
                    <div className={styles.pillIconBox}>
                      <MessageCircle size={18} color="#FFECD1" />
                    </div>
                    <div className={styles.pillTextGroup}>
                      <span className={styles.pillLabel}>WHATSAPP CONCIERGE</span>
                      <span className={styles.pillValue}>{businessConfig.whatsapp}</span>
                    </div>
                  </a>

                  {/* Address */}
                  <a href={businessConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className={styles.contactPillItem}>
                    <div className={styles.pillIconBox}>
                      <MapPin size={18} color="#FFECD1" />
                    </div>
                    <div className={styles.pillTextGroup}>
                      <span className={styles.pillLabel}>SANCTUARY ADDRESS</span>
                      <span className={styles.pillValue}>{businessConfig.address.formattedAddress}</span>
                    </div>
                  </a>

                  {/* Schedule */}
                  <div className={styles.contactPillItem} style={{ cursor: "default" }}>
                    <div className={styles.pillIconBox}>
                      <Clock size={18} color="#FFECD1" />
                    </div>
                    <div className={styles.pillTextGroup}>
                      <span className={styles.pillLabel}>OPERATING SCHEDULE</span>
                      <span className={styles.pillValue}>{businessConfig.openingHours.display} (Mon – Sun)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Fashion Editorial Quote */}
              <div className={styles.masterQuoteCol}>
                <span className={styles.quoteGlyph}>“</span>
                <p className={styles.masterQuoteText}>
                  Hair styling and clinical skincare are personal architectures of confidence. At Glow Unisex Salon, every appointment is an unhurried, one-on-one dialogue with master artisans.
                </p>
                <span className={styles.masterQuoteAuthor}>
                  — GLOW ATELIER DIRECTORS &bull; RAJOURI GARDEN
                </span>
              </div>
            </div>

            {/* Bottom Flourish */}
            <div className={styles.masterFlourishLine}>
              ✦ STRATEGY &bull; BESPOKE ARTISTRY &bull; UNHURRIED APPOINTMENTS &bull; RAJOURI GARDEN ✦
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Printable Visiting Card Showcase (Grow Package Deliverable) */}
      <section className={styles.visitingCardSection}>
        <div className="container" style={{ maxWidth: "1060px" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className={styles.sectionPretitle}>
              OFFICIAL PRINT COLLATERAL &bull; GROW DELIVERABLE
            </span>
            <h2 className={styles.visitingCardHeading}>
              The Atelier Visiting Card
            </h2>
            <p className={styles.visitingCardSub}>
              Crafted in standard Indian 90×50mm proportion with our Chocolate &amp; Sand Didone identity, instant WhatsApp QR concierge, and complete salon coordinates.
            </p>
          </div>

          <VisitingCardShowcase />
        </div>
      </section>

      {/* 5. Transit & Arrival Advice */}
      <section style={{ backgroundColor: "#FFFBF5", paddingBlock: "5.5rem" }}>
        <div className="container">
          <SectionHeading
            eyebrow="Transit & Parking"
            title="Getting to Glow Unisex Salon"
            subtitle="Convenient access guidance for guests arriving from across Rajouri Garden and New Delhi."
            align="center"
            theme="light"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              marginTop: "3.5rem",
            }}
          >
            <div className={styles.transitBox}>
              <div className={styles.transitIcon}>
                <Train size={24} color="#3E000C" />
              </div>
              <h3 className={styles.transitTitle}>Delhi Metro Access</h3>
              <p className={styles.transitText}>
                Conveniently located near the Rajouri Garden Metro Station (interchange for both Blue Line and Pink Line). A quick 5-minute auto-rickshaw or brief stroll connects directly to our doorstep.
              </p>
            </div>

            <div className={styles.transitBox}>
              <div className={styles.transitIcon}>
                <Car size={24} color="#3E000C" />
              </div>
              <h3 className={styles.transitTitle}>Driving &amp; Parking</h3>
              <p className={styles.transitText}>
                Direct vehicular access via Ring Road and Najafgarh Road with convenient curbside drop-off and designated neighborhood parking options within walking distance.
              </p>
            </div>

            <div className={styles.transitBox}>
              <div className={styles.transitIcon}>
                <CheckCircle2 size={24} color="#3E000C" />
              </div>
              <h3 className={styles.transitTitle}>Consultation Etiquette</h3>
              <p className={styles.transitText}>
                To maintain our unhurried consultation standard and zero waiting delays, we recommend booking in advance via WhatsApp or phone. Walk-ins are accommodated subject to stylist availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Google Maps Navigation Route Banner */}
      <section className={styles.mapBannerSection}>
        <div className="container" style={{ maxWidth: "960px" }}>
          <div className={styles.mapBannerCard}>
            <div style={{ maxWidth: "580px" }}>
              <span className={styles.mapBannerBadge}>
                LIVE GOOGLE MAPS NAVIGATION
              </span>
              <h2 className={styles.mapBannerTitle}>
                Navigate to Glow Unisex Salon
              </h2>
              <p className={styles.mapBannerText}>
                Launch Google Maps turn-by-turn directions directly to our Rajouri Garden salon entrance on your smartphone.
              </p>
            </div>

            <a
              href={businessConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapBannerBtn}
            >
              <Navigation size={18} />
              <span>Start GPS Navigation</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. Contact & Reservation Callout Strip (Deep Chocolate #3E000C) */}
      <section
        style={{
          backgroundColor: "#3E000C",
          color: "#FFECD1",
          paddingBlock: "5.5rem",
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
            Connect With Our Team &bull; {businessConfig.address.locality}
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
            Ready to plan your next visit?
          </h2>

          <p
            style={{
              fontSize: "1.08rem",
              color: "rgba(255, 236, 209, 0.82)",
              marginBottom: "2.5rem",
              lineHeight: 1.65,
            }}
          >
            Message our concierge on WhatsApp or call our front desk directly to reserve your preferred date and time.
          </p>

          <ActionButtons />
        </div>
      </section>
    </div>
  );
}
