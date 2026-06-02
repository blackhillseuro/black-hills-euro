interface ServiceCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="card hover:border-[#3a3a3a] transition-colors h-full">
      {icon && <div className="text-gold mb-4">{icon}</div>}
      <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
      <p className="text-[#777] text-sm leading-relaxed">{description}</p>
    </div>
  )
}
