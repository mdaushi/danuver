import AppHeader from "@/components/layout/app-layout/app-header"
import { AppLayoutGroup } from "@/components/layout/app-layout/app-layout"
import { AppLayoutPanel } from "@/components/layout/app-layout/app-layout-panel"

export default function AppPage() {
  return (
    <>
      <div className="flex flex-col">
        <AppLayoutGroup>
          <AppLayoutPanel defaultSize={80}>
            <AppHeader title="Accounts" />

            <p>content</p>
          </AppLayoutPanel>
        </AppLayoutGroup>
      </div>
    </>
  )
}
