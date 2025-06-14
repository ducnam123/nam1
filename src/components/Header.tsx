import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X, Heart } from 'lucide-react';
import { useCart } from '../hooks/useCart';

interface HeaderProps {
  onCartClick: () => void;
  onCategoryClick: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, onCategoryClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getTotalItems } = useCart();

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'ao-thun', name: 'Áo Thun' },
    { id: 'ao-so-mi', name: 'Áo Sơ Mi' },
    { id: 'vay', name: 'Váy' },
    { id: 'quan', name: 'Quần' },
    { id: 'dam', name: 'Đầm' },
    { id: 'ao-khoac', name: 'Áo Khoác' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
              FashionHub
            </h1>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => onCategoryClick(category.id)}
                  className="text-gray-700 hover:text-rose-500 transition-colors duration-200 font-medium"
                >
                  {category.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-rose-500 transition-colors duration-200">
              <Heart className="w-6 h-6" />
            </button>
            
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-rose-500 transition-colors duration-200"
            >
              <ShoppingBag className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>

            <button className="p-2 text-gray-700 hover:text-rose-500 transition-colors duration-200">
              <User className="w-6 h-6" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
              
              <nav className="flex flex-col space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => {
                      onCategoryClick(category.id);
                      setIsMenuOpen(false);
                    }}
                    className="text-left text-gray-700 hover:text-rose-500 transition-colors duration-200 font-medium py-2"
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;