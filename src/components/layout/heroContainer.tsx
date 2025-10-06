import { ReactNode } from 'react'

interface HeroContainerProps {
  backgroundImage: string
  children: ReactNode
}

export default function HeroContainer({
  backgroundImage,
  children,
}: HeroContainerProps) {
  return (
    <div
      className='flex flex-1 h-screen animate-fade-in'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='w-full flex flex-1 bg-gradient-to-l from-black to-transparent'>
        <div className='w-full bg-gradient-to-t from-black to-95%'>
          {children}
        </div>
      </div>
    </div>
  )
}

