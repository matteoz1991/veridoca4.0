/**
 * Central affiliate partner configuration
 * 
 * Only active partners are rendered on the site.
 * Inactive partners are pre-registered here for future activation.
 */

export type AffiliateNetwork = 'addrevenue' | 'adtraction'

export interface AffiliatePartner {
  id: string
  name: string
  network: AffiliateNetwork
  active: boolean
  category: 'insurance' | 'mobile' | 'broadband'
  trackingUrl?: string
  description?: string
  pages?: string[]
}

export const affiliatePartners: AffiliatePartner[] = [
  // Active partners
  {
    id: 'gofido',
    name: 'Gofido',
    network: 'addrevenue',
    active: true,
    category: 'insurance',
    trackingUrl: 'https://addrevenue.io/t?a=984856&c=3469711',
    description: 'Jämför och teckna hemförsäkring via Gofido',
    pages: ['/forsakring/hemforsakring'],
  },

  // Pending partners - Addrevenue (insurance)
  {
    id: 'hedvig',
    name: 'Hedvig',
    network: 'addrevenue',
    active: false,
    category: 'insurance',
  },
  {
    id: 'svedea',
    name: 'Svedea',
    network: 'addrevenue',
    active: false,
    category: 'insurance',
  },
  {
    id: 'happens',
    name: 'Happens',
    network: 'addrevenue',
    active: false,
    category: 'insurance',
  },
  {
    id: 'mysafety',
    name: 'Mysafety',
    network: 'addrevenue',
    active: false,
    category: 'insurance',
  },

  // Pending partners - Adtraction (telecom)
  {
    id: 'telia',
    name: 'Telia',
    network: 'adtraction',
    active: false,
    category: 'mobile',
  },
  {
    id: 'tele2',
    name: 'Tele2',
    network: 'adtraction',
    active: false,
    category: 'mobile',
  },
  {
    id: 'tre',
    name: 'Tre',
    network: 'adtraction',
    active: false,
    category: 'mobile',
  },
  {
    id: 'comviq',
    name: 'Comviq',
    network: 'adtraction',
    active: false,
    category: 'mobile',
  },
  {
    id: 'tellus',
    name: 'Tellus',
    network: 'adtraction',
    active: false,
    category: 'mobile',
  },
  {
    id: 'ownit',
    name: 'Ownit',
    network: 'adtraction',
    active: false,
    category: 'broadband',
  },
  {
    id: 'fello',
    name: 'Fello',
    network: 'adtraction',
    active: false,
    category: 'mobile',
  },
  {
    id: 'lyca-mobile',
    name: 'Lyca Mobile',
    network: 'adtraction',
    active: false,
    category: 'mobile',
  },
  {
    id: 'vimla',
    name: 'Vimla',
    network: 'adtraction',
    active: false,
    category: 'mobile',
  },
  {
    id: 'hallon',
    name: 'Hallon',
    network: 'adtraction',
    active: false,
    category: 'mobile',
  },
  {
    id: 'telenor',
    name: 'Telenor',
    network: 'adtraction',
    active: false,
    category: 'mobile',
  },
  {
    id: 'chilimobil',
    name: 'Chilimobil',
    network: 'adtraction',
    active: false,
    category: 'mobile',
  },
  {
    id: 'internetport',
    name: 'Internetport',
    network: 'adtraction',
    active: false,
    category: 'broadband',
  },
  {
    id: 'boxer',
    name: 'Boxer',
    network: 'adtraction',
    active: false,
    category: 'broadband',
  },
  {
    id: 'allente',
    name: 'Allente',
    network: 'adtraction',
    active: false,
    category: 'broadband',
  },
  {
    id: 'ica-forsakringar',
    name: 'ICA Försäkringar',
    network: 'adtraction',
    active: false,
    category: 'insurance',
  },
  {
    id: 'dina-forsakringar',
    name: 'Dina Försäkringar',
    network: 'adtraction',
    active: false,
    category: 'insurance',
  },
  {
    id: 'zmarta',
    name: 'Zmarta',
    network: 'adtraction',
    active: false,
    category: 'insurance',
  },
  {
    id: 'compricer',
    name: 'Compricer',
    network: 'adtraction',
    active: false,
    category: 'insurance',
  },
]

/**
 * Get active partners for a specific page
 */
export function getActivePartnersForPage(pagePath: string): AffiliatePartner[] {
  return affiliatePartners.filter(
    partner => 
      partner.active && 
      partner.pages?.some(page => pagePath.startsWith(page))
  )
}

/**
 * Get a specific partner by ID
 */
export function getPartnerById(id: string): AffiliatePartner | undefined {
  return affiliatePartners.find(partner => partner.id === id)
}
