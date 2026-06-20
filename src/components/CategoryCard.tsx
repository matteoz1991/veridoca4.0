import Link from 'next/link'
import { ArrowRight, Building2, Users, Home, User, Heart, FileCheck, DollarSign } from 'lucide-react'
import type { Category } from '@/types'

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
  User: <User className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  FileCheck: <FileCheck className="w-6 h-6" />,
  DollarSign: <DollarSign className="w-6 h-6" />,
}

const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
  blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200 hover:border-blue-400' },
  purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200 hover:border-purple-400' },
  orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200 hover:border-orange-400' },
  teal: { bg: 'bg-teal-50', icon: 'text-teal-600', border: 'border-teal-200 hover:border-teal-400' },
  pink: { bg: 'bg-pink-50', icon: 'text-pink-600', border: 'border-pink-200 hover:border-pink-400' },
  indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', border: 'border-indigo-200 hover:border-indigo-400' },
  emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-600', border: 'border-emerald-200 hover:border-emerald-400' },
}

type Props = {
  category: Category
}

export default function CategoryCard({ category }: Props) {
  const colors = colorMap[category.color] ?? colorMap.blue

  return (
    <Link
      href={`/templates/${category.slug}`}
      className={`group block bg-white rounded-xl border ${colors.border} p-6 transition-all duration-200 hover:shadow-md`}
    >
      <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4 ${colors.icon}`}>
        {iconMap[category.icon]}
      </div>
      <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
        {category.name}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
        {category.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-400">{category.templateCount} templates</span>
        <span className="text-sm font-medium text-emerald-600 flex items-center gap-1 group-hover:text-emerald-700 transition-colors">
          Browse
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  )
}
