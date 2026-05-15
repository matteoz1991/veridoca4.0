// Prevent Cumulative Layout Shift (CLS) from ads
export function reserveAdSpace() {
  if (typeof document === 'undefined') return;
  const style = document.createElement('style');
  style.textContent = `
    .adsense-container {
      background: #f9fafb;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .adsense-container::before {
      content: '';
      display: block;
    }
    
    /* Desktop leaderboard */
    @media (min-width: 728px) {
      .adsense-container[data-format="horizontal"] {
        min-height: 90px;
      }
    }
    
    /* Sidebar ads */
    .adsense-container[data-format="vertical"] {
      min-height: 250px;
    }
  `;
  document.head.appendChild(style);
}

// Call on app initialization
if (typeof window !== 'undefined') {
  reserveAdSpace();
}
