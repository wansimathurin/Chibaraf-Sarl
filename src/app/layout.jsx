// ...existing code...
import './globals.css'
import NavBar from '@/components/NavBar/NavBar'
 
export const metadata = {
  title: 'Chibaraf — Leader in Agriculture',
  description: 'Pioneers in organic agriculture delivering eco-friendly, sustainable products.',
  keywords: ['agriculture', 'organic', 'sustainable', 'farm', 'produce'],
  authors: [{ name: 'Wansi', url: 'https://wansi-mathurin.vercel.app' }],
  themeColor: '#0f5132',
  icons: {
    icon: '/icon.ico',
    apple: '/apple-touch-icon.png',
    other: [{ rel: 'manifest', url: '/site.webmanifest' }],
  },
  openGraph: {
    title: 'Chibaraf — Leader in Agriculture',
    description: 'Pioneers in organic agriculture delivering eco-friendly, sustainable products.',
    url: 'https://chibaraf.com',
    siteName: 'Chibaraf',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chibaraf',
    description: 'Pioneers in organic agriculture',
    images: ['/images/about-1.jpg'],
  },
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <NavBar />
        {children}
      </body>
    </html>
  )
}
// ...existing code...