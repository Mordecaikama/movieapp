'use client'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from './EmblaCarouselSelectedSnapDisplay'
import Image from 'next/image'

export function EmblaCarousel({ slides, options }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((dt, index) => (
            <div className='embla__slide__item' key={index}>
              <Image src={dt} width={200} height={200} alt='movie' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
