
import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  CreditCard,
  Truck,
  RefreshCw,
  LifeBuoy,
  Shield
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center">
              <div className="mr-4 text-blue-400">
                <Truck size={32} />
              </div>
              <div>
                <h3 className="font-semibold text-white">Free Shipping</h3>
                <p className="text-sm">On orders over $50</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="mr-4 text-blue-400">
                <RefreshCw size={32} />
              </div>
              <div>
                <h3 className="font-semibold text-white">Easy Returns</h3>
                <p className="text-sm">30 days return policy</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="mr-4 text-blue-400">
                <Shield size={32} />
              </div>
              <div>
                <h3 className="font-semibold text-white">Secure Shopping</h3>
                <p className="text-sm">100% secure checkout</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="mr-4 text-blue-400">
                <LifeBuoy size={32} />
              </div>
              <div>
                <h3 className="font-semibold text-white">24/7 Support</h3>
                <p className="text-sm">Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-white mb-4">STORE<span className="text-blue-400">HUB</span></h2>
            <p className="mb-4">
              We offer a wide range of high-quality products at competitive prices. Shop with confidence and enjoy our excellent customer service.
            </p>
            <div className="flex space-x-3 mb-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-400 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-pink-600 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-red-600 transition-colors">
                <Youtube size={16} />
              </a>
            </div>
            <div className="flex items-center">
              <span className="mr-2">Accepted Payment Methods:</span>
              <div className="flex space-x-2">
                <CreditCard size={24} className="text-gray-400" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Deals & Promotions</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Clearance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Order Tracking</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin size={18} className="mr-2 text-blue-400 flex-shrink-0" />
                <span>123 Commerce St, New York, NY 10001</span>
              </li>
              <li className="flex">
                <Phone size={18} className="mr-2 text-blue-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail size={18} className="mr-2 text-blue-400 flex-shrink-0" />
                <span>info@storehub.com</span>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold text-white mt-6 mb-4">Newsletter</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-700 text-white px-3 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-r-md">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 StoreHub. All rights reserved.</p>
            <div className="mt-2 md:mt-0">
              <ul className="flex space-x-4 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;