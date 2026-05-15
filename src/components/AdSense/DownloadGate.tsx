import { useState } from 'react';

export function DownloadGate({ 
  children, 
  onDownload 
}: { 
  children: React.ReactNode;
  onDownload: () => void;
}) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Ensure ad impressions are counted (AdSense policy compliant delay)
    await new Promise(resolve => setTimeout(resolve, 1500));

    onDownload();
    setIsProcessing(false);
  };

  return (
    <div onClick={handleClick} className={`cursor-pointer ${isProcessing ? 'opacity-50 pointer-events-none' : ''}`}>
      {children}
    </div>
  );
}
