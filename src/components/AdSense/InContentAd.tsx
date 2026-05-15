import { AdUnit } from './AdUnit';

export function InContentAd({ 
  className = '',
  position = 'center' 
}: { 
  className?: string;
  position?: 'center' | 'left' | 'right';
}) {
  const alignmentClass = {
    center: 'justify-center',
    left: 'justify-start',
    right: 'justify-end'
  }[position];

  return (
    <div className={`flex ${alignmentClass} my-8 ${className}`}>
      <AdUnit 
        slot="IN_CONTENT_SLOT_ID"
        format="auto"
        responsive={true}
        style={{ 
          display: 'block',
          width: '100%',
          maxWidth: '728px',
          minHeight: '90px'
        }}
      />
    </div>
  );
}
