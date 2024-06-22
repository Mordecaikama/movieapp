'use client'

import Image from 'next/image'
import { useState } from 'react'
import { EmblaCarousel } from './carouse/EmblaCarousel'
import { mydata } from '@/app/assets/data'

const OPTIONS = { dragFree: true }
const SLIDE_COUNT = 16

function Navbar() {
  const [menu, setmenu] = useState(null)
  const [hide, setHide] = useState(true)
  const { movies } = mydata

  return (
    <div className='jumbotron'>
      <div
        className='menu__toggle'
        onClick={() => {
          setHide(!hide)
        }}
      >
        menu
      </div>
      <nav>
        <a
          className={` nav__link ${menu === 'dash' && 'active'}`}
          onClick={() => {
            setmenu('dash')
          }}
        >
          DASHBOARD
        </a>
        <a
          className={` nav__link ${menu === 'movies' && 'active'}`}
          onClick={() => {
            setmenu('movies')
          }}
        >
          MOVIES
        </a>
        <a
          className={` nav__link ${menu === 'series' && 'active'}`}
          onClick={() => {
            setmenu('series')
          }}
        >
          SERIES
        </a>
        <a
          className={` nav__link ${menu === 'kids' && 'active'}`}
          onClick={() => {
            setmenu('kids')
          }}
        >
          KIDS
        </a>
      </nav>

      <nav className={`mobile ${!hide && 'menushow'}`}>
        <a
          className={`nav__close`}
          onClick={() => {
            setHide(!hide)
          }}
        >
          x
        </a>
        <a
          className={` nav__link ${menu === 'dash' && 'active'}`}
          onClick={() => {
            setmenu('dash')
          }}
        >
          DASHBOARD
        </a>
        <a
          className={` nav__link ${menu === 'movies' && 'active'}`}
          onClick={() => {
            setmenu('movies')
          }}
        >
          MOVIES
        </a>
        <a
          className={` nav__link ${menu === 'series' && 'active'}`}
          onClick={() => {
            setmenu('series')
          }}
        >
          SERIES
        </a>
        <a
          className={` nav__link ${menu === 'kids' && 'active'}`}
          onClick={() => {
            setmenu('kids')
          }}
        >
          KIDS
        </a>
      </nav>

      <div className='jumbo__info'>
        <h1
          className=' text-7xl font-semibold 
      '
        >
          RAYA AND THE LAST DRAGON
        </h1>
        <p className='text-lg'>A Disney Original Film 98% Match 2021</p>
        <div className='btn-group'>
          <button className='play'>play</button>
          <button>add</button>
        </div>
      </div>

      <div className='my__list container'>
        <EmblaCarousel slides={movies} options={OPTIONS} />
        {/* <div class='movie'>
          <Image
            src={'/images/poster.png'}
            width={200}
            height={200}
            alt='movie'
          />
          <div class='movie-info'>
            <h3>The Movie</h3>
            <span>8.4</span>
          </div>
        </div>
        <div class='movie'>
          <Image
            src={'/images/goodard.jpg'}
            width={200}
            height={200}
            alt='movie'
          />
          <div class='movie-info'>
            <h3>The Movie</h3>
            <span>8.4</span>
          </div>
        </div>
        <div class='movie'>
          <Image
            src={'/images/image.jpg'}
            width={200}
            height={200}
            alt='movie'
          />
          <div class='movie-info'>
            <h3>The Movie</h3>
            <span>8.4</span>
          </div>
        </div>
        <div class='movie'>
          <Image
            src={'/images/poster.png'}
            width={200}
            height={200}
            alt='movie'
          />
          <div class='movie-info'>
            <h3>The Movie</h3>
            <span>8.4</span>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Navbar
