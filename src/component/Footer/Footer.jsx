import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Ensure lucide-react is installed

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-sm">
              We are a company dedicated to providing excellent services and
              products to our customers.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-sm hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm">
              Stay updated with our latest news and offers.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
