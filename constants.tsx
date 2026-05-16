import { DocumentCategory, DocumentTemplate, CountryConfig } from "./types";
import React from 'react';
import { 
  Briefcase, 
  Home, 
  Heart, 
  FileText, 
  Building2, 
  Scroll, 
  Users, 
  Lock, 
  PenTool,
  Scale,
  Car,
  Hammer,
  ShieldAlert,
  FileBadge
} from 'lucide-react';

export const COUNTRIES: CountryConfig[] = [
  { id: 'SE', name: 'Sverige', flag: '🇸🇪', language: 'Svenska' },
  { id: 'US', name: 'USA', flag: '🇺🇸', language: 'English (US)' },
  { id: 'UK', name: 'United Kingdom', flag: '🇬🇧', language: 'English (UK)' },
  { id: 'ES', name: 'España', flag: '🇪🇸', language: 'Español' },
  { id: 'NO', name: 'Norge', flag: '🇳🇴', language: 'Norsk' },
  { id: 'DK', name: 'Danmark', flag: '🇩🇰', language: 'Dansk' },
  { id: 'DE', name: 'Deutschland', flag: '🇩🇪', language: 'Deutsch' },
  { id: 'FR', name: 'France', flag: '🇫🇷', language: 'Français' },
  { id: 'NL', name: 'Nederland', flag: '🇳🇱', language: 'Nederlands' }
];

export const getIcon = (name: string, className: string = "w-6 h-6") => {
  switch (name) {
    case 'home': return <Home className={className} />;
    case 'briefcase': return <Briefcase className={className} />;
    case 'heart': return <Heart className={className} />;
    case 'building': return <Building2 className={className} />;
    case 'scroll': return <Scroll className={className} />;
    case 'users': return <Users className={className} />;
    case 'lock': return <Lock className={className} />;
    case 'pen-tool': return <PenTool className={className} />;
    case 'gift': return <Heart className={className} />;
    case 'scale': return <Scale className={className} />;
    case 'car': return <Car className={className} />;
    case 'hammer': return <Hammer className={className} />;
    case 'shield-alert': return <ShieldAlert className={className} />;
    case 'shield-check': return <ShieldAlert className={className} />; // Reuse shield
    case 'file-badge': return <FileBadge className={className} />;
    case 'file-minus': return <FileText className={className} />;
    default: return <FileText className={className} />;
  }
};