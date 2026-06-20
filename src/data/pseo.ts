import type { LegalDocPage } from '@/types/pseo'

// ---------------------------------------------------------------------------
// pSEO page registry — one record per (documentType × country).
// Add new rows here; generateStaticParams() picks them up automatically.
// Content must NOT be fabricated — use [AI UTKAST] markers until reviewed.
// ---------------------------------------------------------------------------

export const pseoPages: LegalDocPage[] = [
  // ─── Sweden / Swedish ────────────────────────────────────────────────────
  {
    documentType: 'employment-contract',
    country: 'SE',
    locale: 'sv',
    slug: 'anstallningsavtal',
    pageType: 'template',

    title: 'Anställningsavtal mall – gratis nedladdning Sverige 2025',
    metaDescription:
      'Gratis anställningsavtal mall för Sverige, anpassad till LAS och EU-direktivet 2019/1152. Fyll i dina uppgifter och ladda ner direkt — ingen registrering krävs.',
    primaryKeyword: 'anställningsavtal mall',
    secondaryKeywords: [
      'anställningsavtal gratis',
      'anställningskontrakt mall',
      'arbetsavtal mall sverige',
      'employment contract sweden template',
      'anställningsavtal word',
    ],

    canonicalUrl: 'https://veridoca.com/sv/anstallningsavtal',
    hreflangAlternates: [
      { locale: 'sv', url: 'https://veridoca.com/sv/anstallningsavtal' },
      { locale: 'en-US', url: 'https://veridoca.com/templates/employment/employment-contract' },
    ],

    intro:
      'Ett anställningsavtal är ett juridiskt bindande dokument som reglerar anställningsförhållandet mellan arbetsgivare och arbetstagare i Sverige. Enligt Lag (1982:80) om anställningsskydd (LAS) är arbetsgivaren skyldig att senast en månad efter anställningens start lämna skriftlig information om de villkor som är av väsentlig betydelse. Vår mall uppfyller dessa krav och är anpassad till EU-direktivet 2019/1152 om tydliga och förutsägbara arbetsvillkor, som implementerades i svensk rätt 2022.',

    whatItMustContain: [
      {
        heading: 'Parternas identitet',
        description:
          'Arbetsgivarens och arbetstagarens fullständiga namn, personnummer/organisationsnummer och adress. Juridiskt bindande avtal kräver att parterna är tydligt identifierbara.',
        required: true,
      },
      {
        heading: 'Befattning och arbetsuppgifter',
        description:
          'Jobbtitel och en konkret beskrivning av arbetsuppgifterna. Alltför vaga formuleringar leder ofta till tvister om vad som ingår i tjänsten.',
        required: true,
      },
      {
        heading: 'Anställningsform',
        description:
          'Tydlig angivelse om det rör sig om tillsvidareanställning (fast tjänst) eller tidsbegränsad anställning. Vid tidsbegränsad anställning ska slutdatum eller de omständigheter som avgör när anställningen upphör anges (6 § LAS).',
        required: true,
      },
      {
        heading: 'Tillträdesdatum',
        description: 'Det exakta datum då arbetet påbörjas. Vid tidsbegränsad anställning anges även slutdatum.',
        required: true,
      },
      {
        heading: 'Lön och ersättning',
        description:
          'Grundlön i SEK, löneform (månadslön/timlön), utbetalningsdatum och eventuella tillägg (OB, provision, bonus). Om kollektivavtal reglerar lönen ska detta anges istället.',
        required: true,
      },
      {
        heading: 'Arbetstid',
        description:
          'Avtalad veckoarbetstid och hur den är förlagd. Normal heltid i Sverige är 40 timmar per vecka. Övertidsregler och kompensation för övertid bör anges.',
        required: true,
      },
      {
        heading: 'Arbetsplats',
        description:
          'Huvudsaklig arbetsplats och eventuell möjlighet till distansarbete. Sedan EU-direktivet 2019/1152 krävs uttrycklig information om mobilitetskrav.',
        required: true,
      },
      {
        heading: 'Provanställning',
        description:
          'Provanställning får enligt 6 § LAS inte överstiga sex månader. Under prövotiden kan både arbetsgivare och arbetstagare avbryta anställningen utan de normala uppsägningstiderna, om inte annat avtalats.',
        required: false,
      },
      {
        heading: 'Uppsägningstid',
        description:
          'Minsta uppsägningstider regleras i 11 § LAS: en månad vid 0–2 års anställning upp till sex månader vid mer än tio år. Parterna kan avtala längre men inte kortare tider.',
        required: true,
      },
      {
        heading: 'Semester',
        description:
          'Rätten till 25 dagars betald semester per år regleras i Semesterlagen (1977:480). Ange om semesterersättning ingår i lönen eller betalas ut separat.',
        required: true,
      },
      {
        heading: 'Sekretess och lojalitetsplikt',
        description:
          'Klausul om hantering av konfidentiell information. Konkurrensklausuler måste vara skäliga i tid (normalt max 18–24 månader) och geografiskt omfång för att vara giltiga.',
        required: false,
      },
    ],

    commonMistakes: [
      'Oklar anställningsform — utan uttrycklig angivelse gäller tillsvidareanställning per automatik, vilket kan vara oönskat vid projektanställning.',
      'Alltför vaga arbetsuppgifter som gör det omöjligt att bedöma om arbetstagaren uppfyller tjänstens krav vid en eventuell uppsägningssituation.',
      'Konkurrensklausuler utan ersättning eller rimlig tidsbegränsning — sådana kan jämkas eller ogiltigförklaras av Arbetsdomstolen.',
      'Löneangivelse utan valuta och löneform — skriv alltid "XX 000 kr brutto per månad" för att undvika oklarheter.',
      'Saknad hänvisning till tillämpligt kollektivavtal när arbetsgivaren är bunden av ett sådant.',
      'Inga uppgifter om övertidsersättning eller kompensationsledighet, trots att arbetet regelbundet kräver övertid.',
    ],

    legalContext:
      '[AI UTKAST – Väntar på juridisk granskning] Anställningsavtal i Sverige regleras primärt av Lag (1982:80) om anställningsskydd (LAS). Lagen är semidispositiv, vilket innebär att avvikelser från lagens regler kan göras genom kollektivavtal. Arbetsgivare bundna av kollektivavtal följer branschspecifika villkor som ofta ger bättre förmåner än LAS. Medbestämmandelagen (MBL, 1976:580) ger fackföreningar rätt att förhandla vid väsentliga förändringar i verksamheten. EU-direktiv 2019/1152 om tydliga och förutsägbara arbetsvillkor utökade 2022 informationskraven för arbetsgivare och begränsade parallell anställning. Diskrimineringslagen (2008:567) och Arbetstidslagen (1982:673) reglerar ytterligare aspekter av anställningsförhållandet.',

    faq: [
      {
        question: 'Måste ett anställningsavtal vara skriftligt i Sverige?',
        answer:
          '[AI UTKAST] Själva avtalet behöver inte vara skriftligt, men enligt LAS 6 c § är arbetsgivaren skyldig att lämna skriftlig information om anställningsvillkoren senast en månad efter tillträdesdagen. I praktiken upprättas alltid skriftliga avtal för att undvika bevis- och tolkningstviseter.',
      },
      {
        question: 'Vad händer om inget anställningsavtal är undertecknat?',
        answer:
          '[AI UTKAST] Utan skriftligt avtal gäller LAS:s minimiregler automatiskt. Arbetsgivaren riskerar dessutom att Arbetsdomstolen dömer till förmån för arbetstagaren vid tvister, eftersom arbetsgivaren har bevisbördan för avtalade villkor.',
      },
      {
        question: 'Kan man avtala om kortare uppsägningstid än vad LAS föreskriver?',
        answer:
          '[AI UTKAST] Nej, inte genom individuellt avtal. LAS 11 § fastställer minimiuppsägningstider som inte kan undantas bilateralt. Kollektivavtal kan dock i vissa fall tillåta kortare tider för specifika anställningsformer.',
      },
      {
        question: 'Hur lång provanställning är tillåten?',
        answer:
          '[AI UTKAST] Provanställning får pågå i högst sex månader enligt 6 § LAS. Avtalar man om längre tid omvandlas anställningen automatiskt till tillsvidareanställning vid sexmånadersgränsen, om inte arbetsgivaren dessförinnan meddelat att provanställningen ska avbrytas.',
      },
      {
        question: 'Behöver anställningsavtalet bevittnas?',
        answer:
          '[AI UTKAST] Nej. Bevittning är inte ett formkrav för anställningsavtal i Sverige. Avtalet är bindande om det undertecknats av båda parter.',
      },
      {
        question: 'Gäller ett muntligt anställningsavtal?',
        answer:
          '[AI UTKAST] Ja, muntliga avtal är juridiskt giltiga. Men de är mycket svåra att bevisa. Arbetsgivaren bryter ändå mot informationskravet i LAS om skriftlig information inte lämnas inom en månad — och riskerar skadestånd.',
      },
    ],

    relatedDocuments: [
      'non-disclosure-agreement',
      'non-compete-agreement',
      'offer-letter',
      'termination-letter',
    ],

    generatorCtaLabel: 'Fyll i och ladda ner anställningsavtal',
    generatorPath: '/templates/employment/employment-contract/generate',

    lastReviewed: '2025-06-01',
    reviewedBy: 'AI-utkast, väntar på juridisk granskning',

    disclaimer:
      'Denna mall tillhandahålls enbart i informationssyfte och utgör inte juridisk rådgivning. Lagar och regler ändras kontinuerligt. Konsultera alltid en kvalificerad jurist i din jurisdiktion för råd anpassade till din specifika situation. Veridoca ansvarar inte för följder av att mallen används utan professionell juridisk rådgivning.',
  },
]

// ---------------------------------------------------------------------------
// Helpers used by Next.js routing
// ---------------------------------------------------------------------------

export function getPseoPage(locale: string, slug: string): LegalDocPage | undefined {
  return pseoPages.find((p) => p.locale === locale && p.slug === slug)
}

export function getAllPseoParams(): { locale: string; slug: string }[] {
  return pseoPages.map((p) => ({ locale: p.locale, slug: p.slug }))
}
