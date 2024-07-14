"use client"

import { Suspense } from "react"

import { Skeleton } from "@/components/ui/skeleton"
import { SearchInput } from "@/components/search-input"
import { SiteMenu } from "@/components/site-menu"
import { SiteNav } from "@/components/site-nav"

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-14 items-center space-x-4 sm:justify-between sm:space-x-0">
        <SiteNav />

        <div className="flex flex-1 justify-end">
          <Suspense fallback={<Skeleton className="h-10 w-60" />}>
            <SearchInput />
          </Suspense>

          <div className="lg:hidden">
            <SiteMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
