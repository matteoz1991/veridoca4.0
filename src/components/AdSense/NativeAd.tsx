import { AdUnit } from './AdUnit';

export function NativeAd({ 
  className = '',
  layout = 'grid' 
}: { 
  className?: string;
  layout?: 'grid' | 'list';
}) {
  return (
    <div className={className}>
      <AdUnit 
        slot="NATIVE_AD_SLOT_ID"
        format="fluid"
        responsive={true}
        style={{ 
          display: 'block'
        }}
      />
    </div>
  );
}
