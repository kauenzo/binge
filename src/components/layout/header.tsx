'use client'
import CloseButton from '@/components/ui/closeButton'
import { TvShow } from '@/lib/types/tvShow'
import TitleSection from './titleSection'

interface HeaderProps {
  tvShow: TvShow
  meta: {
    evaluation: number
    country: string
    ageClassification: number | string
  }
}

export default function Header({ tvShow, meta }: HeaderProps) {
  const closeEpisode = (): void => {
    console.log('Funcionalidade não implementada')
  }
  return (
    <header className='pl-14 pr-10 mt-10 flex justify-between items-center animate-fade-in-up'>
      <TitleSection
        tvShow={tvShow}
        evaluation={meta.evaluation}
        country={meta.country}
        ageClassification={meta.ageClassification}
      />
      <CloseButton onClose={closeEpisode} />
    </header>
  )
}

