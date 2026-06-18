import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "../../imports/SWM_Logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <ImageWithFallback 
              src={logo} 
              alt="Simba Waste Management" 
              className="h-16 w-auto object-contain mb-4 bg-white p-2 rounded"
            />
            <p className="text-gray-400 text-sm">
              Transforming waste into sustainable value across Kenya and East Africa.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/sustainability" className="text-gray-400 hover:text-primary transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Waste Paper Collection</li>
              <li>Corporate Recycling Programs</li>
              <li>Industrial Waste Recovery</li>
              <li>Secure Document Destruction</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span>+254 XXX XXX XXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span>info@simbawastemanagement.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Simba Waste Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
