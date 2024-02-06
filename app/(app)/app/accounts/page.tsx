import AppHeader from "@/components/layout/app-header"
import { AppLayoutComponent } from "@/components/layout/app-layout-component"

export default function AccountPage() {
  return (
    <>
      <div className="flex flex-col">
        <AppLayoutComponent>
          <AppHeader title="Accounts" />

          <p>content</p>
        </AppLayoutComponent>
      </div>
    </>
  )
}
