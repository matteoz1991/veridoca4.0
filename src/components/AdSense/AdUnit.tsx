import { useEffect, useRef } from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal' | 'fluid';
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function AdUnit({ 
  slot, 
  format = 'auto', 
  responsive = true, 
  className = '',
  style = {}
}: AdUnitProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    if (adRef.current && !adRef.current.getAttribute('data-adsbygoogle-status')) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (err: any) {
        if (err.message && err.message.includes('already have ads')) {
          // ignore strict mode error
        } else {
          console.error('AdSense error:', err);
        }
      }
    }
  }, [slot]);

  return (
    <div className={`adsense-container my-4 ${className}`} style={style}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-XXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
}
