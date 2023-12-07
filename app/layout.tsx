import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Headers } from '../components'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lady Look Creation',
  description: 'Lady Look Creations: Elegant wholesale fashion for confident women.',
  keywords: 'women fashion, ghaas bazaar, wholesaler, kurti, western outfit'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Headers />
        <main className=''>
          {children}
        </main>
      </body>
    </html>
  )
}
