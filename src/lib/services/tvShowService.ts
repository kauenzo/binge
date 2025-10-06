import { Api } from '@/lib/api'
import { API_URLS } from '@/lib/constants/api'
import { TvShow } from '@/lib/types/tvShow'

export class TvShowService {
  static async getTvShow(): Promise<TvShow> {
    try {
      return await Api.get<TvShow>(API_URLS.TV_SHOW)
    } catch (error) {
      console.error('Erro ao buscar dados da série:', error)
      throw new Error('Falha ao carregar dados da série')
    }
  }
}

