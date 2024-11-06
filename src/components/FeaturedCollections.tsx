import React from 'react';

const collections = [
  {
    id: 1,
    title: 'Men\'s Collection',
    description: 'Premium Suits & Casual Wear',
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=800&q=80',
    category: 'men'
  },
  {
    id: 2,
    title: 'Women\'s Collection',
    description: 'Elegant Dresses & Modern Styles',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    category: 'women'
  },
  {
    id: 3,
    title: 'Kids Collection',
    description: 'Playful & Comfortable Styles',
    image: 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=800&q=80',
    category: 'kids'
  },
  {
    id: 4,
    title: 'Luxury Watches',
    description: 'Timeless Elegance',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80',
    category: 'watches'
  }
];

export default function FeaturedCollections() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative h-96 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                  <p className="mb-4 text-gray-200">{collection.description}</p>
                  <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
                    View Collection
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}