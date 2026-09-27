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
          
          {gofidoPartner && (
            <OfferBox
              partner={gofidoPartner}
              title="Jämför hemförsäkringar med Gofido"
              description="Gofido är en försäkringstjänst där du kan jämföra och teckna hemförsäkring från flera olika försäkringsbolag på en plats. Få en överblick över olika alternativ och villkor."
              ctaText="Jämför på Gofido"
              deepLink="https://addrevenue.io/t?a=984856&c=3469711&u=https%3A%2F%2Fwww.gofido.se%2Fhemforsakring%2F"
            />
          )}

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
