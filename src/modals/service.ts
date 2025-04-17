
export interface BestSellerParams {
    category: string | null;
    type: string;
    page: string;
    country: string;
  }
  
  export interface ProductDetailParams {
    asin: string;
    country: string;
  }
  export interface SearchProductParams {
    query?: string,
    page?: string,
    country?: string,
    sort_by?: string,
   product_condition?: string,
    brand?: string,
    is_prime?: string,
    deals_and_discounts?: string
  }