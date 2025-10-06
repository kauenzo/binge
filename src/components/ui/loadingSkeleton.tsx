interface LoadingSkeletonProps {
  className?: string
  lines?: number
}

export default function LoadingSkeleton({
  className = '',
  lines = 1,
}: LoadingSkeletonProps) {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className='h-4 bg-zinc-700 rounded mb-2 loading-shimmer'
          style={{
            width: `${Math.random() * 40 + 60}%`,
          }}
        />
      ))}
    </div>
  )
}

