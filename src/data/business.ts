/**
 * Business Configuration for Glow Unisex Salon
 * 
 * Strict Phase 0 Rule:
 * All unknown or unconfirmed values must use explicit placeholders.
 * Do not invent contact information, prices, or claim verified Google listings.
 */

export interface BusinessHours {
  days: string;
  hours: string;
  display: string;
}

export interface AddressInfo {
  street: string;
  locality: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  formattedAddress: string;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
}

export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  address: AddressInfo;
  phone: string;
  phoneCallHref: string;
  whatsapp: string;
  whatsappHref: string;
  email: string;
  openingHours: BusinessHours;
  googleBusinessProfileUrl: string;
  googleMapsUrl: string;
  websiteDomain: string;
  isVerifiedGoogleListing: boolean;
  social: SocialLinks;
}

export const businessConfig: BusinessConfig = {
  name: "Glow Unisex Salon",
  shortName: "GUS",
  tagline: "[PENDING CONFIRMATION: Premium Hair, Skin & Bridal Styling]",
  address: {
    street: "[ADD STREET ADDRESS - PENDING CONFIRMATION]",
    locality: "Rajouri Garden",
    city: "New Delhi",
    state: "Delhi",
    postalCode: "[ADD PIN CODE - PENDING CONFIRMATION]",
    country: "India",
    formattedAddress: "Rajouri Garden, New Delhi, Delhi, India [FULL ADDRESS PENDING CONFIRMATION]",
  },
  phone: "[ADD PHONE - PENDING CONFIRMATION]",
  phoneCallHref: "tel:+910000000000",
  whatsapp: "[ADD WHATSAPP NUMBER - PENDING CONFIRMATION]",
  whatsappHref: "https://wa.me/?text=Hello%20Glow%20Unisex%20Salon",
  email: "[ADD EMAIL - PENDING CONFIRMATION]",
  openingHours: {
    days: "Monday – Sunday",
    hours: "[ADD TIMINGS - PENDING CONFIRMATION: e.g. 10:00 AM - 8:30 PM]",
    display: "Mon - Sun: 10:00 AM - 8:30 PM [PENDING CONFIRMATION]",
  },
  googleBusinessProfileUrl: "[ADD GOOGLE BUSINESS PROFILE URL - PENDING VERIFICATION]",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Glow+Unisex+Salon+Rajouri+Garden+New+Delhi",
  websiteDomain: "[ADD DOMAIN - e.g. glowunisexsalon.com]",
  isVerifiedGoogleListing: false, // Explicit: do not claim verification until verified
  social: {
    instagram: "[ADD INSTAGRAM PROFILE URL]",
    facebook: "[ADD FACEBOOK PROFILE URL]",
  },
};

export const navRoutes = [
  { label: "Home", href: "/" },
  { label: "Hair", href: "/hair" },
  { label: "Skin & Bridal", href: "/skin-bridal" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
