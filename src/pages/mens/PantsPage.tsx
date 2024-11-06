import React from 'react';
import ProductGrid from '../../components/ProductGrid';

const pants = [
  {
    id: 1,
    name: 'Premium Denim Jeans',
    price: '$149',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80',
    category: 'Pants'
  },
  {
    id: 2,
    name: 'Chino Trousers',
    price: '$89',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80',
    category: 'Pants'
  },
  {
    id: 3,
    name: 'Slim Fit Dress Pants',
    price: '$119',
    image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?auto=format&fit=crop&w=800&q=80',
    category: 'Pants'
  },
  {
    id: 4,
    name: 'Cargo Pants',
    price: '$99',
    image: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=800&q=80',
    category: 'Pants'
  }
];

export default function PantsPage() {
  return (
    <ProductGrid
      title="Men's Pants"
      description="From casual to formal, find your perfect fit"
      heroImage="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=2000&q=80"
      products={pants}
    />
  );
}