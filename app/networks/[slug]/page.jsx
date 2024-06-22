import Networks from '@/components/Networks'

function Network({ params }) {
  const { slug } = params
  return (
    <div className='container'>
      <Networks slug={slug} />
    </div>
  )
}

export default Network
