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
      <div className="hero min-h-screen" style={{ backgroundImage: `url("/IMG/beach-family.webp")` }}>
        <div className="hero-overlay bg-opacity-60 ">
        <div className="max-w-md ml-4 mt-2">
           <h1 className="text-tprimary text-4xl font-bold">Tu Dinero en Crecimiento</h1>
           <h1 className="text-accent text-3xl">Te Ayudamos a Asegurar y Proteger el Futuro de tu Familia</h1>
          </div>  
      </div>
     <div></div>


     </div>





      </main>
    </>
  )
}