"use client"

import { useState } from "react"
import { useCookies } from "next-client-cookies"

import { sidebarItemConfig } from "@/config/sidebar"
import { cn } from "@/lib/utils"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import { ScrollArea } from "../ui/scroll-area"
import { Separator } from "../ui/separator"
import { TooltipProvider } from "../ui/tooltip"
import Sidebar from "./sidebar"

interface AppComponentProps {
  children: React.ReactNode
}

export function AppLayoutComponent({ children }: AppComponentProps) {
  const cookies = useCookies()

  const layout = cookies.get("react-resizable-panels:layout")
  const collapsed = cookies.get("react-resizable-panels:collapsed")

  const defaultLayout = layout ? JSON.parse(layout) : [265, 440, 655]
  const defaultCollapsed = collapsed ? JSON.parse(collapsed) : false

  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)

  const navCollapsedSize = 4

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`
        }}
        className="h-full max-h-[1200px] items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
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
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <ScrollArea className="h-screen">{children}</ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  )
}

interface AppComponentContentProps extends AppComponentProps {
  title: string
}

export function AppLayoutContentComponent({
  children,
  title,
}: AppComponentContentProps) {
  return (
    <>
      <div className="flex h-[52px] items-center px-4 py-2">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <Separator />
      {children}
    </>
  )
}
