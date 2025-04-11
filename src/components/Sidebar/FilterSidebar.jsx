import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { X } from 'lucide-react';

const FilterSidebar = ({ isOpen, onClose }) => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  
  const handlePriceChange = (values) => {
    setPriceRange(values);
  };

  const colors = [
    { id: 'red', label: 'Red', color: 'bg-red-500' },
    { id: 'blue', label: 'Blue', color: 'bg-blue-500' },
    { id: 'green', label: 'Green', color: 'bg-green-500' },
    { id: 'black', label: 'Black', color: 'bg-black' },
    { id: 'white', label: 'White', color: 'bg-white border border-gray-300' },
  ];

  const brands = [
    { id: 'brand1', name: 'Apple', count: 42 },
    { id: 'brand2', name: 'Samsung', count: 38 },
    { id: 'brand3', name: 'Sony', count: 27 },
    { id: 'brand4', name: 'LG', count: 21 },
    { id: 'brand5', name: 'Microsoft', count: 19 },
    { id: 'brand6', name: 'Dell', count: 15 },
  ];

  const ratings = [5, 4, 3, 2, 1];
  
  return (
    <aside 
      className={`fixed inset-y-0 left-0 z-30 w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:relative lg:inset-auto lg:shadow-none lg:translate-x-0`}
    >
      <div className="h-full overflow-y-auto p-4">
        <div className="flex items-center justify-between mb-4 mt-32 lg:hidden">
          <h2 className="text-xl font-semibold ">Filters</h2>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="hidden lg:block mb-6">
          <h2 className="text-xl font-semibold">Filters</h2>
        </div>

        <Accordion type="multiple" defaultValue={['price', 'category', 'brands', 'colors', 'ratings']} className="space-y-4">
          <AccordionItem value="price" className="border rounded-lg p-4">
            <AccordionTrigger className="font-semibold text-lg">Price Range</AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="mb-4">
                <Slider 
                  value={priceRange} 
                  min={0}
                  max={1000}
                  step={10}
                  onValueChange={handlePriceChange}
                  className="my-6"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="px-3 py-1 border rounded">
                  ${priceRange[0]}
                </div>
                <div className="px-3 py-1 border rounded">
                  ${priceRange[1]}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="category" className="border rounded-lg p-4">
            <AccordionTrigger className="font-semibold text-lg">Category</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pt-3">
                <li className="flex items-center">
                  <Checkbox id="cat-electronics" />
                  <label htmlFor="cat-electronics" className="ml-2 text-sm">Electronics (245)</label>
                </li>
                <li className="flex items-center">
                  <Checkbox id="cat-smartphones" />
                  <label htmlFor="cat-smartphones" className="ml-2 text-sm">Smartphones (153)</label>
                </li>
                <li className="flex items-center">
                  <Checkbox id="cat-laptops" />
                  <label htmlFor="cat-laptops" className="ml-2 text-sm">Laptops (87)</label>
                </li>
                <li className="flex items-center">
                  <Checkbox id="cat-accessories" />
                  <label htmlFor="cat-accessories" className="ml-2 text-sm">Accessories (201)</label>
                </li>
                <li className="flex items-center">
                  <Checkbox id="cat-audio" />
                  <label htmlFor="cat-audio" className="ml-2 text-sm">Audio (56)</label>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="brands" className="border rounded-lg p-4">
            <AccordionTrigger className="font-semibold text-lg">Brands</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pt-3">
                {brands.map(brand => (
                  <li key={brand.id} className="flex items-center">
                    <Checkbox id={brand.id} />
                    <label htmlFor={brand.id} className="ml-2 text-sm flex-1">{brand.name}</label>
                    <span className="text-xs text-gray-500">({brand.count})</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="colors" className="border rounded-lg p-4">
            <AccordionTrigger className="font-semibold text-lg">Colors</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-3 pt-3">
                {colors.map(color => (
                  <div 
                    key={color.id} 
                    className="group cursor-pointer"
                    title={color.label}
                  >
                    <div className={`w-8 h-8 rounded-full ${color.color} group-hover:ring-2 ring-offset-2 ring-blue-500`}></div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ratings" className="border rounded-lg p-4">
            <AccordionTrigger className="font-semibold text-lg">Ratings</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pt-3">
                {ratings.map(rating => (
                  <li key={rating} className="flex items-center">
                    <Checkbox id={`rating-${rating}`} />
                    <label htmlFor={`rating-${rating}`} className="ml-2 flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i}
                            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm ml-1">& Up</span>
                    </label>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-6 flex justify-between">
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors text-sm">
            Reset All
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
            Apply Filters
          </button>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
