'use client'
import { TvShow } from '@/lib/types/tvShow'
import { useState } from 'react'

export default function Footer(tvShow: TvShow) {
  const [activeTab, setActiveTab] = useState<'GERAL' | 'ELENCO'>('GERAL')
  return (
    <footer className='p-14 w-full bg-zinc-900 absolute bottom-0 '>
      {/* Lista de itens */}
      <ul className='flex flex-row gap-16 border-b border-zinc-600'>
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
          <div>
            <p className='text-title'>Sinopse</p>
            <p>{tvShow.Synopsis}</p>
          </div>
        )}

        {/* Elenco  */}
        {activeTab === 'ELENCO' && tvShow.Cast && (
          <div>
            <ul className='flex gap-3'>
              {tvShow.Cast.map((member) => (
                <li
                  key={member.ID}
                  className='p-2 bg-zinc-800  rounded-sm text-center'
                >
                  <div className='text-subtitle-sm'>{member.Name}</div>
                  <div className='text-body'>{member.ID}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </footer>
  )
}

