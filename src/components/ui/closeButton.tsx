import { LucideX } from 'lucide-react'

interface CloseButtonProps {
  onClose?: () => void
  size?: number
  className?: string
  'aria-label'?: string
}

export default function CloseButton({
  onClose,
  size = 48,
  className = '',
  'aria-label': ariaLabel = 'Fechar',
}: CloseButtonProps) {
  return (
    <button
      onClick={onClose}
      className={`hover-scale hover:opacity-70 hover:cursor-pointer transition-opacity ${className}`}
      aria-label={ariaLabel}
      type='button'
    >
      <LucideX size={size} />
    </button>
  )
}

