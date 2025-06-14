import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
              FashionHub
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Thời trang cao cấp với giá cả phải chăng. Tự tin thể hiện phong cách riêng của bạn.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Trang chủ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sản phẩm</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Liên hệ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Danh mục</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Áo thun</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Áo sơ mi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Váy đầm</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Quần jeans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Phụ kiện</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Liên hệ</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span className="text-gray-400">123 Đường ABC, Quận 1, TP.HCM</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-rose-400" />
                <span className="text-gray-400">0123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-rose-400" />
                <span className="text-gray-400">info@fashionhub.vn</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2024 FashionHub. Được tạo với 
            <Heart className="w-4 h-4 text-rose-400" />
            tại Việt Nam
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;