import ContactForm from '../components/shared/ContactForm';
import { MapPin, Mail, Instagram } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-600">Get in touch with our team</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-indigo-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">
                      St. Joseph's Institute of Technology<br />
                      OMR, Chennai - 600119
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-indigo-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a
                      href="mailto:ieeesjitsb2024@gmail.com"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      ieeesjitsb2024@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Instagram className="h-6 w-6 text-indigo-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Social Media</h3>
                    <a
                      href="https://www.instagram.com/ieee_sjitece?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      @ieee_sjitece
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Location</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.587710835922!2d80.21585467500333!3d12.869884617100327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525bbb618d3ea9%3A0x90b3767be093efaa!2sSt.Joseph&#39;s%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1733677777581!5m2!1sen!2sin"
                    width="600" height="450" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}