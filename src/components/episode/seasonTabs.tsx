'use client'

interface SeasonTabsProps {
  seasons: number[]
  activeSeason: number | null
  onSeasonSelect: (season: number) => void
}

export default function SeasonTabs({
  seasons,
  activeSeason,
  onSeasonSelect,
}: SeasonTabsProps) {
  return (
    <div className='flex gap-4 border-b border-zinc-700'>
      {seasons.map((season) => (
        <button
          key={season}
          onClick={() => onSeasonSelect(season)}
          className={`px-3 py-2 text-sm whitespace-nowrap hover:cursor-pointer hover-lift transition-all duration-300 ${
            activeSeason === season
              ? 'border-b-2 border-green-600'
              : 'opacity-70 hover:opacity-100'
          }`}
          aria-pressed={activeSeason === season}
        >
          Temporada {season}
        </button>
      ))}
    </div>
  )
}

