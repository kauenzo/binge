import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Binge Watch - Demo',
    short_name: 'Binge Demo',
    description: 'Demonstração de interface de streaming com episódios de TV.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    categories: ['demo', 'entertainment', 'streaming', 'video'],
    lang: 'pt-BR',
  }
}

