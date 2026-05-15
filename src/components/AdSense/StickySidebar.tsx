import { AdUnit } from './AdUnit';

export function SidebarAd({ 
  slot,
  size = 'large',
  className = '' 
}: { 
  slot: string;
  size?: 'large' | 'medium';
  className?: string;
}) {
  const dimensions = size === 'large' 
    ? { width: '300px', height: '600px' }
    : { width: '300px', height: '250px' };

  return (
    <div className={className}>
      <AdUnit 
        slot={slot}
        format="vertical"
        responsive={false}
        style={{ 
          display: 'block',
          ...dimensions
        }}
      />
    </div>
  );
}

export function StickySidebar({ className = '' }: { className?: string }) {
  return (
    <aside className={`hidden lg:block sticky top-4 ${className}`}>
      <div className="space-y-4">
        {/* Primary sidebar ad - 300x600 */}
        <SidebarAd 
          slot="SIDEBAR_PRIMARY_SLOT_ID"
          size="large"
        />
        
        {/* Secondary sidebar ad - 300x250 */}
        <SidebarAd 
          slot="SIDEBAR_SECONDARY_SLOT_ID"
          size="medium"
        />
      </div>
    </aside>
  );
}
