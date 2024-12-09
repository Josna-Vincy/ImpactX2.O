import { NavLink } from 'react-router-dom';
import { Instagram, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="hover:text-indigo-400">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-indigo-400">About</NavLink>
              </li>
              <li>
                <NavLink to="/schedule" className="hover:text-indigo-400">Schedule</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-indigo-400">Contact</NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:ieeesjitsb2024@gmail.com" className="hover:text-indigo-400">
                  ieeesjitsb2024@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Instagram className="h-5 w-5" />
                <a href="https://www.instagram.com/ieee_sjitece/" className="hover:text-indigo-400">@ieee_sjitece</a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>St. Joseph's Institute of Technology</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Register Now</h3>
            <p className="mb-4">Don't miss out on this amazing opportunity!</p>
            <a
              href="https://forms.gle/1quQeWCErUifKDRu7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Register for ImpactX2.0
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} ImpactX2.0. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}