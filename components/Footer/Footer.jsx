import { FaLinkedin, FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa'


export const Footer = () => {
    return(
      
  <footer className="bg-accent text-tprimary py-8">
    <div className="container mx-auto flex justify-between">
      
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="w-full sm:w-1/3 text-center sm:text-left">
          <h3 className="text-lg font-medium mb-4"> &copy; Roberto Rodriguez {new Date().getFullYear()}</h3>
          <p className="text-sm mb-4">
           Puerto Rico, <br />
             USA 
          </p>
          <p className="text-sm">
            Phone: +1 (787) 218-8699 <br />
            Email: robertoinsurance1@gmail.com
          </p>
          </div>
          </div>
      <div className="flex">
        <a href="https://wa.me/message/73ZQCQ23OX7FC1" className="mr-2" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp  size="lg" className="text-wa" />
        </a>
        <a href="https://www.facebook.com/Connect-Life-Insurance-105959321750172" className="mr-2" target="_blank" rel="noopener noreferrer">
          <FaFacebook  size="lg" className="text-fb" />
        </a>
        <a href="https://www.instagram.com/connectlifepr/" className="mr-2" target="_blank" rel="noopener noreferrer">
          <FaInstagram  size="lg" className="text-ig  " />
        </a>
      </div>
    </div>
  </footer>
);
}