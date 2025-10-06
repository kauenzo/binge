'use client'
import EpisodeItem from '@/components/episode/episodeItem'
import SeasonTabs from '@/components/episode/seasonTabs'
import { Episode } from '@/lib/types/episode'
import { memo, useCallback, useMemo, useState } from 'react'

type EpisodesListProps = {
  episodes: (Episode | null)[]
}
function EpisodesListComponent({ episodes }: EpisodesListProps) {
  const validEpisodes = useMemo(() => {
    return (episodes || []).filter((e): e is Episode => Boolean(e))
  }, [episodes])

  const seasons = useMemo(() => {
    const uniqueSeasons = Array.from(
      new Set(validEpisodes.map((e) => e.SeasonNumber))
    )
    uniqueSeasons.sort((a, b) => a - b)
    return uniqueSeasons
  }, [validEpisodes])

  const episodesBySeason = useMemo(() => {
    const map = new Map<number, Episode[]>()
    for (const ep of validEpisodes) {
      const list = map.get(ep.SeasonNumber) ?? []
      list.push(ep)
      map.set(ep.SeasonNumber, list)
    }
    for (const [, list] of map) {
      list.sort((a, b) => a.EpisodeNumber - b.EpisodeNumber)
    }
    return map
  }, [validEpisodes])

  const [activeSeason, setActiveSeason] = useState<number | null>(
    seasons.length ? seasons[0] : null
  )
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const handleSelectSeason = useCallback((season: number) => {
    setActiveSeason(season)
    setExpandedId(null)
  }, [])

  const handleToggleEpisode = useCallback((id: string) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }, [])

  const getEpisodeProgress = useCallback(() => {
    return Math.floor(Math.random() * 100)
  }, [])

  const currentEpisodes = useMemo(() => {
    if (activeSeason == null) return []
    return episodesBySeason.get(activeSeason) ?? []
  }, [activeSeason, episodesBySeason])

  if (!validEpisodes || validEpisodes.length === 0) {
    return null
  }

  return (
    <section className='text-white w-full md:w-1/2 xl:w-1/3 2xl:w-1/3 ml-auto animate-fade-in-right'>
      <SeasonTabs
        seasons={seasons}
        activeSeason={activeSeason}
        onSeasonSelect={handleSelectSeason}
      />

      <ul className='flex flex-col max-h-[calc(100vh-12rem)] overflow-y-auto pb-40 pr-2 overflow-x-auto scrollbar-hide'>
        {currentEpisodes.map((episode, index) => (
          <div
            key={episode.ID}
            className='animate-fade-in-up'
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <EpisodeItem
              episode={episode}
              isExpanded={expandedId === episode.ID}
              onToggle={handleToggleEpisode}
              progress={getEpisodeProgress()}
            />
          </div>
        ))}
      </ul>
    </section>
  )
}

const EpisodesList = memo(EpisodesListComponent)
export default EpisodesList

