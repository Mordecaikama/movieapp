import Image from 'next/image'

export default function Card({ asset, name }) {
  return (
    <div>
      <div className='card'>
        <Image src={asset} width={80} height={200} alt='movie' />
      </div>
      <span className='info'>{name}</span>
    </div>
  )
}
