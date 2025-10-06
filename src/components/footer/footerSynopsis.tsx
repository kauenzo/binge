interface FooterSynopsisProps {
  synopsis: string
}

export default function FooterSynopsis({ synopsis }: FooterSynopsisProps) {
  return (
    <div>
      <p className='text-title'>Sinopse</p>
      <p>{synopsis}</p>
    </div>
  )
}

