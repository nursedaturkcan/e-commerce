export interface ProductDetailProps {
    productName?: string;
    productImage?:string;
    productRate?:number;
    productPrice?:string;
    id?:string
    
  }
  export interface ProductApiResponseItem {
    asin: string;
    product_title: string;
    product_photo: string;
    product_price: string;
    product_star_rating: number;
    sales_volume:string;
  }
  interface Price {
    amount: string;
    currency: string;
  }
  
  export interface DealApiResponseItem {
    deal_id: string;
    deal_title: string;
    deal_photo: string;
    deal_price: Price;
    list_price: Price;
    deal_badge:string;
    deal_ends_at:string;
  }
  