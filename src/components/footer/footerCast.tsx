'use client'

import { LucideChevronRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

interface CastMember {
  ID: string
  Name: string
}

interface FooterCastProps {
  cast: CastMember[]
}

export default function FooterCast({ cast }: FooterCastProps) {
  const [showScrollIcon, setShowScrollIcon] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const checkScrollNeeded = useCallback(() => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current
      setShowScrollIcon(scrollWidth > clientWidth)
    }
  }, [])

  useEffect(() => {
    checkScrollNeeded()
    window.addEventListener('resize', checkScrollNeeded)
    return () => window.removeEventListener('resize', checkScrollNeeded)
  }, [checkScrollNeeded])

  return (
    <div className='flex items-center gap-4'>
      <div
        ref={scrollRef}
        className='flex gap-3 overflow-x-scroll scrollbar-hide flex-1'
      >
        {cast.map((member) => (
          <div
            key={member.ID}
            className='p-2 bg-zinc-800 min-w-40 rounded-sm text-center flex-shrink-0'
          >
            <div className='text-subtitle-sm'>{member.Name}</div>
            <div className='text-body'>{member.ID}</div>
          </div>
        ))}
      </div>

      {showScrollIcon && (
        <LucideChevronRight className='flex-shrink-0 -ml-2 mr-2' />
      )}
    </div>
  )
}

