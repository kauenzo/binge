import { Api } from '@/lib/api'
import { API_URLS } from '@/lib/constants/api'
import { Episode } from '@/lib/types/episode'

export class EpisodeService {
  static async getEpisodes(): Promise<Episode[]> {
    try {
      const episodes = await Api.get<Episode[]>(API_URLS.EPISODES)
      return episodes
    } catch (error) {
      console.error('Erro ao buscar episódios:', error)
      throw new Error('Falha ao carregar episódios')
    }
  }
}

