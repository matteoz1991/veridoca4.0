import { useEffect } from 'react';

export function useAdRefresh(slotId: string, intervalMs = 30000, maxRefreshes = 3) {
  useEffect(() => {
    let refreshCount = 0;

    const refreshAd = () => {
      if (refreshCount >= maxRefreshes) return;
      
      try {
        // Refresh the ad slot
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
        refreshCount++;
      } catch (err) {
        console.error('Ad refresh error:', err);
      }
    };

    const interval = setInterval(refreshAd, intervalMs);

    return () => clearInterval(interval);
  }, [slotId, intervalMs, maxRefreshes]);
}
