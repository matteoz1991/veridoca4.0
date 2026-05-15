export const AD_POLICY_RULES = {
  // Maximum ad density
  MAX_ADS_PER_PAGE: {
    MOBILE: 4,      // Including anchor
    DESKTOP: 8,     // Including sidebar
  },
  
  // Minimum content between ads
  MIN_CONTENT_BETWEEN_ADS: {
    WORDS: 300,
    PARAGRAPHS: 3,
  },
  
  // Ad placement restrictions
  FORBIDDEN_PLACEMENTS: [
    'Above first paragraph',
    'In navigation menu',
    'Covering main content',
    'In pop-ups or overlays',
  ],
  
  // Required spacing
  MIN_AD_SPACING: {
    VERTICAL_PX: 150,
    BETWEEN_ADS_PX: 200,
  }
};

// Validator function
export function validateAdPlacement(
  adsOnPage: number, 
  isMobile: boolean
): boolean {
  const maxAds = isMobile 
    ? AD_POLICY_RULES.MAX_ADS_PER_PAGE.MOBILE 
    : AD_POLICY_RULES.MAX_ADS_PER_PAGE.DESKTOP;
    
  return adsOnPage <= maxAds;
}
