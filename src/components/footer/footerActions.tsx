'use client'

import { FooterActionsProps } from '@/lib/types/footerActions'

export default function FooterActions({
  action,
}: {
  action: FooterActionsProps[]
}) {
  return (
    <div className='flex items-center justify-between w-full max-w-1/3'>
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

