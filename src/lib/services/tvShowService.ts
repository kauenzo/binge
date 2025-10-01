import { Api } from '@/lib/api'
import { TvShow } from '@/types/tvShow'

const BASE_URL =
  'https://agile-releases.s3.us-east-1.amazonaws.com/tests/tv-shows/SHOW123.json'

export class TvShowService {
  static async getTvShow(): Promise<TvShow> {
    return Api.get<TvShow>(BASE_URL)
  }
}

