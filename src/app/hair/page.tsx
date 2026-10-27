import type { Metadata } from "next";
import Image from "next/image";
import { businessConfig } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ActionButtons } from "@/components/ui/ActionButtons";
import { Scissors, Sparkles, ShieldCheck, Clock, MessageCircle, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hair Services | Precision Cuts, Colour & Keratin | Glow Unisex Salon",
  description:
    "Explore bespoke hair styling, couture balayage, keratin smoothing, and scalp treatments at Glow Unisex Salon in Rajouri Garden, New Delhi.",
};

const hairServiceCategories = [
  {
    id: "cuts-styling",
    title: "Precision Cuts & Styling",
    subtitle: "Custom architectural hair design tailored to face shape, hair density, and lifestyle",
    items: [
      {
        name: "Women's Signature Precision Cut & Blowdry",
        description: "Bespoke sectioning and cut designed to frame facial contours. Includes deep conditioning wash and editorial blowout finish.",
        idealFor: "All lengths, modern bobs, face-framing layers, and texturized shapes",
        duration: "45–60 mins",
        badge: "Most Requested",
      },
      {
        name: "Men's Master Fade & Scissor Craft",
        description: "Skin fades, tapered necklines, or scissor-over-comb texturizing paired with scalp wash and tailored matte/gloss styling.",
        idealFor: "Clean gentleman cuts, crops, fades, and daily executive grooming",
        duration: "30–45 mins",
      },
      {
        name: "Couture Blowout & Heat Styling",
        description: "Volumizing root-lift blowdry, sleek glass finishes, or effortless beach waves crafted for events, shoots, or celebrations.",
        idealFor: "Parties, weddings, corporate events, and evening occasions",
        duration: "40–50 mins",
      },
      {
        name: "Split-End Dusting & Fringe Re-shape",
        description: "Micro-trim detailing to eliminate split ends without sacrificing length, along with curtain bang or fringe detailing.",
        idealFor: "Length preservation, fringe maintenance, and hair health retention",
        duration: "25–35 mins",
      },
    ],
  },
  {
    id: "colour-balayage",
    title: "Couture Colour & Balayage",
    subtitle: "Luminous dimension, seamless tone transitions, and scalp-protective formulations",
    items: [
      {
        name: "Bespoke Balayage & French Gloss Glaze",
        description: "Freehand hand-painted illumination melting seamlessly from natural roots into bright, sun-lit mid-lengths and ends.",
        idealFor: "Low-maintenance dimension, soft grow-out, and multidimensional shine",
        duration: "120–180 mins",
        badge: "Signature Craft",
      },
      {
        name: "Global Rich Colour & Scalp Shield",
        description: "Deep, uniform single-tone pigment deposition from roots to ends infused with restorative oils for radiant depth.",
        idealFor: "Warm espresso, dark chocolate, caramel, and rich natural coverage",
        duration: "75–90 mins",
      },
      {
        name: "Seamless Root Re-growth & Grey Blending",
        description: "Exact shade formulation blended accurately with existing lengths, offering 100% grey coverage with gentle scalp barriers.",
        idealFor: "Regular maintenance, hairline touch-ups, and natural blending",
        duration: "50–60 mins",
      },
      {
        name: "Foil Highlights & Face-Framing Babylights",
        description: "Micro-fine weaving techniques for maximum lift, accentuating cheekbones with clean ash, honey, or golden tones.",
        idealFor: "High-contrast brightness, dimensional blonde, and face-framing illumination",
        duration: "120–150 mins",
      },
    ],
  },
  {
    id: "smoothing-texture",
    title: "Smoothing, Keratin & Anti-Frizz",
    subtitle: "Restorative protein infusion designed to withstand humidity and reduce styling time",
    items: [
      {
        name: "Brazilian Keratin Restorative System",
        description: "Deep micro-protein infusion sealing cuticles to eliminate stubborn frizz, impart silky softness, and lock in moisture.",
        idealFor: "Coarse, unmanageable, wavy, and humidity-prone hair textures",
        duration: "120–180 mins",
        badge: "Client Favorite",
      },
      {
        name: "Luxe Hair Botox Smoothing Therapy",
        description: "Intensive formaldehyde-free treatment with amino acids, collagen, and caviar oil to rejuvenate hollow, over-processed strands.",
        idealFor: "Bleached, heat-damaged, brittle, or aging hair requiring intense nourishment",
        duration: "90–120 mins",
      },
      {
        name: "Organic Cysteine Smoothening Ritual",
        description: "Gentle non-chemical amino treatment delivering high manageability and soft shine while preserving hair's natural wave bounce.",
        idealFor: "Clients desiring soft frizz control without rigid pin-straight textures",
        duration: "120–150 mins",
      },
    ],
  },
  {
    id: "spa-restorative",
    title: "Restorative Hair Spa & Scalp Health",
    subtitle: "Therapeutic sensory treatments restoring scalp microbiome and cellular fiber strength",
    items: [
      {
        name: "Olaplex® Molecular Bond Reconstruction",
        description: "Patented active chemistry relinking broken disulfide bonds within hair structure, restoring strength, elasticity, and softness.",
        idealFor: "Bleach-fatigued, chemically treated, or heat-damaged hair",
        duration: "45–60 mins",
        badge: "Bond Multiplier",
      },
      {
        name: "Signature Deep Moisture Scalp & Strand Spa",
        description: "Exfoliating botanical scalp cleanse, moisture-infusing mask, hot towel wrap, and relaxing pressure-point head massage.",
        idealFor: "Dry hair, pollution defense, scalp tightness, and rejuvenating self-care",
        duration: "50–60 mins",
      },
      {
        name: "Scalp Clarifying & Anti-Dandruff Therapy",
        description: "Purifying clay and tea-tree infusion eliminating buildup, calming redness, and restoring sebum balance at follicle roots.",
        idealFor: "Oily, sensitive, or flaky scalp conditions",
        duration: "40–50 mins",
      },
    ],
  },
];

const consultationSteps = [
  {
    step: "01",
    title: "Diagnostic Consultation",
    description: "We analyze your hair density, elasticity, scalp condition, and facial proportions to recommend the ideal cut and chemistry.",
  },
  {
    step: "02",
    title: "Bespoke Execution",
    description: "Precision sectioning, custom pigment compounding, and controlled temperature tools ensure minimal damage and maximum vibrancy.",
  },
  {
    step: "03",
    title: "Styling & Home Maintenance",
    description: "Your service finishes with a signature blowout and curated product recommendations to preserve your salon finish at home.",
  },
];

const hairFaqs = [
  {
    question: "Do I need a prior consultation before booking a balayage or colour service?",
    answer:
      "A quick consultation helps us examine hair history, current undertones, and test strand condition. You can share your reference photos with our stylists on WhatsApp for immediate guidance.",
  },
  {
    question: "How long do the Keratin and Hair Botox treatments last?",
    answer:
      "With sulfate-free aftercare shampoo and proper maintenance, our Brazilian Keratin and Hair Botox treatments typically last between 3 to 4 months.",
  },
  {
    question: "Are your hair colours safe for sensitive scalps?",
    answer:
      "Yes, we offer gentle, low-ammonia and ammonia-free formulations, accompanied by protective scalp barrier shields applied before colour processing.",
  },
  {
    question: "How do I schedule an appointment?",
    answer:
      "Appointments can be scheduled easily via WhatsApp or direct phone call. Simply tap either button on this page to check availability.",
  },
];

export default function HairPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
      {/* 1. Hair Hero Header with Editorial Arch Frame */}
      <section
        style={{
          position: "relative",
          paddingBlock: "4.5rem 4rem",
          backgroundColor: "var(--color-espresso-charcoal)",
          color: "#FFFFFF",
          backgroundImage:
            "radial-gradient(ellipse at 65% 20%, rgba(186, 104, 74, 0.22) 0%, rgba(30, 23, 18, 0.98) 75%)",
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
                  <span>✦ HAIR STUDIO &bull; {businessConfig.address.locality} ✦</span>
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
                Precision Cuts, Couture Colour &amp; Restorative Hair Care
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
                Tailored cutting architecture, hand-painted dimensional balayage, and advanced smoothing therapies
                crafted to elevate your hair health and personal presence.
              </p>

              <div
                className="hero-cta-group"
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
                  Consult via WhatsApp
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
                  Call Hair Stylist
                </Button>
              </div>
            </div>

            {/* Right: Arched Portrait Photo */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="arch-frame" style={{ maxWidth: "340px", width: "100%" }}>
                <div className="arch-frame-inner" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/images/hair-detail.jpg"
                    alt="Editorial Balayage Hair Artistry"
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
              <Scissors size={20} color="var(--color-terracotta)" />
              <div>
                <strong style={{ display: "block", fontSize: "0.95rem", color: "var(--color-espresso-dark)" }}>
                  Precision Techniques
                </strong>
                <span style={{ fontSize: "0.8rem", color: "var(--color-taupe-muted)" }}>
                  Customized geometry for each face shape
                </span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Sparkles size={20} color="var(--color-terracotta)" />
              <div>
                <strong style={{ display: "block", fontSize: "0.95rem", color: "var(--color-espresso-dark)" }}>
                  Luxe Formulations
                </strong>
                <span style={{ fontSize: "0.8rem", color: "var(--color-taupe-muted)" }}>
                  Olaplex, L&apos;Oréal &amp; Schwarzkopf care
                </span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <ShieldCheck size={20} color="var(--color-terracotta)" />
              <div>
                <strong style={{ display: "block", fontSize: "0.95rem", color: "var(--color-espresso-dark)" }}>
                  Gentle Chemistry
                </strong>
                <span style={{ fontSize: "0.8rem", color: "var(--color-taupe-muted)" }}>
                  Ammonia-free &amp; restorative bond care
                </span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Clock size={20} color="var(--color-terracotta)" />
              <div>
                <strong style={{ display: "block", fontSize: "0.95rem", color: "var(--color-espresso-dark)" }}>
                  Dedicated Time
                </strong>
                <span style={{ fontSize: "0.8rem", color: "var(--color-taupe-muted)" }}>
                  Unhurried, attentive salon experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Hair Services Categories & Cards */}
      <section style={{ backgroundColor: "var(--color-cream-base)", paddingBlock: "5rem" }}>
        <div className="container">
          <SectionHeading
            eyebrow="Service Menu"
            title="Signature Hair Services"
            subtitle="Explore our comprehensive cuts, colour art, smoothing therapies, and deep conditioning rituals."
            align="center"
            theme="light"
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "4rem", marginTop: "3rem" }}>
            {hairServiceCategories.map((category) => (
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
                      className="service-menu-card"
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

      {/* 4. Consultation Process Walkthrough */}
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
            title="The Salon Craft Process"
            subtitle="How we ensure every cut, colour, and smoothing service exceeds your expectations."
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
            {consultationSteps.map((step) => (
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

      {/* 5. Hair Care FAQs */}
      <section style={{ backgroundColor: "var(--color-cream-base)", paddingBlock: "5rem" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <SectionHeading
            eyebrow="Common Questions"
            title="Hair Services FAQ"
            subtitle="Helpful answers about hair consultations, styling longevity, and salon aftercare."
            align="center"
            theme="light"
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "3rem" }}>
            {hairFaqs.map((faq) => (
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

      {/* 6. Hair Consultation Banner */}
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
            Ready for your hair transformation?
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
            Schedule Your Hair Consultation at Glow Unisex Salon
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255, 255, 255, 0.8)",
              marginBottom: "2.25rem",
              lineHeight: 1.6,
            }}
          >
            Connect directly with our hair specialists on WhatsApp or call us to reserve your time in Rajouri Garden.
          </p>

          <ActionButtons />
        </div>
      </section>
    </div>
  );
}
