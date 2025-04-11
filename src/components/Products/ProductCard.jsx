import React from 'react';
import { Heart, ShoppingCart, BarChart2, Star } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      <div className="relative">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
          
          <div className="absolute right-2 top-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors">
              <Heart size={16} />
            </button>
            <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors">
              <BarChart2 size={16} />
            </button>
          </div>
          
          <div className="absolute left-2 top-2 flex flex-col space-y-1">
            {product.isNew && (
              <Badge className="bg-blue-500 hover:bg-blue-600 text-xs font-medium">New</Badge>
            )}
            {product.discountPercentage && (
              <Badge className="bg-red-500 hover:bg-red-600 text-xs font-medium">-{product.discountPercentage}%</Badge>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-1">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium ml-1">{product.rating}</span>
          </div>
          <span className="mx-1 text-gray-300">|</span>
          <span className="text-xs text-gray-500">{product.reviewCount} reviews</span>
        </div>
        
        <h3 className="font-medium text-gray-800 mb-1 line-clamp-2 h-12">
          {product.title}
        </h3>
        
        <div className="mb-3 flex items-center">
          <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
          )}
        </div>
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center justify-center transition-colors">
          <ShoppingCart size={16} className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
