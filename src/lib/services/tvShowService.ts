import { Api } from '@/lib/api'
import { TvShow } from '@/types/tvShow'

const BASE_URL =
  'https://agile-releases.s3.us-east-1.amazonaws.com/tests/tv-shows/SHOW123.json'

export class TvShowService {
  static async getTvShow(): Promise<TvShow> {
    return Api.get<TvShow>(BASE_URL)
    // remover essa parte de baixo, acionado so pra teste
    // const tvShow = await Api.get<TvShow>(BASE_URL)

    // Adicionar mais itens ao cast para teste de layout
    // const additionalCast = [
    //   { Name: 'Ator 4', ID: '4' },
    //   { Name: 'Atriz 5', ID: '5' },
    //   { Name: 'Ator 6', ID: '6' },
    //   { Name: 'Atriz 7', ID: '7' },
    //   { Name: 'Ator 8', ID: '8' },
    //   { Name: 'Atriz 9', ID: '9' },
    //   { Name: 'Ator 10', ID: '10' },
    //   { Name: 'Atriz 11', ID: '11' },
    //   { Name: 'Ator 12', ID: '12' },
    //   { Name: 'Atriz 13', ID: '13' },
    //   { Name: 'Ator 14', ID: '14' },
    //   { Name: 'Atriz 15', ID: '15' },
    // ]

    // return {
    //   ...tvShow,
    //   Cast: [...(tvShow.Cast || []), ...additionalCast],
    // }
  }
}

