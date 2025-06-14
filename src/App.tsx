import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';
import { products } from './data/products';
import { Product } from './types';
import { useCart } from './hooks/useCart';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products;
    }
    return products.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  const handleAddToCart = (product: Product) => {
    // For quick add, use default values
    const defaultSize = product.sizes[0];
    const defaultColor = product.colors[0];
    addToCart(product, defaultSize, defaultColor, 1);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleAddToCartFromModal = (product: Product, size: string, color: string, quantity: number) => {
    addToCart(product, size, color, quantity);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onCartClick={() => setIsCartOpen(true)}
        onCategoryClick={setSelectedCategory}
      />
      
      <main>
        <Hero />
        
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {selectedCategory === 'all' ? 'Tất cả sản phẩm' : `Danh mục: ${getCategoryName(selectedCategory)}`}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Khám phá bộ sưu tập thời trang đa dạng với chất lượng cao và giá cả hợp lý
            </p>
          </div>
          
          <ProductGrid
            products={filteredProducts}
            onAddToCart={handleAddToCart}
            onProductClick={handleProductClick}
          />
        </section>
      </main>

      <Footer />

      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onAddToCart={handleAddToCartFromModal}
      />
    </div>
  );
}

const getCategoryName = (categoryId: string): string => {
  const categoryNames: { [key: string]: string } = {
    'ao-thun': 'Áo Thun',
    'ao-so-mi': 'Áo Sơ Mi',
    'vay': 'Váy',
    'quan': 'Quần',
    'dam': 'Đầm',
    'ao-khoac': 'Áo Khoác',
    'ao-vest': 'Áo Vest'
  };
  
  return categoryNames[categoryId] || 'Tất cả';
};

export default App;