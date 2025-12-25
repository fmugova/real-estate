import './globals.css'

export const metadata = {
  title: 'Real Estate',
  description: 'Landing page for Real Estate SaaS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}