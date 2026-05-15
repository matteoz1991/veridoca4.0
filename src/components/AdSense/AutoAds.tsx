import { useEffect } from 'react';

export function AutoAds() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        (window as any).adsbygoogle = (window as any).adsbygoogle || [];
        (window as any).adsbygoogle.push({
          google_ad_client: "ca-pub-XXXXXXXXXX",
          enable_page_level_ads: true,
          overlays: { bottom: true } // Enable bottom anchor ads
        });
      } catch(err) {}
    }
  }, []);

  return null;
}
