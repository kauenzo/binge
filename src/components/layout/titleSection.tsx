import { TvShow } from '@/lib/types/tvShow'
import MetaInfo from './metaInfo'

interface TitleSectionProps {
  tvShow: TvShow
  evaluation: number
  country: string
  ageClassification: number | string
}

export default function TitleSection({
  tvShow,
  evaluation,
  country,
  ageClassification,
}: TitleSectionProps) {
  return (
    <div>
      <h1 className='text-big-title'>{tvShow.Title}</h1>
      <MetaInfo
        tvShow={tvShow}
        evaluation={evaluation}
        country={country}
        ageClassification={ageClassification}
      />
    </div>
  )
}

