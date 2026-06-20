'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Download, FileText, FileCheck, Lock, FileEdit, Printer } from 'lucide-react'
import { formatDownloadCount } from '@/lib/utils'
import { templateSchemas } from '@/data/template-fields'

type Props = {
  templateName: string
  downloadCount: number
  slug: string
  category: string
}

function buildBlankDoc(slug: string, templateName: string): string {
  const schema = templateSchemas[slug]
  if (schema) {
    return schema.document.replace(/\{\{(\w+)\}\}/g, (_, key) => {
      const field = schema.fields.find(f => f.id === key)
      return field ? `[${field.label.toUpperCase()}]` : `[${key.toUpperCase()}]`
    })
  }
  return `${templateName}\n\n[This is a blank template. Fill in all fields marked with brackets before signing.]\n\n[PARTY 1 NAME]\n[PARTY 1 ADDRESS]\n\n[PARTY 2 NAME]\n[PARTY 2 ADDRESS]\n\nDate: [DATE]\n\n___________________________\nSignature\n\n___________________________\nSignature`
}

export default function DownloadSection({ templateName, downloadCount, slug, category }: Props) {
  const [wordDone, setWordDone] = useState(false)
  const hasSchema = !!templateSchemas[slug]

  function downloadWord() {
    const doc = buildBlankDoc(slug, templateName)
    const html = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head><meta charset='utf-8'><title>${templateName}</title>
<style>
  body { font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.6; margin: 1in; color: #000; }
  h1 { font-size: 16pt; font-weight: bold; text-align: center; margin-bottom: 18pt; text-transform: uppercase; }
  p { margin: 0 0 10pt 0; }
</style>
</head><body>
<h1>${templateName}</h1>
<p>${doc.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>')}</p>
</body></html>`

    const blob = new Blob(['﻿', html], { type: 'application/msword' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${templateName.replace(/\s+/g, '-').toLowerCase()}.doc`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    setWordDone(true)
    setTimeout(() => setWordDone(false), 3000)
  }

  function downloadPDF() {
    const doc = buildBlankDoc(slug, templateName)
    const win = window.open('', '_blank')
    if (!win) return
    win.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>${templateName}</title>
<style>
  body { font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.7; margin: 1in; color: #000; max-width: 700px; }
  h1 { font-size: 16pt; text-align: center; text-transform: uppercase; margin-bottom: 24pt; }
  @media print { @page { margin: 1in; } }
</style></head><body>
<h1>${templateName}</h1>
<pre style="font-family: inherit; font-size: inherit; white-space: pre-wrap;">${doc.replace(/</g, '&lt;')}</pre>
<script>window.onload=function(){window.print()}<\/script>
</body></html>`)
    win.document.close()
  }

  return (
    <div className="bg-emerald-500/[0.08] border border-emerald-500/20 rounded-2xl p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-2">
        <Download className="w-5 h-5 text-emerald-400" />
        <h2 className="text-xl font-bold text-white">Download Free Template</h2>
      </div>
      <p className="text-slate-400 text-sm mb-6">
        Attorney-reviewed · Updated 2026 · {formatDownloadCount(downloadCount)} downloads · No registration required
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <button
          onClick={downloadWord}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors text-sm"
        >
          <FileCheck className="w-4 h-4" />
          {wordDone ? 'Downloaded!' : 'Download Word (.doc)'}
        </button>

        <button
          onClick={downloadPDF}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors text-sm"
        >
          <Printer className="w-4 h-4" />
          Download / Print PDF
        </button>

        {hasSchema ? (
          <Link
            href={`/templates/${category}/${slug}/generate`}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-white/[0.06] hover:bg-white/[0.10] text-slate-200 font-semibold rounded-xl border border-white/[0.12] transition-colors text-sm"
          >
            <FileEdit className="w-4 h-4" />
            Customize Fields
          </Link>
        ) : (
          <button
            onClick={downloadWord}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-white/[0.06] hover:bg-white/[0.10] text-slate-200 font-semibold rounded-xl border border-white/[0.12] transition-colors text-sm"
          >
            <FileText className="w-4 h-4" />
            Blank Template
          </button>
        )}
      </div>

      {hasSchema && (
        <p className="text-xs text-slate-500 mb-4">
          Tip: Use <strong className="text-slate-400">Customize Fields</strong> to fill in your details and generate a personalized document.
        </p>
      )}

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
        <div className="flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-emerald-500" />
          No email required
        </div>
        <div className="flex items-center gap-1.5">
          <Download className="w-3.5 h-3.5 text-emerald-500" />
          Instant download
        </div>
        <div className="flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-emerald-500" />
          Free forever
        </div>
      </div>

      <p className="text-xs text-slate-600 mt-4 pt-4 border-t border-emerald-500/[0.15] leading-relaxed">
        This template is a starting point and does not constitute legal advice. Review with an attorney before use in high-stakes transactions.
      </p>
    </div>
  )
}
