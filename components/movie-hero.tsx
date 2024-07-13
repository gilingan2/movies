"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Movie } from "@/tmdb/models"
import { ArrowRight } from "lucide-react"

import { getRandomItems } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { MediaBackdrop } from "@/components/media-backdrop"

interface MovieHeroProps {
  movies: Movie[]
  label: string
}

export const MovieHero: React.FC<MovieHeroProps> = ({ movies, label }) => {
  const [mounted, setMounted] = useState(false)
  const [hero] = getRandomItems(movies, 1)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <Skeleton className="h-hero relative w-full" />

  return (
    <div className="h-hero relative">
      <MediaBackdrop image={hero.backdrop_path} alt={hero.title} />

      <div className="overlay">
        <div className="mx-auto max-w-3xl space-y-4 p-4 pb-8 text-center md:p-12">
          <Badge className="select-none">{label}</Badge>

          <h1 className="line-clamp-2 text-xl font-medium leading-tight tracking-tighter md:text-4xl">
            {hero.title}
          </h1>
          <p className="line-clamp-3 text-sm text-muted-foreground md:text-lg">
            {hero.overview}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <Link
              href={`/movie/${hero.id}`}
              className={buttonVariants({
                size: "lg",
                variant: "default",
              })}
            >
              Details <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}