'use client'

import { Episode } from '@/lib/types/episode'
import { LucidePlay } from 'lucide-react'
import { memo } from 'react'
import EpisodeExpanded from './episodeExpanded'

interface EpisodeItemProps {
  episode: Episode
  isExpanded: boolean
  onToggle: (id: string) => void
  progress?: number
}

function EpisodeItemComponent({
  episode,
  isExpanded,
  onToggle,
  progress = 0,
}: EpisodeItemProps) {
  return (
    <li className='border-b-[0.1px] border-b-gray-700'>
      <button
        onClick={() => onToggle(episode.ID)}
        className='w-full text-left px-4 py-3 flex items-center justify-between hover:bg-zinc-800/60 hover:cursor-pointer hover-lift transition-all duration-300'
        aria-expanded={isExpanded}
      >
        <span className='flex items-center gap-3'>
          {episode.EpisodeNumber} {episode.Title}
        </span>
        <span className='text-xs'>
          <LucidePlay className='fill-white text-white rounded-full border border-white p-1.5' />
        </span>
      </button>

      {isExpanded && (
        <div className='animate-fade-in'>
          <EpisodeExpanded
            episode={episode}
            progress={progress}
          />
        </div>
      )}
    </li>
  )
}

// Memoizado para evitar re-renders desnecessários
export default memo(EpisodeItemComponent)

