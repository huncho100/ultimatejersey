export interface Product {
  id: number;

  // Basic Information
  name: string;
  team: string;
  sport: string;
  category: string;

  // Metadata
  league?: string;
  brand?: string;

  // Pricing
  price: number;
  oldPrice?: number;

  // Reviews
  rating: number;

  // Images
  image: string;
  gallery?: string[];

  // Description
  description?: string;

  // Sizes
  sizes?: string[];

  // Status
  isNew?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  inStock?: boolean;
}