
import Link from "next/link";

export const Navbar = () => {


   return( 
   
    <div className="w-full navbar bg-primary">

      <div className="flex-1 px-2 mx-2">
          <Link href="/" className="text-tprimary font-bold font-serif text-justify " >
          Roberto Rodriguez <br/> Seguros y Anualidades
          </Link>
      </div>

      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
        <li><Link href="/services" className="text-tprimary font-medium mr-4">
        Servicios</Link></li>
        <li><Link href="/about" className="text-tprimary font-medium mr-4">
        Acerca de</Link></li>
        <li><Link href="/contact" className="text-tprimary font-medium mr-4">
        Contacto
        </Link></li>
        </ul>
      </div>
      
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
    </div>
    );
  }