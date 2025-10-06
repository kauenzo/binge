import { useCallback } from 'react'

interface ErrorHandlerOptions {
  onError?: (error: Error) => void
  fallbackMessage?: string
}

export function useErrorHandler(options: ErrorHandlerOptions = {}) {
  const { onError, fallbackMessage = 'Algo deu errado' } = options

  const handleError = useCallback(
    (error: unknown) => {
      const errorMessage =
        error instanceof Error ? error.message : fallbackMessage
      const errorObj = error instanceof Error ? error : new Error(errorMessage)

      console.error('Erro capturado:', errorObj)
      onError?.(errorObj)
    },
    [onError, fallbackMessage]
  )

  return { handleError }
}

