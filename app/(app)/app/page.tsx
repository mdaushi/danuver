import {
  AppLayoutComponent,
  AppLayoutContentComponent,
} from "@/components/shared/appLayoutComponent"

export default function AppPage() {
  return (
    <>
      <div className="flex flex-col">
        <AppLayoutComponent>
          <AppLayoutContentComponent title="Dashboard">
            <p>content</p>
          </AppLayoutContentComponent>
        </AppLayoutComponent>
      </div>
    </>
  )
}
