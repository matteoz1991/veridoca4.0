'use client'

import { useState, useMemo, useRef } from 'react'
import { Download, FileText, Printer, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react'
import type { TemplateSchema, TemplateField } from '@/data/template-fields'

interface Props {
  schema: TemplateSchema
  templateName: string
}

function fillDocument(template: string, values: Record<string, string>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => values[key] || `[${key.toUpperCase().replace(/_/g, ' ')}]`)
}

function renderPreview(filled: string): string {
  return filled
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\[([A-Z _]+)\]/g, '<mark class="unfilled">[$1]</mark>')
    .replace(/\n/g, '<br/>')
}

function groupFields(fields: TemplateField[]): Record<string, TemplateField[]> {
  const groups: Record<string, TemplateField[]> = {}
  for (const f of fields) {
    const g = f.group ?? 'Details'
    ;(groups[g] ??= []).push(f)
  }
  return groups
}

export default function DocumentGenerator({ schema, templateName }: Props) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {}
    const groups = groupFields(schema.fields)
    Object.keys(groups).forEach((g, i) => { initial[g] = i === 0 })
    return initial
  })
  const [downloaded, setDownloaded] = useState(false)
  const previewRef = useRef<HTMLDivElement>(null)

  const filled = useMemo(() => fillDocument(schema.document, values), [schema.document, values])
  const previewHtml = useMemo(() => renderPreview(filled), [filled])
  const groups = useMemo(() => groupFields(schema.fields), [schema.fields])

  const filledCount = schema.fields.filter(f => f.required && values[f.id]?.trim()).length
  const requiredCount = schema.fields.filter(f => f.required).length

  function setValue(id: string, val: string) {
    setValues(prev => ({ ...prev, [id]: val }))
  }

  function toggleGroup(g: string) {
    setOpenGroups(prev => ({ ...prev, [g]: !prev[g] }))
  }

  function downloadPDF() {
    window.print()
  }

  function downloadWord() {
    const html = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head><meta charset='utf-8'><title>${templateName}</title>
<style>
  body { font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.6; margin: 1in; color: #000; }
  p { margin: 0 0 12pt 0; }
  h1 { font-size: 16pt; font-weight: bold; text-align: center; margin-bottom: 18pt; }
</style>
</head><body>
<h1>${templateName}</h1>
<p>${filled.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>')}</p>
</body></html>`
    const blob = new Blob(['﻿', html], { type: 'application/msword' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${templateName.replace(/\s+/g, '-').toLowerCase()}.doc`
    a.click()
    URL.revokeObjectURL(url)
    setDownloaded(true)
    setTimeout(() => setDownloaded(false), 3000)
  }

  const inputCls = 'w-full px-3 py-2 bg-white/[0.05] border border-white/[0.10] rounded-lg text-white placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 transition-colors'
  const labelCls = 'block text-xs font-medium text-slate-400 mb-1'

  return (
    <div className="flex flex-col lg:flex-row gap-6 min-h-screen">

      {/* ── Left: Form ── */}
      <div className="lg:w-[420px] lg:flex-shrink-0 space-y-3">

        {/* Progress bar */}
        <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-white">Required fields</span>
            <span className="text-sm text-slate-400">{filledCount}/{requiredCount}</span>
          </div>
          <div className="h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-300"
              style={{ width: requiredCount > 0 ? `${(filledCount / requiredCount) * 100}%` : '0%' }}
            />
          </div>
        </div>

        {/* Field groups */}
        {Object.entries(groups).map(([group, fields]) => (
          <div key={group} className="bg-white/[0.04] border border-white/[0.08] rounded-xl overflow-hidden">
            <button
              onClick={() => toggleGroup(group)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-white hover:bg-white/[0.04] transition-colors"
            >
              {group}
              {openGroups[group] ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
            </button>
            {openGroups[group] && (
              <div className="px-4 pb-4 space-y-3 border-t border-white/[0.06]">
                {fields.map(field => (
                  <div key={field.id} className="pt-3">
                    <label className={labelCls}>
                      {field.label}
                      {field.required && <span className="text-emerald-500 ml-0.5">*</span>}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        className={inputCls + ' resize-none'}
                        rows={3}
                        placeholder={field.placeholder}
                        value={values[field.id] ?? ''}
                        onChange={e => setValue(field.id, e.target.value)}
                      />
                    ) : field.type === 'select' ? (
                      <select
                        className={inputCls + ' bg-[#0c1018]'}
                        value={values[field.id] ?? ''}
                        onChange={e => setValue(field.id, e.target.value)}
                      >
                        <option value="">Select…</option>
                        {field.options?.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        className={inputCls}
                        placeholder={field.placeholder}
                        value={values[field.id] ?? ''}
                        onChange={e => setValue(field.id, e.target.value)}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Download buttons */}
        <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 space-y-2">
          <button
            onClick={downloadWord}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg text-sm transition-colors"
          >
            {downloaded ? <CheckCircle className="w-4 h-4" /> : <Download className="w-4 h-4" />}
            {downloaded ? 'Downloaded!' : 'Download Word (.doc)'}
          </button>
          <button
            onClick={downloadPDF}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white/[0.08] hover:bg-white/[0.12] text-white font-semibold rounded-lg text-sm transition-colors border border-white/[0.10]"
          >
            <Printer className="w-4 h-4" />
            Print / Save as PDF
          </button>
        </div>
      </div>

      {/* ── Right: Live preview ── */}
      <div className="flex-1 min-w-0">
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <FileText className="w-4 h-4 text-slate-500" />
            <span className="text-sm font-medium text-slate-400">Live Document Preview</span>
            <span className="ml-auto text-xs text-slate-600">Yellow = unfilled fields</span>
          </div>
          <div
            ref={previewRef}
            id="document-preview"
            className="p-8 font-mono text-sm leading-relaxed text-slate-300 whitespace-pre-wrap overflow-auto max-h-[80vh]"
            dangerouslySetInnerHTML={{ __html: previewHtml }}
          />
        </div>
      </div>

      {/* Print styles — only the preview prints */}
      <style>{`
        @media print {
          body > * { display: none !important; }
          #document-preview {
            display: block !important;
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: white;
            color: black;
            font-family: 'Times New Roman', serif;
            font-size: 12pt;
            line-height: 1.6;
            padding: 1in;
            max-height: none;
          }
          #document-preview mark.unfilled {
            background: transparent;
            color: black;
          }
        }
        mark.unfilled {
          background: rgba(234, 179, 8, 0.2);
          color: #fbbf24;
          border-radius: 2px;
          padding: 0 2px;
        }
      `}</style>
    </div>
  )
}
