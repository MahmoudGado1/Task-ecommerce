
import React from 'react';

const brands = [
  { id: 1, name: 'Apple', logo: 'https://placehold.co/120x60/e2e8f0/64748b?text=Apple' },
  { id: 2, name: 'Samsung', logo: 'https://placehold.co/120x60/e2e8f0/64748b?text=Samsung' },
  { id: 3, name: 'Sony', logo: 'https://placehold.co/120x60/e2e8f0/64748b?text=Sony' },
  { id: 4, name: 'LG', logo: 'https://placehold.co/120x60/e2e8f0/64748b?text=LG' },
  { id: 5, name: 'Dell', logo: 'https://placehold.co/120x60/e2e8f0/64748b?text=Dell' },
  { id: 6, name: 'Microsoft', logo: 'https://placehold.co/120x60/e2e8f0/64748b?text=Microsoft' },
  { id: 7, name: 'HP', logo: 'https://placehold.co/120x60/e2e8f0/64748b?text=HP' },
  { id: 8, name: 'Asus', logo: 'https://placehold.co/120x60/e2e8f0/64748b?text=Asus' },
];

const BrandShowcase = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Brands</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
          {brands.map(brand => (
            <div key={brand.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center justify-center">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="max-h-12" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;