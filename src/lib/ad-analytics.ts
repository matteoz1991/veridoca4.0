export function trackAdImpression(slotId: string, position: string) {
  // Send to your analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'ad_impression', {
      ad_slot: slotId,
      ad_position: position,
      page_path: window.location.pathname
    });
  }
}

export function trackAdClick(slotId: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'ad_click', {
      ad_slot: slotId,
      page_path: window.location.pathname
    });
  }
}

// Calculate estimated revenue
export function estimateRevenue(
  pageViews: number,
  avgRPM: number = 100 // SEK
): number {
  return (pageViews / 1000) * avgRPM;
}
