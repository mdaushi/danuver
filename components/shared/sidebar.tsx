"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { SidebarItem, SidebarItemVariant } from "@/types/sidebar"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface SidebarProps {
  isCollapsed: boolean
  items: SidebarItem[]
}

export default function Sidebar({ items, isCollapsed }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {items.map((item, index) => {
          const isMenuActive =
            pathname === item.link
              ? SidebarItemVariant.DEFAULT
              : SidebarItemVariant.GHOST

          if (isCollapsed) {
            return (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.link} // Updated to use the link property
                    className={cn(
                      buttonVariants({ variant: isMenuActive, size: "icon" }),
                      "h-9 w-9",
                      isMenuActive === "default" &&
                        "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="sr-only">{item.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="flex items-center gap-4"
                >
                  {item.title}
                  {item.label && (
                    <span className="ml-auto text-muted-foreground">
                      {item.label}
                    </span>
                  )}
                </TooltipContent>
              </Tooltip>
            )
          }

          return (
            <Link
              key={index}
              href={item.link}
              className={cn(
                buttonVariants({ variant: isMenuActive, size: "sm" }),
                isMenuActive === "default" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "justify-start"
              )}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.title}
              {item.label && (
                <span
                  className={cn(
                    "ml-auto",
                    isMenuActive === "default" &&
                      "text-background dark:text-white"
                  )}
                >
                  {item.label}
                </span>
              )}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
