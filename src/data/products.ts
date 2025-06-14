import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Áo Thun Cotton Cao Cấp",
    price: 299000,
    originalPrice: 399000,
    image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "ao-thun",
    description: "Áo thun cotton 100% cao cấp, thấm hút mồ hôi tốt, form dáng chuẩn",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Trắng", "Đen", "Xám", "Navy"],
    rating: 4.8,
    reviews: 124,
    isNew: true,
    isSale: true
  },
  {
    id: 2,
    name: "Váy Maxi Hoa Nhí",
    price: 599000,
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "vay",
    description: "Váy maxi hoa nhí dáng xòe, chất liệu voan mềm mại, phù hợp dạo phố",
    sizes: ["S", "M", "L"],
    colors: ["Xanh", "Hồng", "Vàng"],
    rating: 4.9,
    reviews: 89,
    isNew: true
  },
  {
    id: 3,
    name: "Quần Jeans Slim Fit",
    price: 450000,
    originalPrice: 550000,
    image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "quan",
    description: "Quần jeans slim fit co giãn, phù hợp với mọi vóc dáng",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Xanh đậm", "Xanh nhạt", "Đen"],
    rating: 4.7,
    reviews: 156,
    isSale: true
  },
  {
    id: 4,
    name: "Áo Sơ Mi Công Sở",
    price: 399000,
    image: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "ao-so-mi",
    description: "Áo sơ mi công sở form chuẩn, chất liệu không nhăn",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Trắng", "Xanh", "Hồng nhạt"],
    rating: 4.6,
    reviews: 78
  },
  {
    id: 5,
    name: "Đầm Cocktail Sang Trọng",
    price: 899000,
    image: "https://images.pexels.com/photos/1394939/pexels-photo-1394939.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "dam",
    description: "Đầm cocktail thiết kế sang trọng, phù hợp dự tiệc",
    sizes: ["S", "M", "L"],
    colors: ["Đen", "Đỏ", "Navy"],
    rating: 4.9,
    reviews: 45,
    isNew: true
  },
  {
    id: 6,
    name: "Áo Khoác Denim",
    price: 650000,
    originalPrice: 750000,
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "ao-khoac",
    description: "Áo khoác denim classic, phong cách vintage",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Xanh", "Trắng", "Đen"],
    rating: 4.8,
    reviews: 92,
    isSale: true
  },
  {
    id: 7,
    name: "Chân Váy Xếp Ly",
    price: 350000,
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "vay",
    description: "Chân váy xếp ly điệu đà, phù hợp đi làm và dạo phố",
    sizes: ["S", "M", "L"],
    colors: ["Đen", "Navy", "Xám"],
    rating: 4.7,
    reviews: 67
  },
  {
    id: 8,
    name: "Áo Blazer Nữ",
    price: 799000,
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "ao-vest",
    description: "Áo blazer nữ thanh lịch, phù hợp môi trường công sở",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Đen", "Xám", "Beige"],
    rating: 4.8,
    reviews: 103,
    isNew: true
  }
];

export const categories = [
  { id: "ao-thun", name: "Áo Thun", icon: "👕" },
  { id: "ao-so-mi", name: "Áo Sơ Mi", icon: "👔" },
  { id: "ao-khoac", name: "Áo Khoác", icon: "🧥" },
  { id: "ao-vest", name: "Áo Vest", icon: "👗" },
  { id: "vay", name: "Váy", icon: "👗" },
  { id: "dam", name: "Đầm", icon: "👗" },
  { id: "quan", name: "Quần", icon: "👖" }
];