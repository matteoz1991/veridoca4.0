interface SideNoteProps {
  title: string
  children: React.ReactNode
}

export default function SideNote({ title, children }: SideNoteProps) {
  return (
    <aside className="my-8 p-6 bg-[#FAF9F5] border-l-3 border-[#C95D3F]">
      <h4 className="font-serif font-semibold text-[#2C2C2C] text-[17px] mb-3">
        {title}
      </h4>
      <div className="text-[15px] text-[#4A4A4A] leading-relaxed">
        {children}
      </div>
    </aside>
  )
}
