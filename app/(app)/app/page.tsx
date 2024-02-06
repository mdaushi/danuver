import AppHeader from "@/components/layout/app-header"
import { AppLayoutComponent } from "@/components/layout/app-layout-component"

export default function AppPage() {
  return (
    <>
      <div className="flex flex-col">
        <AppLayoutComponent>
          <AppHeader title="Dashboard" />

          <p>content</p>
        </AppLayoutComponent>
      </div>
    </>
  )
}
