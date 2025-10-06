// URLs da API
export const API_URLS = {
  TV_SHOW:
    'https://agile-releases.s3.us-east-1.amazonaws.com/tests/tv-shows/SHOW123.json',
  EPISODES:
    'https://agile-releases.s3.us-east-1.amazonaws.com/tests/episodes/SHOW123.json',
} as const

// Configurações de cache
export const CACHE_CONFIG = {
  DURATION: 5 * 60 * 1000, // 5 minutos
  MAX_SIZE: 100, // Máximo de itens no cache
} as const

// Meta dados padrão
export const DEFAULT_META = {
  evaluation: 80,
  country: 'EUA',
  ageClassification: 14,
} as const

