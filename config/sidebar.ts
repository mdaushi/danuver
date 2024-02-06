import { CreditCard, LayoutDashboard } from "lucide-react"

export const sidebarItemConfig = {
  items: [
    {
      title: "Dashboard",
      label: "",
      icon: LayoutDashboard,
      link: "/app",
    },
    {
      title: "Accounts",
      label: "",
      icon: CreditCard,
      link: "/app/accounts",
    },
  ],
}
