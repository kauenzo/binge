'use client'
import FooterActions from '@/components/footer/footerActions'
import FooterCast from '@/components/footer/footerCast'
import FooterSynopsis from '@/components/footer/footerSynopsis'
import FooterTabs from '@/components/footer/footerTabs'
import { FooterActionsProps } from '@/lib/types/footerActions'
import { TvShow } from '@/lib/types/tvShow'
import {
  LucideCircleDot,
  LucidePlusCircle,
  LucideShare,
  LucideSmile,
} from 'lucide-react'
import { useCallback, useMemo, useState } from 'react'

const ACTION_ITEMS: FooterActionsProps[] = [
  { title: 'Minha lista', icon: LucidePlusCircle },
  { title: 'Avaliar', icon: LucideSmile },
  { title: 'Gravar', icon: LucideCircleDot },
  { title: 'Compartilhar', icon: LucideShare },
]

type FooterProps = { tvShow: TvShow }

export default function Footer({ tvShow }: FooterProps) {
  const [activeTab, setActiveTab] = useState<'GERAL' | 'ELENCO'>('GERAL')

  const hasCast = useMemo(
    () => Boolean(tvShow.Cast && tvShow.Cast.length > 0),
    [tvShow.Cast]
  )

  const handleTabChange = useCallback((tab: 'GERAL' | 'ELENCO') => {
    setActiveTab(tab)
  }, [])
  return (
    <footer className='py-10 pl-10 w-full bg-zinc-900 absolute bottom-0 min-h-1/6'>
      <FooterTabs
        activeTab={activeTab}
        onTabChange={handleTabChange}
        hasCast={hasCast}
      />

      <div className='mt-4 text-white'>
        {activeTab === 'GERAL' && (
          <div className='flex flex-col lg:flex-row gap-4'>
            <FooterActions action={ACTION_ITEMS} />
            <FooterSynopsis synopsis={tvShow.Synopsis} />
          </div>
        )}

        {activeTab === 'ELENCO' && hasCast && (
          <FooterCast cast={tvShow.Cast!} />
        )}
      </div>
    </footer>
  )
}

