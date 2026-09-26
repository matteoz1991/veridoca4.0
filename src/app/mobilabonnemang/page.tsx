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
    <div className="bg-[#07090f] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 sm:p-12">
          <MarkdownRenderer content={content} />
          {frontmatter.lastUpdated && (
            <div className="mt-12 pt-6 border-t border-white/[0.06] text-slate-500 text-sm">
              Senast uppdaterad: {frontmatter.lastUpdated}
            </div>
          )}
        </article>
      </div>
    </div>
  )
}
