
import React from 'react';
import { Laptop, Shirt, Home, Smartphone, Camera, Watch, Headphones, Gift } from 'lucide-react';

const categories = [
  { id: 1, name: 'Electronics', icon: Laptop },
  { id: 2, name: 'Fashion', icon: Shirt },
  { id: 3, name: 'Home & Living', icon: Home },
  { id: 4, name: 'Smartphones', icon: Smartphone },
  { id: 5, name: 'Cameras', icon: Camera },
  { id: 6, name: 'Watches', icon: Watch },
  { id: 7, name: 'Audio', icon: Headphones },
  { id: 8, name: 'Gifts', icon: Gift },
];

const CategoryNav = () => {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center overflow-x-auto py-4 scrollbar-none">
          <div className="flex space-x-6 md:space-x-10 mx-auto">
            {categories.map((category) => {
              const Icon = category.icon;
              
              return (
                <a 
                  key={category.id} 
                  href="#" 
                  className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors min-w-max"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-2 hover:bg-blue-50">
                    <Icon size={22} />
                  </div>
                  <span className="text-sm">{category.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;