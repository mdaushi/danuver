"use client"

import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"

interface AppLayoutPanelProps {
  defaultSize?: number
  column?: number
  children: React.ReactNode
}

export function AppLayoutPanel({
  defaultSize = 80,
  column = 1,
  children,
}: AppLayoutPanelProps) {
  // const layout = getCookie("react-resizable-panels:layout")

  // const defaultLayout = layout ? layout[column] : undefined

  return (
    <>
      <ResizableHandle withHandle />
      <ResizablePanel minSize={30}>
        <ScrollArea className="h-screen">
          <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>
        </ScrollArea>
      </ResizablePanel>
    </>
  )
}
