
import React from 'react';
import ProductSlider from '../components/ProductSlider';
import ParallaxSection from '../components/ParallaxSection';
import FeaturedCollections from '../components/FeaturedCollections';
import TrendingProducts from '../components/TrendingProducts';
import FeatureHighlights from '../components/FeatureHighlights';

export default function Home() {
  return (
    <>
      <ProductSlider />
      <FeaturedCollections />
      <ParallaxSection />
      <TrendingProducts />
      <FeatureHighlights />
    </>
  );
}
