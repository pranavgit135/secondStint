"use client"

import * as React from "react"
import Image from "next/image"
import useEmblaCarousel, { type EmblaOptionsType } from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    src: "/placeholder.svg?width=1920&height=800",
    alt: "Second Stint – Create your second innings",
    headline: "Shape the next generation of leaders",
    sub: "Turn decades of experience into lasting impact.",
  },
  {
    src: "/placeholder.svg?width=1920&height=800",
    alt: "Second Stint – Hybrid learning journey",
    headline: "A structured 11-month hybrid journey",
    sub: "Residential bootcamp • Monthly immersions • Live masterclasses",
  },
  {
    src: "/placeholder.svg?width=1920&height=800",
    alt: "Second Stint – Stay relevant",
    headline: "Stay relevant. Build your legacy.",
    sub: "Transition confidently into academia & consulting.",
  },
]

const emblaOptions: EmblaOptionsType = { loop: true, skipSnaps: false }

export default function HeroSlider({ className }: { className?: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions)
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi])

  return (
    <section className={cn("relative", className)}>
      {/* Slider viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, idx) => (
            <div key={idx} className="relative flex-[0_0_100%] h-[60vh] sm:h-[70vh] lg:h-[80vh]">
              <Image
                src={slide.src || "/placeholder.svg"}
                alt={slide.alt}
                fill
                priority={idx === 0}
                className="object-cover"
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">{slide.headline}</h1>
                <p className="mt-4 text-lg md:text-2xl text-white/90 max-w-2xl">{slide.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        <Button
          size="icon"
          variant="secondary"
          onClick={scrollPrev}
          className="pointer-events-auto bg-white/70 hover:bg-white"
        >
          <ChevronLeft className="h-5 w-5 text-slate-800" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          size="icon"
          variant="secondary"
          onClick={scrollNext}
          className="pointer-events-auto bg-white/70 hover:bg-white"
        >
          <ChevronRight className="h-5 w-5 text-slate-800" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => emblaApi?.scrollTo(idx)}
            className={cn(
              "h-2 w-6 rounded-full transition-colors",
              selectedIndex === idx ? "bg-yellow-400" : "bg-white/60 hover:bg-white",
            )}
          />
        ))}
      </div>
    </section>
  )
}
