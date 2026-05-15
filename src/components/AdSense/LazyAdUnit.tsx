import { useEffect, useRef, useState } from 'react';
import { AdUnit } from './AdUnit';

export function LazyAdUnit(props: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px', // Load 200px before visible
        threshold: 0.01
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div ref={containerRef}>
      {isVisible ? <AdUnit {...props} /> : (
        <div style={{ minHeight: '250px' }} className="bg-slate-800/20 animate-pulse rounded-lg" />
      )}
    </div>
  );
}
