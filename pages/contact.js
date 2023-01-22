import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import Image from 'next/Image'


export default function Contact() {
    return (
      <div className="hero min-h-screen" style={{ backgroundImage: `url("/IMG/bg.jpg")` }}>
        <div className="flex mx-auto my-auto mt-4 card w-96 bg-base-100 shadow-md  hover:shadow-xl scale-95 hover:scale-100">
        <figure><Image src="/IMG/promo-vida.jpeg" alt="MeIcon" width={500} height={500} className=""/></figure>
        <div className="card-body">
          <h2 className="card-title">Contact Me!</h2>
          <div className="flex items-center">
        <FaMapMarkerAlt className="text-gray-600 mr-2" />
        <div className="text-gray-700">Puerto Rico, USA</div>
      </div>
      <div className="mt-2 flex items-center">
        <FaPhone className="text-gray-600 mr-2" />
        <div className="text-gray-700">+1 (787) 218-8699</div>
      </div>
      <div className="mt-2 flex items-center">
        <FaEnvelope className="text-gray-600 mr-2" />
        <a href="mailto:robertoinsurance1@gmail.com" className="text-gray-700">robertoinsurance1@gmail.com</a>
          </div>
        </div>
      </div>
      </div>
    )
   
}