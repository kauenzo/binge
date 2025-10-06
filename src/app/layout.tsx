import '@/styles/main.scss'
import { Metadata } from 'next'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Binge Watch - Demo',
    template: '%s | Binge Demo',
  },
  description: 'Demonstração de interface de streaming com episódios de TV.',
  robots: {
    index: false, // Projeto demonstrativo não deve ser indexado
    follow: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${nunito.variable} antialiased`}>{children}</body>
    </html>
  )
}

