import { AdUnit } from './AdUnit';

export function LeaderboardAd({ className = '' }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <AdUnit 
        slot="LEADERBOARD_SLOT_ID"
        format="horizontal"
        responsive={true}
        style={{ 
          display: 'block',
          width: '100%',
          maxWidth: '728px',
          height: '90px'
        }}
      />
    </div>
  );
}
