
import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, BarChart2, Menu, X, User } from 'lucide-react';
import CountrySelector from './CountrySelector';
import MainMenu from './MainMenu';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mr-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
          
          <div className="text-2xl font-bold text-blue-600">
            <a href="#" className="flex items-center">
              STORE<span className="text-orange-500">HUB</span>
            </a>
          </div>
          
          <div className="hidden md:flex flex-1 mx-6 relative">
            <div className="w-full max-w-xl relative">
              <input 
                type="text" 
                placeholder="Search for products..." 
                className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500">
                <Search size={20} />
              </button>
            </div>
          </div>
          
          {/* Country selector */}
          <div className="hidden lg:block">
            <CountrySelector />
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="p-1 text-gray-700 hover:text-blue-600" aria-label="Compare products">
              <BarChart2 size={24} />
            </button>
            <button className="p-1 text-gray-700 hover:text-blue-600 relative" aria-label="Wishlist">
              <Heart size={24} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">3</span>
            </button>
            <button className="p-1 text-gray-700 hover:text-blue-600" aria-label="Account">
              <User size={24} />
            </button>
            <button className="p-1 text-gray-700 hover:text-blue-600 relative" aria-label="Cart">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">2</span>
            </button>
          </div>
        </div>
        
        <div className="mt-4 md:hidden">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="hidden lg:block">
            <MainMenu />
          </div>
          
          {isMenuOpen && (
            <div className="lg:hidden py-2">
              <MainMenu isMobile={true} />
              <div className="mt-4 border-t border-gray-200 pt-4">
                <CountrySelector isMobile={true} />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;