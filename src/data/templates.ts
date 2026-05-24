export type FieldType = 'text' | 'textarea' | 'date' | 'number';

export interface TemplateField {
  id: string;
  label: string;
  type: FieldType;
  placeholder?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface DocumentTemplate {
  slugs: Record<string, string>;
  title: string | Record<string, string>;
  category: string;
  description: string | Record<string, string>;
  fields: TemplateField[] | Record<string, TemplateField[]>;
  content: (data: Record<string, string>, lang?: string) => React.ReactNode;
  seoArticle?: React.ReactNode | Record<string, React.ReactNode>;
  faqs?: FAQ[] | Record<string, FAQ[]>;
  author?: {
    name: string;
    role: string;
  };
}

import { sekretessavtal } from './documents/sekretessavtal';
import { skuldebrev } from './documents/skuldebrev';
import { testamente } from './documents/testamente';
import { samboavtal } from './documents/samboavtal';
import { framtidsfullmakt } from './documents/framtidsfullmakt';
import { aktieagaravtal } from './documents/aktieagaravtal';
import { samarbetsavtal } from './documents/samarbetsavtal';
import { anstallningsavtal } from './documents/anstallningsavtal';
import { konsultavtal } from './documents/konsultavtal';

// New Företag
import { aktieoverlatelse } from './documents/aktieoverlatelse';
import { uppdragsavtal } from './documents/uppdragsavtal';
import { aterforsaljaravtal } from './documents/aterforsaljaravtal';
import { hyresavtal_lokal } from './documents/hyresavtal_lokal';
import { styrelseprotokoll } from './documents/styrelseprotokoll';
import { inkramsoverlatelse } from './documents/inkramsoverlatelse';
import { allmanna_villkor } from './documents/allmanna_villkor';
import { integritetspolicy_doc } from './documents/integritetspolicy_doc';
import { kopavtal_foretag } from './documents/kopavtal_foretag';
import { laneavtal_foretag } from './documents/laneavtal_foretag';

// New Privatperson
import { gavobrev } from './documents/gavobrev';
import { aktenskapsforord } from './documents/aktenskapsforord';
import { bodelningsavtal } from './documents/bodelningsavtal';
import { andrahandsuthyrning } from './documents/andrahandsuthyrning';
import { kopekontrakt_bil } from './documents/kopekontrakt_bil';
import { fullmakt_allman } from './documents/fullmakt_allman';

export const templates: DocumentTemplate[] = [
  // Företag
  sekretessavtal,
  aktieagaravtal,
  samarbetsavtal,
  anstallningsavtal,
  konsultavtal,
  aktieoverlatelse,
  uppdragsavtal,
  aterforsaljaravtal,
  hyresavtal_lokal,
  styrelseprotokoll,
  inkramsoverlatelse,
  allmanna_villkor,
  integritetspolicy_doc,
  kopavtal_foretag,
  laneavtal_foretag,
  
  // Privatperson
  skuldebrev,
  testamente,
  samboavtal,
  framtidsfullmakt,
  gavobrev,
  aktenskapsforord,
  bodelningsavtal,
  andrahandsuthyrning,
  kopekontrakt_bil,
  fullmakt_allman
];
