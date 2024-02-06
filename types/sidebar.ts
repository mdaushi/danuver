import { LucideIcon } from "lucide-react"

export enum SidebarItemVariant {
  DEFAULT = "default",
  GHOST = "ghost",
}

export interface SidebarItem {
  title: string
  label?: string
  icon: LucideIcon
  link: string
}
