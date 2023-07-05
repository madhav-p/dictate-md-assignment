import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Search App',
  description: 'Nextjs Demo app with Algolia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " " + "bg-gray-200 grid min-h-screen"} style={{
        gridTemplateRows: "max-content 1fr max-content"
      }}>
        <header className='flex bg-blue-800  text-white p-4'>
          <h3 className='max-w-lg mx-auto text-2xl font-semibold '>
            Search App
          </h3>
        </header>
        {children}
        <footer className='flex bg-gray-300 p-2'>
          <p className='max-w-lg mx-auto text-xl font-meduim text-black'>
            Made by <a href="https://github.com/madhav-p" className='underline'>
              Madhav P
            </a>
          </p>
        </footer>
      </body>
    </html>
  )
}
