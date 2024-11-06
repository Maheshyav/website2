import React from 'react';
import { X, Heart, ShoppingBag, ChevronRight, ChevronLeft } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

interface ProductLightboxProps {
  product: Product | null;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  showNavigation?: boolean;
}

export default function ProductLightbox({ 
  product, 
  onClose,
  onPrevious,
  onNext,
  showNavigation = false
}: ProductLightboxProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
        <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" onClick={onClose} />

        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
          <div className="absolute right-4 top-4 z-10">
            <button
              onClick={onClose}
              className="rounded-full bg-white p-2 hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {showNavigation && (
            <>
              <button
                onClick={onPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 hover:bg-gray-100"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 hover:bg-gray-100"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="h-96 w-full object-cover lg:h-full"
              />
            </div>
            <div className="p-6 lg:w-1/2">
              <div className="mb-8">
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                <p className="text-xl font-semibold">{product.price}</p>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-gray-600">
                  Experience premium quality and timeless style with this essential piece.
                  Perfect for any occasion, featuring superior craftsmanship and attention to detail.
                </p>
              </div>

              <div className="space-y-4">
                <button className="w-full flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                  <ShoppingBag className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
                  <Heart className="h-5 w-5" />
                  <span>Add to Wishlist</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}