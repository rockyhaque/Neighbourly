import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-800 text-gray-300 pb-16 pt-10 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-800 opacity-20" />
        
        {/* Yellow animated shape */}
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow" />

        {/* Blue animated shape */}
        <div className="absolute -top-4 -right-4 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-reverse" />

        {/* Green animated shape */}
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-fast" />
      </div>

      {/* Footer content */}
      <div className="relative backdrop-blur-md bg-opacity-10 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Footer Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Logo and About */}
            <div>
              <img
                src="/logo.png"
                alt="Neighbourly Logo"
                className="w-24 mb-6"
              />
              <p className="text-sm leading-relaxed">
                Welcome to Neighbourly, your trusted platform for finding and
                connecting with trusted home services. We’re here to help you
                build a better community through reliable services.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex justify-around lg:justify-between">
              <div>
                <h3 className="font-semibold text-gray-100 mb-4">Company</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="/about" className="hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="hover:text-white">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-100 mb-4">Legal</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="/privacy" className="hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="hover:text-white">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="/cookies" className="hover:text-white">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold text-gray-100 mb-4">
                Subscribe to our Newsletter
              </h3>
              <p className="text-sm leading-relaxed mb-6">
                Stay updated with the latest news and special offers from
                Neighbourly.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 text-gray-700 rounded-l-md focus:outline-none"
                />
                <button className="bg-sky-500 px-6 py-2 text-white font-semibold rounded-r-md hover:bg-sky-600">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="border-t border-gray-700 pt-8 flex flex-col lg:flex-row justify-between items-center">
            <p className="text-sm">© {currentYear} Neighbourly. All rights reserved.</p>
            <div className="flex space-x-6 mt-6 lg:mt-0">
              <a href="#" className="hover:text-white">
              <CiFacebook size={25} />
              </a>
              <a href="#" className="hover:text-white">
              <CiLinkedin size={25}  />
              </a>
              <a href="#" className="hover:text-white">
              <FaInstagram  size={25}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
