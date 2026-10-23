/**
 * Glow Unisex Salon — Chocolate & Sand Luxury Editorial Theme
 * Sourced directly from Swatch:
 * - Chocolate: #3E000C (Deep couture chocolate burgundy)
 * - Sand: #FFECD1 (Radiant warm sand / champagne ivory)
 */

export const colorTokens = {
  // Primary Reference Swatches
  chocolate: "#3E000C",
  chocolateDark: "#2B0008",
  chocolateMuted: "rgba(62, 0, 12, 0.78)",
  chocolateSoft: "rgba(62, 0, 12, 0.08)",
  chocolateBorder: "rgba(62, 0, 12, 0.16)",

  sand: "#FFECD1",
  sandLight: "#FFFDF8",
  sandSurface: "#FFF5E6",
  sandFeatureBar: "#FFECD1",
  whiteCard: "#FFFFFF",

  // Typography
  textHeading: "#3E000C",
  textBody: "rgba(62, 0, 12, 0.78)",
  textMuted: "rgba(62, 0, 12, 0.6)",
  textLight: "#FFECD1",

  // Borders & Accents
  borderWarm: "rgba(62, 0, 12, 0.12)",
  borderSubtle: "rgba(62, 0, 12, 0.08)",
  starRatingGold: "#3E000C",
} as const;

export const brandPalette = {
  primary: colorTokens.chocolate,
  primaryHover: colorTokens.chocolateDark,
  surfaceLight: colorTokens.sandLight,
  surfaceSecondary: colorTokens.sandSurface,
  surfaceFeature: colorTokens.sand,
  surfaceDark: colorTokens.chocolate,
  textHeading: colorTokens.textHeading,
  textBody: colorTokens.textBody,
  accent: colorTokens.chocolate,
} as const;
