import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Auth App',
  description: 'Auth app using cookie sessions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar/>
          <div className='content'>{children}</div>
        </div>
      </body>
    </html>
  )
}