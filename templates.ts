import { DOCUMENT_TEMPLATES_SE as SE_TEMPLATES } from "./templates_se";
import { DOCUMENT_TEMPLATES_EN as EN_TEMPLATES } from "./templates_en";
import { DOCUMENT_TEMPLATES_ES as ES_TEMPLATES } from "./templates_es";
import { DOCUMENT_TEMPLATES_DE as DE_TEMPLATES } from "./templates_de";
import { DOCUMENT_TEMPLATES_FR as FR_TEMPLATES } from "./templates_fr";
import { DOCUMENT_TEMPLATES_NO as NO_TEMPLATES } from "./templates_no";
import { DOCUMENT_TEMPLATES_DK as DK_TEMPLATES } from "./templates_dk";
import { DOCUMENT_TEMPLATES_NL as NL_TEMPLATES } from "./templates_nl";
import { DocumentTemplate } from "../types";

export const getLocalizedTemplates = (countryId: string): DocumentTemplate[] => {
  switch (countryId) {
    case 'US':
    case 'UK':
      return EN_TEMPLATES;
    case 'ES':
      return ES_TEMPLATES;
    case 'DE':
      return DE_TEMPLATES;
    case 'FR':
      return FR_TEMPLATES;
    case 'NO':
      return NO_TEMPLATES;
    case 'DK':
      return DK_TEMPLATES;
    case 'NL':
      return NL_TEMPLATES;
    case 'SE':
    default:
      return SE_TEMPLATES;
  }
};

// Global fix for templates import
