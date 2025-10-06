import EpisodesList from '@/components/episode/episodesList'
import Footer from '@/components/footer/main'
import { Header, HeroContainer } from '@/components/layout'
import StructuredData from '@/components/seo/structuredData'
import { EpisodeService } from '@/lib/services/episodeService'
import { TvShowService } from '@/lib/services/tvShowService'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  try {
    const tvShow = await TvShowService.getTvShow()

    return {
      title: `${tvShow.Title} - Binge`,
      description: tvShow.Synopsis || `Demonstração: ${tvShow.Title}`,
    }
  } catch (error) {
    console.error('Erro ao gerar metadata:', error)
    return {
      title: 'Binge Watch - Demo',
      description: 'Demonstração de interface de streaming.',
    }
  }
}

export default async function Home() {
  const tvShow = await TvShowService.getTvShow()
  const episodes = await EpisodeService.getEpisodes()

  const background = tvShow.Images.Background

  return (
    <>
      <StructuredData tvShow={tvShow} />
      <HeroContainer backgroundImage={background}>
        <Header
          tvShow={tvShow}
          meta={{ evaluation: 80, country: 'EUA', ageClassification: 14 }}
        />

        <EpisodesList episodes={episodes} />

        <Footer tvShow={tvShow} />
      </HeroContainer>
    </>
  )
}

