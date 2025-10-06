'use client'
import Image from 'next/image'

interface FooterTabsProps {
  activeTab: 'GERAL' | 'ELENCO'
  onTabChange: (tab: 'GERAL' | 'ELENCO') => void
  hasCast: boolean
}

export default function FooterTabs({
  activeTab,
  onTabChange,
  hasCast,
}: FooterTabsProps) {
  return (
    <div className='flex items-center justify-between mr-10 border-b border-zinc-600'>
      <ul className='flex flex-row gap-16 text-3xl'>
        <li
          className={`cursor-pointer ${
            activeTab === 'GERAL' ? 'border-b border-green-600' : ''
          }`}
          onClick={() => onTabChange('GERAL')}
        >
          GERAL
        </li>
        {hasCast && (
          <li
            className={`cursor-pointer ${
              activeTab === 'ELENCO' ? 'border-b border-green-600' : ''
            }`}
            onClick={() => onTabChange('ELENCO')}
          >
            ELENCO
          </li>
        )}
      </ul>

      {/* Ícone personalizado à direita */}
      <div className='hover:opacity-70 transition-opacity cursor-pointer'>
        <Image
          src='/telecine.svg'
          alt='Ícone personalizado'
          width={32}
          height={32}
          className='filter brightness-0 invert'
        />
      </div>
    </div>
  )
}

