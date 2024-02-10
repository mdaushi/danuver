interface AppHeaderProps {
  children?: React.ReactNode
  title: string
}

export default function AppHeader({ children, title }: AppHeaderProps) {
  return (
    <div className="flex items-center justify-between space-y-2">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <div className="flex items-center space-x-2">{children}</div>
    </div>
  )
}
