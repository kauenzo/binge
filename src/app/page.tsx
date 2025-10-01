import Footer from '@/components/footer'
import { TvShowService } from '@/lib/services/tvShowService'

export default async function Home() {
  const tvShow = await TvShowService.getTvShow()
  console.log(tvShow)

  const background = tvShow.Images.Background

  return (
    <div
      className='flex flex-1 h-screen '
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Footer {...tvShow} />
    </div>
  )
}

