"use client"

import React, { useState } from "react"
import { useCookies } from "next-client-cookies"

import { sidebarItemConfig } from "@/config/sidebar"
import { cn } from "@/lib/utils"
import {
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import Sidebar from "../../shared/sidebar"
import { ScrollArea } from "../../ui/scroll-area"
import { TooltipProvider } from "../../ui/tooltip"

interface AppComponentProps {
  children: React.ReactNode
}

export function AppLayoutGroup({ children }: AppComponentProps) {
  const cookies = useCookies()

  const layout = cookies.get("react-resizable-panels:layout")
  const collapsed = cookies.get("react-resizable-panels:collapsed")

  const defaultLayout = layout ? JSON.parse(layout) : 20
  const defaultCollapsed = collapsed ? JSON.parse(collapsed) : false

  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)

  const navCollapsedSize = 4

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes[0]
          )}`
        }}
        className="h-full max-h-[1200px] items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={() => {
            setIsCollapsed(true)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              true
            )}`
          }}
          onExpand={() => {
            setIsCollapsed(false)
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              false
            )}`
          }}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out"
          )}
        >
          <div
            className={cn(
              "flex h-[52px] items-center justify-center",
              isCollapsed ? "h-[52px]" : "px-2"
            )}
          ></div>
          <Sidebar items={sidebarItemConfig.items} isCollapsed={isCollapsed} />
        </ResizablePanel>
        {children}
      </ResizablePanelGroup>
    </TooltipProvider>
  )
}
