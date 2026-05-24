export default function AboutUs() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Om Oss – Veridoca</h1>
      <div style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>
        <p>
          Välkommen till Veridoca! Vår vision är att demokratisera tillgången till högkvalitativa juridiska dokument. 
          Vi anser att grundläggande juridisk trygghet inte bör kosta tusentals kronor eller vara begränsad till stora företag.
        </p>
        
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--foreground)' }}>Vilka vi är</h2>
        <p>
          Veridoca drivs av ett dedikerat team med erfarenhet inom både juridik och mjukvaruutveckling. 
          Vårt mål är att digitalisera och förenkla byråkratiska processer för både privatpersoner och företag.
        </p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--foreground)' }}>Varför det är gratis</h2>
        <p>
          Genom att finansiera plattformen via annonser (Google AdSense) kan vi erbjuda samtliga våra premium-mallar helt gratis till våra användare. 
          Inga dolda avgifter, inga abonnemang – bara säkra och välformulerade avtal när du behöver dem.
        </p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--foreground)' }}>Vårt innehåll (E-E-A-T)</h2>
        <p>
          Alla mallar och artiklar på Veridoca granskas noggrant. Vi strävar alltid efter att upprätthålla högsta möjliga standard vad gäller 
          expertis, erfarenhet, auktoritet och trovärdighet (Experience, Expertise, Authoritativeness, Trustworthiness).
        </p>
      </div>
    </div>
  );
}
