import type { Metadata } from 'next'
import { getMarkdownContent } from '@/lib/markdown'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import OfferBox from '@/components/OfferBox'
import { getPartnerById } from '@/config/affiliates'

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = getMarkdownContent('hemforsakring.md')
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  }
}

export default function HemforsakringPage() {
  const { content, frontmatter } = getMarkdownContent('hemforsakring.md')
  const gofidoPartner = getPartnerById('gofido')
  const hedvigPartner = getPartnerById('hedvig')

  return (
    <div className="bg-[#FFFEF9] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="mb-12">
          <p className="text-[14px] text-[#C95D3F] font-medium mb-4 tracking-wide">
            GUIDE
          </p>
        </div>
        <article className="prose-legal">
          <MarkdownRenderer content={content} />
          
          <div className="my-12">
            <h2 className="text-[24px] font-semibold text-[#2C2C2C] mb-4">Tjänster för hemförsäkring</h2>
            <p className="text-[15px] text-[#4A4A4A] mb-6">
              Här är några tjänster där du kan jämföra eller teckna hemförsäkring. Vi rankar inte och rekommenderar inte specifika alternativ – jämför alltid villkor och priser själv.
            </p>
            
            {gofidoPartner && (
              <OfferBox
                partner={gofidoPartner}
                title="Jämför hemförsäkringar med Gofido"
                description="Gofido är en försäkringstjänst där du kan jämföra och teckna hemförsäkring från flera olika försäkringsbolag på en plats. Få en överblick över olika alternativ och villkor."
                ctaText="Jämför på Gofido"
              />
            )}
            
            {hedvigPartner && (
              <OfferBox
                partner={hedvigPartner}
                title="Hedvig"
                description="Hedvig är ett svenskt digitalt försäkringsbolag där du köper och hanterar din försäkring i appen."
                ctaText="Besök Hedvig"
              />
            )}
          </div>

          {frontmatter.lastUpdated && (
            <div className="mt-16 pt-8 border-t border-[#E5E5E5] text-[#8B8B8B] text-[14px]">
              Senast uppdaterad: {frontmatter.lastUpdated}
            </div>
          )}
        </article>
      </div>
    </div>
  )
}
