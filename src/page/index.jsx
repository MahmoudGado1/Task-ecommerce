import React, { useState } from 'react';
import { ArrowRight, FilterX } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header/Header';
import CategoryNav from '@/components/Categories/CategoryNav';
import ProductGrid from '@/components/Products/ProductGrid';
import Footer from '@/components/Footer/Footer';
import BrandShowcase from '@/components/Brands/BrandShowcase';
import FilterSidebar from '@/components/Sidebar/FilterSidebar';


const newProducts = [
  {
    id: 1,
    title: "Apple iPhone 13 Pro Max - 256GB - Pacific Blue",
    image: "https://placehold.co/500x500/e2e8f0/64748b?text=iPhone+13",
    price: 1099.99,
    rating: 4.8,
    reviewCount: 259,
    isNew: true
  },
  {
    id: 2,
    title: "Samsung Galaxy S22 Ultra - 128GB - Phantom Black",
    image: "https://placehold.co/500x500/e2e8f0/64748b?text=Galaxy+S22",
    price: 999.99,
    oldPrice: 1199.99,
    rating: 4.7,
    reviewCount: 187,
    discountPercentage: 15
  },
  {
    id: 3,
    title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
    image: "https://placehold.co/500x500/e2e8f0/64748b?text=Sony+WH-1000XM4",
    price: 299.99,
    oldPrice: 349.99,
    rating: 4.9,
    reviewCount: 432,
    discountPercentage: 10
  },
  {
    id: 4,
    title: "Apple MacBook Pro 14-inch with M1 Pro Chip",
    image: "https://placehold.co/500x500/e2e8f0/64748b?text=MacBook+Pro",
    price: 1999.99,
    rating: 4.9,
    reviewCount: 156,
    isNew: true
  },
  {
    id: 8,
    title: "Apple MacBook Pro 14-inch with M1 Pro Chip",
    image: "https://placehold.co/500x500/e2e8f0/64748b?text=MacBook+Pro",
    price: 1999.99,
    rating: 4.9,
    reviewCount: 156,
    isNew: true
  }
];

const recommendedProducts = [
  {
    id: 5,
    title: "Dell XPS 15 Laptop - Intel Core i7, 32GB RAM, 1TB SSD",
    image: "https://placehold.co/500x500/e2e8f0/64748b?text=Dell+XPS",
    price: 1799.99,
    rating: 4.6,
    reviewCount: 124
  },
  {
    id: 6,
    title: "Bose QuietComfort 45 Wireless Noise Cancelling Headphones",
    image: "https://placehold.co/500x500/e2e8f0/64748b?text=Bose+QC45",
    price: 249.99,
    oldPrice: 329.99,
    rating: 4.7,
    reviewCount: 201,
    discountPercentage: 20
  },
  {
    id: 7,
    title: "Samsung 55\" Class QLED 4K UHD Smart TV",
    image: "https://placehold.co/500x500/e2e8f0/64748b?text=Samsung+TV",
    price: 799.99,
    oldPrice: 999.99,
    rating: 4.5,
    reviewCount: 178,
    discountPercentage: 25
  }
];

const featuredProducts = [
  {
    id: 9,
    title: "LG 34\" UltraWide QHD Curved Monitor",
    image: "https://placehold.co/500x500/e2e8f0/64748b?text=LG+Monitor",
    price: 699.99,
    oldPrice: 899.99,
    rating: 4.6,
    reviewCount: 87,
    discountPercentage: 15
  },
  {
    id: 10,
    title: "Sony Alpha a7 III Mirrorless Digital Camera",
    image: "https://placehold.co/500x500/e2e8f0/64748b?text=Sony+Camera",
    price: 1799.99,
    rating: 4.9,
    reviewCount: 142
  },
  {
    id: 11,
    title: "Nintendo Switch OLED Model with White Joy-Con",
    image: "https://placehold.co/500x500/e2e8f0/64748b?text=Nintendo+Switch",
    price: 349.99,
    rating: 4.8,
    reviewCount: 256
  },
  {
    id: 12,
    title: "Dyson V11 Torque Drive Cordless Vacuum Cleaner",
    image: "https://placehold.co/500x500/e2e8f0/64748b?text=Dyson+V11",
    price: 599.99,
    oldPrice: 699.99,
    rating: 4.7,
    reviewCount: 198,
    discountPercentage: 10
  },
  {
    id: 13,
    title: "Dyson V11 Torque Drive Cordless Vacuum Cleaner",
    image: "https://placehold.co/500x500/e2e8f0/64748b?text=Dyson+V11",
    price: 599.99,
    oldPrice: 699.99,
    rating: 4.7,
    reviewCount: 198,
    discountPercentage: 10
  },
  {
    id: 14,
    title: "Dyson V11 Torque Drive Cordless Vacuum Cleaner",
    image: "https://placehold.co/500x500/e2e8f0/64748b?text=Dyson+V11",
    price: 599.99,
    oldPrice: 699.99,
    rating: 4.7,
    reviewCount: 198,
    discountPercentage: 10
  }
];

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CategoryNav />
      
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full mb-4">Special Offer</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Summer Sale</h1>
            <p className="text-lg md:text-xl mb-6">Up to 50% off on selected items. Limited time offer.</p>
            <Button className="bg-white text-blue-600 hover:bg-blue-50">
              Shop Now <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:hidden mb-4">
              <Button 
                onClick={toggleSidebar}
                className="w-full flex items-center justify-center"
                variant="outline"
              >
                <FilterX size={18} className="mr-2" />
                {isSidebarOpen ? 'Hide Filters' : 'Show Filters'}
              </Button>
            </div>
            
            <FilterSidebar
            isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            
            <div className="lg:ml-6 flex-1">
              <ProductGrid 
                title="New Arrivals" 
                subtitle="Check out our latest products" 
                products={newProducts} 
              />
              
              <ProductGrid 
                title="Recommended For You" 
                subtitle="Based on your browsing history" 
                products={recommendedProducts} 
              />
              
              <ProductGrid
                title="Featured Products" 
                subtitle="Handpicked by our experts" 
                products={featuredProducts} 
              />
            </div>
          </div>
        </div>
        
        <BrandShowcase />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;