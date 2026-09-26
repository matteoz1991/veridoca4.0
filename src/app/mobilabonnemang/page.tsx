import type { Metadata } from 'next'
import { getMarkdownContent } from '@/lib/markdown'
import MarkdownRenderer from '@/components/MarkdownRenderer'

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = getMarkdownContent('mobilabonnemang.md')
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  }
}

export default function MobilabonnemangPage() {
  const { content, frontmatter } = getMarkdownContent('mobilabonnemang.md')

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
