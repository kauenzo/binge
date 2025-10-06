import EpisodeProgress from './episodeProgress'

interface EpisodeMediaProps {
  image: string
  progress?: number
}

export default function EpisodeMedia({
  image,
  progress = 0,
}: EpisodeMediaProps) {
  return (
    <div className='relative h-56 md:h-64 lg:h-72 max-w-128 rounded-md overflow-hidden'>
      <div
        className='absolute inset-0 bg-center bg-cover'
        style={{ backgroundImage: `url(${image})` }}
      />
      {progress > 0 && <EpisodeProgress progress={progress} />}
    </div>
  )
}

