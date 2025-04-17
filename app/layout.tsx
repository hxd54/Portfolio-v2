import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Haxdev | The Best Place To Know More About Me!',
  description: 'A HXD Platform',
  generator: 'HXD',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
