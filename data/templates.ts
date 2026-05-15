import { DOCUMENT_TEMPLATES as SE_TEMPLATES } from "../constants";
import { DOCUMENT_TEMPLATES_EN as EN_TEMPLATES } from "./templates_en";
import { DocumentTemplate } from "../types";

export const getLocalizedTemplates = (countryId: string): DocumentTemplate[] => {
  if (['US', 'UK', 'ES', 'DE', 'FR'].includes(countryId)) {
    return EN_TEMPLATES;
  }
  
  // Default to Swedish for SE, NO, DK
  return SE_TEMPLATES;
};
