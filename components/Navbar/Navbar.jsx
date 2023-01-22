import React, {useState} from 'react'
import Link from "next/link";

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

   return( 
    <nav className="bg-gray-800 p-6 flex items-center- justify-between">
      <div className="flex items-center">

          <Link href="/" className="text-white font-bold font-serif text-justify " >
          Roberto Rodriguez - Seguros y Anualidades
          </Link>
      </div>

      <div className="flex items-center">
        
        <Link href="/services" className="text-white font-medium mr-4">
        Servicios</Link>
        <Link href="/about" className="text-white font-medium mr-4">
        Acerca de</Link>
        <Link href="/contact" className="text-white font-medium mr-4">
        Contacto
        </Link>
      </div>
      
    </nav>
    );
  }