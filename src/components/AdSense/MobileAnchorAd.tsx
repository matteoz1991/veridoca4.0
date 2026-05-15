import { useEffect, useState } from 'react';
import { AdUnit } from './AdUnit';

export function MobileAnchorAd() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t lg:hidden">
      <AdUnit 
        slot="MOBILE_ANCHOR_SLOT_ID"
        format="auto"
        responsive={true}
        style={{ 
          display: 'block',
          width: '100%',
          height: '50px'
        }}
      />
    </div>
  );
}
