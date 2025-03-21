// components/FullSlider.tsx
"use client"

import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "src/components/ui/carousel"

export default function FullSlider() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const images = [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/slide3.jpg',
    '/images/slide4.jpg', // New slide
    '/images/slide5.jpg', // New slide
  ]

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  // Auto-play functionality
  React.useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative group">
        <Carousel setApi={setApi} opts={{ loop: true }}>
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index}>
                {/* Reduced height container */}
                <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={img}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority={index === 0}
                  />
                  {/* Optional caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white text-lg font-medium text-center">
                      Slide {index + 1}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Arrows */}
          <CarouselPrevious 
            className="left-2 md:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
          />
          <CarouselNext 
            className="right-2 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
          />
        </Carousel>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === i ? 'bg-primary scale-125' : 'bg-muted'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}