import Card from '@/components/Card'
import { EmblaCarousel } from '@/components/carouse/EmblaCarousel'

import Image from 'next/image'
import { mydata } from './assets/data'
import { EmblaNetwork } from '@/components/carouse/EmbaNetworks'
import { EmblaCompany } from '@/components/carouse/EmblaCompany'
import Link from 'next/link'

// const OPTIONS = { loop: true }
const OPTIONS = { dragFree: true }
const SLIDE_COUNT = 16
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  const { networks, companies, watched, trending, tvshows, movies } = mydata
  // console.log(SLIDES, companies,networks)

  return (
    <div className='container'>
      <section className='trending'>
        <div className='head'>
          <div className='title'>TV Shows trending Today</div>
          <div className='more'>
            <Link href='/tvshows'>See All</Link>
          </div>
        </div>
        <EmblaCarousel slides={watched} options={OPTIONS} />
      </section>
      <section className='trending'>
        <div className='head'>
          <div className='title'>Movie trending Today</div>
          <Link href='/movies'>See All</Link>
        </div>
        <EmblaCarousel slides={trending} options={OPTIONS} />
      </section>
      <section className='trending'>
        <div className='head'>
          <div className='title'>Popular Networks</div>
        </div>
        <EmblaNetwork slides={networks} options={OPTIONS} />
      </section>
      <section className='trending'>
        <div className='head'>
          <div className='title'>Popular Companies</div>
        </div>
        <EmblaCompany slides={companies} options={OPTIONS} />
      </section>
      <section className='trending'>
        <div className='head'>
          <div className='title'>Toop movies last week</div>
        </div>
        <EmblaCarousel slides={movies} options={OPTIONS} />
      </section>

      <section className='trending'>
        <div className='head'>
          <div className='title'>Top tv shows last week</div>
        </div>

        <EmblaCarousel slides={tvshows} options={OPTIONS} />
      </section>

      <section>
        {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
      </section>
    </div>
  )
}
