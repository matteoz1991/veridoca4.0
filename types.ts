export enum DocumentCategory {
  FORETAG = 'business',
  PRIVAT = 'private',
  FASTIGHET = 'real_estate',
  ANSTALLNING = 'employment',
  FAMILJ = 'family'
}

export interface CountryConfig {
  id: string;
  name: string;
  flag: string;
  language: string;
}

export interface DocumentTemplate {
  id: string;
  title: string;
  description: string;
  category: DocumentCategory;
  price: number;
  icon: string;
  formFields: FormField[];
  popular?: boolean; // New flag for highlighting popular templates
}

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'date' | 'email' | 'number' | 'textarea' | 'select';
  placeholder?: string;
  required: boolean;
  options?: string[]; // For select inputs
}

export interface UserInputData {
  [key: string]: string;
}

export interface GeneratedDocument {
  content: string; // Markdown or HTML content
  title: string;
  date: string;
}