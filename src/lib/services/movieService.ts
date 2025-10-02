import { Api } from '../api'
import { Movie } from '../types/movie'

const BASE_URL =
  'https://agile-releases.s3.us-east-1.amazonaws.com/tests/tv-shows/SHOW123.json'

export class MovieService {
  static async getMovie(): Promise<Movie> {
    return Api.get<Movie>(BASE_URL)
  }
}

