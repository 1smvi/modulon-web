import type { Metadata } from 'next'
import '@fontsource/montserrat' // Import Montserrat font
import './globals.css'

export const metadata: Metadata = {
  title: 'Modulon',
  description: 'Multipurpose Discord bot for small, growing and large communities, arriving in 2024',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Montserrat, sans-serif' }}>{children}</body>
    </html>
  )
}
