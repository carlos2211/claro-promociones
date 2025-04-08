import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="footer-content container mx-auto text-center">
        <p>&copy; Todos los Derechos Reservados, Claro 2025</p>
        <a href="https://etica.resguarda.com/denunciasclaro/es/main.html">Portal de Denuncias</a>
        <span className="text-red-500"> | </span>
        <a href="https://www.clarochile.cl/portal/cl/legal-regulatorio/lightbox/descripcion-ED-48.html?_gl=1*1gz0l9s*_gcl_aw*R0NMLjE3NDIzMTEyMDYuQ2owS0NRandzLVMtQmhEMkFSSXNBTHNzRzBZbm9ZYnh4aFYxX0VKMm9MNlhEVnhmZFM1V1h2WDdtRGxPVnJWaGNjWnVfNlkxZXFfMFdHRWFBdUZFRUFMd193Y0I.*_gcl_au*MjEzMzA0NjAzMy4xNzM5NDU3NTc0">Privacidad</a>
        <span className="text-red-500"> | </span>
        <a href="https://www.clarochile.cl/personas/legal-y-regulatorio/?_ga=2.236983040.1496855084.1713478089-521995803.1700566691&_gl=1*1hshkoa*_gcl_aw*R0NMLjE3NDIzMTEyMDYuQ2owS0NRandzLVMtQmhEMkFSSXNBTHNzRzBZbm9ZYnh4aFYxX0VKMm9MNlhEVnhmZFM1V1h2WDdtRGxPVnJWaGNjWnVfNlkxZXFfMFdHRWFBdUZFRUFMd193Y0I.*_gcl_au*MjEzMzA0NjAzMy4xNzM5NDU3NTc0">Legal y regulatorio</a>
        <div className="social-icons flex justify-center mt-4 space-x-4">
          <a href="https://www.facebook.com/clarochile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaFacebook size={24} />
          </a>
          <a href="https://x.com/clarochile_cl" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com/clarochile/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.youtube.com/user/canalclarochile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
