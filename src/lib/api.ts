export class ApiError extends Error {
  status: number
  url: string

  constructor(message: string, status: number, url: string) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.url = url
  }
}

export class Api {
  private static cache = new Map<string, { data: unknown; timestamp: number }>()
  private static CACHE_DURATION = 5 * 60 * 1000 // 5 minutos

  static async get<T>(url: string, useCache = true): Promise<T> {
    // Verifica cache primeiro
    if (useCache && this.cache.has(url)) {
      const cached = this.cache.get(url)!
      if (Date.now() - cached.timestamp < this.CACHE_DURATION) {
        return cached.data as T
      }
      this.cache.delete(url)
    }

    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new ApiError(
          `HTTP ${response.status}: ${response.statusText}`,
          response.status,
          url
        )
      }

      const data = await response.json()

      // Armazena no cache
      if (useCache) {
        this.cache.set(url, { data, timestamp: Date.now() })
      }

      return data
    } catch (error) {
      if (error instanceof ApiError) {
        throw error
      }
      throw new ApiError(
        `Erro de rede: ${
          error instanceof Error ? error.message : 'Erro desconhecido'
        }`,
        0,
        url
      )
    }
  }

  static clearCache(): void {
    this.cache.clear()
  }
}

