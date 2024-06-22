import Image from 'next/image'
import React from 'react'

function TvShows() {
  return (
    <div className='container'>
      <h1>TRENDING TV SHOWS</h1>
      <div className='movies__container'>
        <div class='movie'>
          <Image
            src={'/images/poster.png'}
            width={150}
            height={150}
            alt='movie'
          />
        </div>
        <div class='movie'>
          <Image
            src={'/images/poster.png'}
            width={200}
            height={200}
            alt='movie'
          />
        </div>
        <div class='movie'>
          <Image
            src={'/images/goodard.jpg'}
            width={200}
            height={150}
            alt='movie'
          />
        </div>
        <div class='movie'>
          <Image
            src={'/images/goodard.jpg'}
            width={200}
            height={200}
            alt='movie'
          />
        </div>
        <div class='movie'>
          <Image
            src={'/images/goodard.jpg'}
            width={200}
            height={200}
            alt='movie'
          />
        </div>
      </div>
    </div>
  )
}

export default TvShows
