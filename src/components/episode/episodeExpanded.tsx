import { Episode } from '@/lib/types/episode'
import EpisodeMedia from './episodeMedia'

interface EpisodeExpandedProps {
  episode: Episode
  progress?: number
}

export default function EpisodeExpanded({
  episode,
  progress = 0,
}: EpisodeExpandedProps) {
  return (
    <div className='mx-6 my-3 border-t border-zinc-800 text-sm text-zinc-300'>
      <EpisodeMedia
        image={episode.Image}
        progress={progress}
      />
      {episode.Synopsis && <p className='mt-2'>{episode.Synopsis}</p>}
    </div>
  )
}

