import type { Metadata } from 'next'
import { getMarkdownContent } from '@/lib/markdown'
import MarkdownRenderer from '@/components/MarkdownRenderer'

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = getMarkdownContent('integritet.md')
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  }
}

export default function IntegritetPage() {
  const { content } = getMarkdownContent('integritet.md')

  return (
    <div className="bg-[#07090f] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 sm:p-12">
          <MarkdownRenderer content={content} />
        </article>
      </div>
    </div>
  )
}
