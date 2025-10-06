'use client'

import { Component, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: { componentStack: string }) => void
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: { componentStack: string }) {
    console.error('ErrorBoundary capturou um erro:', error, errorInfo)
    this.props.onError?.(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className='flex items-center justify-center min-h-screen bg-zinc-900 text-white'>
            <div className='text-center'>
              <h2 className='text-2xl font-bold mb-4'>Ops! Algo deu errado</h2>
              <p className='text-zinc-400 mb-4'>
                Não foi possível carregar o conteúdo. Tente recarregar a página.
              </p>
              <button
                onClick={() => window.location.reload()}
                className='px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors'
              >
                Recarregar Página
              </button>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}

