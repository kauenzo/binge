'use client'

import { FooterActionsProps } from '@/lib/types/footerActions'
import { useEffect } from 'react'

export default function FooterActions({
  action,
}: {
  action: FooterActionsProps[]
}) {
  useEffect(() => {
    console.log(action)
  }, [action])

  return (
    <div className='flex items-center justify-between w-full'>
      {action.map((ac, index) => (
        <div
          className='w-full items-center justify-center text-center flex flex-col'
          key={index}
        >
          <ac.icon />
          <p>{ac.title}</p>
        </div>
      ))}
    </div>
  )
}

