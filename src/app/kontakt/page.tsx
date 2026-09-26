import type { Metadata } from 'next'
import { getMarkdownContent } from '@/lib/markdown'
import MarkdownRenderer from '@/components/MarkdownRenderer'

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = getMarkdownContent('kontakt.md')
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  }
}

export default function KontaktPage() {
  const { content } = getMarkdownContent('kontakt.md')

  return (
    <div className="bg-[#FFFEF9] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <article className="prose-legal">
          <MarkdownRenderer content={content} />
        </article>
      </div>
    </div>
  )
}
