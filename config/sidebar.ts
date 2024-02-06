import { LayoutDashboard } from "lucide-react"

import { SidebarItemVariant } from "@/types/sidebar"

export const sidebarItemConfig = {
  items: [
    {
      title: "Dashboard",
      label: "",
      icon: LayoutDashboard,
      variant: SidebarItemVariant.DEFAULT,
      link: "/dashboard/",
    },
  ],
}
