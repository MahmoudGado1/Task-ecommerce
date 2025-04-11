import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ title, subtitle, products }) => {
  return (
    <section className="py-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h2>
          {subtitle && (
            <p className="text-gray-600 mt-1">{subtitle}</p>
          )}
        </div>
        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium mt-2 md:mt-0">
          View All
        </a>
      </div>
      
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
