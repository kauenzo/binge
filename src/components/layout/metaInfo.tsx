import { TvShow } from '@/lib/types/tvShow'
import { useMemo } from 'react'

interface MetaInfoProps {
  tvShow: TvShow
  evaluation: number
  country: string
  ageClassification: number | string
}

export default function MetaInfo({
  tvShow,
  evaluation,
  country,
  ageClassification,
}: MetaInfoProps) {
  const metaLine = useMemo(() => {
    const genreTitles = tvShow.Genres.map((genre) => genre.Title)
    const parts = [
      `${evaluation}% indicação`,
      ...genreTitles,
      tvShow.Year,
      country,
      `${ageClassification}`,
    ]
    return parts.filter(Boolean).join(' / ')
  }, [evaluation, country, ageClassification, tvShow.Genres, tvShow.Year])

  return (
    <div className='flex uppercase text-subtitle'>
      <p>{metaLine}</p>
    </div>
  )
}

