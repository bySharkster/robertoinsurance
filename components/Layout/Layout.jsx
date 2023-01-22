import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import Link from "next/link";
    
export const Layout = ({ children }) => {
    return (
        <div className="drawer drawer-end text-tprimary">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-content flex flex-col">
                <Navbar />
                {children}
                <Footer />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 bg-accent">
                    <li><Link href="/services" className="text-tprimary font-medium mr-4">
                    Servicios</Link></li>
                    <li><Link href="/about" className="text-tprimary font-medium mr-4">
                    Acerca de</Link></li>
                    <li><Link href="/contact" className="text-tprimary font-medium mr-4">
                    Contacto
                    </Link></li>
                </ul>
        
            </div>
        </div>

    );
    }
    