import { TvShow } from '@/lib/types/tvShow'

interface StructuredDataProps {
  tvShow: TvShow
}

export default function StructuredData({ tvShow }: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TVSeries',
    name: tvShow.Title,
    description: tvShow.Synopsis,
    image: tvShow.Images.Background,
    datePublished: tvShow.Year,
    genre: tvShow.Genres.map((genre) => genre.Title),
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

