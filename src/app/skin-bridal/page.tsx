import type { Metadata } from "next";
import Image from "next/image";
import { businessConfig } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ActionButtons } from "@/components/ui/ActionButtons";
import { Sparkles, Heart, ShieldCheck, Clock, MessageCircle, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Skin & Bridal Services | HD Makeup, Facials & Glow Therapies | Glow Unisex Salon",
  description:
    "Discover bespoke bridal makeup, pre-bridal packages, clinical facials, and skin brightening therapies at Glow Unisex Salon in Rajouri Garden, New Delhi.",
};

const skinBridalCategories = [
  {
    id: "bridal-makeovers",
    title: "Bridal Artistry & Occasion Makeovers",
    subtitle: "High-definition, photography-calibrated makeup designed to enhance your natural beauty",
    items: [
      {
        name: "Signature HD Bridal Makeup & Styling",
        description: "Flawless camera-ready skin prep, precision contouring, dramatic or soft eyes, luxury eyelashes, bridal dupatta draping, and intricate hair design.",
        idealFor: "Wedding day, main ceremonies, and traditional bridal grandeur",
        duration: "150–180 mins",
        badge: "Crown Signature",
      },
      {
        name: "Luxe Airbrush Bridal Transformation",
        description: "Micro-atomized silicone/water-based foundation delivering an ultra-lightweight, 18-hour sweatproof finish with feather-light pore concealment.",
        idealFor: "Summer weddings, high-humidity events, and high-definition photography",
        duration: "150–180 mins",
        badge: "Airbrush Art",
      },
      {
        name: "Engagement & Cocktail Occasion Glam",
        description: "Contemporary dewy or soft matte base paired with shimmery lids, sculpted brows, statement lips, and romantic textured waves or sleek updos.",
        idealFor: "Sangeet, cocktail night, engagement, and ring ceremonies",
        duration: "90–120 mins",
      },
      {
        name: "Pre-Wedding & Reception Radiance Makeover",
        description: "Glow-infused base with editorial eye artistry tailored to evening lighting, heavy silks, or contemporary gowns.",
        idealFor: "Receptions, pre-wedding dinners, and milestone parties",
        duration: "90–120 mins",
      },
    ],
  },
  {
    id: "pre-bridal-packages",
    title: "Pre-Bridal & Pre-Groom Rituals",
    subtitle: "Curated multi-session rejuvenation ensuring head-to-toe radiance for your milestone day",
    items: [
      {
        name: "Royal 30-Day Bridal Radiance Journey",
        description: "Comprehensive multi-visit regimen: customized clarifying peel, Casmara algae facial, golden body polish, Rica waxing, luxe mani-pedi, and deep hair spa.",
        idealFor: "Brides wanting complete head-to-toe transformation over 3–4 weeks",
        duration: "Multi-session Plan",
        badge: "Complete Package",
      },
      {
        name: "Groom Executive Grooming & Glow Protocol",
        description: "Targeted skin clearing facial, beard contouring, de-tan neck therapy, scalp balancing ritual, and spa hand & foot detailing.",
        idealFor: "Grooms seeking refreshed skin, sharp grooming, and camera-ready poise",
        duration: "90–120 mins",
        badge: "For Grooms",
      },
      {
        name: "Golden Glow Full Body Exfoliation & Polishing",
        description: "Walnut and botanical micro-scrub exfoliation followed by gentle steam, hydrating body wrap, and nourishing essential oil massage.",
        idealFor: "Dry, sun-damaged skin seeking silky smoothness and uniform glow",
        duration: "75–90 mins",
      },
    ],
  },
  {
    id: "clinical-facials",
    title: "Advanced Facials & Skin Brightening",
    subtitle: "Targeted cellular therapies addressing pigmentation, dullness, acne, and hydration loss",
    items: [
      {
        name: "Hydra-Dew Hyaluronic Infusion Facial",
        description: "Hydro-dermabrasion pore extraction paired with high-frequency oxygenation and intensive multi-molecular hyaluronic acid infusion.",
        idealFor: "Dehydrated, fatigued skin, clogged pores, and instant glass-skin radiance",
        duration: "60–75 mins",
        badge: "Client Favorite",
      },
      {
        name: "Casmara® 24K Gold & Algae Peel-Off Facial",
        description: "Prestigious Spanish peel-off mask revitalizing skin with 24K gold dust and marine algae minerals for unmatched firming and luminosity.",
        idealFor: "Special occasions, skin lifting, and milestone event preparation",
        duration: "75–90 mins",
      },
      {
        name: "O3+® Meladerm Whitening & De-Pigmentation Ritual",
        description: "Dermatologically tested enzyme peel and brightening mask system tackling uneven tanning, sunspots, and hyperpigmentation.",
        idealFor: "Sun-tanned skin, uneven tone, dark spots, and stubborn discoloration",
        duration: "60–75 mins",
      },
      {
        name: "Purifying Anti-Acne Clarifying Facial",
        description: "Gentle salicylic pore clearance, tea-tree antiseptic soothing wrap, and blue-light calming to soothe breakouts and control excess sebum.",
        idealFor: "Acne-prone, oily, or congested skin types",
        duration: "50–60 mins",
      },
    ],
  },
  {
    id: "essential-grooming",
    title: "Luxe Waxing, Threading & Nail Spa",
    subtitle: "Gentle hair removal and soothing manicures with medical-grade hygiene standards",
    items: [
      {
        name: "Rica® Italian Liposoluble Painless Waxing",
        description: "Colophony-free Italian wax enriched with white chocolate and avocado butter, gentle on sensitive skin with zero redness.",
        idealFor: "Sensitive skin, painless hair removal, and silky smooth finish",
        duration: "30–60 mins",
      },
      {
        name: "Spa Paraffin Manicure & Pedicure Ritual",
        description: "Dead Sea salt soak, sugar scrub buffing, cuticle nourishment, heated warm paraffin dip, and restorative massage.",
        idealFor: "Tired feet, cracked heels, dry cuticles, and complete nail restoration",
        duration: "60–75 mins",
      },
      {
        name: "Precision Eyebrow Architecture & Face Threading",
        description: "Organic anti-bacterial cotton thread detailing to map and frame brows according to natural facial symmetry.",
        idealFor: "Clean facial contours, upper lips, forehead, and defined brows",
        duration: "15–30 mins",
      },
    ],
  },
];

const bridalProcessSteps = [
  {
    step: "01",
    title: "Skin & Palette Consultation",
    description: "We review your wedding outfits, jewellery, ceremony lighting, and skin sensitivities to design your bespoke aesthetic palette.",
  },
  {
    step: "02",
    title: "Pre-Bridal Skin Priming",
    description: "A scheduled timeline of clarifying hydra-facials, gentle peels, and body polishing ensures peak dermal radiance ahead of the big day.",
  },
  {
    step: "03",
    title: "Flawless Wedding Day Vanity",
    description: "Relax in our salon or your venue with calm, punctual execution, long-wear setting, precision draping, and final veil placement.",
  },
];

const skinBridalFaqs = [
  {
    question: "When should I begin my pre-bridal skincare sessions before my wedding?",
    answer:
      "We recommend starting pre-bridal treatments 4 to 6 weeks before your wedding date. This allows skin cells to renew naturally and ensures maximum radiance without last-minute sensitivities.",
  },
  {
    question: "What is the key difference between HD and Airbrush bridal makeup?",
    answer:
      "HD makeup uses micro-fine reflective cream and powder pigments blended seamlessly with brushes. Airbrush makeup applies a micro-fine mist through a compressor for an ultra-lightweight, transfer-proof, water-resistant finish that lasts 18+ hours.",
  },
  {
    question: "Are pre-bridal consultations and patch tests available?",
    answer:
      "Yes, we provide full consultations to discuss bridal look boards, analyze skin undertones, and test product tolerance well in advance of your ceremonies.",
  },
  {
    question: "Do you offer dedicated grooming packages for the groom and wedding guests?",
    answer:
      "Yes, we have specialized groom packages including beard styling, de-tan facials, and manicure-pedicure services, as well as party makeup packages for family members.",
  },
];

export default function SkinBridalPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
      {/* 1. Skin & Bridal Hero Header with Editorial Arch Frame */}
      <section
        style={{
          position: "relative",
          paddingBlock: "4.5rem 4rem",
          backgroundColor: "var(--color-espresso-charcoal)",
          color: "#FFFFFF",
          backgroundImage:
            "radial-gradient(ellipse at 65% 20%, rgba(186, 104, 74, 0.24) 0%, rgba(30, 23, 18, 0.98) 75%)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
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
            {/* Left Content */}
            <div>
              <div style={{ marginBottom: "1.25rem" }}>
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
                  <span>✦ BRIDAL ATELIER &bull; {businessConfig.address.locality} ✦</span>
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
                Couture Bridal Artistry &amp; Advanced Dermatological Skincare
              </h1>

              <p
                style={{
                  fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                  color: "rgba(255, 255, 255, 0.82)",
                  maxWidth: "580px",
                  marginBottom: "2.25rem",
                  lineHeight: 1.6,
                }}
              >
                Radiant high-definition bridal transformations, clarifying hydra-infusions, and therapeutic body polishing
                curated for your most unforgettable milestones.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <Button
                  href={businessConfig.whatsappHref}
                  isExternal
                  variant="primary"
                  size="lg"
                  icon={<MessageCircle size={18} />}
                >
                  Book Bridal Consultation
                </Button>
                <Button
                  href={businessConfig.phoneCallHref}
                  isExternal
                  variant="outline"
                  size="lg"
                  icon={<Phone size={18} />}
                  style={{
                    color: "#FFFFFF",
                    borderColor: "rgba(255, 255, 255, 0.4)",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Call Aesthetician
                </Button>
              </div>
            </div>

            {/* Right: Arched Portrait Photo */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="arch-frame" style={{ maxWidth: "340px", width: "100%" }}>
                <div className="arch-frame-inner" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/images/bridal-editorial.jpg"
                    alt="Editorial Bridal Makeup Transformation"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 340px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Value Pillar Bar */}
      <section
        style={{
          backgroundColor: "var(--color-sand-feature)",
          borderBottom: "1px solid var(--border-warm)",
          paddingBlock: "1.75rem",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Sparkles size={20} color="var(--color-terracotta)" />
              <div>
                <strong style={{ display: "block", fontSize: "0.95rem", color: "var(--color-espresso-dark)" }}>
                  High-Definition Glow
                </strong>
                <span style={{ fontSize: "0.8rem", color: "var(--color-taupe-muted)" }}>
                  HD &amp; Airbrush 18hr sweat-proof makeup
                </span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <ShieldCheck size={20} color="var(--color-terracotta)" />
              <div>
                <strong style={{ display: "block", fontSize: "0.95rem", color: "var(--color-espresso-dark)" }}>
                  Medical-Grade Hygiene
                </strong>
                <span style={{ fontSize: "0.8rem", color: "var(--color-taupe-muted)" }}>
                  Sterilized tools &amp; disposable applicators
                </span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Heart size={20} color="var(--color-terracotta)" />
              <div>
                <strong style={{ display: "block", fontSize: "0.95rem", color: "var(--color-espresso-dark)" }}>
                  Derma Formulations
                </strong>
                <span style={{ fontSize: "0.8rem", color: "var(--color-taupe-muted)" }}>
                  Casmara, O3+, &amp; Rica natural waxes
                </span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Clock size={20} color="var(--color-terracotta)" />
              <div>
                <strong style={{ display: "block", fontSize: "0.95rem", color: "var(--color-espresso-dark)" }}>
                  Punctual &amp; Calming
                </strong>
                <span style={{ fontSize: "0.8rem", color: "var(--color-taupe-muted)" }}>
                  Stress-free timeline for your wedding day
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Skin & Bridal Service Categories & Cards */}
      <section style={{ backgroundColor: "var(--color-cream-base)", paddingBlock: "5rem" }}>
        <div className="container">
          <SectionHeading
            eyebrow="Service Menu"
            title="Skin &amp; Bridal Offerings"
            subtitle="Explore our bespoke bridal artistry, pre-wedding rejuvenation rituals, and clinical skin facials."
            align="center"
            theme="light"
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "4rem", marginTop: "3rem" }}>
            {skinBridalCategories.map((category) => (
              <div key={category.id} id={category.id}>
                <div
                  style={{
                    paddingBottom: "1rem",
                    marginBottom: "1.75rem",
                    borderBottom: "1.5px solid var(--border-warm)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.85rem",
                      color: "var(--color-espresso-dark)",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    {category.title}
                  </h3>
                  <p style={{ color: "var(--color-taupe-muted)", fontSize: "0.95rem", margin: 0 }}>
                    {category.subtitle}
                  </p>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "1.5rem",
                  }}
                >
                  {category.items.map((item) => (
                    <article
                      key={item.name}
                      style={{
                        backgroundColor: "#FFFFFF",
                        border: "1px solid var(--border-warm)",
                        borderRadius: "var(--radius-md)",
                        padding: "1.75rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        boxShadow: "0 4px 16px rgba(42, 33, 24, 0.04)",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div>
                        {item.badge && (
                          <div style={{ marginBottom: "0.75rem" }}>
                            <span
                              style={{
                                display: "inline-block",
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                color: "var(--color-terracotta)",
                                backgroundColor: "var(--color-terracotta-soft)",
                                border: "1px solid rgba(186, 104, 74, 0.25)",
                                padding: "0.2rem 0.65rem",
                                borderRadius: "var(--radius-full)",
                              }}
                            >
                              {item.badge}
                            </span>
                          </div>
                        )}

                        <h4
                          style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "1.25rem",
                            color: "var(--color-espresso-dark)",
                            fontWeight: 700,
                            marginBottom: "0.6rem",
                            lineHeight: 1.3,
                          }}
                        >
                          {item.name}
                        </h4>

                        <p
                          style={{
                            fontSize: "0.9rem",
                            color: "var(--color-taupe-muted)",
                            lineHeight: 1.55,
                            marginBottom: "1rem",
                          }}
                        >
                          {item.description}
                        </p>

                        <div
                          style={{
                            fontSize: "0.8rem",
                            color: "var(--color-taupe-light)",
                            backgroundColor: "var(--color-sand-surface)",
                            padding: "0.5rem 0.75rem",
                            borderRadius: "var(--radius-sm)",
                            marginBottom: "1.25rem",
                          }}
                        >
                          <strong style={{ color: "var(--color-espresso-dark)" }}>Ideal For: </strong>
                          {item.idealFor}
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          paddingTop: "1rem",
                          borderTop: "1px solid var(--border-subtle)",
                          fontSize: "0.85rem",
                        }}
                      >
                        <span style={{ color: "var(--color-taupe-light)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                          <Clock size={14} />
                          {item.duration}
                        </span>

                        <a
                          href={businessConfig.whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.3rem",
                            color: "var(--color-terracotta)",
                            fontWeight: 600,
                            textDecoration: "none",
                          }}
                        >
                          <span>Enquire</span>
                          <ArrowRight size={14} />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bridal Journey Process */}
      <section
        style={{
          backgroundColor: "var(--color-sand-surface)",
          paddingBlock: "5rem",
          borderTop: "1px solid var(--border-warm)",
          borderBottom: "1px solid var(--border-warm)",
        }}
      >
        <div className="container">
          <SectionHeading
            eyebrow="The Experience"
            title="Your Bridal Beauty Roadmap"
            subtitle="A structured, stress-free path from consultation to your final wedding entrance."
            align="center"
            theme="light"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              marginTop: "3rem",
            }}
          >
            {bridalProcessSteps.map((step) => (
              <div
                key={step.step}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid var(--border-warm)",
                  borderRadius: "var(--radius-md)",
                  padding: "2rem",
                  boxShadow: "0 4px 12px rgba(42, 33, 24, 0.03)",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.75rem",
                    fontWeight: 700,
                    color: "rgba(186, 104, 74, 0.25)",
                    display: "block",
                    lineHeight: 1,
                    marginBottom: "0.75rem",
                  }}
                >
                  {step.step}
                </span>
                <h4
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--color-espresso-dark)",
                    marginBottom: "0.6rem",
                  }}
                >
                  {step.title}
                </h4>
                <p style={{ fontSize: "0.925rem", color: "var(--color-taupe-muted)", lineHeight: 1.6, margin: 0 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Skin & Bridal FAQs */}
      <section style={{ backgroundColor: "var(--color-cream-base)", paddingBlock: "5rem" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <SectionHeading
            eyebrow="Common Questions"
            title="Bridal &amp; Skincare FAQ"
            subtitle="Helpful answers regarding appointment booking, trials, packages, and wedding day preparation."
            align="center"
            theme="light"
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "3rem" }}>
            {skinBridalFaqs.map((faq) => (
              <details
                key={faq.question}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid var(--border-warm)",
                  borderRadius: "var(--radius-sm)",
                  padding: "1.25rem 1.5rem",
                  boxShadow: "0 2px 8px rgba(42, 33, 24, 0.03)",
                }}
              >
                <summary
                  style={{
                    fontWeight: 600,
                    color: "var(--color-espresso-dark)",
                    cursor: "pointer",
                    outline: "none",
                    fontSize: "1.05rem",
                    fontFamily: "var(--font-serif)",
                  }}
                >
                  {faq.question}
                </summary>
                <p
                  style={{
                    marginTop: "0.85rem",
                    fontSize: "0.925rem",
                    color: "var(--color-taupe-muted)",
                    lineHeight: 1.6,
                    marginBottom: 0,
                  }}
                >
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bridal Reservation Banner */}
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
            Celebrate your special day with confidence
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
            Reserve Your Bridal &amp; Skincare Dates in Rajouri Garden
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255, 255, 255, 0.8)",
              marginBottom: "2.25rem",
              lineHeight: 1.6,
            }}
          >
            Connect directly with our bridal coordinators on WhatsApp or phone to lock in dates and schedule your pre-bridal timeline.
          </p>

          <ActionButtons />
        </div>
      </section>
    </div>
  );
}
