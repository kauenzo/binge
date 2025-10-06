interface EpisodeProgressProps {
  progress: number
}

export default function EpisodeProgress({ progress }: EpisodeProgressProps) {
  return (
    <div className='absolute bottom-3 left-3 right-3 h-1 rounded-md bg-white'>
      <div
        className='h-full rounded-md bg-green-500'
        style={{ width: `${progress}%` }}
        aria-label='Tempo assistido'
      />
    </div>
  )
}

