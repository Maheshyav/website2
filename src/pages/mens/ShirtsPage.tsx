import React from 'react';
import ProductGrid from '../../components/ProductGrid';

const shirts = [
  {
    id: 1,
    name: 'Classic Oxford Shirt',
    price: '$89',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
    category: 'Shirts'
  },
  {
    id: 2,
    name: 'Linen Summer Shirt',
    price: '$69',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80',
    category: 'Shirts'
  },
  {
    id: 3,
    name: 'Denim Work Shirt',
    price: '$79',
    image: 'https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?auto=format&fit=crop&w=800&q=80',
    category: 'Shirts'
  },
  {
    id: 4,
    name: 'Striped Cotton Shirt',
    price: '$59',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    category: 'Shirts'
  }
];

export default function ShirtsPage() {
  return (
    <ProductGrid
      title="Men's Shirts"
      description="Classic and contemporary shirts for every occasion"
      heroImage="https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=2000&q=80"
      products={shirts}
    />
  );
}