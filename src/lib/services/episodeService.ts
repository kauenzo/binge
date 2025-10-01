import { Api } from '@/lib/api'
import { Episode } from '@/types/episode'

const BASE_URL =
  'https://agile-releases.s3.us-east-1.amazonaws.com/tests/episodes/SHOW123.json'

export class EpisodeService {
  static async getEpisodes(): Promise<Episode> {
    return Api.get<Episode>(BASE_URL)
  }
}

