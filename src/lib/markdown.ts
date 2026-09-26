import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'src/content')

export interface MarkdownContent {
  content: string
  frontmatter: {
    title: string
    description: string
    lastUpdated?: string
    [key: string]: any
  }
}

export function getMarkdownContent(filename: string): MarkdownContent {
  const fullPath = path.join(contentDirectory, filename)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    content,
    frontmatter: data as MarkdownContent['frontmatter'],
  }
}
