import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const menuItems = [
  {
    title: 'Home',
    url: '#',
  },
  {
    title: 'Shop',
    url: '#',
    submenu: [
      { title: 'All Products', url: '#' },
      { title: 'New Arrivals', url: '#' },
      { title: 'Best Sellers', url: '#' },
      { title: 'Deals & Promotions', url: '#' },
    ],
  },
  {
    title: 'Categories',
    url: '#',
    submenu: [
      { title: 'Electronics', url: '#' },
      { title: 'Clothing', url: '#' },
      { title: 'Home & Kitchen', url: '#' },
      { title: 'Beauty & Personal Care', url: '#' },
    ],
  },
  {
    title: 'Brands',
    url: '#',
  },
  {
    title: 'Deals',
    url: '#',
  },
  {
    title: 'About',
    url: '#',
  },
  {
    title: 'Contact',
    url: '#',
  },
];

const MainMenu = ({ isMobile = false }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  if (isMobile) {
    return (
      <nav className="py-2">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.title} className="relative">
              <div className="flex items-center justify-between">
                <a 
                  href={item.url} 
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  {item.title}
                </a>
                {item.submenu && (
                  <button 
                    className="px-2 py-1 text-gray-500 hover:text-blue-600"
                    onClick={() => setOpenSubmenu(openSubmenu === item.title ? null : item.title)}
                  >
                    <ChevronDown 
                      size={18} 
                      className={`transform transition-transform ${openSubmenu === item.title ? 'rotate-180' : ''}`} 
                    />
                  </button>
                )}
              </div>
              
              {item.submenu && openSubmenu === item.title && (
                <ul className="pl-4 mt-1 space-y-1 border-l-2 border-gray-200">
                  {item.submenu.map((subitem) => (
                    <li key={subitem.title}>
                      <a 
                        href={subitem.url} 
                        className="block py-1 text-gray-600 hover:text-blue-600"
                      >
                        {subitem.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav className="py-2">
      <ul className="flex items-center space-x-1">
        {menuItems.map((item) => (
          <li 
            key={item.title} 
            className="relative group"
            onMouseEnter={() => item.submenu && setOpenSubmenu(item.title)}
            onMouseLeave={() => setOpenSubmenu(null)}
          >
            <a 
              href={item.url} 
              className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              {item.title}
              {item.submenu && <ChevronDown size={16} className="ml-1" />}
            </a>
            
            {item.submenu && openSubmenu === item.title && (
              <div className="absolute left-0 top-full w-48 bg-white border border-gray-200 shadow-lg rounded-md py-2 z-20">
                {item.submenu.map((subitem) => (
                  <a 
                    key={subitem.title} 
                    href={subitem.url} 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  >
                    {subitem.title}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
