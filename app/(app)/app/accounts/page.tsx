import AppHeader from "@/components/layout/app-layout/app-header"
import { AppLayoutGroup } from "@/components/layout/app-layout/app-layout"
import { AppLayoutPanel } from "@/components/layout/app-layout/app-layout-panel"

export default function AccountPage() {
  return (
    <>
      <div className="flex flex-col">
        <AppLayoutGroup>
          <AppLayoutPanel>
            <AppHeader title="Accounts" />

            <p>content</p>
          </AppLayoutPanel>
          <AppLayoutPanel>
            <AppHeader title="Accounts" />

            <p>content</p>
          </AppLayoutPanel>
        </AppLayoutGroup>
      </div>
    </>
  )
}
