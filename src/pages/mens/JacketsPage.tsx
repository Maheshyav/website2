import React from 'react';
import ProductGrid from '../../components/ProductGrid';

const jackets = [
  {
    id: 1,
    name: 'Leather Bomber Jacket',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80',
    category: 'Jackets'
  },
  {
    id: 2,
    name: 'Denim Jacket',
    price: '$149',
    image: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=800&q=80',
    category: 'Jackets'
  },
  {
    id: 3,
    name: 'Wool Blazer',
    price: '$249',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    category: 'Jackets'
  },
  {
    id: 4,
    name: 'Raincoat',
    price: '$179',
    image: 'https://images.unsplash.com/photo-1544736779-4ee183d05e51?auto=format&fit=crop&w=800&q=80',
    category: 'Jackets'
  }
];

export default function JacketsPage() {
  return (
    <ProductGrid
      title="Men's Jackets"
      description="Stay stylish in any weather"
      heroImage="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=2000&q=80"
      products={jackets}
    />
  );
}