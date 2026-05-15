import { DocumentTemplate, UserInputData, CountryConfig } from "../types";

export const generateLegalDocument = async (
  template: DocumentTemplate,
  data: UserInputData,
  country: CountryConfig
): Promise<string> => {
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 2000));

  const dateStr = new Date().toLocaleDateString(country.id === 'SE' ? 'sv-SE' : 'en-US');

  let markdown = `# ${template.title}\n\n`;
  
  if (country.id === 'SE') {
    markdown += `*Detta dokument är upprättat den ${dateStr} i enlighet med svensk lagstiftning.* \n\n`;
    markdown += `## 1. Parter och Avtalsinnehåll\n\n`;
  } else {
    markdown += `*This document is executed on ${dateStr} in accordance with the applicable laws of ${country.name}.* \n\n`;
    markdown += `## 1. Parties and Agreement Details\n\n`;
  }

  // Generic population of data 
  for (const field of template.formFields) {
    const value = data[field.id] || (country.id === 'SE' ? 'Ej angivet' : 'Not specified');
    markdown += `**${field.label}:**\n${value}\n\n`;
  }

  if (country.id === 'SE') {
    markdown += `## 2. Standardvillkor\n\n`;
    markdown += `Ovanstående information utgör grunden för detta avtal. Parterna förbinder sig att följa de villkor som anges. Eventuella ändringar av detta avtal måste göras skriftligen och undertecknas av båda parter.\n\n`;
    
    markdown += `## 3. Tvistelösning\n\n`;
    markdown += `Tvist angående tolkning eller tillämpning av detta avtal ska i första hand lösas genom förhandling mellan parterna. Om parterna inte kan enas, ska tvisten avgöras av allmän domstol i Sverige.\n\n`;
    
    markdown += `## Underskrifter\n\n`;
    markdown += `Detta avtal har upprättats i två likalydande exemplar, varav parterna tagit var sitt.\n\n`;

    markdown += `Ort och datum: ___________________________\n\n`;
    markdown += `Signatur: ________________________________\n\n`;
    markdown += `Namnförtydligande: _______________________\n\n`;
  } else {
    markdown += `## 2. General Terms\n\n`;
    markdown += `The provided details constitute the basis of this agreement. The parties agree to adhere to the specified terms. Any modifications must be made in writing and signed by both parties.\n\n`;
    
    markdown += `## 3. Dispute Resolution\n\n`;
    markdown += `Any disputes arising out of or in connection with this agreement shall primarily be resolved through negotiations between the parties. If an agreement cannot be reached, the dispute shall be subject to the exclusive jurisdiction of the courts of ${country.name}.\n\n`;
    
    markdown += `## Signatures\n\n`;
    markdown += `This agreement has been executed in duplicate, with each party receiving one original copy.\n\n`;

    markdown += `Place and Date: ___________________________\n\n`;
    markdown += `Signature: ________________________________\n\n`;
    markdown += `Print Name: _______________________________\n\n`;
  }

  return markdown;
};