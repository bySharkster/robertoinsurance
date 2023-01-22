import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Roberto Rodriguez - Seguros y Anualidades</title>
        <meta name="description" content="My Online Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
      <div className="hero min-h-screen" style={{ backgroundImage: `url("/IMG/bg.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
           <Image src='/IMG/promo-vida.jpeg' 
                  alt='promo-vida'
                  width={500}
                  height={500}/>
          </div>
        </div>
      </div>
      </main>
    </>
  )
}