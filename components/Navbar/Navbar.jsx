import React, {useState} from 'react'
import Link from "next/link";

export const Navbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

   return( 
    <nav className="bg-gray-800 p-6 flex items-center- justify-between">
      <div className="flex items-center">
          <Link href="/" className="text-white font-bold font-serif text-justify " >
          Roberto Rodriguez - Seguros y Anualidades
          </Link>
      </div>
      <div className="flex items-center">
        


      <button
            className="text-lg font-medium focus:outline-none"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Pages
          </button>
          {isDropdownOpen && (
            <ul className="absolute z-10 bg-gray-900 py-2 text-white rounded-md shadow-lg">

              <li>
                <Link href="/services" className="block px-4 py-2">Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block px-4 py-2">Contact
                </Link>
              </li>
            </ul>
          )}


        <Link href="/about" className="text-white font-medium mr-4">
        Acerca de</Link>
        <Link href="/contact" className="text-white font-medium mr-4">
        Contacto
        </Link>
      </div>
    </nav>
    );
  }