'use client'
import { FooterActionsProps } from '@/lib/types/footerActions'
import { TvShow } from '@/lib/types/tvShow'
import {
  LucideChevronRight,
  LucideCircleDot,
  LucidePlusCircle,
  LucideShare,
  LucideSmile,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import FooterActions from './footerActions'

export default function Footer(tvShow: TvShow) {
  const [activeTab, setActiveTab] = useState<'GERAL' | 'ELENCO'>('GERAL')
  const [showScrollIcon, setShowScrollIcon] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const actionsItens: FooterActionsProps[] = [
    { title: 'Minha lista', icon: LucidePlusCircle },
    { title: 'Avaliar', icon: LucideSmile },
    { title: 'Gravar', icon: LucideCircleDot },
    { title: 'Compartilhar', icon: LucideShare },
  ]

  useEffect(() => {
    const checkScrollNeeded = () => {
      if (scrollRef.current) {
        const { scrollWidth, clientWidth } = scrollRef.current
        setShowScrollIcon(scrollWidth > clientWidth)
      }
    }

    checkScrollNeeded()
    window.addEventListener('resize', checkScrollNeeded)

    return () => window.removeEventListener('resize', checkScrollNeeded)
  }, [tvShow.Cast])
  return (
    <footer className='py-14 pl-10 w-full bg-zinc-900 absolute bottom-0 '>
      {/* Lista de itens */}
      <ul className='flex mr-10 flex-row gap-16 border-b border-zinc-600'>
        <li
          className={`cursor-pointer ${
            activeTab === 'GERAL' ? 'border-b border-green-600' : ''
          }`}
          onClick={() => setActiveTab('GERAL')}
        >
          GERAL
        </li>
        {tvShow.Cast && (
          <li
            className={`cursor-pointer ${
              activeTab === 'ELENCO' ? 'border-b border-green-600' : ''
            }`}
            onClick={() => setActiveTab('ELENCO')}
          >
            ELENCO
          </li>
        )}
      </ul>

      {/* Renderização de conteudo com base no item selecionado */}
      <div className='mt-4 text-white'>
        {/* Geral */}
        {activeTab === 'GERAL' && (
          <div className='flex flex-col lg:flex-row  gap-4'>
            <FooterActions action={actionsItens} />
            <div>
              <p className='text-title'>Sinopse</p>
              <p>{tvShow.Synopsis}</p>
            </div>
          </div>
        )}

        {/* Elenco  */}

        {activeTab === 'ELENCO' && tvShow.Cast && (
          <div className='flex items-center gap-4'>
            <div
              ref={scrollRef}
              className='flex gap-3 overflow-x-scroll scrollbar-hide flex-1'
            >
              {tvShow.Cast.map((member) => (
                <div
                  key={member.ID}
                  className='p-2 bg-zinc-800 border min-w-40 rounded-sm text-center flex-shrink-0'
                >
                  <div className='text-subtitle-sm'>{member.Name}</div>
                  <div className='text-body'>{member.ID}</div>
                </div>
              ))}
            </div>

            {showScrollIcon && (
              <LucideChevronRight className='flex-shrink-0 -ml-2 mr-2' />
            )}
          </div>
        )}
      </div>
    </footer>
  )
}

