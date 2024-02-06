import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/layout/main-nav"

interface SiteHeaderProps {
  menus?: NavItem[]
  showCtaApp?: boolean
}

export function SiteHeader({ menus, showCtaApp = false }: SiteHeaderProps) {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={menus} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {showCtaApp ? (
              <Link
                href="/app"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "px-4"
                )}
              >
                Open App
              </Link>
            ) : null}
          </nav>
        </div>
      </div>
    </header>
  )
}
